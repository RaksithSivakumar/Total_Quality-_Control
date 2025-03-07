import { useState } from "react";
import { Search, Filter } from "lucide-react";
import ApprovalCard from "./ApprovalCard";

const ApprovalsPanel = ({ approvals }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState([]); // Allow multiple selections
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Control popup visibility

  const filteredApprovals = approvals.filter((approval) => {
    const matchesSearch = approval.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter.length === 0 || statusFilter.includes(approval.status);
    return matchesSearch && matchesStatus;
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (status) => {
    setStatusFilter((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const handleClear = () => {
    setSearchTerm("");
    setStatusFilter([]);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <h2 className="text-xl font-medium">Approvals</h2>
          <span className="ml-2 bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm">{approvals.length}</span>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter className="h-4 w-4" />
          Filter By
        </button>
      </div>

      {/* 🔹 Filter Popup */}
      {isFilterOpen && (
        <div className="absolute bg-white shadow-lg rounded-lg p-4 w-80 z-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="accepted"
                className="mr-2"
                checked={statusFilter.includes("accepted")}
                onChange={() => handleFilterChange("accepted")}
              />
              <label htmlFor="accepted">Accepted</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rejected"
                className="mr-2"
                checked={statusFilter.includes("rejected")}
                onChange={() => handleFilterChange("rejected")}
              />
              <label htmlFor="rejected">Rejected</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="inprogress"
                className="mr-2"
                checked={statusFilter.includes("inprogress")}
                onChange={() => handleFilterChange("inprogress")}
              />
              <label htmlFor="inprogress">Inprogress</label>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="flex-1 py-2 border border-gray-300 rounded-md" onClick={handleClear}>
              Clear
            </button>
            <button
              className="flex-1 py-2 bg-orange-500 text-white rounded-md"
              onClick={() => setIsFilterOpen(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* 🔹 Search Bar */}
      <div className="relative flex-1 my-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Search for log"
          className="w-full pl-10 pr-4 py-2 rounded-md bg-white border border-gray-200"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* 🔹 Approval List */}
      <div className="space-y-4">
        {filteredApprovals.length > 0 ? (
          filteredApprovals.map((approval) => <ApprovalCard key={approval.id} approval={approval} />)
        ) : (
          <p className="text-gray-500">No approvals found</p>
        )}
      </div>
    </div>
  );
};

export default ApprovalsPanel;
