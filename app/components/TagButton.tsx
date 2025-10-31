interface TagButtonProps {
  label: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export default function TagButton({
  label,
  href,
  onClick,
  variant = 'primary',
}: TagButtonProps) {
  const baseClasses = 'inline-block px-4 py-2 rounded-full font-semibold text-sm transition whitespace-nowrap'

  const variantClasses = {
    primary: 'bg-purple text-white hover:bg-purple-dark',
    secondary: 'bg-purple-light text-purple hover:bg-purple',
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variantClasses[variant]} cursor-pointer`}
      >
        {label}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} cursor-pointer`}
    >
      {label}
    </button>
  )
}
