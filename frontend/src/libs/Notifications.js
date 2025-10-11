/**
 * Saves welcome notifications for a new user in localStorage.
 * @param {string} username - The username of the new user.
 */
export function saveUserNotifications(username) {
  const notifications = [
    {
      id: Date.now(),
      title: `Welcome to the community, ${username}!`,
      message: "We’re excited to have you onboard. Join our WhatsApp community!",
      href: "https://chat.whatsapp.com/L1ka7X2eXL9CR8J0sN41kI",
      timestamp: new Date().toISOString(),
      read: false,
    },
    {
      id: Date.now() + 1,
      title: "Complete your account setup",
      message: "Visit your Settings page to complete your details and activate your account.",
      href: "/settings",
      timestamp: new Date().toISOString(),
      read: false,
    },
  ];

  const existing = JSON.parse(localStorage.getItem("notifications")) || [];
  localStorage.setItem("notifications", JSON.stringify([...notifications, ...existing]));
}
