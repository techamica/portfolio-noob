import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
    return <header className="py-8 xl:py-12 text-white fixed top-0 left-0 w-screen bg-primary z-10">
        <div className="container mx-auto flex justify-between items-center">
            {/* LOGO */}
            <Link href={"/"}>
                <h1 className="text-4xl font-semibold">
                    Noob<span className="text-accent">.</span>
                </h1>
            </Link>

            {/* DESKTOP NAV & HIRE-ME BUTTON */}
            <div className="hidden lg:flex items-center gap-8">
                <Nav />
                <Link href={"/contact"}>
                    <Button>
                        Hire me
                    </Button>
                </Link>
            </div>

            {/* MOBILE NAV */}
            <div className="lg:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
}