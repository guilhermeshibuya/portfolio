export const PageTitle = ({
  subtitle,
  title,
}: {
  subtitle: string
  title: string
}) => {
  return (
    <div className="flex flex-col gap-1 lowercase font-display mt-12 mb-6">
      <span className="text-neutral-100 font-medium md:text-2xl lg:text-3xl">
        {subtitle}
      </span>
      <h1 className="text-violet-500 font-semibold text-2xl md:text-5xl lg:text-6xl">
        {title}
      </h1>
    </div>
  )
}
