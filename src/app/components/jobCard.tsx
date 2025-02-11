import React from "react";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import Button from "./button";

interface JobCardProps {
  logo: string;
  title: string;
  company: string;
  location: string;
  time: string;
  applicants: string;
}

const JobCard: React.FC<JobCardProps> = ({
  logo,
  title,
  company,
  location,
  time,
  applicants,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full">
      <span className="text-xs font-semibold text-[#333333]">Promoted</span>
      <div className="flex items-center gap-3 my-2">
        <Image
          src={logo}
          alt={title}
          width={40}
          height={40}
          className="rounded-lg"
        />
        <div>
          <h3 className="text-sm font-medium text-[#333333]">{title}</h3>
          <p className="text-xs font-semibold text-[#333333]">{company}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs font-semibold text-[#585D6E]">
        <MapPin size={14} /> {location}
      </div>
      <div className="flex items-center gap-2 text-xs font-semibold text-[#585D6E] mt-1">
        <Clock size={14} /> {time} |{" "}
        <span className="text-[#0154AA] text-xs font-semibold">
          {applicants}
        </span>
      </div>
      <div className="w-full flex items-center justify-center gap-2 py-1">
        <Button
          text="Apply Now"
          className="w-full mt-3 items-center justify-center py-2 text-sm"
        />
        <Image
          src="/images/Vector.webp"
          alt="Save"
          width={50}
          height={50}
          className="rounded-lg h-10 w-8 pt-2"
        />
      </div>
    </div>
  );
};

export default JobCard;
