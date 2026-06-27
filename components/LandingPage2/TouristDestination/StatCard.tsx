
function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className=" rounded-2xl bg-white/10 p-3 text-center backdrop-blur ">
      <div className=" mb-2 flex justify-center ">{icon}</div>

      <p className=" text-[11px] uppercase tracking-wider text-white/60 ">
        {title}
      </p>

      <p className=" mt-1 font-semibold text-sm ">{value}</p>
    </div>
  );
}

export default StatCard