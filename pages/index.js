import Head from 'next/head'
import { signIn, signOut, useSession } from "next-auth/react"

import TimerContainer from '../components/timerContainer'
import SignIn from '../components/signIn'
import Button from '../components/button'
 
export default function Page() {
  if (typeof window !== "undefined" && "Notification" in window) {
    Notification.requestPermission();
  }
  const { data: session } = useSession();

  return (
      <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Zeppi Tomato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className="flex flex-col items-center justify-between min-h-screen min-w-full relative bg-black">
            <SignIn loggedIn={session} />
            <TimerContainer loggedIn={session}/>
            <div className="flex justify-between w-full p-1 md:w-96 text-green-400">
              <Button type="text" text={"Timer"} className={"flex-grow"}>Timer</Button>
              <Button type="text" text={"Stats"} className={"flex-grow"}>Stats</Button>
            </div>
        </main>
      </div>
  )
}
