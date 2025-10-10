import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function FeedsHome() {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user && !user.profileCompleted) {
      toast(
        <span>
          Your account isn’t activated yet. Complete your details in{" "}
          <a href="/settings" className="underline text-blue-400">Settings</a>.
        </span>,
        { icon: "⚠️", duration: 4000 }
      );

      const reminder = {
        id: Date.now(),
        title: "Complete your account setup",
        message: "Visit your Settings page to complete your details and activate your account.",
        href: "/settings",
        timestamp: new Date().toISOString(),
        read: false,
      };

      const existing = JSON.parse(localStorage.getItem("notifications")) || [];
      localStorage.setItem("notifications", JSON.stringify([reminder, ...existing]));
    }
  }, []);

  return (
    <section className="bg-blue-600 flex h-[400px] md:h-[500px] w-full flex-col justify-center items-center-safe">
      <div>Hello World</div>
    </section>
  );
}
