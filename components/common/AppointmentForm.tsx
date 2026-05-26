
'use client'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface FormData {
  name: string
  phone: string
  date: string
  interest: string
  message: string
}

export const AppointmentForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/book', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (res.ok) setSubmitted(true)
    } catch (e) {
      alert('Something went wrong. Please WhatsApp us directly.')
    }
  }

  if (submitted) return (
    <div className="bg-white rounded-3xl shadow-card p-8 text-center">
      <div className="text-4xl mb-4">🎉</div>
      <h3 className="font-serif text-2xl text-teal mb-2">Thank You!</h3>
      <p className="text-warm-grey mb-6">Dr. Gupta’s team will call you back within 30 minutes.</p>
      <Button variant="outline-teal" href="https://wa.me/919XXXXXXXXX" external>Chat on WhatsApp Now</Button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl shadow-card p-8 space-y-5">
      <div>
        <input
          {...register('name', { required: 'Name is required' })}
          placeholder="Full Name *"
          className="w-full border-b-2 border-gray-200 bg-transparent py-3 px-0 focus:border-gold outline-none transition-colors text-charcoal placeholder:text-gray-400"
        />
        {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name.message}</span>}
      </div>
      <div>
        <input
          {...register('phone', { required: 'Phone is required', pattern: { value: /^[0-9]{10}$/, message: 'Invalid number' } })}
          placeholder="10‑digit Mobile Number *"
          className="w-full border-b-2 border-gray-200 bg-transparent py-3 px-0 focus:border-gold outline-none transition-colors"
        />
        {errors.phone && <span className="text-red-400 text-xs mt-1 block">{errors.phone.message}</span>}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input type="date" {...register('date')} className="border-b-2 border-gray-200 bg-transparent py-3 px-0 focus:border-gold outline-none text-charcoal" />
        <select {...register('interest')} className="border-b-2 border-gray-200 bg-transparent py-3 px-0 focus:border-gold outline-none text-charcoal">
          <option value="">Treatment Interest</option>
          <option value="implants">Dental Implants</option>
          <option value="root-canal">Root Canal</option>
          <option value="smile-makeover">Smile Makeover</option>
          <option value="braces">Braces & Aligners</option>
          <option value="whitening">Teeth Whitening</option>
          <option value="consult">General Consultation</option>
        </select>
      </div>
      <textarea
        {...register('message')}
        rows={2}
        placeholder="Message (optional)"
        className="w-full border-b-2 border-gray-200 bg-transparent py-3 px-0 focus:border-gold outline-none resize-none"
      />
      <Button type="submit" variant="primary-gold" className="w-full">Book My Appointment</Button>
    </form>
  )
}