"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

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
                "flex justify-between py-1 px-12 transition-all fixed top-0 w-full z-50 bg-transparent backdrop-blur-md border-white/20",
                isScrolled ? "xl:py-4 border-b" : "xl:py-12"
            )}
        >
            <div className="">Logo</div>
            <div className="hidden lg:flex gap-24 pr-8">
                {links.map((link) => {
                    return (
                        <Link
                            href={link.href}
                            key={link.label}
                            className={cn(
                                "text-white hover:text-yellow-200 transition-all",
                                pathname.startsWith(link.href)
                                    ? ""
                                    : "text-white/50"
                            )}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>
            <div className="lg:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Menu />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};
export default NavBar;
