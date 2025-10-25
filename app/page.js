/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted) return <div>Loading</div>;

  return (
    <>
      <h1 className="dark:text-white text-black">Hello world</h1>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }}
      >
        {resolvedTheme === "dark"
          ? "Switch to Light Mode"
          : "Switch to Dark Mode"}
      </button>
    </>
  );
}
