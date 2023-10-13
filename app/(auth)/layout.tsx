import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

export const metadata ={
    title:"Threads Clone",
    descripton:"Next 13"
}

const basicFonts = Inter({subsets:["latin"]})

export default function RootLayout ({children}:{children:React.ReactNode}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${basicFonts.className} bg-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}