/* eslint-disable @typescript-eslint/no-explicit-any */
import { navLinks } from "../../assets/constants/index";
import { Button } from "../generic/Button";
import NavDrawer from "./NavDrawer";
import { proxima_logo } from "public";
import Link from 'next/link';

const Navbar = () => {

  return (
      <nav className="w-full flex py-6 justify-between items-center navbar">
          <img src={ (proxima_logo as any).src } alt="Proxima Logo" className="absolute w-auto h-[400px] -m-20 z-[1]"
        />

          <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[6]">
              { navLinks.map((nav, index) => {

          return (
              <div key={ index }>
                  { nav.id === "cta" ?
                      <Link href="/download">
                          <Button text={ "Download App" } styles={ `py-2` } />
                      </Link>
              : nav.id === "log-in" ?
                  <li
                    key={ nav.id }
                    className={ `font-main font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}` }
                >
                      <a href="https://app.proximafitness.com/">Log In</a>
                  </li>
                :
                  <li
                key={ nav.id }
                className={ `font-main font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}` }
              >
                      <Link href={ `/${nav.id}` }>{nav.title}</Link>
                  </li>
            }
              </div>
          );
      } ) }
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
              <NavDrawer />
              <div>
              </div>
          </div>
      </nav>
  );
};

export default Navbar;

