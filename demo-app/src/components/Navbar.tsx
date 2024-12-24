"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { IconCalendarPlus } from "@tabler/icons-react";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex m-auto max-w-full items-center  justify-center">
      <Navbar className="top-7 m-auto max-w-full" />
      <p className="text-black dark:text-white text-center w-full ">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed flex px-4 justify-between items-center top-10 inset-x-0  max-w-2xl mx-auto z-50", className)}
    >
        <div className="flex-none">himnts</div>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">Interface Design</HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className=" border border-yellow-500 text-sm right-1 grid sm:grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://images.unsplash.com/photo-1638864616266-c390568f9092?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://images.unsplash.com/photo-1637952112301-6090dca83ccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://images.unsplash.com/photo-1632059368252-be6d65abc4e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://images.unsplash.com/photo-1650473395434-8674d953ef2f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-1 text-sm">
              <HoveredLink href="/hobby">Birthday</HoveredLink>
              <HoveredLink href="/individual">Inauguration</HoveredLink>
              <HoveredLink href="/team">Reception</HoveredLink>
              <HoveredLink href="/enterprise">Baby shower</HoveredLink>
              <HoveredLink href="/enterprise">Anniversary</HoveredLink>
              <HoveredLink href="/enterprise">Achievement</HoveredLink>
              <HoveredLink href="/enterprise">Occasion</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
        <div className="flex-none"><IconCalendarPlus/></div>
    </div>
  );
}
