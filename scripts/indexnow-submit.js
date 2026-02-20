#!/usr/bin/env node
/**
 * IndexNow submission script
 * Notifies search engines (Bing, Google, Yandex) about new/updated pages
 * Run after deploying new landing pages
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const HOST = 'https://chroniclabs.co';
const KEY_FILE = path.join(__dirname, '../client/public/indexnow-key.txt');
const KEY = fs.readFileSync(KEY_FILE, 'utf8').trim();

// URLs to submit (all landing pages)
const URLS = [
  `${HOST}/chronology-game`,
  `${HOST}/games-like-wordle`,
  `${HOST}/timeline-game`,
  `${HOST}/history-trivia-game`,
  `${HOST}/defrag`,
  `${HOST}/`,
];

// IndexNow endpoints
const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',  // IndexNow main (Bing, Yandex, etc.)
  'https://www.bing.com/indexnow',      // Bing specific
];

async function submitToIndexNow() {
  console.log('🚀 IndexNow Submission Starting...\n');
  console.log(`📍 Host: ${HOST}`);
  console.log(`🔑 Key: ${KEY.substring(0, 8)}...`);
  console.log(`📄 Submitting ${URLS.length} URLs\n`);

  for (const endpoint of ENDPOINTS) {
    try {
      const payload = {
        host: HOST.replace('https://', ''),
        key: KEY,
        keyLocation: `${HOST}/indexnow-key.txt`,
        urlList: URLS,
      };

      console.log(`📤 Submitting to: ${endpoint}`);
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok || response.status === 202) {
        console.log(`✅ Success! Status: ${response.status}`);
      } else {
        const text = await response.text();
        console.log(`⚠️  Status ${response.status}: ${text}`);
      }
    } catch (error) {
      console.error(`❌ Error submitting to ${endpoint}:`, error.message);
    }
    console.log('');
  }

  console.log('✨ IndexNow submission complete!');
  console.log('\n📊 What happens next:');
  console.log('   • Bing: Indexes within 1-24 hours');
  console.log('   • Google: Uses IndexNow signals (not guaranteed instant)');
  console.log('   • Yandex: Indexes within hours\n');
  console.log('💡 Tip: Submit this after every deployment with new pages\n');
}

submitToIndexNow();
