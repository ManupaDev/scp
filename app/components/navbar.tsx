"use client";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-4 py-2 flex justify-between ">
      <div></div>
      <NavIcon isOpen={isOpen} handleNavToggle={handleNavToggle} />
    </nav>
  );
};

function NavIcon({
  isOpen,
  handleNavToggle,
}: {
  isOpen: boolean;
  handleNavToggle: () => void;
}) {
  if (isOpen) {
    return <XMarkIcon width={24} height={24} onClick={handleNavToggle} />;
  }

  return <Bars2Icon width={24} height={24} onClick={handleNavToggle} />;
}

export default Navbar;
