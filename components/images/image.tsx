"use client";
import React from "react";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

interface ImageProps {
    imagePath: string;
    width?: number;
    height?: number;
    alt: string;
    className?: string;
}

const Image: React.FC<ImageProps> = ({ imagePath, width, className, height, alt }) => {
    return (
        <IKImage
            urlEndpoint={urlEndpoint}
            path={imagePath}
            className={className}
            alt={alt}
            height={height}
            width={width}

            quality={100}

        />
    );
}

export default Image;
