import { ArrowDownToLine, Mail } from 'lucide-react'
import { Button } from '../../components/button'
import cv from '../../assets/curriculo-guilherme-shibuya.pdf'
import { Trans } from 'react-i18next'

export const HomePage = () => {
  return (
    <main className="mx-6" id="home">
      <div className="text-neutral-100 mt-12 md:text-center md:flex md:flex-col md:items-center md:mt-40 ">
        <h2 className="font-display text-neutral-100 md:text-xl lg:text-3xl">
          <Trans i18nKey="home.title1" />
        </h2>
        <h1 className="font-display font-semibold text-2xl text-neutral-50 md:text-5xl lg:text-7xl">
          <Trans i18nKey="home.title2" values={{ highlight: 'Front-End' }}>
            Desenvolvedor <span className="text-violet-500">Front-end</span>
          </Trans>
        </h1>
        <p className="font-body text-neutral-300 max-w-[60ch] mt-3 lg:text-2xl">
          <Trans i18nKey="home.description" />
        </p>

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:gap-8">
          <Button
            isLink
            variant="secondary"
            href={cv}
            download="cv_guilherme_shibuya.pdf"
          >
            <Trans i18nKey="home.button1" />
            <ArrowDownToLine className="h-[1.125rem] w-[1.125rem] lg:h-6 lg:w-6" />
          </Button>
          <Button isLink href="mailto:contato.guishibuya@gmail.com">
            <Trans i18nKey="home.button2" />
            <Mail className="h-[1.125rem] w-[1.125rem] lg:h-6 lg:w-6" />
          </Button>
        </div>
      </div>
    </main>
  )
}
