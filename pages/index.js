import Head from 'next/head'
import { signIn, signOut, useSession } from "next-auth/client"

import TimerContainer from '../components/timerContainer'
import SignIn from '../components/signIn'
import Button from '../components/button'
 
export default function Page() {
  if ("Notification" in window) {
    Notification.requestPermission();
  }
  const [session, loading] = useSession();

  return (
      <div className="flex flex-col items-center justify-center">
      {/* Non tailwind would look like this <div className={styles.container}>*/}
      <Head>
        <title>Zeppi Tomato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className="flex flex-col items-center justify-between min-h-screen min-w-full relative bg-black">
            <SignIn loggedIn={session} />
            <TimerContainer loggedIn={session}/>
            {/*{session && (*/}
            {/*    <ModeButtons />*/}
            {/*)}*/}
            <div className="flex justify-between w-full p-1 md:w-96 text-green-400">
              <Button type="text" text={"Timer"} className={"flex-grow"}>Timer</Button>
              <Button type="text" text={"Stats"} className={"flex-grow"}>Stats</Button>
            </div>
        </main>
      </div>
  )
}
