'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ClockIcon,
  PhoneIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline'

interface ScheduleDay {
  day: string
  time: string
  status: 'open' | 'limited' | 'closed'
  openHour: number
  closeHour: number
  openMinute: number
  closeMinute: number
}

const schedule: ScheduleDay[] = [
  { day: 'Monday', time: '9:00 AM — 8:00 PM', status: 'open', openHour: 9, openMinute: 0, closeHour: 20, closeMinute: 0 },
  { day: 'Tuesday', time: '9:00 AM — 8:00 PM', status: 'open', openHour: 9, openMinute: 0, closeHour: 20, closeMinute: 0 },
  { day: 'Wednesday', time: '9:00 AM — 8:00 PM', status: 'open', openHour: 9, openMinute: 0, closeHour: 20, closeMinute: 0 },
  { day: 'Thursday', time: '9:00 AM — 8:00 PM', status: 'open', openHour: 9, openMinute: 0, closeHour: 20, closeMinute: 0 },
  { day: 'Friday', time: '9:00 AM — 8:00 PM', status: 'open', openHour: 9, openMinute: 0, closeHour: 20, closeMinute: 0 },
  { day: 'Saturday', time: '9:00 AM — 6:00 PM', status: 'open', openHour: 9, openMinute: 0, closeHour: 18, closeMinute: 0 },
  { day: 'Sunday', time: '10:00 AM — 2:00 PM', status: 'limited', openHour: 10, openMinute: 0, closeHour: 14, closeMinute: 0 },
]

