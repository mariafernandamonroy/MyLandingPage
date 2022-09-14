import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { LandingPage } from "./pages/LandingPage";
import { AppTheme } from "./theme/AppTheme";

function LandingApp() {
  return (
    <AppTheme>
      <NavBar/>
      <LandingPage />
      <Footer/>
    </AppTheme>
  );
}

export default LandingApp;
