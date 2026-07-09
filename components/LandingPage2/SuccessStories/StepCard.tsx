import Image from "next/image";

function StepCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden shadow-sm">

      <div className="bg-red-600 px-4 py-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-white">
          {title}
        </p>
      </div>

      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default StepCard