import React from 'react'

import { cn } from '@/lib/utils'

//footer currently not used, might be useful later

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    ></p>
  )
}
