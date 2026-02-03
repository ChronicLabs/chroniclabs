import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function GridAnimation() {
  const [activeCells, setActiveCells] = useState<number[]>([]);
  const gridSize = 16; // 4x4 grid

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick random cells to light up
      const count = Math.floor(Math.random() * 5) + 3; // 3 to 7 cells
      const newActive = [];
      for (let i = 0; i < count; i++) {
        newActive.push(Math.floor(Math.random() * gridSize));
      }
      setActiveCells(newActive);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 w-64 h-64 mx-auto md:mx-0">
      {Array.from({ length: gridSize }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.1 }}
          animate={{
            opacity: activeCells.includes(i) ? [0.1, 0.9, 0.1] : 0.1,
            backgroundColor: activeCells.includes(i) ? "#00FF41" : "#003B00",
            boxShadow: activeCells.includes(i) 
              ? "0 0 15px rgba(0, 255, 65, 0.8)" 
              : "none"
          }}
          transition={{ duration: 0.8 }}
          className="w-full h-full rounded-sm border border-[#003B00]/50"
        />
      ))}
    </div>
  );
}
