import Onboarding from "./components/onboarding";
import Info from "./components/info";
import Subscriptions from "./components/subcscriptions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div >
    <Router>
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/info" element={<Info />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
    </Routes>
  </Router>
    </div>
  
  );
}

export default App;
