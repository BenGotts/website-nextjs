import { Navbar, NavbarBrand, NavbarContent, Link, Button, ButtonGroup } from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar isBordered className="bg-blue-600 justify-between mb-2">
      <NavbarBrand>
        <Link href="/" className="text-white text-2xl">Ben Gottschalk</Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <ButtonGroup color="primary">
          <Button as={Link} href="/">Home</Button>
          <Button as={Link} href="/competitions">Competitons</Button>
          <Button as={Link} href="https://wca.bengottschalk.com" target="_blank">WCA</Button>
          <Button as={Link} href="https://github.com/BenGotts?tab=repositories" target="_blank">Projects</Button>
        </ButtonGroup>
      </NavbarContent>
    </Navbar>
  );
}