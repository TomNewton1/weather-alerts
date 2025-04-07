import { Box } from "@mui/material";
import "./App.css";
import { AlertsTable } from "./components/Alerts/AlertsTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>National Weather Alerts Dashboard</h1>
        <AlertsTable />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
