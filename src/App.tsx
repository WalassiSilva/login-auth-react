import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import ToggleThemeButton from "./components/ToggleThemeButton";
import { ToggleThemeProvider } from "./context/ToggleThemeContext";
import Container from "./components/Container";
import Layout from "./components/Layout";
import DashboardPage from "./pages/Dashboard";
import ErrorPage from "./pages/Error";
import Aos  from "aos";
export default function App() {

  Aos.init({
    duration: 500, 
    delay:400
  });
  return (
    <ToggleThemeProvider>
      <AuthProvider>
        <Container>
          <Router>
            <Routes>
              <Route
                path="/" element={
                  <Layout><LoginPage /></Layout>
                }
              />
              <Route
                path="/register" element={
                  <Layout><RegisterPage /></Layout>
                }
              />
              <Route
                path="/dashboard" element={
                  <Layout><DashboardPage /></Layout>
                }
              />

              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
          <ToggleThemeButton />
        </Container>
      </AuthProvider>
    </ToggleThemeProvider>
  );
}
