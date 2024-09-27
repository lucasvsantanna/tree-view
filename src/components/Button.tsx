import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center rounded transition-colors outline-none',
  variants: {
    size: {
      default: 'px-4 h-8 font-medium text-sm',
      sm: 'px-2 h-6 text-xs font-semibold',
    },
    colorScheme: {
      default: 'bg-white hover:bg-gray-50 border border-gray-200 text-gray-500',
      dark: 'bg-blue-900 hover:bg-blue-800 border border-blue-900 hover:border-blue-800 text-white',
    },
    selected: {
      true: 'bg-blue-500 border border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600',
    },
  },
  defaultVariants: {
    size: 'default',
    colorScheme: 'default',
    selected: false,
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({
  children,
  size,
  colorScheme,
  className,
  selected,
  ...props
}: ButtonProps) {
  return (
    <button
      data-selected={selected}
      className={button({ size, colorScheme, selected, className })}
      {...props}
    >
      {children}
    </button>
  )
}
