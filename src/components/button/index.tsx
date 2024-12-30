import React from 'react'

type ButtonBaseProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

type ButtonAsLinkProps = ButtonBaseProps & {
  isLink: true
} & React.ComponentProps<'a'>

type ButtonAsButtonProps = ButtonBaseProps & {
  isLink?: false
} & React.ComponentProps<'button'>

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps

export const Button = ({
  children,
  isLink = false,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const buttonStyle = () => {
    const baseStlye =
      'flex justify-center items-center gap-[0.625rem] py-2 px-3 cursor-pointer rounded-lg font-semibold text-xs uppercase w-full shadow-light transition-colors md:w-auto lg:text-lg lg:px-5'

    const variantStyle =
      variant === 'primary'
        ? 'bg-violet-500 text-violet-950 hover:bg-violet-600 border-2 border-violet-500 hover:border-violet-600'
        : 'bg-transparent text-neutral-300 border-2 border-neutral-300 hover:border-violet-500 hover:text-violet-500 '

    return `${baseStlye} ${variantStyle}`
  }

  return isLink ? (
    <a className={buttonStyle()} {...(props as ButtonAsLinkProps)}>
      {children}
    </a>
  ) : (
    <button className={buttonStyle()} {...(props as ButtonAsButtonProps)}>
      {children}
    </button>
  )
}
