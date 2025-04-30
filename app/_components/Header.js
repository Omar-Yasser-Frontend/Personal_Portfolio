import Link from "next/link";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="container mx-auto flex h-[60px] items-center justify-between px-4">
        <h2>
          <Link className="title bg-clip-text text-xl font-bold" href={"/"}>
            &lt;OMAR /&gt;
          </Link>
        </h2>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
