import Link from "@/components/shared/Link/Link";
import Image from "@/components/shared/Image/Image"
import Logo from "@/public/logo-2.png"
import LogoutImage from "@/public/assets/logout.svg"

import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
const TopBar = () => {
    return ( 
    <>
    <nav className="topbar">
        <Link href={"/"} className={"flex items-center gap-4"} 
        data={
        <Image 
            image={Logo} 
            width={50} 
            height={50} 
            altText={"Threads Clone"} 
            descriptionClassName={"text-heading3-bold text-light-1 max-xs:hidden"} 
            descriprionText="Threads Clone"
        />} 
        />
        <div className="flex items-center gap-1">
            <div className="block md:hidden"> 
                <div className="flex cursor-pointer"> 
                    <SignedIn>
                        <SignOutButton>
                            <div className="flex cursor-pointer gap-4 p-4">
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
              
            </div>
            <OrganizationSwitcher 
                appearance={{ 
                    elements: { 
                    organizationSwitcherTrigger: "py-2 px-4"  
                } 
            }}
            />
        </div>
    </nav>
    </> );
}
 
export default TopBar;