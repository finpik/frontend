'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@/lib/utils'

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn('b8 text-gs-3 select-none peer-focus:text-pm-1', className)}
      {...props}
    />
  )
}

export { Label }
