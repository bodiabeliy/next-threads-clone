import { StaticImport } from "next/dist/shared/lib/get-img-props";
import * as NImage from "next/image"
import { FC } from "react";

const NextImage = NImage.default

interface ImageProps {
    image:string| StaticImport;
    width:number;
    height:number;
    altText:string;
    descriprionText?:string
    imageClassName?:string;
    descriptionClassName?:string
}

const Image:FC<ImageProps> = (props) => {
    const {image, width, height, altText, descriprionText, imageClassName, descriptionClassName} = props
    return (
    <>
        <NextImage 
            className={imageClassName} 
            src={image} 
            width={width}
            height={height}
            alt={altText} 
        />
        {descriprionText && <p className={descriptionClassName}>{descriprionText}</p>}
    </> 
    );
}
 
export default Image;