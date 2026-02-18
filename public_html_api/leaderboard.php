<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ?type=daily&date=2025-06-01&mode=easy
// ?type=alltime&mode=easy
$type   = $_GET['type']   ?? 'daily';
$mode   = $_GET['mode']   ?? '';
$date   = $_GET['date']   ?? '';

$valid_modes = ['easy', 'hard', 'superhard'];

function is_valid_date($d) {
    return preg_match('/^\d{4}-\d{2}-\d{2}$/', $d);
}

if (!in_array($mode, $valid_modes)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid mode']);
    exit;
}

$dsn  = 'pgsql:host=ep-shiny-scene-a6x026yd.us-west-2.aws.neon.tech;port=5432;dbname=neondb;sslmode=require';
$user = 'neondb_owner';
$pass = 'npg_afu3WYXg2jGP';

try {
    $pdo = new PDO($dsn, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch (Exception $e) {
    http_response_code(503);
    echo json_encode(['error' => 'Database unavailable']);
    exit;
}

if ($type === 'alltime') {
    $stmt = $pdo->prepare("
        WITH grouped AS (
            SELECT
                CASE WHEN user_id IS NOT NULL THEN user_id::text ELSE 'guest_' || player_name END as group_key,
                puzzle_date, player_name, moves, completed_at
            FROM leaderboard_scores WHERE mode = :mode
        ),
        best_scores AS (
            SELECT DISTINCT ON (group_key, puzzle_date)
                group_key, puzzle_date, player_name, moves, completed_at
            FROM grouped ORDER BY group_key, puzzle_date, moves ASC, completed_at ASC
        ),
        latest_names AS (
            SELECT DISTINCT ON (group_key) group_key, player_name
            FROM grouped ORDER BY group_key, completed_at DESC
        )
        SELECT ln.player_name as player_name,
               COUNT(DISTINCT bs.puzzle_date) as puzzles_completed,
               SUM(bs.moves) as total_moves
        FROM best_scores bs
        JOIN latest_names ln ON bs.group_key = ln.group_key
        GROUP BY ln.group_key, ln.player_name
        ORDER BY SUM(bs.moves) ASC, COUNT(DISTINCT bs.puzzle_date) DESC
        LIMIT 50
    ");
    $stmt->execute([':mode' => $mode]);
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $result = array_map(fn($r) => [
        'playerName'       => $r['player_name'],
        'puzzlesCompleted' => (int)$r['puzzles_completed'],
        'totalMoves'       => (int)$r['total_moves'],
    ], $rows);

    echo json_encode($result);
    exit;
}

// Daily leaderboard
if (!is_valid_date($date)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid date']);
    exit;
}

$stmt = $pdo->prepare("
    SELECT DISTINCT ON (COALESCE(user_id::text, '') || '|' || player_name)
        id, puzzle_date, theme_title, mode, moves, player_name, user_id, is_premium, completed_at
    FROM leaderboard_scores
    WHERE puzzle_date = :date AND mode = :mode
    ORDER BY COALESCE(user_id::text, '') || '|' || player_name, moves ASC, completed_at ASC
    LIMIT 50
");
$stmt->execute([':date' => $date, ':mode' => $mode]);
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

$result = array_map(fn($r) => [
    'id'          => $r['id'],
    'puzzleDate'  => $r['puzzle_date'],
    'themeTitle'  => $r['theme_title'],
    'mode'        => $r['mode'],
    'moves'       => (int)$r['moves'],
    'playerName'  => $r['player_name'],
    'userId'      => $r['user_id'],
    'isPremium'   => $r['is_premium'],
    'completedAt' => $r['completed_at'],
], $rows);

usort($result, fn($a, $b) => $a['moves'] !== $b['moves']
    ? $a['moves'] - $b['moves']
    : strtotime($a['completedAt']) - strtotime($b['completedAt'])
);

echo json_encode($result);
