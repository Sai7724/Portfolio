import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DownloadCVPage from "./pages/DownloadCVPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/download-cv" element={<DownloadCVPage />} />
    </Routes>
  );
}
