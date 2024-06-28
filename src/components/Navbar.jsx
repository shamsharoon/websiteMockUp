import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/outline';
import Logo from "../assets/techlogo.png";
import { Link } from "react-scroll";

const navigation = [
  { name: 'Home', href: 'home', current: false },
  { name: 'Features', href: 'features', current: false },
  { name: 'Team', href: 'team', current: false },
  { name: 'Contact', href: 'contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white/80 backdrop-blur-xl w-screen z-50 fixed inset-x-0 top-0 transition-transform duration-300">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton
                  className={classNames(
                    'relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-brand',
                    open ? 'bg-white text-primary-brand' : 'hover:bg-white hover:text-primary-brand'
                  )}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XCircleIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto cursor-pointer bg-white/10 rounded-md hover:bg-white hover:bg-opacity-100 transition-all duration-300"
                    src={Logo}
                    alt="Tech Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        smooth={true}
                        duration={1000}
                        className={classNames(
                          item.current ? 'text-primary-brand' : 'text-gray-500 hover:text-primary-brand',
                          'rounded-md px-3 py-2 text-sm font-medium cursor-pointer',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-white">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={1000}
                  className={classNames(
                    item.current ? 'bg-primary-brand text-white' : ' hover:bg-primary-brand hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
