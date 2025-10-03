export const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let error = err.message || "Internal Server Error";

  // MongoDB Duplicate Key Error
  if (err.code === 11000) {
    statusCode = 400;
    const field = Object.keys(err.keyValue)[0];
    error = `Duplicate field value: '${field}' must be unique.`;
  }

  // Mongoose Validation Error
  if (err.name === "ValidationError") {
    statusCode = 400;
    error = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
  }

  // Mongoose Cast Error (invalid ObjectId)
  if (err.name === "CastError") {
    statusCode = 400;
    error = `Invalid ${err.path}: ${err.value}`;
  }

  // Send the response
  res.status(statusCode).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
