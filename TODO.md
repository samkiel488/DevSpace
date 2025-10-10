# TODO: Implement Login and Registration Improvements

## 1. ✅ Fix Login Form Mobile Layout
- Update `frontend/src/pages/home/login.jsx` to wrap the form section in a full-height container with centering.

## 2. ✅ Remove Activation Toast from Login
- Edit `frontend/src/Componets/Login/form.jsx` to remove profileCompleted check and toast from LoginFormAction.

## 3. ✅ Add Activation Toast to Feeds Page
- Update `frontend/src/pages/dashboard/index.jsx` to add useEffect that checks user profileCompleted and shows toast + adds notification if false.

## 4. ✅ Add Welcome Notifications on Registration
- Modify `frontend/src/Componets/Register/registerForm.jsx` to save welcome notifications in RegisterFormAction.

## 5. ✅ Update Notifications Page
- Edit `frontend/src/pages/notifications.jsx` to display title, message, and handle href links in notifications.

## 6. Test Changes
- Run the app and test login, registration, and navigation to feeds.
