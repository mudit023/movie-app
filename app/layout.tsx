import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Movie",
  description: "It's a movie app generated using Next13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white flex flex-col justify-center items-center`}
      >
        <nav className="flex justify-between items-center px-[2.5vw] py-[1.5vh] fixed top-0 bg-[#050505] w-full text-white">
          <p className="flex-[1]">
            <b>Logo</b>
          </p>
          <ul className="flex items-center justify-between gap-3 flex-[1] text-xs">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/best"}>Top Rated</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="flex flex-col gap-3 px-[2.5vw] py-[1.5vh] bg-[#050505] text-xs justify-center items-center text-white w-full">
          <p>
            Made by{" "}
            <a
              href="https://twitter.com/muditwt"
              target="_blank"
              className="underline"
            >
              Mudit
            </a>{" "}
            to learn <b>Next13</b>
          </p>
          <p>
            Check out this{" "}
            <a
              href="https://www.youtube.com/watch?v=T63nY70eZF0"
              className="underline"
            >
              tutorial
            </a>{" "}
            by @
            <a href="https://twitter.com/developedbyed" className="underline">
              developedbyed
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
