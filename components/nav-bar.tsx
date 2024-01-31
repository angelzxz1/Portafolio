"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
// import { ModeToggle } from "./theme-toggle";

const links = [
    { href: "#home", label: "Home" },
    { href: "#contact", label: "Contact" },
];

const NavBar = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav
            className={cn(
                "flex justify-between items-center py-1 px-12 transition-all fixed top-0 w-full z-50 bg-transparent backdrop-blur-md dark:border-white/20 min-h-[4rem] border-black/20",
                isScrolled ? "xl:py-2 border-b " : "xl:py-12 xl"
            )}
        >
            <div className="h-full flex relative items-center justify-start w-full">
                <Image
                    src={"/mgn_logo.png"}
                    alt={"logo"}
                    width={!isScrolled ? 60 : 45}
                    height={50}
                    className="transition-all"
                />
            </div>

            <div className="hidden lg:flex gap-24 pr-8 items-center">
                {links.map((link) => {
                    return (
                        <Link
                            href={link.href}
                            key={link.label}
                            className={cn(
                                "dark:text-white/50 text-black dark:hover:text-yellow-200 hover:text-yellow-500 transition-all"
                            )}
                        >
                            {link.label}
                        </Link>
                    );
                })}
                {/* <ModeToggle /> */}
            </div>

            <div className="lg:hidden flex gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Menu />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {links.map((link) => {
                            return (
                                <DropdownMenuItem key={link.href}>
                                    <Link
                                        href={link.href}
                                        key={link.label}
                                        className={cn(
                                            "dark:text-white/50 text-black hover:text-yellow-200 transition-all"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </DropdownMenuItem>
                            );
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
                {/* <ModeToggle /> */}
            </div>
        </nav>
    );
};
export default NavBar;
