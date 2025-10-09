import Image from "next/image";

interface PointPhotosProps {
    photos: string[];
    className?: string;
}

function toHttps(u?: unknown): string | undefined {
    if (u == null) return undefined;
    if (typeof u === "object" && u && "url" in u) {
        u = (u as { url: unknown }).url;
    }
    if (typeof u !== "string") return undefined;
    return u.replace(/^http:\/\//, "https://");
}

export function PointPhotos({ photos, className = "" }: PointPhotosProps) {
    return (
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
            {photos.map((photo, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                        src={toHttps(photo) || '/no_user.png'}
                        alt={`Point photo ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                </div>
            ))}
        </div>
    )
}

export default PointPhotos;