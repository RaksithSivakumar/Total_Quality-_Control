// import React, { useState } from "react";

// const submissions = [
//   { status: "New" },
//   { status: "New" },
//   { status: "New" },
//   { status: "Rejected" },
//   { status: "Rejected" },
//   { status: "Accepted" },
//   { status: "Accepted" },
//   { status: "Accepted" },
//   { status: "Accepted" },
//   { status: "Rejected" },
//   { status: "Accepted" },
//   { status: "Accepted" },
// ];

// const StatusBadge = ({ status }) => {
//   const badgeColors = {
//     New: "bg-blue-100 text-blue-500",
//     Rejected: "bg-red-100 text-red-500",
//     Accepted: "bg-green-100 text-green-500",
//   };

//   return (
//     <span className={`px-3 py-1 text-sm font-medium rounded-xl ${badgeColors[status]}`}>
//       {status}
//     </span>
//   );
// };

// const SupervisorDashboard = () => {
//   const [activeTab, setActiveTab] = useState("All");

//   const filteredSubmissions = submissions.filter((item) => {
//     if (activeTab === "All") return true;
//     return item.status === activeTab;
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h2 className="text-2xl font-semibold mb-4">Welcome Supervisor. . .</h2>
      
//       {/* Tabs */}
//       <div className="flex space-x-6 mb-6 text-lg font-medium bg-white p-2 rounded-lg">
//         <span
//           className={`cursor-pointer pb-1 ${
//             activeTab === "All" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"
//           }`}
//           onClick={() => setActiveTab("All")}
//         >
//           All <span className="text-gray-500 text-sm">({submissions.length})</span>
//         </span>
//         <span
//           className={`cursor-pointer pb-1 ${
//             activeTab === "Accepted" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"
//           }`}
//           onClick={() => setActiveTab("Accepted")}
//         >
//           Accepted <span className="text-gray-500 text-sm">({submissions.filter(s => s.status === "Accepted").length})</span>
//         </span>
//         <span
//           className={`cursor-pointer pb-1 ${
//             activeTab === "Rejected" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"
//           }`}
//           onClick={() => setActiveTab("Rejected")}
//         >
//           Rejected <span className="text-gray-500 text-sm">({submissions.filter(s => s.status === "Rejected").length})</span>
//         </span>
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {filteredSubmissions.map((item, index) => (
//           <div key={index} className="bg-gray-50 rounded-2xl p-4 shadow-md">
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="text-lg font-semibold">Productivity failure</h3>
//               <StatusBadge status={item.status} />
//             </div>
//             <p className="text-gray-600 text-sm">
//               Productive failure is a learning design where decribe individuals are allowed to fail in a managed..
//             </p>
//             <div className="text-gray-500 text-xs mt-3">10/07/2025</div>
//             <div className="flex items-center mt-2">
//               <img
//                 src="https://via.placeholder.com/30"
//                 alt="User"
//                 className="w-6 h-6 rounded-full"
//               />
//               <span className="text-sm text-gray-700 ml-2">By: J. David</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SupervisorDashboard;
import React, { useState } from "react";

const submissions = [
  { status: "New" },
  { status: "New" },
  { status: "New" },
  { status: "Rejected" },
  { status: "Rejected" },
  { status: "Accepted" },
  { status: "Accepted" },
  { status: "Accepted" },
  { status: "Accepted" },
  { status: "Rejected" },
  { status: "Accepted" },
  { status: "Accepted" },
];

const StatusBadge = ({ status }) => {
  const badgeColors = {
    New: "text-blue-500",
    Rejected: "text-red-500",
    Accepted: "text-green-500",
  };

  return (
    <span className={`px-3 py-1 text-sm font-medium ${badgeColors[status]}`}>
      {status}
    </span>
  );
};

const SupervisorDashboard = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSubmissions = submissions.filter((item) => {
    if (activeTab === "All") return true;
    return item.status === activeTab;
  });

  return (
    <div className="min-h-screen bg-white p-6"> {/* Changed background color to white */}
      <h2 className="text-2xl font-semibold mb-4">Welcome Supervisor. . .</h2>
      
      {/* Tabs */}
      <div className="flex space-x-6 mb-6 text-lg font-medium bg-gray-100 p-2 rounded-lg">
        <span
          className={`cursor-pointer pb-1 ${
            activeTab === "All" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("All")}
        >
          All <span className="text-gray-500 text-sm">({submissions.length})</span>
        </span>
        <span
          className={`cursor-pointer pb-1 ${
            activeTab === "Accepted" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Accepted")}
        >
          Accepted <span className="text-gray-500 text-sm">({submissions.filter(s => s.status === "Accepted").length})</span>
        </span>
        <span
          className={`cursor-pointer pb-1 ${
            activeTab === "Rejected" ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Rejected")}
        >
          Rejected <span className="text-gray-500 text-sm">({submissions.filter(s => s.status === "Rejected").length})</span>
        </span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSubmissions.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-2xl p-4 shadow-md"> {/* Light gray background for cards */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Productivity failure</h3>
              <StatusBadge status={item.status} />
            </div>
            <p className="text-gray-600 text-sm">
              Productive failure is a learning design where decribe individuals are allowed to fail in a managed..
            </p>
            <div className="text-gray-500 text-xs mt-3">10/07/2025</div>
            <div className="flex items-center mt-2">
              <img
                src="https://via.placeholder.com/30"
                alt="User"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm text-gray-700 ml-2 flex items-center">
                <img src="https://via.placeholder.com/25" alt="Avatar" className="w-5 h-5 rounded-full mr-2" />
                By: J. David
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupervisorDashboard;
