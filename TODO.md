# TODO: Enhance Authentication, Notifications, and UI

## 1. Install Dependencies
- [ ] Add react-hot-toast to frontend/package.json if needed (using react-toastify for consistency since it's already installed).
- [ ] Run `npm install` in frontend directory.

## 2. Backend Updates
- [ ] Edit Backend/models/auth.models.js: Add profileCompleted field (Boolean, default: false).
- [ ] Edit Backend/controller/auth.controller.js: Include profileCompleted in SignUp and SignIn responses.

## 3. Login Experience Updates
- [ ] Edit frontend/src/Componets/Login/form.jsx:
  - Add loading state with Loader2 icon.
  - Implement input validation and error messages.
  - Update toasts for success/error/network.
  - Store user data in localStorage on success.
  - Add profileCompleted check for activation reminder toast and notification addition.

## 4. Registration Experience Updates
- [ ] Edit frontend/src/Componets/Register/registerForm.jsx:
  - Add loading state with Loader2 icon.
  - Add input validation (email, password strength, confirm password).
  - Add Lucide icons to inputs.
  - Update toasts and redirect to /login.
  - Add success animation.

## 5. Notifications System
- [x] Create frontend/src/pages/notifications.jsx: Card layout, timestamps, icons, mark all read, animations, localStorage.
- [x] Edit frontend/src/router.jsx: Add /notifications route under protected feeds.

## 6. UI Updates
- [x] Edit frontend/src/Componets/Dashboard/layoutHeader.jsx: Link Bell to /notifications, add unread badge, implement logout with toasts and clear storage.
- [x] Ensure dark/light mode, responsiveness, and animations across files.

## 7. Followup
- [ ] Test all flows.
- [x] Update TODO as steps complete.
