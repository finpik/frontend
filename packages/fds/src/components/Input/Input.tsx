import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h5 text-gs-2 placeholder:text-gs-7 flex w-full min-w-0 border-b-[1.3px] border-gs-9 bg-transparent px-[10px] py-[16px] outline-none disabled:pointer-events-none disabled:cursor-not-allowed',
        'focus:aria-[invalid=false]:border-pm-1',
        'aria-invalid:border-vali-1',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
