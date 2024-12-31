import { PageTitle } from '../../components/page-title/page-title'
import Photo from '../../assets/foto.png'
import { Paragraph } from '../../components/paragraph'
import { Trans } from 'react-i18next'

export const AboutPage = () => {
  return (
    <main className="mx-6" id="sobre">
      <PageTitle subtitlePath="about.subtitle" titlePath="about.title" />
      <div className="grid justify-items-center items-start gap-3 mb-16 md:grid-rows-1 md:grid-cols-2 md:gap-6 md:items-center lg:gap-12 lg:grid-cols-3">
        <div className="font-body space-y-3 lg:col-span-2">
          <Paragraph>
            <Trans
              i18nKey="about.p1"
              values={{
                h1: 'Computer Science',
                h2: 'front-end',
                h3: 'interface design',
              }}
            >
              Atualmente estou cursando o 8º período de
              <span className="text-violet-500">Ciência da Computação</span> na
              UTFPR - Medianeira. Desde sempre, fui apaixonado por desenhar e
              pelo aspecto visual das coisas, e isso despertou meu fascínio por
              criar interfaces bonitas e funcionais, me direcionando para o
              <span className="text-violet-500">front-end</span> e
              <span className="text-violet-500">design de interfaces</span>.
            </Trans>
          </Paragraph>

          <Paragraph>
            <Trans
              i18nKey="about.p2"
              values={{
                h1: 'scientific initiation',
                h2: '3rd best work',
                h3: 'Latinoware 2024',
              }}
            >
              Na faculdade, tive a oportunidade de participar de uma
              <span className="text-violet-500">iniciação científica</span>
              focada no desenvolvimento de um aplicativo móvel para
              reconhecimento florestal. Esse projeto foi reconhecido como o
              <span className="text-violet-500">3º melhor trabalho</span> na
              categoria Full Paper do evento
              <span className="text-violet-500">Latinoware 2024</span>.
            </Trans>
          </Paragraph>

          <Paragraph>
            <Trans i18nKey="about.p3">
              Além disso, durante o curso, explorei áreas como
              <span className="text-violet-500">back-end</span> e
              <span className="text-violet-500">machine learning</span>, o que
              ampliou minha visão e consolidou habilidades essenciais para lidar
              com diferentes demandas.
            </Trans>
          </Paragraph>
        </div>

        <img
          src={Photo}
          alt="Foto - Guilherme Shibuya"
          className="aspect-square max-w-64 max-h-64 lg:max-w-full lg:max-h-full lg:aspect-[9/16] object-cover object-top rounded-lg shadow-light"
        />
      </div>
    </main>
  )
}
