import { ModeToggle } from "@/components/ModeToggle";

export function Navbar() {
  return (
    <nav className="w-full border-b bg-white dark:bg-black border-gray-200 dark:border-gray-800">
      <div className="flex h-16 items-center px-4">
        <div className="flex flex-row items-center gap-2">
          <h1 className="text-xl font-bold text-black dark:text-white">
            X-DMS
          </h1>
          <p className="text-xl text-red-500 font-bold">CONCEPT</p>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
