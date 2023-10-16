import * as NLink from "next/link";
import { FC } from "react";

const NextLink =NLink.default

interface LinkProps {
    href:string
    data:string| React.ReactNode;
    className?:any
}

const Link:FC<LinkProps> = (props) => {
    const {href, data, className} = props
    return ( 
        <NextLink className={className} href={href} children={data}/>
     );
}
 
export default Link;