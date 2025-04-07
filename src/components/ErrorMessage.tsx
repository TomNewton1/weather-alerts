import { Box, Typography } from "@mui/material";

export const ErrorMessage = ({
  errorMessage = "An error occurred. Please try again later.",
}) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography color="error">{errorMessage}</Typography>
    </Box>
  );
};
