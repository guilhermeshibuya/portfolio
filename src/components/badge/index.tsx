import React from 'react'

type BadgeProps = {
  children: React.ReactNode
}

export const Badge = ({ children }: BadgeProps) => {
  return (
    <div className="flex justify-center items-center w-fit px-3 py-2 gap-[0.625rem] bg-neutral-900 text-neutral-100 text-xs font-body font-semibold rounded-lg shadow-light lg:text-lg lg:px-5">
      {children}
    </div>
  )
}
