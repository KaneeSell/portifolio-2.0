import Image, { StaticImageData } from "next/image";
import { FaExpand } from "react-icons/fa";
import CustomLightBox from "../lightbox/CustomLightBox";
import { Fragment, useEffect, useState } from "react";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { IoMdPhotos } from "react-icons/io";

export default function CustomImage({
    alt,
    img,
    className,
    galery,
    onClick
}: {
    alt: string,
    img: {
        src: string;
        title?: string;
        description?: string;
        height?: number;
        width?: number;
    },
    galery?: {
        src: string;
        title?: string;
        description?: string;
        height?: number;
        width?: number;
    }[],
    className?: string,
    onClick?: () => void
}) {
    const [imgOpen, setImgOpen] = useState<boolean>(false);
    const [galeryOpen, setGaleryOpen] = useState<boolean>(false);
    const { setLock } = useLockBodyScroll(false)

    useEffect(() => {
        if (imgOpen) {
            setLock(true)
        } else {
            setLock(false)
        }
    }, [imgOpen])

    return (
        <div className="box w-full flex-col gap-0">
            <div onClick={() => setImgOpen(true)} className="relative group/img text-white flex justify-center items-center cursor-pointer border-3 rounded-xl border-transparent hover:border-white light:hover:border-blue-800">
                <img
                    alt={alt}
                    src={img.src}
                    className={`w-full h-auto rounded-lg hover:cursor-pointer ${className}`}

                />
                <FaExpand className="hidden group-hover/img:flex absolute size-8" />
                <p className="hidden group-hover/img:flex absolute bottom-0 font-bold font-serif shadow-2xs text-xl">
                    Ver imagem
                </p>
                <CustomLightBox
                    open={imgOpen}
                    images={img}
                    onClose={() => setImgOpen(false)}
                />
            </div>
            {galery && (
                <Fragment>
                    <CustomLightBox
                        open={galeryOpen}
                        images={galery}
                        onClose={() => setGaleryOpen(false)}
                    />
                    <button
                        onClick={() => setGaleryOpen(true)}
                        className="btn w-full py-1 secondary text-sm ">
                        Galeria de imagens
                        <IoMdPhotos />
                    </button>
                </Fragment>
            )}
        </div>

    )
}