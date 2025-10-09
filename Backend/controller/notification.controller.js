import Notification from "../models/notification.models.js";

// Get all notifications for a user
export async function getNotifications(req, res, next) {
  try {
    const { id } = req.user;
    const notifications = await Notification.find({ userId: id }).sort({
      createdAt: -1,
    });
    res.status(200).json({ success: true, data: notifications });
  } catch (err) {
    next(err);
  }
}

// Mark notification as read
export async function markAsRead(req, res, next) {
  try {
    const { id } = req.params;
    const { userId } = req.user;
    const notification = await Notification.findOneAndUpdate(
      { _id: id, userId },
      { read: true },
      { new: true }
    );
    if (!notification) {
      return res
        .status(404)
        .json({ success: false, error: "Notification not found" });
    }
    res.status(200).json({ success: true, data: notification });
  } catch (err) {
    next(err);
  }
}

// Mark all notifications as read
export async function markAllAsRead(req, res, next) {
  try {
    const { id } = req.user;
    await Notification.updateMany({ userId: id }, { read: true });
    res.status(200).json({ success: true, message: "All notifications marked as read" });
  } catch (err) {
    next(err);
  }
}

// Create a notification
export async function createNotification(req, res, next) {
  try {
    const { userId, type, title, message, data } = req.body;
    const notification = await Notification.create({
      userId,
      type,
      title,
      message,
      data,
    });
    res.status(201).json({ success: true, data: notification });
  } catch (err) {
    next(err);
  }
}

// Delete a notification
export async function deleteNotification(req, res, next) {
  try {
    const { id } = req.params;
    const { userId } = req.user;
    const notification = await Notification.findOneAndDelete({
      _id: id,
      userId,
    });
    if (!notification) {
      return res
        .status(404)
        .json({ success: false, error: "Notification not found" });
    }
    res.status(200).json({ success: true, message: "Notification deleted" });
  } catch (err) {
    next(err);
  }
}

// Get unread count
export async function getUnreadCount(req, res, next) {
  try {
    const { id } = req.user;
    const count = await Notification.countDocuments({ userId: id, read: false });
    res.status(200).json({ success: true, data: { count } });
  } catch (err) {
    next(err);
  }
}
