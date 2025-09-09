'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'border-[1.7px] border-gs-8 data-[state=checked]:border-pm-1 text-gs-2 aspect-square size-[24px] shrink-0 rounded-full outline-none disabled:cursor-not-allowed cursor-pointer',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon
          fill="#4160FF"
          color="#4160FF"
          size={12}
          absoluteStrokeWidth={true}
          className="fill absolute"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
