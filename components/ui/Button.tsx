'use client'
import { forwardRef } from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type ButtonVariant = 'primary-gold' | 'outline-white' | 'outline-teal' | 'text-link'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
}

const baseClasses =
  'inline-flex items-center justify-center font-medium tracking-wide rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

const variantClasses: Record<ButtonVariant, string> = {
  'primary-gold':
    'bg-gold text-teal-dark hover:scale-105 hover:shadow-gold-glow active:scale-95',
  'outline-white':
    'border-2 border-white/80 text-white hover:bg-white hover:text-teal',
  'outline-teal':
    'border-2 border-teal text-teal hover:bg-teal hover:text-white',
  'text-link':
    'text-gold font-semibold hover:underline underline-offset-4 p-0',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-8 py-3.5 text-lg',
  lg: 'px-12 py-4 text-xl',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary-gold', size = 'md', href, external, children, ...props }, ref) => {
    const classes = twMerge(baseClasses, variantClasses[variant], sizeClasses[size], className)

    if (href) {
      if (external) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
            {children}
          </a>
        )
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'