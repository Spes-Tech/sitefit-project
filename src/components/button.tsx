import { ReactNode } from 'react'

function Button({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="bg-secondary h-12 w-56 rounded-xl text-xl font-semibold transition-all hover:opacity-80 md:h-16 md:w-80 md:text-2xl lg:h-20 lg:w-[464px] lg:text-4xl"
    >
      {children}
    </button>
  )
}

export default Button
