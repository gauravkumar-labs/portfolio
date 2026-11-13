import { IMPACT_METRICS } from '../data/portfolioData';

export default function ImpactMetricsBar() {
  return (
    <section id="impact" aria-label="Engineering Impact Metrics" className="border-b border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_METRICS.map((metric) => (
            <article
              key={metric.id}
              className="flex flex-col justify-between rounded-xl border border-zinc-800/90 bg-zinc-900/60 p-5 transition-colors duration-150 hover:border-zinc-700"
            >
              <div>
                <p
                  className={`font-mono text-2xl font-semibold tracking-tight tabular-nums ${
                    metric.accent === 'amber' ? 'text-amber-400' : 'text-cyan-400'
                  }`}
                >
                  {metric.figure}
                </p>
                <h2 className="mt-2 font-display text-base font-semibold text-zinc-100 leading-snug">
                  {metric.title}
                </h2>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{metric.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
