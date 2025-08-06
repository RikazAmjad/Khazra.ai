'use client'

export const safeLocalStorage = {
  getItem(key: string) {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(key); // ✅
  },
  setItem(key: string, value: string) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, value); // ✅
  },
  removeItem(key: string) {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(key); // ✅
  },
  clear() {
    if (typeof window === "undefined") return;
    window.localStorage.clear(); // ✅
  },
};


