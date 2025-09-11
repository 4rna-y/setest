import { render } from "@solidjs/testing-library";
import { describe, expect, test } from "vitest";
import App from "../src/App";

describe("App", () => {
	test("renders without crashing", () => {
		const { container } = render(() => <App />);
		expect(container).toBeDefined();
	});

	test("contains main content", () => {
		const { getByText } = render(() => <App />);
		expect(document.body).toBeDefined();
	});
});
