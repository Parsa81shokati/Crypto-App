import React, { useContext, useEffect, useMemo, useState } from "react";
import { CryptoContext } from "../../../context/DataContext";
import { motion, AnimatePresence } from "framer-motion";
import MaxChangeCard from "./MaxChangeCard";

function Slider() {
  const [index, setIndex] = useState(0);
  const { coins } = useContext(CryptoContext);

  const topChanges = useMemo(() => {
    if (!coins || coins.length === 0) return [];
    return [...coins]
      .sort(
        (a, b) =>
          Math.abs(b.price_change_percentage_24h) -
          Math.abs(a.price_change_percentage_24h)
      )
      .slice(0, 10);
  }, [coins]);
  console.log(coins);

  useEffect(() => {
    if (topChanges.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % topChanges.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [topChanges]);

  const coin = topChanges[index];
  if (!coin) return null;

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={coin.id}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <MaxChangeCard coin={coin} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Slider;
