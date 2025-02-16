import { FaPowerOff, FaRegSadTear } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { IoMdHappy } from "react-icons/io";

type LogoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LogoutModal({ isOpen, onClose }: LogoutModalProps) {
  const { logout } = useAuth();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 "
      onClick={onClose}
    >
      <div
        className="bg-card p-6 rounded-lg shadow-lg text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center h-44 bg-red-200 rounded-lg">
          <FaPowerOff
            fill="red"
            size={48}
            className="bg-white rounded-full p-1"
          />
        </div>
        <div className="flex flex-col justify-center my-4 text-copy-primary">
          <h2 className="text-lg text-copy-primary font-bold mb-4">
            Logout account
          </h2>
          <p className="text-copy-secondary">
            Are you sure you want to logout?
          </p>
        </div>
        <div
          className="flex justify-between gap-2 font-bold *:duration-300"
          style={{ zIndex: 999 }}
        >
          <button
            onClick={onClose}
            className="text-xl  flex items-center gap-2 px-4 py-2 bg-zinc-500 text-copy-primary rounded hover:animate-pulse group"
          >
            <span>Cancel</span>
            <IoMdHappy
              className="text-copy-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out delay-100 hover:opacity-100 "
              size={26}
            />
          </button>
          <button
            onClick={() => {
              logout();
              onClose();
            }}
            className="text-xl  flex items-center gap-2 px-4 py-2 bg-red-500 text-copy-primary rounded hover:animate-pulse group"
          >
            <span>Logout</span>
            <FaRegSadTear
              className="text-copy-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out delay-100 hover:opacity-100 "
              size={22}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
