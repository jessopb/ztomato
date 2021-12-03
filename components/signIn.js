import { signIn, signOut, useSession } from "next-auth/react"
import Button from './button';
export default function SignIn(props){
    const { data: session } = useSession();
    return (
        <div className="flex items-center justify-between md:justify-end space-x-1 text-gray-700 p-1 w-full md:w-96">
            {!session && (
                <>
                    <Button type="text" text="Sign In" onClick={() => signIn()} />
                </>
            )}
            {session && (
                <>
                    <span>Signed in as {session.user.email || session.user.name}{' '}</span>
                    <Button type="text" text="Sign Out" onClick={() => signOut()} />
                </>
            )}
        </div>

    )
}
