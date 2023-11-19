// 01.js
import { useEffect } from "react";

export function useDocumentTitle(title = "Welcome to the home page!") {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

// 01.test.js
import { renderHook, act } from "@testing-library/react-hooks";
import { useDocumentTitle } from "./01";

describe("Exercise 01", () => {
  test("is exported as a named export", () => {
    try {
      expect(typeof useDocumentTitle).toBe("function");
    } catch (e) {
      throw new Error("Make sure to export your hook!");
    }
  });

  test("sets the document title", () => {
    renderHook(() => useDocumentTitle());
    act(() => {
      expect(document.title).toBe("Welcome to the home page!");
    });
  });
});
