import Image from "next/image";
import Head from 'next/head'
import Link from 'next/link'
import colors from '../../data/colors.json'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <Head>
        <title>Colors!</title>
        <meta name="description" content="App that displays pretty colors to learn Next!" />
      </Head>
      
      {colors.map(color => (
        <Link href={`/${color.name}`}>
          <h2>{color.name}</h2>
        </Link>
      ))}
      
      </main>
    </div>
  );
}
