"use client";

import { useCallback, useEffect, useState } from "react";

export default function useLockBodyScroll(initialValue = false) {
  const [lock, setLock] = useState(initialValue);

  const toggleLock = useCallback(() => {
    setLock((prev) => !prev);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", lock);
    document.body.classList.toggle("overflow-hidden", lock);

    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [lock]);

  return {
    lock,
    setLock,
    toggleLock,
  };
}