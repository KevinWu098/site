import Image, { ImageProps } from "next/image";

interface MdxImageProps extends ImageProps {
    caption?: string;
}

export function MdxImage({ caption, ...props }: MdxImageProps) {
    return (
        <div className="mx-auto my-8 max-w-[300px] space-y-3 text-center">
            <Image
                {...props}
                alt={props?.alt ?? props?.src}
                width={300}
                height={480}
                className="my-0 border border-custom-muted/20"
            />
            <p className="my-0 text-pretty text-sm">{caption}</p>
        </div>
    );
}
