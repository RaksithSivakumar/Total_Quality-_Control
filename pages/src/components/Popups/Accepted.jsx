import { useState } from "react";
import { ArrowLeft, ChevronDown, ChevronUp, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  IconButton,
  Box,
  TextField,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { Trophy } from "lucide-react";

const Accepted = ({ open, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleViewDetails = () => {
    setIsExpanded(!isExpanded);
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

        {/* Accepted Status */}
        <div className="mb-4">
          <Typography variant="h6" className="text-green-500 font-medium">
            Accepted
          </Typography>
          <Typography variant="body1" className="text-gray-600 mt-2">
            Your problem is forwarded to the problem-solving team by the supervisor.
          </Typography>
        </div>

        {/* Points provided */}
        <div className="mb-4">
          <Typography variant="body1" className="text-gray-700 font-medium">
            Points provided
          </Typography>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 mt-2">
            <span className="text-gray-600">500 points</span>
            <Trophy className="h-5 w-5 text-amber-500" />
          </div>
        </div>

        {/* View Details Button */}
        <Button
          variant="outlined"
          fullWidth
          onClick={handleViewDetails}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Collapse details" : "Expand details"}
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 mt-4"
          sx={{
            justifyContent: "space-between",
            textTransform: "none",
            color: "gray",
            borderColor: "lightgray",
          }}
        >
          <span className="text-gray-600">View details</span>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </Button>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="space-y-6 mt-6">
            {/* Category */}
            <div>
              <Typography
                variant="h6"
                className="text-gray-700 p-2 font-medium mb-2"
              >
                Category
              </Typography>
              <Button
                onClick={() => setIsActive(!isActive)}
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
              <TextField
                fullWidth
                variant="outlined"
                value="Water leakage"
                disabled
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "#f9fafb",
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                  },
                }}
              />
            </div>

            {/* Description */}
            <div>
              <Typography
                variant="h6"
                className="text-gray-700 p-2 font-medium mb-2"
              >
                Description
              </Typography>
              <Typography
                variant="body1"
                className="text-gray-600 p-4 bg-gray-50 rounded-lg"
              >
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
              <Typography variant="body2" className="text-gray-500 mb-3">
                Add your documents here, and you can upload up to 5 files max
              </Typography>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">phoenix-document.pdf</span>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">Upload complete</span>
                  <div className="bg-green-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              <input
                type="file"
                className="mt-2"
                onChange={(e) => console.log(e.target.files)} // Handle file upload
              />
            </div>

            {/* Questions */}
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num}>
                  <Typography variant="body2" className="text-sm mb-2">
                    {num}. Have you solved this problem?
                  </Typography>
                  <input
                    type="text"
                    placeholder="Yes, I tried to solve the problem"
                    className="w-full p-3 bg-gray-100 rounded-md border-none outline-none"
                    aria-label={`Question ${num} answer`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Accepted;