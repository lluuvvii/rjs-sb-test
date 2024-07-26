//import react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// login
import Login from "./views/auth/login";
// register
import Register from "./views/auth/register";
// dashboard
import Dashboard from "./views/dashboard/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
