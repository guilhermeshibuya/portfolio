import React from 'react'

type ParagraphProps = {
  children: React.ReactNode
}

export const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className="text-sm text-neutral-300 font-body md:text-base lg:text-lg">
      {children}
    </p>
  )
}
