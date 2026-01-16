import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-fg hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-fg-secondary hover:bg-secondary/80",
        destructive:
          "border-transparent bg-error text-error-fg hover:bg-error/80",
        outline: "text-fg-primary",
        success:
          "border-success-border bg-success-bg text-success-fg hover:opacity-80",
        warning:
          "border-warning-border bg-warning-bg text-warning-fg hover:opacity-80",
        info:
          "border-info-border bg-info-bg text-info-fg hover:opacity-80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
