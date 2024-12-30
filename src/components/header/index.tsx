import { useState } from 'react'
import { Logo } from '../../assets/guilherme'
import styles from './index.module.css'

const links = ['Sobre', 'Habilidades', 'Projetos', 'Experiências', 'Contato']

export const Header = ({ activePage }: { activePage: number }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <header className="w-full">
      <nav className="bg-neutral-950 py-3 mx-6 border-b-2 border-neutral-300 flex justify-between items-center lg:py-6">
        <a href="#home">
          <Logo />
        </a>
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
          className={`text-neutral-50 bg-neutral-950 h-full md:flex md:justify-end md:gap-8 lg:gap-10 lg:text-lg ${
            isActive
              ? `absolute top-[50px] w-full left-0 p-6 flex flex-col gap-2 py-3 ${styles.fadeInLeft}`
              : 'hidden'
          }`}
        >
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className={`font-semibold py-2 ${
                  activePage === index + 1
                    ? 'text-violet-500 hover:text-violet-600'
                    : 'hover:text-violet-500'
                }`}
              >
                <a href={`#${link.toLowerCase().replace('ê', 'e')}`}>{link}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
