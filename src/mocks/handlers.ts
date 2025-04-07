import { http, HttpResponse } from "msw";
import sampleResponse from "./data/alerts-response.json";

export const handlers = [
  http.get(`${import.meta.env.VITE_API_BASE_URL}/alerts/active`, () => {
    return HttpResponse.json(sampleResponse, { status: 200 });
  }),
];
