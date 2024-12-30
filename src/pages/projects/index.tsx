import { PageTitle } from '../../components/page-title/page-title'
import { ProjectCard } from '../../components/project-card'
import Forestfy from '../../assets/app-florestal-mockup.jpg'
import Shuffle from '../../assets/shuffle-mockup.jpg'
import Plannner from '../../assets/nlw-planner-mockup.jpg'
import Dogs from '../../assets/dogs-mockup.jpg'
import { ArrowRight } from 'lucide-react'

export const ProjectsPage = () => {
  return (
    <main className="mx-6 mb-16" id="projetos">
      <PageTitle subtitle="alguns" title="projetos" />
      <div className="grid gap-3 lg:grid-cols-4 lg:grid-rows-2 lg:gap-6">
        <ProjectCard
          title="Forestfy"
          img={Forestfy}
          variant="large"
          containerClassName="col-span-2 lg:row-span-2"
        />
        <div className="grid grid-cols-2 gap-3 col-span-2 lg:gap-6 order-last">
          <ProjectCard
            title="shuffle"
            img={Shuffle}
            variant="small"
            containerClassName="aspect-square lg:aspect-auto lg:row-span-2"
          />
          <ProjectCard
            title="plann.er"
            img={Plannner}
            variant="small"
            containerClassName="aspect-square lg:aspect-auto"
          />
          <a className="flex justify-center gap-[0.625rem] items-center font-body uppercase bg-neutral-900 text-base text-neutral-200 px-6 py-3 col-span-2 rounded-lg cursor-pointer lg:col-span-1 lg:text-lg lg:py-6">
            mais trabalhos
            <ArrowRight />
          </a>
        </div>
        <ProjectCard
          title="Dogs"
          img={Dogs}
          variant="large"
          containerClassName="col-span-2 max-h-32 md:max-h-72"
          imageClassName="object-center max-h-32 md:max-h-72"
        />
      </div>
    </main>
  )
}
