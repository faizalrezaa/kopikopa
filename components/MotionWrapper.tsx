"use client";

import { motion } from "framer-motion";
import React from "react";

interface MotionWrapperType {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as: string;
}

export default function MotionWrapper({
  children,
  className,
  id,
  as,
}: MotionWrapperType) {
  const Tag = (motion as any)[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 100, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={className}
      id={id}
    >
      {children}
    </Tag>
  );
}
