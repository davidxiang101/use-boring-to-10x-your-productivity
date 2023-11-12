import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Boring Games for Focus</h1>
        <p className="mb-8 text-lg">
          Reset your focus with simple, slow-paced games. Ideal for study breaks to refresh your mind.
        </p>
        <Link href="/game" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Play
        </Link>
      </div>
    </main>
  );
}
