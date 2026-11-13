import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';

export default function CaseStudiesSection() {
  const [expandedIds, setExpandedIds] = useState<string[]>(['legacy-dotnet-eks']);

  const toggleCaseStudy = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="case-studies" className="border-b border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium tracking-wide text-amber-400">
              02. System Design &amp; Modernization
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl [text-wrap:balance]">
              Engineering Case Studies
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              Production .NET and AWS architectures detailing problem constraints, engineering trade-offs, and measurable outcomes.
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              setExpandedIds((prev) =>
                prev.length === CASE_STUDIES.length ? [] : CASE_STUDIES.map((cs) => cs.id)
              )
            }
            className="self-start sm:self-auto min-h-[40px] rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {expandedIds.length === CASE_STUDIES.length ? 'Collapse All' : 'Expand All Studies'}
          </button>
        </div>

        <div className="mt-10 space-y-5">
          {CASE_STUDIES.map((study) => {
            const isExpanded = expandedIds.includes(study.id);

            return (
              <article
                key={study.id}
                className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-colors duration-150 hover:border-zinc-700/90"
              >
                {/* Header Row / Expand Trigger */}
                <button
                  type="button"
                  onClick={() => toggleCaseStudy(study.id)}
                  aria-expanded={isExpanded}
                  className="flex w-full flex-col gap-5 p-6 text-left transition-colors hover:bg-zinc-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
                      <span className="font-mono font-semibold text-cyan-400 tabular-nums">
                        Case Study {study.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-zinc-400">{study.stack.join(' · ')}</span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl [text-wrap:balance]">
                      {study.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{study.subtitle}</p>
                  </div>

                  <div className="flex items-center justify-between gap-6 border-t border-zinc-800/80 pt-4 lg:border-t-0 lg:pt-0 lg:shrink-0">
                    <div className="lg:text-right">
                      <p className="font-mono text-lg font-semibold text-amber-400 tabular-nums">
                        {study.headlineMetric}
                      </p>
                      <p className="text-xs text-zinc-400">{study.metricContext}</p>
                    </div>

                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-300 shrink-0">
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-cyan-400' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </button>

                {/* Expanded Architecture Breakdown */}
                {isExpanded && (
                  <div className="border-t border-zinc-800/90 bg-zinc-950/60">
                    {/* Problem / Architectural Trade-offs / Measurable Impact */}
                    <div className="grid grid-cols-1 divide-y divide-zinc-800/80 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                      <div className="p-6">
                        <h4 className="font-display text-sm font-semibold text-zinc-100">
                          Problem Statement
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{study.problem}</p>
                      </div>

                      <div className="p-6">
                        <h4 className="font-display text-sm font-semibold text-cyan-400">
                          Architectural Trade-offs
                        </h4>
                        <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-zinc-300">
                          {study.tradeoffs.map((item, idx) => (
                            <li key={idx} className="flex gap-2.5">
                              <span className="font-mono text-xs text-zinc-500 mt-0.5 tabular-nums">
                                0{idx + 1}
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-6">
                        <h4 className="font-display text-sm font-semibold text-amber-400">
                          Measurable Impact
                        </h4>
                        <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-zinc-300">
                          {study.impact.map((item, idx) => (
                            <li key={idx} className="flex gap-2.5">
                              <span className="font-mono text-xs text-amber-400/80 mt-0.5 tabular-nums">
                                +
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* System Topology Flow Bar (hairline-separated, no nested boxed cards) */}
                    <div className="border-t border-zinc-800/80 px-6 py-5">
                      <p className="font-mono text-xs font-medium text-zinc-400">
                        Reference Execution Flow
                      </p>
                      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {study.topology.map((node, index) => (
                          <div key={node.step} className="flex items-start justify-between gap-2">
                            <div>
                              <span className="font-mono text-[11px] text-cyan-400 tabular-nums">
                                Step {node.step}
                              </span>
                              <p className="mt-0.5 font-display text-sm font-semibold text-zinc-100">
                                {node.service}
                              </p>
                              <p className="text-xs text-zinc-400">{node.role}</p>
                            </div>
                            {index < study.topology.length - 1 && (
                              <ChevronRight
                                className="mt-4 hidden h-4 w-4 text-zinc-600 lg:block shrink-0"
                                aria-hidden="true"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
