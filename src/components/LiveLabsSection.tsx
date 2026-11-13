import { ArrowUpRight, Layers, Terminal, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { LIVE_LABS, SOCIAL_LINKS, type LabTool } from '../data/portfolioData';

export default function LiveLabsSection() {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [selectedLab, setSelectedLab] = useState<LabTool | null>(null);

  useEffect(() => {
    if (!selectedLab) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedLab(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedLab]);

  return (
    <section id="labs" className="border-b border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium tracking-wide text-cyan-400">
              03. Open Engineering Sandbox
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl [text-wrap:balance]">
              Live Labs &amp; Demos
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              Interactive architecture utilities and developer tools being shipped at{' '}
              <a
                href={SOCIAL_LINKS.labs}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-cyan-400 underline decoration-cyan-500/40 underline-offset-4 hover:text-cyan-300"
              >
                gauravkumar-labs.vercel.app
              </a>
              .
            </p>
          </div>

          <a
            href={SOCIAL_LINKS.labs}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] items-center gap-1.5 self-start sm:self-auto rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-100 transition-colors hover:border-cyan-400/50 hover:text-cyan-300 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Visit gauravkumar-labs.vercel.app</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {LIVE_LABS.map((lab) => {
            const hasFailed = failedImages[lab.id];

            return (
              <article
                key={lab.id}
                className="flex flex-col justify-between overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-colors duration-150 hover:border-zinc-700"
              >
                <div>
                  {/* 16:9 Architectural Preview */}
                  <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-800 bg-zinc-900">
                    {!hasFailed ? (
                      <img
                        src={lab.image}
                        alt={lab.imageAlt}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({
                            ...prev,
                            [lab.id]: true,
                          }))
                        }
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-slate-900 to-zinc-950 p-6 text-center">
                        <Terminal className="h-8 w-8 text-cyan-400/70" aria-hidden="true" />
                        <p className="mt-2 text-sm font-medium text-zinc-300">{lab.title}</p>
                      </div>
                    )}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-3 left-5 right-5 flex items-center justify-between text-xs">
                      <span
                        className={`font-mono font-medium ${
                          lab.accent === 'amber' ? 'text-amber-300' : 'text-cyan-300'
                        }`}
                      >
                        {lab.stage}
                      </span>
                      <span className="font-mono text-zinc-300">gauravkumar-labs.vercel.app</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="text-xs text-zinc-400 font-mono">
                      {lab.stack.join(' · ')}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-zinc-50">
                      {lab.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-zinc-300">{lab.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{lab.description}</p>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex flex-wrap items-center gap-3 border-t border-zinc-800/80 px-6 py-4">
                  <a
                    href={lab.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-zinc-100 px-4 py-2 text-xs font-semibold text-zinc-950 transition-colors hover:bg-cyan-300 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <span>Launch on Labs</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedLab(lab)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <Layers className="h-3.5 w-3.5 text-cyan-400" aria-hidden="true" />
                    <span>Inspect Architecture Spec</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Specification Modal */}
      {selectedLab && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lab-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedLab(null)}
        >
          <div
            className="w-full max-w-xl rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <p className="font-mono text-xs text-cyan-400">{selectedLab.stage}</p>
                <h3
                  id="lab-modal-title"
                  className="mt-1 font-display text-xl font-semibold text-zinc-50"
                >
                  {selectedLab.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLab(null)}
                aria-label="Close specification modal"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <p className="text-sm leading-relaxed text-zinc-300">{selectedLab.description}</p>

              <div className="border-t border-zinc-800/80 pt-4">
                <h4 className="font-display text-sm font-semibold text-zinc-100">
                  Planned Interactive Capabilities
                </h4>
                <ul className="mt-2.5 space-y-2 text-sm text-zinc-400">
                  {selectedLab.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex gap-2.5">
                      <span className="font-mono text-xs text-amber-400 tabular-nums">
                        0{idx + 1}
                      </span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-zinc-800/80 pt-4 text-xs text-zinc-400 font-mono">
                Stack · {selectedLab.stack.join(' · ')}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3 border-t border-zinc-800 pt-4">
              <button
                type="button"
                onClick={() => setSelectedLab(null)}
                className="min-h-[40px] rounded-lg border border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-300 hover:text-zinc-100"
              >
                Close
              </button>
              <a
                href={selectedLab.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-cyan-400 px-4 py-2 text-xs font-semibold text-zinc-950 hover:bg-cyan-300"
              >
                <span>Open gauravkumar-labs.vercel.app</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
