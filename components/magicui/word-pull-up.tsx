"use client";

import { motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export default function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}: WordPullUpProps) {
  return (
    <motion.h1
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={cn(
        "font-display text-4xl text-center font-semibold drop-shadow-sm",
        className,
      )}
    >
      {words.split(" ").map((word, i) => {

        return (
          <motion.span
            key={i}
            variants={framerProps}
            style={{ display: "inline-block", paddingRight: "8px" }}
          >
            {/* {word === "" && <span>&nbsp;</span>} */}
            {word !== "Innovation" && word !== "Creativity" ? <span>{word}</span> : <span className='text-primary'>{word}</span>}
          </motion.span>
        )
      })}
    </motion.h1>
  );
}
