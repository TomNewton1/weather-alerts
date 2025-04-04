import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

test("App title renders", () => {
  const app = render(<App />);
  const title = app.getByText("Weather Alerts");
  expect(title).not.toBeNull();
});
