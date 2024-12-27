import { useState } from 'react'
import { Logo } from '../../assets/guilherme'
import styles from './index.module.css'

const links = ['Sobre', 'Habilidades', 'Projetos', 'Experiência', 'Contato']

export const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <header className="w-full">
      <nav className="bg-neutral-950 py-3 border-b-2 border-neutral-300 flex justify-between items-center lg:py-6">
        <Logo />
        <div
          className="h-6 w-6 flex items-center cursor-pointer md:hidden"
          onClick={() => setIsActive(!isActive)}
        >
          <div
            className={`${styles.menuButton} ${
              isActive && `${styles.menuActive}`
            }`}
          />
        </div>

        <ul
          className={`text-neutral-50 md:flex md:justify-end md:gap-8 lg:gap-10 lg:text-lg ${
            isActive
              ? `absolute top-[50px] w-full left-0 p-6 flex flex-col gap-2 py-3 ${styles.fadeInLeft}`
              : 'hidden'
          }`}
        >
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className="font-semibold py-2 hover:text-violet-500"
              >
                <a>{link}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
