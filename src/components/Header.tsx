import { Logo } from "./Logo";

export function Header() {
    return (
        <header
            className="w-full h-[200px] py-5 flex flex-1 items-center justify-center bg-gray-700 border-b border-gray-600">
            <Logo />
        </header>
    )
}