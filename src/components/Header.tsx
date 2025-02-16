import Logo from "./Logo";
import Avatar from "./Avatar";
import { Link, useLocation } from "react-router-dom";

type HeaderProps = {
  userName?: string;
};
export default function Header({ userName }: HeaderProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  return (
    <header className="flex items-center justify-between py-2 px-4 fixed top-0 left-0 w-full h-16">
      <div className="flex gap-4 items-baseline">
        <Logo />
        <Link
          to="/dashboard"
          className={`${
            isActive("/dashboard") ? "border-b-4 border-copy-primary" : "border-b-4 border-transparent"
          } text-copy-primary text-xl font-bold `}
        >
          Dashboard
        </Link>
      </div>
      {userName && <Avatar userName={userName} />}
    </header>
  );
}
