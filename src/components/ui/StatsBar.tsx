const StatsBar = () => {
  const stats = [
    { label: "Projects Delivered", value: "100+" },
    { label: "Client Retention Rate", value: "98%" },
    { label: "Industries Covered", value: "10+" },
    { label: "Countries, Global Footprint", value: "3+" },
  ];
  return (
    <div>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[120px] inset-x-0 h-[120px] bg-[#f8f9fe]"
      />

      {/* Stats Bar */}
      <section className="bg-[#f8f9fe] border-slate-200/80 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((st) => (
              <div key={st.label}>
                <span className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-indigo-600 block mb-1 font-['Plus_Jakarta_Sans']">
                  {st.value}
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-600 uppercase tracking-wider">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsBar;
