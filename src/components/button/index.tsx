type ButtonProps = React.ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const buttonStyle = () => {
    const baseStlye =
      'flex justify-center items-center gap-[0.625rem] py-2 px-3 cursor-pointer rounded font-semibold text-xs uppercase w-full shadow-light transition-colors md:w-auto lg:text-lg lg:px-5'

    const variantStyle =
      variant === 'primary'
        ? 'bg-violet-500 text-violet-950 hover:bg-violet-600 border-2 border-violet-500 hover:border-violet-600'
        : 'bg-transparent text-neutral-300 border-2 border-neutral-300 hover:border-violet-500 hover:text-violet-500 '

    return `${baseStlye} ${variantStyle}`
  }
  return (
    <button className={buttonStyle()} {...props}>
      {children}
    </button>
  )
}
