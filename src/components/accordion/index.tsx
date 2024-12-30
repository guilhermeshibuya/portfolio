import { ChevronDown } from 'lucide-react'
import styles from './index.module.css'
import React, { useState } from 'react'

type AccordionProps = {
  title: string
  date: string
  children?: React.ReactNode
}

export const Accordion = ({ title, date, children }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="space-y-2">
      <button
        className="flex justify-between items-center font-body text-sm text-neutral-100 w-full bg-neutral-900 px-3 py-3 rounded-lg cursor-pointer lg:text-xl"
        onClick={() => setIsActive(!isActive)}
      >
        <span>{title}</span>
        <span className="flex items-center gap-2">
          {date}{' '}
          <ChevronDown
            className={`text-violet-500 transition-all ${
              isActive && styles.iconActive
            }`}
          />
        </span>
      </button>
      <section
        className={`${
          !isActive && 'hidden overflow-hidden'
        } font-body text-sm text-neutral-200 bg-neutral-900 px-3 py-3 rounded-lg space-y-3 lg:text-base ${
          styles.fadeInDown
        }`}
      >
        {children}
      </section>
    </div>
  )
}
