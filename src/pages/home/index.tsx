import { ArrowDownToLine, Mail } from 'lucide-react'
import { Button } from '../../components/button'

export const HomePage = () => {
  return (
    <main>
      <div className="text-neutral-100 mt-12 h-[calc(100vh-96px)] md:text-center md:flex md:flex-col md:items-center md:mt-40 md:h-[calc(100vh-112px)] lg:h-[calc(100vh-168px)]">
        <h2 className="font-display text-neutral-100 md:text-xl lg:text-3xl">
          Oi, meu nome é Guilherme 😊
        </h2>
        <h1 className="font-body font-semibold text-2xl text-neutral-50 md:text-5xl lg:text-7xl">
          Desenvolvedor <span className="text-violet-500">Front-End</span>
        </h1>
        <p className="text-neutral-300 max-w-[60ch] mt-3 lg:text-2xl">
          Bem-vindo(a) ao meu portfólio! Aqui você encontrará meus projetos mais
          recentes, além de algumas informações sobre mim.
        </p>

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:gap-8">
          <Button variant="secondary">
            currículo
            <ArrowDownToLine className="h-[1.125rem] w-[1.125rem] lg:h-6 lg:w-6" />
          </Button>
          <Button>
            entre em contato
            <Mail className="h-[1.125rem] w-[1.125rem] lg:h-6 lg:w-6" />
          </Button>
        </div>
      </div>
    </main>
  )
}
