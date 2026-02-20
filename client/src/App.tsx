import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Defrag from "@/pages/Defrag";
import ChronologyGame from "@/pages/ChronologyGame";
import GamesLikeWordle from "@/pages/GamesLikeWordle";
import TimelineGame from "@/pages/TimelineGame";
import HistoryTriviaGame from "@/pages/HistoryTriviaGame";
import Grade from "@/pages/Grade";
import GradePrivacy from "@/pages/GradePrivacy";
import Privacy from "@/pages/Privacy";
import Support from "@/pages/Support";
import Terms from "@/pages/Terms";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/defrag" component={Defrag} />
        <Route path="/chronology-game" component={ChronologyGame} />
        <Route path="/games-like-wordle" component={GamesLikeWordle} />
        <Route path="/timeline-game" component={TimelineGame} />
        <Route path="/history-trivia-game" component={HistoryTriviaGame} />
        <Route path="/grade" component={Grade} />
        <Route path="/grade/privacy" component={GradePrivacy} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/support" component={Support} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
