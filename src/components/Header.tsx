import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full flex items-center justify-center pt-16 pb-20 bg-gray-700">
      <h1 className="color-blue-500">
        <Logo />
      </h1>
    </header>
  )
}