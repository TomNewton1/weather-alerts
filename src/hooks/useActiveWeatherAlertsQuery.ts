import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { apiClient } from "../api/apiClient";
import { AxiosError } from "axios";
import { paths, components } from "../types/weather-api";

type WeatherAlertsResponse =
  paths["/alerts/active"]["get"]["responses"]["200"]["content"]["application/geo+json"];

type WeatherApiError = components["schemas"]["ProblemDetail"];
export const useActiveWeatherAlertsQuery = (): UseQueryResult<
  WeatherAlertsResponse,
  AxiosError<WeatherApiError>
> => {
  return useQuery<WeatherAlertsResponse, AxiosError<WeatherApiError>>({
    queryKey: ["activeWeatherAlerts"],
    queryFn: async () => {
      const { data } = await apiClient.get("/alerts/active");
      return data;
    },
  });
};
