export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 opacity-65 p-2 m-2 rounded text-white">
        <span>Home</span>

        <div className="flex flex-1"></div>
        <a className="mr-3" href="/about">About</a>
        <a className="mr-3" href="/pricing">Princing</a>
        <a className="mr-3" href="/contact">Contact</a>
    </nav>
  )
}
