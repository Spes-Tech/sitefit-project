import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="h-12 w-56 rounded-xl bg-secondary text-xl font-semibold transition-all hover:opacity-80 md:h-16 md:w-80 md:text-2xl lg:h-20 lg:w-[464px] lg:text-4xl"
    >
      {children}
    </button>
  )
}

export default Button
