import HeroSlider from "./HeroSectionSlider";

function HeroRight() {
  return (
    <div className="relative lg:col-span-4">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10">
        <HeroSlider />
        {/* Subtle red accent bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-red-600" />
      </div>

      {/* Floating Badge - Visa Approved */}
      {/* <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <CheckCircle2
              className="h-6 w-6 text-green-600"
              fill="currentColor"
            />
          </div>
          <div>
            <div className="font-semibold text-[#0F172A] text-sm">
              Visa Approved!
            </div>
            <div className="text-xs text-slate-600">USA Visa — 36,000/-</div>
          </div>
        </div>
      </div> */}

      {/* Floating Badge - Universities */}
      {/* <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
            <span className="text-xl">🎓</span>
          </div>
          <div>
            <div className="font-semibold text-[#0F172A] text-sm">
              1,000+ Universities
            </div>
            <div className="text-xs text-slate-600">SEVP-Approved Schools</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default HeroRight;
