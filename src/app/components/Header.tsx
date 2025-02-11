import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import Button from "./button";

const NavItems = [
  "Top Companies",
  "Job Tracker",
  "My Calendar",
  "Documents",
  "Messages",
  "Notifications",
];
const Header: React.FC = () => {
  return (
    <header className="bg-white w-full">
      <nav className="flex items-center justify-center py-2 gap-3">
        <Image
          className="w-12 h-12"
          src="/logo.webp"
          width={5000}
          height={5000}
          alt="Logo"
        />
        <span className="text-[#0154AA] font-semibold text-[16px] pl-4">
          Find Jobs
        </span>
        <ul className="flex gap-1 pr-4">
          {NavItems.map((nav, index) => {
            return (
              <li
                className="text-[#737A91] px-2 py-2 rounded-md cursor-pointer text-base"
                key={index}
              >
                {nav}
              </li>
            );
          })}
        </ul>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-64 pl-10 bg-[#F6F9FF] rounded-lg focus:outline-none text-[#737A91]"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#737A91] w-5 h-5" />
        </div>
        <Button text="Resume Builder" />
        <Image
          src={"/profile/profilepic.webp"}
          alt="profile pic"
          height={100}
          width={100}
          className="w-10 h-10 rounded-full"
        />
      </nav>
    </header>
  );
};
export default Header;
