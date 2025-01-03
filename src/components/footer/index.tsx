export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="text-sm text-center text-neutral-400 py-3 mx-6 border-t-2 border-neutral-300 lg:text-base lg:py-6">
      <p>&copy; {year} | Guilherme Yudi Shibuya</p>
    </footer>
  )
}
