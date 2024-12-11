import Link from "next/link";

export const metadata = {
    title: "404 - Not Found",
    description: "It seems the page you&apos;re looking for has gone missing.",
}

export default function NotFound() {
    return <div
        className="w-screen h-full bg-dark">
        <div className="container w-full h-full mx-auto flex flex-col gap-4 xl:flex-row xl:gap-14 justify-center items-center">
            <h1
                className="text-[140px] sm:text-[200px] xl:text-[250px] font-extrabold flex gap-6 text-transparent transition-all duration-300 leading-tight">
                <span className="http_code blur-none hover:scale-[1.15]">4</span>
                <span className="http_code blur-none hover:scale-[1.15]">0</span>
                <span className="http_code blur-none hover:scale-[1.15]">4</span>
            </h1>
            <div className="flex flex-col justify-center items-center xl:justify-start xl:items-start mb-6 xl:mb-0">
                <h2 className="text-4xl text-white/70 font-bold leading-tight text-center">Lost in Cyberspace?</h2>
                <h3 className="max-w-[650px] text-lg text-white/50 mt-6 leading-normal text-justify xl:text-left">
                    It seems the page you&apos;re looking for has gone missing. Don&apos;t worry, we&apos;ve got you covered! Head back to our homepage or use the navigation to find your way.
                </h3>
            </div>
        </div>
    </div>
}