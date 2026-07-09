import React from "react";
import Lightbox, { Slide } from "yet-another-react-lightbox";
import { Captions, Counter, Fullscreen, Thumbnails, Zoom, Download, Inline, Share, Slideshow, Video } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

interface CustomLightBoxProps {
    images: {
        src: string,
        title?: string,
        description?: string
        width?: number
        height?: number
    } | {
        src: string,
        title?: string,
        description?: string
        width?: number
        height?: number
    }[],
    open: boolean,
    onClose: () => void,
}
export default function CustomLightBox({
    images,
    open,
    onClose,
}: CustomLightBoxProps) {
    const slides: Slide[] = (
        Array.isArray(images) ? images : [images]
    ).map((image) => ({
        src: image.src,
        width: image.width,
        height: image.height,
        thumbnail: image.src,
        title: image.title,
        description: image.description,
    }));

    return (
        <Lightbox
            open={open}
            close={onClose}
            slides={slides}
            plugins={[
                Captions,
                Counter,
                Download,
                Fullscreen,
                Share,
                Slideshow,
                Thumbnails,
                Zoom,
            ]}
            captions={{
                hidden: false,
                showToggle: true,
                descriptionTextAlign: "start",
                descriptionMaxLines: 10,
            }}
            counter={{
                container: {
                    style: {
                        top: "16px",
                        left: "16px",
                    },
                },
            }}
            fullscreen={{
                auto: false,
            }}
            share={{
                share: () => { },
            }}
            slideshow={{
                autoplay: false,
                delay: 3000,
            }}
            thumbnails={{
                showToggle: true,
                position: "bottom",
                width: 120,
                height: 70,
                border: 2,
                borderRadius: 8,
                padding: 4,
                gap: 8,
                vignette: true,
            }}
            zoom={{
                maxZoom: 20,
                maxZoomPixelRatio: 5,
                zoomInMultiplier: 2,
                scrollToZoom: true,
                keyboardMoveDistance: 50,
                wheelZoomDistanceFactor: 120,
                pinchZoomDistanceFactor: 120,
                doubleTapDelay: 300,
                doubleClickDelay: 300,
            }}
        />
    )
}