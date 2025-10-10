import React, { useState, useEffect } from "react";
import { Bell, CheckCircle, Trash2, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('notifications') || '[]');
    setNotifications(stored);
  }, []);

  const markAsRead = (id) => {
    const updated = notifications.map(n => n.id === id ? { ...n, read: true } : n);
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  const markAllAsRead = () => {
    const updated = notifications.map(n => ({ ...n, read: true }));
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  const deleteNotification = (id) => {
    const updated = notifications.filter(n => n.id !== id);
    setNotifications(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Bell className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Notifications</h1>
              {unreadCount > 0 && (
                <span className="bg-teal-600 text-white text-sm px-2 py-1 rounded-full">
                  {unreadCount} unread
                </span>
              )}
            </div>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                <CheckCircle className="h-4 w-4" />
                Mark All Read
              </button>
            )}
          </div>

          <AnimatePresence>
            {notifications.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <Bell className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400 text-lg">No notifications yet</p>
                <p className="text-gray-400 dark:text-gray-500">You'll see important updates here</p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`p-4 rounded-lg border transition-all ${
                      notification.read
                        ? 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                        : 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className={`text-sm ${notification.read ? 'text-gray-600 dark:text-gray-300' : 'text-gray-900 dark:text-white font-medium'}`}>
                          {notification.message}
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-500 dark:text-gray-400">
                          <Clock className="h-3 w-3" />
                          {new Date(notification.timestamp).toLocaleString()}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="p-1 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="p-1 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
