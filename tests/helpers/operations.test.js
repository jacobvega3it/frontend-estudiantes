import { describe, test, expect } from "vitest";

describe("operations", () => {
    test("should add two numbers", () => {
        expect(1 + 1).toBe(2);
    });

    test("should subtract two numbers", () => {
        expect(2 - 1).toBe(1);
    });

    test("should multiply two numbers", () => {
        expect(2 * 2).toBe(4);
    });

    test("should divide two numbers", () => {
        expect(4 / 2).toBe(2);
    });
});