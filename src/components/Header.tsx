"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { Routes } from "@/app/Routes";

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="z-[999] relative">
      <nav className="flex fixed left-1/2 h-12 -translate-x-1/2 py-2 px-2 sm:py-0 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] top-6 rounded-full justify-center">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {Object.values(Routes).map((route) => (
            <li
              className="h-3/4 flex items-center justify-center relative"
              key={route.href}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                  {
                    "text-gray-950": pathName === route.href
                  }
                )}
                href={route.href}
              >
                {route.name}

                {route.href === pathName && (
                  <span className="bg-gray-200 rounded-full absolute inset-0 -z-10"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
