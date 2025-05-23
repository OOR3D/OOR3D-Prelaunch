'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import NavigationWrapper from "@/components/NavigationWrapper"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"

export default function NotFound() {
  return (
    <NavigationWrapper>
      <div className="min-h-screen flex items-center justify-center bg-[#0a0c13]">
        <div className="text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{
              duration: 0.8,
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            className="text-[12rem] font-bold text-white mb-4 select-none"
            style={{
              textShadow: '0 0 40px rgba(255,255,255,0.2)'
            }}
          >
            404
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-semibold text-white/90 mb-3"
          >
            You're off the map.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 mb-8"
          >
            This page doesn't exist in OOR3D's universe yet.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GradientButton
              size="lg"
              asChild
            >
              <Link href="/">
                Take me home
              </Link>
            </GradientButton>
          </motion.div>
        </div>
      </div>
    </NavigationWrapper>
  )
} 