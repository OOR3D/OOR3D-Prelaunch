"use client"

import * as React from "react"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Montserrat } from "next/font/google"
import { Button } from "@/components/ui/button"
import { HelpCircle } from 'lucide-react'
import FAQAccordion from '@/components/shared/FAQAccordion'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
})

export default function FAQSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#0A0C13]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-400" />
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-orange-400 ${montserrat.className}`}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base"
          >
            Answers to the most common questions about early access, tools, and getting started.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <FAQAccordion />

            <Link 
              href="/faq"
              className="block text-center mt-8 sm:mt-12"
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border border-red-500/50 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-full text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                View All FAQs
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 