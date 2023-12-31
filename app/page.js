import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 bg-gradient-to-t from-gray-700 via-gray-900 to-black">
      <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
      <div className=" items-center justify-between font-mono text-sm">
        <div>
          <StudentInfo />
          <div>
            <ul>
              <li>
                <Link href="week2">Week 2</Link>
              </li>
              <li>
                <Link href="week3">Week 3</Link>
              </li>
              <li>
                <Link href="week4">Week 4</Link>
              </li>
              <li>
                <Link href="week5">Week 5</Link>
              </li>
              <li>
                <Link href="week6">Week 6</Link>
              </li>
              <li>
                <Link href="week7">Week 7</Link>
              </li>
              <li>
                <Link href="week8">Week 8</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
