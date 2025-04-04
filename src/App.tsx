import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("https://api.weather.gov/alerts/active");
  }, []);
  return (
    <>
      <h1>Weather Alerts</h1>
    </>
  );
}

export default App;
