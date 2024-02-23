import { Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
