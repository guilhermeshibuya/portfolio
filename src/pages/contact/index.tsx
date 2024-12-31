import { PageTitle } from '../../components/page-title/page-title'
import Linkedin from '../../assets/linkedin.svg'
import Github from '../../assets/github.svg'
import Contato from '../../assets/contato.svg'
import { Mail } from 'lucide-react'
import { Trans } from 'react-i18next'

const links = [
  {
    icon: <img src={Linkedin} alt="" className="size-5 lg:size-6" />,
    link: 'https://www.linkedin.com/in/guilherme-shibuya-99692b217/',
    text: 'Guilherme Shibuya',
  },
  {
    icon: <img src={Github} alt="" className="size-5 lg:size-6" />,
    link: 'https://github.com/guilhermeshibuya',
    text: 'guilhermeshibuya',
  },
  {
    icon: <Mail className="text-violet-500 size-5 lg:size-6" />,
    link: 'mailto:contato.guishibuya@gmail.com',
    text: 'contato.guishibuya@gmail.com',
  },
]

export const ContactPage = () => {
  return (
    <main className="mx-6" id="contato">
      <PageTitle subtitlePath="contact.subtitle" titlePath="contact.title" />
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="font-body text-sm text-neutral-200 md:text-base lg:text-lg">
          <p className="mb-6">
            <Trans i18nKey="contact.description" />
          </p>
          <ul className="space-y-3">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-3 transition-colors hover:text-violet-500"
                >
                  {link.icon}
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <img
          className="hidden overflow-hidden md:block md:overflow-auto"
          src={Contato}
          alt=""
        />
      </div>
    </main>
  )
}
