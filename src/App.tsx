import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";
import GlitchBackground from "./components/portfolio/GlitchBackground"; // <-- import du glitch

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* GlitchBackground fixé derrière tout le contenu */}
      <div className="relative min-h-screen">
        <GlitchBackground />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cv" element={<CV />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;