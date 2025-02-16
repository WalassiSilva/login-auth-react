
import { createContext, useState, useEffect, useContext } from "react";

type User = {
  name: string;
  email: string;
  password: string;
};

type AuthContextType = {
  user: Omit<User, "password"> | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => string | null;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Omit<User, "password"> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedUser");
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  function login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem("users") || "[]") as User[];
    const foundUser = users.find((user) => user.email === email && user.password === password);

    if (foundUser) {
      const loggedUser = { name: foundUser.name, email: foundUser.email };
      setUser(loggedUser);
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      return true;
    }
    return false;
  }

  function register(name: string, email: string, password: string): string | null {
    const users = JSON.parse(localStorage.getItem("users") || "[]") as User[];

    if (users.some((user) => user.email === email)) {
      return "E-mail already exists!";
    }

    const newUser: User = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    login(email, password);    

    return null;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("loggedUser");
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
