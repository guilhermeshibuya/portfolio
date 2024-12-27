import { useState } from 'react'
import { Logo } from '../../assets/guilherme'
import styles from './index.module.css'

const links = ['Sobre', 'Habilidades', 'Projetos', 'Experiência', 'Contato']

export const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <header className="w-full">
      <nav className="bg-neutral-950 py-3 border-b-2 border-neutral-300 flex justify-between items-center">
        <Logo />

        <div
          className={
            isActive
              ? `${styles.menuActive} ${styles.menuButton}`
              : styles.menuButton + ' lg:hidden'
          }
          onClick={() => setIsActive(!isActive)}
        />

        <ul
          className={`${
            isActive
              ? `absolute top-[50px] w-full left-6 flex flex-col gap-2 py-3 ${styles.fadeInLeft}`
              : 'hidden'
          } text-neutral-50 lg:flex lg:justify-end lg:gap-10`}
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
