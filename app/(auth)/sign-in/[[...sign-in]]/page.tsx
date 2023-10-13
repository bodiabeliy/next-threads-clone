import { SignIn } from "@clerk/nextjs";



export default async function SignInPage({children, params}:any) {
    return (
        <SignIn />
    )
} 