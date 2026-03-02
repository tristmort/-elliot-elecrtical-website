import { NavItem } from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Areas Serviced", href: "/areas" },
  { label: "Contact Us", href: "/contact" },
];

export const ctaNavItem: NavItem = {
  label: "Request Quote",
  href: "/quote",
};
