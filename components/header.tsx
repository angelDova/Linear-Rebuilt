import Link from "next/link";
import { Button } from "./button";
import { Container } from "./container";
import { Logo } from "./icons/logo";

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-10 w-full border-b border-transparent-white backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-4" /> Linear
        </Link>

        <nav className="h-full">
          <ul className="flex items-center h-full [&_a]:text-sm [&_li]:ml-6">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Customers</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Changelog</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Integrations</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
          </ul>
        </nav>

        <div className="ml-auto h-full flex items-center">
          <Link className="text-sm mr-6" href="#">
            Log In
          </Link>
          <Button href="#">Sign Up</Button>
        </div>
      </Container>
    </header>
  );
};
