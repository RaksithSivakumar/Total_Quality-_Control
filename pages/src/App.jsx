import { IoNotificationsSharp } from "react-icons/io5";
import { IoSettingsOutline, IoSearchOutline } from "react-icons/io5";
import ProjectLogo from "./assets/ProjectLogo.jsx";
import { Avatar } from "@nextui-org/react";
import SurveyCreation from "./pages/surveycreation";

const Dashboard = ({ image = "/placeholder.svg?height=60&width=60" }) => {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Header */}
      <div className="flex flex-row justify-between items-center bg-white p-6 h-20 border-b border-[#D3E4FF]">
        <div className="flex items-center">
          <ProjectLogo className="mr-6" />
          <h1 className="font-bold text-2xl mr-10 p-5 text-[#5E5E5E]">
            Total Quality Circle
          </h1>
        </div>

        {/* Right side icons with search bar */}
        <div className="flex flex-row gap-6 pr-5 justify-center items-center">
          {/* Search bar */}
          <div className="max-w-md">
            <div className="relative flex items-center bg-[#F5F7FA] rounded-full px-4 py-2">
              <IoSearchOutline className="text-[#718EBF] text-xl" />
              <input
                type="text"
                placeholder="Search for anything..."
                className="bg-transparent border-none outline-none w-full ml-2 text-[#8BA3CB]"
              />
            </div>
          </div>

          {/* Settings icon */}
          <button
            className="bg-[#F5F7FA] p-2 rounded-full"
            onClick={() => alert("Setting clicked!")}
          >
            <IoSettingsOutline size={20} color="#718EBF" />
          </button>

          {/* Notification icon */}
          <button
            className="bg-[#F5F7FA] p-2 rounded-full"
            onClick={() => alert("Notification clicked!")}
          >
            <IoNotificationsSharp size={20} color="#718EBF" />
          </button>

          {/* Profile image */}
          <button
            className="w-10 h-10 rounded-full border-4 overflow-hidden"
            onClick={() => alert("Profile clicked!")}
          >
            <Avatar size="lg" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          </button>
        </div>
      </div>
      {/* Main content area */}
      <div>
        <SurveyCreation />
      </div>
    </div>
  );
};

export default Dashboard;
