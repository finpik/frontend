'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@/lib/utils'

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'b8 text-gs-3 w-full select-none',
        'group-focus-within:text-pm-1',
        'group-aria-[invalid=true]:!text-vali-1',
        'group-aria-[expanded=true]:text-pm-1',
        className,
      )}
      {...props}
    />
  )
}

export { Label }
