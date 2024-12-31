import { useTranslation } from 'react-i18next'

export const PageTitle = ({
  subtitlePath,
  titlePath,
}: {
  subtitlePath: string
  titlePath: string
}) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-1 lowercase font-display mt-12 mb-6">
      <span className="text-neutral-100 font-medium md:text-2xl lg:text-3xl">
        {t(subtitlePath)}
      </span>
      <h1 className="text-violet-500 font-semibold text-2xl md:text-5xl lg:text-6xl">
        {t(titlePath)}
      </h1>
    </div>
  )
}
