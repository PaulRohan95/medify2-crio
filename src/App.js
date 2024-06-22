import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import DownloadSection from './components/Sections/DownloadSection/DownloadSection';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <DownloadSection />
      <Footer />
  </div>
  );
}

export default App;
