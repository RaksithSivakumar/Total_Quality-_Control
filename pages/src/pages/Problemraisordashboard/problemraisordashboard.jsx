import { useState } from "react";
import Header from "../../components/Header/Header";
import Calender from "../../components/Calender/calender";
import ApprovalsPanel from "../../components/Approval/ApprovalsPanel";
import { useNavigate } from "react-router-dom";

function ProblemRaisorDashboard() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(3); // Wednesday (index 3) selected by default

  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const dates = ["21", "22", "23", "24", "25", "26", "27"];

  const timeSlots = [
    { time: "8 am" },
    { time: "9 am" },
    { time: "10 am" },
    { time: "11 am" },
    { time: "12 pm" },
    { time: "1 pm" },
    { time: "2 pm" },
  ];

  const events = [
    {
      id: 1,
      title: "Learnt SQL",
      category: "Personal",
      location: "IT101",
      startTime: "9:00",
      endTime: "10:00",
      timePosition: 1, // Position based on timeSlots index
      hasPlayButton: false,
      profileImage: null,
    },
    {
      id: 2,
      title: "DSA QP verification",
      category: "QP",
      location: "IT lab101",
      startTime: "10:00",
      endTime: "11:00",
      timePosition: 2, // Position based on timeSlots index
      hasPlayButton: true,
      profileImage: "/placeholder.svg?height=40&width=40",
    },
  ];

  const approvals = [
    {
      id: 1,
      title: "Productivity failure",
      description: "Productive failure is a learning design where individuals are allowed to fail in a managed..",
      date: "10/07/2025",
      status: "inprogress",
    },
    {
      id: 2,
      title: "Productivity failure",
      description: "Productive failure is a learning design where individuals are allowed to fail in a managed..",
      date: "10/07/2025",
      status: "rejected",
    },
    {
      id: 3,
      title: "Productivity failure",
      description: "Productive failure is a learning design where individuals are allowed to fail in a managed..",
      date: "10/07/2025",
      status: "accepted",
    },
    {
      id: 4,
      title: "Productivity failure",
      description: "Productive failure is a learning design where individuals are allowed to fail in a managed..",
      date: "10/07/2025",
      status: "inprogress",
    },
    {
      id: 5,
      title: "Productivity failure",
      description: "Productive failure is a learning design where individuals are allowed to fail in a managed..",
      date: "10/07/2025",
      status: "accepted",
    },
  ];

  const handleDayClick = (index) => {
    setSelectedDay(index);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white overflow-y-auto p-4 space-y-4 scrollbar-hide">
      <div className="w-full md:w-4/5 p-6 overflow-y-auto scrollbar-hide">
        <Header username="Kiruthika" />
        <Calender
          days={days}
          dates={dates}
          timeSlots={timeSlots}
          events={events}
          selectedDay={selectedDay}
          onDayClick={handleDayClick}
        />
      </div>
      <div className="w-full md:w-2/5 bg-gray-50 p-6 overflow-y-auto scrollbar-hide">
        <ApprovalsPanel approvals={approvals} />
      </div>
    </div>
  );
}

export default ProblemRaisorDashboard;