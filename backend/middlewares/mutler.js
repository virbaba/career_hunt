import multer from "multer";

const storage = multer.memoryStorage();  // Storing file in memory (RAM)

export const singleUpload = multer({ storage }).single("file");

// Middleware for logging file data
export const logUpload = (req, res, next) => {
  if (req.file) {
    next();
  } else {
    console.log("No file received");
  }
};
