import Image, { ImageProps } from "next/image";

interface MdxImageProps extends ImageProps {
    caption?: React.ReactNode | string;
}

export function MdxImage({ caption, ...props }: MdxImageProps) {
    return (
        <div className="mx-auto my-8 flex max-h-[480px] flex-col items-center space-y-3 text-center">
            <Image
                {...props}
                alt={props?.alt ?? props?.src}
                width={props.width ?? 1280}
                height={props.height ?? 480}
                className="my-0 max-h-[480px] w-fit border border-custom-muted/20 object-contain"
            />
            <div className="my-0 text-pretty text-sm">{caption}</div>
        </div>
    );
}
