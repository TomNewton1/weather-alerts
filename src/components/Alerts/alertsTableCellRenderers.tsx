import { Box, Tooltip } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { AlertSeverity, AlertUrgency } from "../../types/constants";
import { GridCellParams } from "@mui/x-data-grid";
import { AlertSeverityType, AlertUrgencyType } from "../../types/types";

const getSeverityIcon = (severity: AlertSeverityType["value"]) => {
  switch (severity) {
    case AlertSeverity.Extreme.value:
      return <WarningIcon sx={{ color: "red" }} />;
    case AlertSeverity.Severe.value:
      return <WarningIcon sx={{ color: "orange" }} />;
    default:
      return null;
  }
};

export const renderSeverityCell = (params: GridCellParams) => {
  const value = params.value as AlertSeverityType["value"];
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {value}
      <Tooltip title={AlertSeverity[value]?.description || ""}>
        <Box>{getSeverityIcon(value)}</Box>
      </Tooltip>
    </Box>
  );
};

const getUrgencyIcon = (urgency: AlertUrgencyType["value"]) => {
  switch (urgency) {
    case AlertUrgency.Immediate.value:
      return <PriorityHighIcon sx={{ color: "red" }} />;
    case AlertUrgency.Expected.value:
      return <PriorityHighIcon sx={{ color: "orange" }} />;
    default:
      return null;
  }
};

export const renderUrgencyCell = (params: GridCellParams) => {
  const value = params.value as AlertUrgencyType["value"];
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {value}
      <Tooltip title={AlertUrgency[value]?.description || ""}>
        <Box>{getUrgencyIcon(value)}</Box>
      </Tooltip>
    </Box>
  );
};
