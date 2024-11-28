import Image from "next/image";

export default function Avatar({ src, alt, size = 40 }: { src: string; alt: string; size?: number }) {
    return (
        <div
            className="rounded-full overflow-hidden border border-gray-300"
            style={{ width: size, height: size }}
        >
            <Image src={src} alt={alt} width={size} height={size} className="object-cover" />
        </div>
    );
}
