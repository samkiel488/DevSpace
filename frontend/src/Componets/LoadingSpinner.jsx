import { Loader } from "lucide-react";
import { motion } from "framer-motion";

const LoadingSpinner = () => (
  <motion.div
    className="flex items-center justify-center h-screen w-full bg-transparent"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Loader className="animate-spin text-blue-500 h-10 w-10" />
  </motion.div>
);

export default LoadingSpinner;
