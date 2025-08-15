import Image from "next/image";

interface PointPhotosProps {
    photos: string[];
    className?: string;
}

export function PointPhotos({ photos, className = "" }: PointPhotosProps) {
    return (
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
            {photos.map((photo, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                        src={photo}
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