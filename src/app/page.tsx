import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">

        <div className="text-9xl font-bold mb-4 animate-bounce">
          <h1>Natour</h1>
        </div>

        <div className="animate-spin">
          <div className="animate-ping">
            <Image
              src="/me.gif"
              alt="Natour Logo"
              width={200}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
