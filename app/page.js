
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
        <div>
          <p>Name: Tyler Le</p>
          <p>Course section: CPRG 306 D</p>
          <p>
            <a href="https://github.com/TylerTLe">https://github.com</a>
            <ul>
              <li>
                <a href="week2">Week 2</a>
              </li>
              <li>
                <a href="week3">Week 3</a>
              </li>
              <li>
                {/* Inset week4 when needed */}
                <a href="#">Week 4</a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </main>
  );
}
