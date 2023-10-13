import { SignUp } from "@clerk/nextjs";

export default async function SignUpPage({children, params}:any) {
    return (
        <>
            <SignUp />
        </>
    )
} 