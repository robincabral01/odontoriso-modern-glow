import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProteseFlexivel from "./pages/ProteseFlexivel";
import FacetasDentarias from "./pages/FacetasDentarias";
import ImplantesDentarios from "./pages/ImplantesDentarios";
import ProteseSobreImplante from "./pages/ProteseSobreImplante";
import Ortodontia from "./pages/Ortodontia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/protese-flexivel" element={<ProteseFlexivel />} />
          <Route path="/facetas-dentarias" element={<FacetasDentarias />} />
          <Route path="/implantes-dentarios" element={<ImplantesDentarios />} />
          <Route path="/protese-sobre-implante" element={<ProteseSobreImplante />} />
          <Route path="/ortodontia" element={<Ortodontia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
