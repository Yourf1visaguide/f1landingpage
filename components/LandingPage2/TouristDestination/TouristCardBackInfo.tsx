
function TouristCardBackInfo({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-white/60">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>

    </div>
  );
}

export default TouristCardBackInfo