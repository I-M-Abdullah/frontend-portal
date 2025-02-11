import React from "react";
import JobCard from "./jobCard";

interface JobsProps {
  heading: string;
  subheading: string;
}

const dummyJobs = [
  {
    logo: "/images/teams.webp",
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago",
    applicants: "22 applicants",
  },
  {
    logo: "/images/teams.webp",
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago",
    applicants: "22 applicants",
  },
  {
    logo: "/images/teams.webp",
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago",
    applicants: "22 applicants",
  },
  {
    logo: "/images/teams.webp",
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    time: "1 day ago",
    applicants: "22 applicants",
  },
];

const Jobs: React.FC<JobsProps> = ({ heading, subheading }) => {
  return (
    <div className="py-6">
      <div className="flex gap-2 items-center">
        <h2 className="text-[18px] text-[#333333] font-medium">{heading}</h2>
        <p className="text-sm text-[#0154AA] cursor-pointer underline underline-offset-2">
          {subheading}
        </p>
      </div>
      <div className="flex gap-4 mt-4">
        {dummyJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
