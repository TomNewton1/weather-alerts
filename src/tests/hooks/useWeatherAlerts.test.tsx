import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useActiveWeatherAlertsQuery } from "../../hooks/useActiveWeatherAlertsQuery";
import { expect, test } from "vitest";
import { server } from "../../mocks/server";
import { http, HttpResponse } from "msw";

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // Disable retries for testing
      },
    },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

test("fetches active weather alerts successfully", async () => {
  const { result } = renderHook(() => useActiveWeatherAlertsQuery(), {
    wrapper: createWrapper(),
  });

  await waitFor(() => expect(result.current.isSuccess).toBe(true));
  expect(result.current.data?.features).toBeDefined();
  expect(result.current.data?.features.length).toBeGreaterThan(0);
});

test("handles API error for active weather alerts", async () => {
  server.use(
    http.get(`${import.meta.env.VITE_API_BASE_URL}/alerts/active`, () => {
      return HttpResponse.json(
        {
          type: "urn:noaa:nws:api:UnexpectedProblem",
          title: "Unexpected Problem",
          status: 500,
          detail: "An unexpected problem has occurred.",
          instance:
            "urn:noaa:nws:api:request:493c3a1d-f87e-407f-ae2c-24483f5aab63",
          correlationId: "493c3a1d-f87e-407f-ae2c-24483f5aab63",
          additionalProp1: {},
        },
        { status: 500 }
      );
    })
  );

  const { result } = renderHook(() => useActiveWeatherAlertsQuery(), {
    wrapper: createWrapper(),
  });

  await waitFor(() => expect(result.current.isError).toBe(true));
  expect(result.current.error).toBeDefined();
  expect(result.current?.error?.status).toBe(500);
  expect(result.current.error?.response?.data.title).toBe("Unexpected Problem");
});
