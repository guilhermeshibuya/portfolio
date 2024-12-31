import { Badge } from '../../components/badge'
import { PageTitle } from '../../components/page-title/page-title'
import SkillSVG from '../../assets/tecnologias.svg'
import { Paragraph } from '../../components/paragraph'
import { Trans } from 'react-i18next'

//  h-[calc(100vh-144px)] md:h-[calc(100vh-160px)] lg:h-[calc(100vh-216px)]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Tailwind CSS',
  'Next.js',
  'Git e GitHub',
  'Node.js',
  'Docker',
  'Java',
  'Python',
]

export const SkillsPage = () => {
  return (
    <main className="mx-6" id="habilidades">
      <PageTitle subtitlePath="skills.subtitle" titlePath="skills.title" />
      <div className="max-w-3xl md:grid md:gap-6 lg:grid-cols-2 lg:max-w-full">
        <div className="space-y-6">
          <Paragraph>
            <Trans i18nKey="skills.description">
              Sou apaixonado por tecnologia e sempre busco explorar e aprofundar
              meu conhecimento em diferentes ferramentas e linguagens. Tenho
              experiência com
              <span className="text-violet-500">JavaScript</span> e sua
              bibliotecas e frameworks, como
              <span className="text-violet-500">React</span>, para
              desenvolvimento de interfaces dinâmicas e responsivas. No
              back-end, trabalho com
              <span className="text-violet-500">Node.js</span>, utilizando
              bibliotecas como <span className="text-violet-500">Prisma</span> e
              <span className="text-violet-500">Fastify</span> para criar APIs
              robustas e performáticas.
            </Trans>
          </Paragraph>

          <div className="flex justify-start items-center flex-wrap gap-3">
            {skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>
            })}
          </div>
        </div>

        <img
          className="hidden md:block place-self-center"
          src={SkillSVG}
          alt="Illustration of a person coding on a pc"
        />
      </div>
    </main>
  )
}
