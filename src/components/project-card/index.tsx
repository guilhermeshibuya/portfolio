import { ArrowRight } from 'lucide-react'
import styles from './index.module.css'

type ProjectCardProps = {
  title: string
  img: string
  variant: 'large' | 'small'
  containerClassName?: string
  imageClassName?: string
  href?: string
}

export const ProjectCard = ({
  title,
  img,
  variant,
  containerClassName,
  imageClassName,
  href,
}: ProjectCardProps) => {
  const variantStyle =
    variant === 'large'
      ? 'font-semibold text-2xl md:text-5xl lg:text-6xl'
      : 'font-medium md:text-2xl lg:text-3xl'

  const iconVariantStyle =
    variant === 'large'
      ? 'w-6 h-6 lg:w-14 lg:h-14'
      : 'w-[1.125rem] h-[1.125rem] lg:h-8 lg:w-8'

  return (
    <div
      className={`grid grid-cols-1 rounded-lg overflow-hidden shadow-light ${containerClassName} ${styles.card}`}
    >
      <img
        className={`col-start-1 row-start-1 object-cover w-full h-full ${imageClassName}`}
        src={img}
        alt={title}
      />
      <div
        className={`transition-colors h-full w-full col-start-1 row-start-1 ${styles.cardBg}`}
      />
      <div className="col-start-1 row-start-1 p-3">
        <a
          className={`flex items-center gap-2 text-neutral-200 font-display ${variantStyle}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
          <ArrowRight className={`text-violet-500 ${iconVariantStyle}`} />
        </a>
      </div>
    </div>
  )
}
