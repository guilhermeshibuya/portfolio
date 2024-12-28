import { Accordion } from '../../components/accordion'
import { PageTitle } from '../../components/page-title/page-title'

export const ExperiencesPage = () => {
  return (
    <main className="mx-6">
      <PageTitle subtitle="minhas" title="experiências" />
      <div className="space-y-3">
        <Accordion title="UTFPR - Pesquisador" date="2023 - 2024">
          <p>
            Atuei como <span className="text-violet-500">pesquisador</span> de
            iniciação científica na UTFPR - Medianeira, onde desenvolvi um{' '}
            <span className="text-violet-500">aplicativo móvel</span> para
            reconhecimento de espécies florestais. No projeto, fui responsável
            por integrar um modelo de classificação pré-treinado, fornecido pelo
            GIC (Grupo de Inteligência Computacional) da UTFPR, além de
            implementar o uso de um microscópio USB para capturar imagens
            detalhadas da madeira.
          </p>
          <p>
            Também treinei o modelo <span className="text-violet-500">SAM</span>{' '}
            (Segment Anything Model) para{' '}
            <span className="text-violet-500">segmentação de imagens</span>,
            aplicando-o especificamente na identificação de características em
            imagens de madeira.
          </p>
          <p>
            O trabalho resultou na publicação de{' '}
            <span className="text-violet-500">dois artigos científicos</span>,
            sendo que um deles foi reconhecido como o{' '}
            <span className="text-violet-500">3º melhor trabalho</span> na
            trilha acadêmica do Latin.Science durante o evento{' '}
            <span className="text-violet-500">Latinoware 2024</span>.
          </p>
          <p>
            O projeto envolveu diversas tecnologias e habilidades. Na parte de
            design, criei protótipos das interfaces do aplicativo no{' '}
            <span className="text-violet-500">Figma</span>. Desenvolvi o
            aplicativo em <span className="text-violet-500">Java</span>,
            utilizei <span className="text-violet-500">Python</span> para
            treinar o modelo de segmentação. Além disso, aperfeiçoei minha{' '}
            <span className="text-violet-500">escrita acadêmica</span>, com a
            produção de artigos.
          </p>
        </Accordion>
      </div>
    </main>
  )
}
