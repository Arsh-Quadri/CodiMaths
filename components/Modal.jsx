// components/Modal.tsx
"use client";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function Modal({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      {children}
    </div>,
    document.body
  );
}
