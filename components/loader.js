import { motion } from "framer-motion";

export default function Loader() {

  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 2, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["50%", "20%", "50%", "20%", "20%"],
        backgroundColor: ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"],
      }}
      transition={{
        duration: 2,
        // make it repeat but reverse the animation
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      style={{
        width: 50,
        height: 50,
        backgroundColor: "red",
        borderRadius: "50%",
      }}
    />
  )
}