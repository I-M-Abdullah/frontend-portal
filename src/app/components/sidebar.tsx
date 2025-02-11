"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const userData = {
  name: "Albert Flores",
  Tagline:
    "Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...",
  location: "Clinton, Maryland",
  profileVisitors: 140,
  ResumeViewer: 20,
  myJobs: 88,
  coverPic: "/profile/Coverphoto.webp",
  profilePic: "/profile/profilepic(2).webp",
};

const upConminginterviews = [
  {
    icon: "/images/figmaicon.webp",
    designation: "UI UX Designer",
    dept: "Figma",
    date: "16th Feb | 13:45 | Remote",
    status: "Accepted",
    option: "Deny",
  },
  {
    icon: "/images/figmaicon.webp",
    designation: "UI UX Designer",
    dept: "Figma",
    date: "16th Feb | 13:45 | Remote",
    status: "Accepted",
    option: "Deny",
  },
  {
    icon: "/images/figmaicon.webp",
    designation: "UI UX Designer",
    dept: "Figma",
    date: "16th Feb | 13:45 | Remote",
    status: "Accepted",
    option: "Deny",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-6 px-10">
      <div className="bg-white flex flex-col items-center justify-center pb-8 rounded-b-xl">
        <Image
          src={userData.coverPic}
          alt="cover pic"
          height={500}
          width={500}
          className="w-96 h-28 rounded-t-xl"
        />
        <Image
          src={userData.profilePic}
          alt="profile pic"
          height={100}
          width={100}
          className="w-20 h-20 rounded-full -mt-12 border-[2px] border-white"
        />
        <span className="text-[#333333] font-semibold text-[18px] pt-1">
          {userData.name}
        </span>
        <span className="text-[#333333] font-medium text-[14px] px-16 text-center pt-1">
          {userData.Tagline}
        </span>
        <span className="text-[#585D6E] font-medium text-[12px] px-4 text-center pt-1">
          {userData.location}
        </span>
      </div>
      <div className="bg-white my-2 rounded-xl px-2 py-2">
        <div className="flex justify-between p-2 border-[#E9ECEF] border-b-[1px]">
          <span className="text-[#333333] font-medium text-sm">
            Profile Visitors
          </span>
          <span className="text-[#0154AA] font-medium text-[16px]">
            {userData.profileVisitors}
          </span>
        </div>
        <div className="flex justify-between p-2 border-[#E9ECEF] border-b-[1px]">
          <span className="text-[#333333] font-medium text-sm">
            Resume Viewer
          </span>
          <span className="text-[#0154AA] font-medium text-[16px]">
            {userData.ResumeViewer}
          </span>
        </div>
        <div className="flex justify-between p-2">
          <span className="text-[#333333] font-medium text-sm">My Jobs</span>
          <span className="text-[#0154AA] font-medium text-[16px]">
            {userData.myJobs}
          </span>
        </div>
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white my-2 rounded-xl px-2 py-2"
      >
        <div className="flex justify-between items-center p-2">
          <div className="flex flex-col">
            <span className="text-[#333333] font-semibold text-base">
              My calendar
            </span>
            <span className="text-[#737A91] font-medium text-sm">
              Upcoming Interviews
            </span>
          </div>
          <div>
            {isOpen ? (
              <ChevronUp className="text-[#333333] w-5 h-5" />
            ) : (
              <ChevronDown className="text-[#333333] w-5 h-5" />
            )}
          </div>
        </div>
        {isOpen && (
          <div>
            {upConminginterviews.map((interview, index) => {
              return (
                <div key={index}>
                  <div className="bg-[#F6F9FF] my-1 flex items-center justify-between gap-1 rounded-xl p-3">
                    <Image
                      src={interview.icon}
                      alt="cover pic"
                      height={500}
                      width={500}
                      className="w-6 h-8"
                    />
                    <div className="flex flex-col">
                      <span className="text-[#333333] font-semibold text-sm">
                        {interview.designation}
                      </span>
                      <span className="text-[#585D6E] font-normal text-xs">
                        {interview.dept}
                      </span>
                      <span className="text-[#585D6E] font-400 text-xs">
                        {interview.date}
                      </span>
                    </div>
                    <span className="text-[#585D6E] bg-green-200 px-2 py-1 rounded-md font-400 text-xs">
                      {interview.status}
                    </span>
                    <span className="text-[#585D6E] px-2 py-1 rounded-md font-400 text-xs">
                      {interview.option}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
