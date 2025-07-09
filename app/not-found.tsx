import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
import { GridShape } from "@/components/common";

export default function NotFound() {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
            <GridShape />
            <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
                <h1 className="mb-8 font-bold text-4xl sm:text-6xl">ERROR</h1>

                <Image
                    alt="404"
                    width={472}
                    height={152}
                    className="dark:hidden"
                    src="/images/error/404.svg"
                />
                <Image
                    alt="404"
                    width={472}
                    height={152}
                    className="hidden dark:block"
                    src="/images/error/404-dark.svg"
                />

                <p className="mt-10 mb-6 text-base  sm:text-lg">
                    We can’t seem to find the page you are looking for!
                </p>
                <Link href="/">
                    <Button size={"lg"} variant={"outline"}>
                        Back to Home Page
                    </Button>
                </Link>
            </div>
            {/* <!-- Footer --> */}
            <p className="absolute text-sm -translate-x-1/2 bottom-6 left-1/2">
                &copy; {new Date().getFullYear()} - OMP
            </p>
        </div>
    );
}
