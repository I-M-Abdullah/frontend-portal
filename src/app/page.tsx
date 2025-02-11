import Button from "./components/button";
import Jobs from "./components/jobComponent";
import Sidebar from "./components/sidebar";
import { Search } from "lucide-react";

const Home = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="w-full flex flex-col py-6 pr-4">
        <h1 className="text-[#333333] font-semibold text-[22px]">
          Find your Dream Job, <span className="text-[#0154AA]">Albert!</span>
        </h1>
        <p className="text-[14px] font-medium text-[#585D6E]">
          Explore the latest job openings and apply for the best opportunities
          available today!
        </p>
        <div className="bg-white py-4 rounded-xl flex items-center gap-4 w-full my-4 px-2">
          <input
            type="text"
            placeholder="Job Title, Company, or Keywords"
            className="flex-1 px-4 py-2 rounded-lg outline-none placeholder-[#585D6E] text-[#737A91] font-medium text-sm"
          />
          <div className="h-6 w-[1px] bg-[#E9ECEF]"></div>

          <select className="px-4 py-2 rounded-lg outline-none text-[#585D6E] font-medium text-sm">
            <option value="">Select Location</option>
            <option value="new-york">New York</option>
            <option value="san-francisco">San Francisco</option>
            <option value="london">London</option>
          </select>
          <div className="h-6 w-[1px] bg-[#E9ECEF]"></div>

          <select className="px-4 py-2 rounded-lg outline-none text-[#585D6E] font-medium text-sm">
            <option value="">Job Type</option>
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="remote">Remote</option>
          </select>

          <Button
            icon={<Search size={18} />}
            text="Search"
            className="px-6 py-2 text-[14px]"
          />
        </div>
        <div>
          <div className="w-full flex items-center gap-2">
            <p className="text-[#737A91] text-[14px] font-medium pr-2">
              Similar:
            </p>
            <Button
              text={"Frontend"}
              className="text-[12px] text-[#737A91] py-2 font-medium bg-transparent border border-[#737A91]"
            />
            <Button
              text={"Backend"}
              className="text-[12px] text-[#737A91] py-2 font-medium bg-transparent border border-[#737A91]"
            />
            <Button
              text={"Graphic Designer"}
              className="text-[12px] text-[#737A91] py-2 font-medium bg-transparent border border-[#737A91]"
            />
          </div>
        </div>
        <Jobs heading="Featured Jobs" subheading="See featured jobs" />
        <Jobs heading="Recommended Jobs" subheading="See Recommended Jobs" />
        <Jobs heading="Latest Jobs" subheading="See Latest Jobs" />
      </div>
    </div>
  );
};
export default Home;
