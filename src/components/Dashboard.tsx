import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    };
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen " >
      <Header userName={user.name} />
      <h1 className="text-xl lg:text-2xl font-semibold text-copy-primary">Seja bem vindo, <span className="font-bold capitalize italic">{user.name}</span></h1>
      <button
        onClick={logout}
        className="btn liquid text-copy-primary"
      >
        Logout
      </button>
     
    </div>
  );
}
