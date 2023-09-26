import Link from "next/link";
import link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-t from-gray-700 via-gray-900 to-black">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
        <div>
          <p>Name: Tyler Le</p>
          <p>Course section: CPRG 306 D</p>
          <div>
            <a href="https://github.com/TylerTLe">https://github.com</a>
            <ul>
              <li>
                <Link href="week2">Week 2</Link>
              </li>
              <li>
                <Link href="week3">Week 3</Link>
              </li>
              <li>
                {/* Inset week4 when needed */}
                <Link href="#">Week 4</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
