import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="items-center justify-center flex mt-40 text-4xl border-b-2">
        <Link href="../week8/shopping-list
        ">
          Click here to go to Week 8 Shopping List
        </Link>
      </div>
    </main>
  );
}
