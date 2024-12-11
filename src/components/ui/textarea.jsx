import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-20 w-full rounded-md bg-primary p-4 text-sm border border-white/10 focus:border-accent focus:outline-none placeholder:text-white/60 transition-all duration-500",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
