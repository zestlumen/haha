import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Monitor from "./pages/Monitor";
import Alerts from "./pages/Alerts";
import ProcessStatusDashboard from "./pages/ProcessStatusDashboard.jsx";
import PQCDDashboard from "./pages/PQCDDashboard.jsx";
import Jeukheung from "./pages/Jeukheung";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<ProcessStatusDashboard />} />
            <Route path="/monitor" element={<Monitor />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/pqcd" element={<PQCDDashboard />} />
            <Route path="/jeukheung" element={<Jeukheung />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}