import { Button, ThemeToggle } from "@/components/ui";

function RootPage() {
    return (
        <div
            className="min-h-dvh flex items-center justify-center 
            transition-all duration-300">
            <div className="max-w-3xl space-y-10">
                <h1 className="text-6xl font-semibold">Next.js Dark Mode</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eius, quia. Debitis repellendus quia repudiandae aspernatur,
                    ullam a molestiae voluptate harum? Nemo illo dignissimos
                    sunt molestiae culpa reprehenderit veniam in sapiente.
                </p>

                <div>
                    <Button>Button 1</Button>
                    <Button variant="secondary">Button 2</Button>
                </div>

                <ThemeToggle />
            </div>

            <div className="text-red-500 dark:text-green-400">
                <p>theme</p>
                <p className="font-iran-yekan-x">سلام</p>
            </div>
        </div>
    );
}

export default RootPage;
