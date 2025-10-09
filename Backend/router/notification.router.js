import express from "express";
import {
  getNotifications,
  markAsRead,
  markAllAsRead,
  createNotification,
  deleteNotification,
  getUnreadCount,
} from "../controller/notification.controller.js";
import { ProtectMiddleware } from "../middleware/protect.middleware.js";

const router = express.Router();

// All routes require authentication
router.use(ProtectMiddleware);

// Get all notifications
router.get("/", getNotifications);

// Get unread count
router.get("/unread", getUnreadCount);

// Mark as read
router.put("/:id/read", markAsRead);

// Mark all as read
router.put("/read-all", markAllAsRead);

// Create notification (admin/internal use)
router.post("/", createNotification);

// Delete notification
router.delete("/:id", deleteNotification);

export default router;
