import Link from "@/components/shared/Link/Link";
import Image from "@/components/shared/Image/Image";
import { FC } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";


interface LeftBarLinkProps {
    imgURL:string;
    label:string;
    route:string
}

export const BottomBarLinkItem:FC<LeftBarLinkProps> = (props) => {
    const {imgURL, label, route} = props

    // const router = useRouter()
    const pathname = usePathname()
    const isActive = (pathname.includes(route) && route.length >1 || pathname == route)
    return ( 
        <div>
            <Link className={`bottombar_link ${isActive && "bg-primary-500"} flex flex-col items-center`} href={route} data={
                <>
                <Image 
                    image={imgURL} 
                    width={25} 
                    height={25}
                    altText={label} 
                    descriptionClassName="text-light-1 max-sm:hidden"
                    descriprionText={label}
                    />
                </>
            }></Link>
        </div>
     );
}
 
export default BottomBarLinkItem;