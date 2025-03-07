import React, { useEffect, useState } from "react";
import { IoNotificationsSharp, IoSettingsOutline, IoSearchOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import ProjectLogo from "./assets/ProjectLogo.jsx";
import { Avatar } from "@mui/material";
import PointSummary from "./components/Popups/PointSummary";
import Routernav from "./router/Routernav";

const App = ({ image = "/placeholder.svg?height=60&width=60" }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/login";
  const [openPointsSummary, setOpenPointsSummary] = useState(false); // For Points Summary popup
  const [profileAnchorEl, setProfileAnchorEl] = useState(null); // For positioning the Points Summary popup

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/login");
    }
  }, [location, navigate]);

  // Handle profile image click
  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
    setOpenPointsSummary(true);
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* Header - Only show if not on login page */}
      {!isLoginPage && (
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
              className="w-10 h-10 rounded-full border-4 border-gray-300 overflow-hidden hover:border-gray-500 transition-all duration-200"
              onClick={handleProfileClick}
              aria-label="Profile"
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 40, height: 40 }} // Adjusted size
              >
                RS {/* Fallback content */}
              </Avatar>
            </button>
          </div>
        </div>
      )}

      {/* Main content area - Full height on login page */}
      <div className={`${isLoginPage ? "h-full" : "flex-1"} overflow-auto`}>
        <Routernav />
      </div>
      <PointSummary open={openPointsSummary} onClose={() => setOpenPointsSummary(false)} anchorEl={profileAnchorEl} />
    </div>
  );
};

export default App;