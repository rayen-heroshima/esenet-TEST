// components/Polyfills.tsx
"use client";

import { useEffect } from "react";
import "whatwg-fetch"; // Polyfill for fetch
import "core-js/stable"; // Polyfill for modern JavaScript features

const Polyfills = () => {
  useEffect(() => {
    if (!window.Promise) {
      import('core-js/features/promise');
    }
    if (!window.fetch) {
      import('whatwg-fetch');
    }
  }, []);

  return null;
};

export default Polyfills;
