import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import Lightbox from "yet-another-react-lightbox";

interface CustomLightBoxProps {
    images: StaticImageData[],
    open: boolean,
    onClose: () => void,
}
export default function CustomLightBox({
    images,
    open,
    onClose,
}: CustomLightBoxProps) {

    return (
        <Lightbox
            open={open}
            close={() => onClose()}
            slides={images}
            render={{
                buttonPrev:
                    Array.isArray(images) && images.length <= 1
                        ? () => null
                        : undefined,
                buttonNext:
                    Array.isArray(images) && images.length <= 1
                        ? () => null
                        : undefined,
            }}
        />
    )
}