import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./style/global.css";

import { BrowserRouter, Routes, Route } from "react-router";
import RegisterPage from "./pages/register.jsx";
import UserPage from "./pages/user.jsx";
import HomePage from "./pages/home.jsx";
import LoginPage from "./pages/login.jsx";
import { AuthWrapper } from "./components/context/auth.context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthWrapper>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AuthWrapper>
  </BrowserRouter>
);
