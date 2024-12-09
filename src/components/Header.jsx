import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar"
import { Link as NextUILink } from "@nextui-org/link"
import Link from 'next/link'
import { Button } from "@nextui-org/button"

export default function Header() {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">MIASIN</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <NextUILink as={Link} href="/" color="foreground">
              Home
            </NextUILink>
          </NavbarItem>
          <NavbarItem isActive>
            <NextUILink as={Link} href="/case" aria-current="page">
              Cases
            </NextUILink>
          </NavbarItem>
          <NavbarItem>
            <NextUILink color="foreground" href="#">
              Integrations
            </NextUILink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <NextUILink href="#">Login</NextUILink>
          </NavbarItem>
          <NavbarItem>
            <Button as={NextUILink} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}