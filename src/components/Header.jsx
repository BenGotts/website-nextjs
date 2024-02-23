'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuItem, NavbarMenu, NavbarMenuToggle, Button, ButtonGroup, Link } from "@nextui-org/react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "Competitions",
      href: "/competitions"
    },
    {
      name: "WCA",
      href: "https://wca.bengottschalk.com"
    },
    {
      name: "Projects",
      href: "https://github.com/BenGotts?tab=repositories"
    },
  ]

  return (
    <Navbar 
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen} 
      className="bg-blue-600 justify-between mb-2"
    >
      <NavbarContent className="sm:hidden text-white" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarBrand>
        <Link href="/" className="text-white text-2xl">Ben Gottschalk</Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <ButtonGroup color="primary">
          <Button as={Link} href="/">Home</Button>
          <Button as={Link} href="/competitions">Competitions</Button>
          <Button as={Link} href="https://wca.bengottschalk.com" target="_blank">WCA</Button>
          <Button as={Link} href="https://github.com/BenGotts?tab=repositories" target="_blank">Projects</Button>
        </ButtonGroup>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full "
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}