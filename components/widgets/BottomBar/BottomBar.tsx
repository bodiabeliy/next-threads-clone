"use client"
import { sidebarLinks } from "@/constants";
import BottomBarLinkItem from "../BottomBarLinkItem/BottomBarLinkItem";

const BottomBar = () => {
    return ( 
    <>
        <div className="bottombar">
            <div className="bottombar_container">
            {sidebarLinks.map(link => (
                    <BottomBarLinkItem imgURL={link.imgURL} label={link.label} route={link.route} />
                ))}
            </div>
        </div>
    </> );
}
 
export default BottomBar;