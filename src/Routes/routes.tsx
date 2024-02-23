import { Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";
import { ProtectedRoute } from "./ProtectedRoutes";
import { Home } from "../Pages/Home/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
