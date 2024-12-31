import { Accordion } from '../../components/accordion'
import { PageTitle } from '../../components/page-title/page-title'
import Experiencias from '../../assets/experiencias.svg'
import { Trans } from 'react-i18next'

export const ExperiencesPage = () => {
  return (
    <main className="mx-6" id="experiencias">
      <PageTitle
        subtitlePath="experiences.subtitle"
        titlePath="experiences.title"
      />
      <div className="space-y-3 lg:grid lg:grid-cols-2 lg:gap-6">
        <Accordion titlePath="experiences.xp1.title" date="2023 - 2024">
          <p>
            <Trans i18nKey="experiences.xp1.p1">
              Atuei como <span className="text-violet-500">pesquisador</span> de
              iniciação científica na UTFPR - Medianeira, onde desenvolvi um
              <span className="text-violet-500">aplicativo móvel</span> para
              reconhecimento de espécies florestais. No projeto, fui responsável
              por integrar um modelo de classificação pré-treinado, fornecido
              pelo GIC (Grupo de Inteligência Computacional) da UTFPR, além de
              implementar o uso de um microscópio USB para capturar imagens
              detalhadas da madeira.
            </Trans>
          </p>
          <p>
            <Trans i18nKey="experiences.xp1.p2">
              Também treinei o modelo
              <span className="text-violet-500">SAM</span> (Segment Anything
              Model) para
              <span className="text-violet-500">segmentação de imagens</span>,
              aplicando-o especificamente na identificação de características em
              imagens de madeira.
            </Trans>
          </p>
          <p>
            <Trans i18nKey="experiences.xp1.p3">
              O trabalho resultou na publicação de
              <span className="text-violet-500">dois artigos científicos</span>,
              sendo que um deles foi reconhecido como o
              <span className="text-violet-500">3º melhor trabalho</span> na
              trilha acadêmica do Latin.Science durante o evento
              <span className="text-violet-500">Latinoware 2024</span>.
            </Trans>
          </p>
          <p>
            <Trans i18nKey="experiences.xp1.p4">
              O projeto envolveu diversas tecnologias e habilidades. Na parte de
              design, criei protótipos das interfaces do aplicativo no
              <span className="text-violet-500">Figma</span>. Desenvolvi o
              aplicativo em <span className="text-violet-500">Java</span>,
              utilizei <span className="text-violet-500">Python</span> para
              treinar o modelo de segmentação. Além disso, aperfeiçoei minha
              <span className="text-violet-500">escrita acadêmica</span>, com a
              produção de artigos.
            </Trans>
          </p>
        </Accordion>
        <img
          className="hidden overflow-hidden lg:block lg:overflow-auto"
          src={Experiencias}
          alt=""
        />
      </div>
    </main>
  )
}
