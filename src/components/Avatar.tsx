import { FaUserCircle } from "react-icons/fa";
import LogoutModal from "./LogoutModal";
import { useState } from "react";

type AvatarProps = {
  userName: string;
};
export default function Avatar({ userName }: AvatarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isModalOpen) {
    return (
      <LogoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    );
  }

  return (
    <>
      <button
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <p className="text-copy-primary font-grechen text-3xl capitalize">
          {userName}
        </p>
        <FaUserCircle className="text-copy-primary text-3xl" />
      </button>
    </>
  );
}
