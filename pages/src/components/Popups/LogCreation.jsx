import { useState } from "react";
import { ArrowLeft, ChevronDown, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material"; // Correct import for CloseIcon

const LogCreation = ({ open, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [status, setStatus] = useState("");
  const [remarks, setRemarks] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleViewDetails = () => {
    setIsExpanded(!isExpanded);
  };

  // Combined handleSave function with all necessary logic
  const handleSave = () => {
    // Toggle active state for the category button
    setIsActive(!isActive);

    // Validation for the save action
    if (!status && isExpanded) {
      alert("Please select a status.");
      return;
    }

    // Your save logic here
    alert("Saved!");
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogContent className="bg-white rounded-lg p-6 max-h-[90vh] overflow-y-auto scrollbar-hide">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <DialogTitle>
            <div className="flex items-center">
              <IconButton
                edge="start"
                color="inherit"
                onClick={onClose}
                aria-label="close"
              >
                <ArrowLeft />
              </IconButton>
              <Typography
                variant="h6"
                component="h1"
                className="text-lg font-medium ml-4"
              >
                Log creation
              </Typography>
            </div>
          </DialogTitle>
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Status */}
        <div className="space-y-4 mb-6">
          <Typography variant="h6" className="text-blue-500 font-medium">
            Problem submitted
          </Typography>
          <Typography variant="body1" className="text-gray-600 p-2">
            Your problem is submitted. Waiting for the supervisor's approval
          </Typography>

          {/* View Details Button */}
          <Button
            variant="outlined"
            fullWidth
            onClick={handleViewDetails}
            aria-expanded={isExpanded}
            className="flex items-center justify-between p-8 bg-gray-50 rounded-lg hover:bg-gray-100 mt-4" // Added mt-4 here
          >
            <span className="text-gray-600">View details</span>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 p-1 m-2 ml-auto transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>

        {/* Full Form (Conditionally Rendered) */}
        {isExpanded && (
          <div className="space-y-6">
            {/* Category */}
            <div>
              <Typography
                variant="h6"
                className="text-gray-700 font-medium mb-2 p-3 m-4"
              >
                Category
              </Typography>
              <Button
                onClick={() => setIsActive(!isActive)} // Separate toggle function to avoid triggering save alert
                variant={isActive ? "contained" : "outlined"}
                sx={{
                  color: isActive ? "white" : "#FF7622",
                  backgroundColor: isActive ? "#FF7622" : "transparent",
                  borderColor: "#FF7622",
                  "&:hover": {
                    borderColor: "#E56A1E",
                    backgroundColor: isActive
                      ? "#E56A1E"
                      : "rgba(255, 118, 34, 0.04)",
                  },
                }}
              >
                Productivity failure
              </Button>
            </div>

            {/* Problem Title */}
            <div>
              <Typography
                variant="h6"
                className="text-gray-700 font-medium mb-2"
              >
                Problem Title
              </Typography>
              <Typography variant="body1" className="text-gray-600 p-4">
                Water leakage
              </Typography>
            </div>

            {/* Description */}
            <div>
              <Typography
                variant="h6"
                className="text-gray-700 font-medium mb-2"
              >
                Description
              </Typography>
              <Typography variant="body1" className="text-gray-600 p-2">
                Unintended escape of water from pipes, fixtures, or structures,
                leading to potential damage and waste in AS block.
              </Typography>
            </div>

            {/* Media Upload */}
            <div>
              <Typography
                variant="h6"
                className="text-gray-700 font-medium mb-2"
              >
                Media Upload
              </Typography>
              <Typography variant="body2" className="text-gray-500 p-2 mb-3">
                Add your documents here, and you can upload up to 5 files max
              </Typography>
              <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
                <span className="text-gray-600">phoenix-document.pdf</span>
                <div className="flex items-center ">
                  <span className="text-blue-500 mr-2">Upload complete</span>
                  <div className="bg-green-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div>
              <Typography
                variant="h6"
                className="text-gray-700 font-medium mb-2"
              >
                Questions
              </Typography>
            </div>

            {/* Additional Questions Section */}
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num}>
                  <Typography variant="body2" className="text-sm mb-2">
                    {num}. Have you solved this problem?
                  </Typography>
                  <input
                    type="text"
                    placeholder="Type your answer"
                    className="w-full p-3 bg-gray-100 rounded-md border-none outline-none"
                    aria-label={`Question ${num} answer`}
                  />
                </div>
              ))}
            </div>

            {/* Status Section */}
            <div className="mt-6">
              <Typography variant="h6" className="text-sm font-medium mb-2">
                Status
              </Typography>
              <div className="flex gap-4 p-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="Accepted"
                    className="mr-2"
                    checked={status === "Accepted"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <span className="text-sm">Accepted</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="Rejected"
                    className="mr-2"
                    checked={status === "Rejected"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <span className="text-sm">Rejected</span>
                </label>
              </div>
            </div>

            {/* Remarks Section */}
            <div className="mt-6">
              <Typography variant="h6" className="text-sm font-medium mb-4">
                {" "}
                {/* Increased margin-bottom */}
                Remarks
              </Typography>
              <textarea
                placeholder="Your text goes here"
                className="w-full p-3 bg-gray-100 rounded-md border-none outline-none min-h-[100px]"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                aria-label="Remarks"
              />
            </div>

            {/* Buttons Section */}
            <DialogActions className="mt-6 flex justify-end gap-4">
              <Button onClick={onClose} color="primary">
                Back
              </Button>
              <Button
                onClick={handleSave}
                variant="contained"
                sx={{
                  backgroundColor: "#FF7622",
                  "&:hover": {
                    backgroundColor: "#E56A1E",
                  },
                }}
              >
                Save
              </Button>
            </DialogActions>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LogCreation;
