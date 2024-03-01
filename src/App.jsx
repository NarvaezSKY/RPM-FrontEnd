import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Rutas from "./pages/Rutas/Rutas";
import Users from "./pages/Users/Users";
import { AuthProvider } from "./context/authContext";
import { Login } from "./pages/Login/Login";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/rutas" element={<Rutas />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
