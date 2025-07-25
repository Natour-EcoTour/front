import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-center">Natour</h1>

      <div className="flex justify-center">
        <Image
          src="/me.gif"
          alt="Description of image"
          width={500}
          height={500}
        />
      </div>

    </div>
  );
}