export const WorkingHours = () => {
  const [currentTime, setCurrentTime] = useState<string>('')
  const [isOpenNow, setIsOpenNow] = useState(false)
  const [todayIndex, setTodayIndex] = useState<number>(0)
  const [progressPercent, setProgressPercent] = useState(0)

  useEffect(() => {
    const updateTime = () => {
      // Get current time in Mumbai (IST)
      const now = new Date()
      const istOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }
      const istTime = now.toLocaleString('en-US', istOptions)
      const [weekday, time] = istTime.split(', ')
      
      setCurrentTime(time)

      // Get hours and minutes in IST
      const istDate = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
      const currentHour = istDate.getHours()
      const currentMinute = istDate.getMinutes()
      const currentTotalMinutes = currentHour * 60 + currentMinute

      // Find today's index
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const todayName = days[istDate.getDay()]
      const todayIdx = schedule.findIndex((d) => d.day === todayName)

      if (todayIdx >= 0) {
        setTodayIndex(todayIdx)
        const todaySchedule = schedule[todayIdx]
        const openTotalMinutes = todaySchedule.openHour * 60 + todaySchedule.openMinute
        const closeTotalMinutes = todaySchedule.closeHour * 60 + todaySchedule.closeMinute

        // Check if currently open
        const isOpen = currentTotalMinutes >= openTotalMinutes && currentTotalMinutes < closeTotalMinutes
        setIsOpenNow(isOpen)

        // Calculate progress bar percentage
        if (isOpen) {
          const elapsed = currentTotalMinutes - openTotalMinutes
          const total = closeTotalMinutes - openTotalMinutes
          setProgressPercent(Math.min(100, Math.max(0, (elapsed / total) * 100)))
        } else if (currentTotalMinutes < openTotalMinutes) {
          setProgressPercent(0) // Not open yet
        } else {
          setProgressPercent(100) // Closed for the day
        }
      }
    }

    updateTime()
    const timer = setInterval(updateTime, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  const getNextOpenDay = () => {
    for (let i = 0; i < 7; i++) {
      const idx = (todayIndex + i) % 7
      if (schedule[idx].status !== 'closed') {
        return i === 0 ? 'today' : i === 1 ? 'tomorrow' : schedule[idx].day
      }
    }
    return 'Monday'
  }

  const nextOpen = getNextOpenDay()

  return (
    <section className="py-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-mint-fresh/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-2.5 shadow-card border border-mint-fresh/20 mb-6"
          >
            {/* Live status indicator */}
            <span className="relative flex h-3 w-3">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isOpenNow ? 'bg-green-500' : 'bg-red-400'
              }`} />
              <span className={`relative inline-flex rounded-full h-3 w-3 ${
                isOpenNow ? 'bg-green-500' : 'bg-red-400'
              }`} />
            </span>
            <span className={`text-sm font-semibold ${
              isOpenNow ? 'text-green-600' : 'text-red-500'
            }`}>
              {isOpenNow ? 'We\'re Open Now' : 'Currently Closed'}
            </span>
            <span className="text-warm-grey text-xs">•</span>
            <span className="text-warm-grey text-xs">{currentTime} IST</span>
          </motion.div>

          <h2 className="font-serif text-h2 text-teal mb-4">Clinic Hours</h2>
          <p className="text-warm-grey max-w-lg mx-auto">
            {isOpenNow
              ? 'We\'re ready to welcome you. Walk in or book an appointment for priority service.'
              : `We're closed right now. We'll be open ${nextOpen === 'today' ? 'later today' : nextOpen === 'tomorrow' ? 'tomorrow' : `on ${nextOpen}`}. Emergency care is always available.`
            }
          </p>
        </div>

        {/* Main Schedule Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-card-hover overflow-hidden border border-mint-fresh/10"
        >
          {schedule.map((item, i) => {
            const isToday = i === todayIndex
            const isWeekend = item.day === 'Saturday' || item.day === 'Sunday'

            return (
              <div key={i}>
                <div
                  className={`flex items-center justify-between px-6 md:px-10 py-5 transition-colors relative ${
                    isToday
                      ? 'bg-gradient-to-r from-mint-fresh/20 via-mint-fresh/10 to-transparent'
                      : 'hover:bg-mint-fresh/5'
                  }`}
                >
                  {/* Day & Status */}
                  <div className="flex items-center gap-5">
                    {/* Status Dot */}
                    <div className="relative">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === 'open' ? 'bg-green-500' : 'bg-gold'
                      } ${isToday ? 'ring-4 ring-green-500/20' : ''}`} />
                      {isToday && isOpenNow && (
                        <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-30" />
                      )}
                    </div>

                    <div>
                      <span className={`font-medium text-base ${
                        isToday ? 'text-teal' : 'text-charcoal'
                      }`}>
                        {item.day}
                      </span>
                      {isToday && (
                        <span className="ml-3 inline-flex items-center gap-1 text-xs font-semibold bg-teal text-white px-2.5 py-0.5 rounded-full">
                          <SunIcon className="w-3 h-3" />
                          Today
                        </span>
                      )}
                      {isWeekend && !isToday && (
                        <span className="ml-2 text-xs text-gold font-medium">
                          {item.day === 'Sunday' ? '🕐 Limited' : '✨ Weekend'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-medium ${
                      isToday ? 'text-teal' : 'text-warm-grey'
                    }`}>
                      {item.time}
                    </span>

                    {/* Open/Closed badge */}
                    <span className={`hidden sm:inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${
                      item.status === 'open'
                        ? 'bg-green-50 text-green-600'
                        : 'bg-gold/10 text-gold-dark'
                    }`}>
                      {item.status === 'open' ? (
                        <CheckCircleIcon className="w-3.5 h-3.5" />
                      ) : (
                        <ClockIcon className="w-3.5 h-3.5" />
                      )}
                      {item.status === 'open' ? 'Open' : 'Limited Hours'}
                    </span>
                  </div>
                </div>

                {/* Progress bar for today */}
                {isToday && isOpenNow && (
                  <div className="h-1 bg-mint-fresh/30">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-teal to-gold rounded-r-full"
                    />
                  </div>
                )}

                {/* Divider */}
                {i < schedule.length - 1 && (
                  <div className="border-b border-mint-fresh/10 mx-10" />
                )}
              </div>
            )
          })}
        </motion.div>

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
          {/* Legend */}
          <div className="flex items-center gap-6 text-xs text-warm-grey">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
              Open
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold" />
              Limited Hours
            </span>
          </div>

          {/* Emergency Note */}
          <div className="flex items-center gap-2 text-xs text-teal font-medium">
            <ExclamationTriangleIcon className="w-4 h-4" />
            Emergency care available 24/7
            <a
              href="tel:+919XXXXXXXXX"
              className="inline-flex items-center gap-1 ml-2 text-gold hover:text-gold-dark transition-colors"
            >
              <PhoneIcon className="w-3.5 h-3.5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}