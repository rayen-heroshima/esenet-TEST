// components/Polyfills.tsx
"use client";

import { useEffect } from "react";
import "whatwg-fetch"; // Polyfill for fetch
import "core-js/stable"; // Polyfill for modern JavaScript features

const Polyfills = () => {
  useEffect(() => {
    if (!window.Promise) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('core-js/features/promise');
    }
    if (!window.fetch) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require('whatwg-fetch');
    }
  }, []);

  return null;
};

export default Polyfills;
