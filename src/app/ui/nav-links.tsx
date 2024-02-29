"use client";

import { HomeIcon, UserIcon, CalendarIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Statistics",
    href: "/statistics",
    icon: ChartBarIcon,
  },
  {
    name: "Calendar",
    href: "/calendar",
    icon: CalendarIcon,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: UserIcon,
  },
];


export default function NavLinks() {
    const pathname = usePathname();             // Add this function to change color when on page

  return (
    <>
        {/* Iterates each link object from links and sets its values into the Link */}
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link key={link.name} href={link.href} className={`p-2 border border-white rounded-2xl ${pathname === link.href ? 'bg-white' : ''}`}>
            <LinkIcon className={`w-10 ${pathname === link.href ? 'stroke-black' : 'stroke-white'}`} />
          </Link>
        );
      })}
    </>
  );
}
