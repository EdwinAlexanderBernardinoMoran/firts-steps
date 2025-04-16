import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const temporalAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, 2000);
  }
  );
}

export const Navbar = async () => {

  await temporalAsync();
  return (
    <nav className="flex bg-blue-800 opacity-65 p-2 m-2 rounded text-white">
      <Link className="flex items-center mr-3" href="/">
        <HomeIcon className="mr-2"></HomeIcon>
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map( navItem => (
        <Link key={navItem.href} className="mr-3" href={ navItem.href }>{ navItem.name }</Link>
      ))}
    </nav>
  )
}
