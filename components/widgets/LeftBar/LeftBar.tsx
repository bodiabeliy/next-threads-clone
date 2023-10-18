"use client"
import Image from "@/components/shared/Image/Image";
import { sidebarLinks } from "@/constants";
import LeftBarLinkItem from "../LeftBarLinkItem/LeftBarLinkItem";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import LogoutImage from "@/public/assets/logout.svg"


const LeftBar = () => {
    const router = useRouter();

    return ( 
    <>
        <section className="custom-scrollbae leftsidebar">
            <div className="flex flex-col w-full flex-1 gap-6px-6">
                {sidebarLinks.map(link => (
                    <LeftBarLinkItem imgURL={link.imgURL} label={link.label} route={link.route} />
                ))}
            </div>
            <div className="">
            <SignedIn>
                <SignOutButton signOutCallback={() => router.push("/sign-in")}>
                    <div className="flex cursor-pointer gap-4 p-4 text-light-1">
                        <Image 
                            image={LogoutImage}
                            altText="logout"
                            width={24} 
                            height={24} 
                            descriprionText="Log out"
                        />
                    </div>
                </SignOutButton>
            </SignedIn>
            </div>
        </section>
    </> 
    );
}
 
export default LeftBar;