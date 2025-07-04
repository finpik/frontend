'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'w-full flex flex-col items-center justify-center whitespace-nowrap disabled:pointer-events-none cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-pm-1 text-bg-1',
        disabled: 'bg-gs-10 text-gs-7',
        secondary: 'bg-gs-10 text-gs-3',
        tonal: 'b3 bg-pm-3 text-pm-1',
      },
      size: {
        default: 'b1 h-[56px] py-[20px] rounded-md',
        md: 'b3 h-[56px] py-[20px] rounded-sm',
        sm: 'w-fit b4 h-[45px] px-[17px] py-[11px] rounded-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
