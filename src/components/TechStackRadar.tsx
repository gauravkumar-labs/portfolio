import { useMemo, useState } from 'react';
import {
  RADAR_AXES,
  SKILL_CATEGORIES,
  SKILLS,
  type RadarAxis,
  type SkillCategory,
} from '../data/portfolioData';

const CENTER = 160;
const MAX_RADIUS = 108;
const RINGS = [0.25, 0.5, 0.75, 1];

function getPoint(angleIndex: number, total: number, ratio: number) {
  const angle = -Math.PI / 2 + (angleIndex * 2 * Math.PI) / total;
  return {
    x: CENTER + MAX_RADIUS * ratio * Math.cos(angle),
    y: CENTER + MAX_RADIUS * ratio * Math.sin(angle),
  };
}

export default function TechStackRadar() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('All');
  const [activeAxisId, setActiveAxisId] = useState<string>(RADAR_AXES[0].id);

  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'All') return SKILLS;
    return SKILLS.filter((skill) => skill.category === selectedCategory);
  }, [selectedCategory]);

  const activeAxis: RadarAxis = useMemo(() => {
    return RADAR_AXES.find((axis) => axis.id === activeAxisId) ?? RADAR_AXES[0];
  }, [activeAxisId]);

  const polygonPoints = useMemo(() => {
    return RADAR_AXES.map((axis, idx) => {
      const pt = getPoint(idx, RADAR_AXES.length, axis.score / 100);
      return `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
    }).join(' ');
  }, []);

  const handleAxisClick = (axis: RadarAxis) => {
    setActiveAxisId(axis.id);
    setSelectedCategory(axis.category);
  };

  return (
    <section id="tech-stack" className="border-b border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        {/* Section Header + Segmented Filter Bar */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium tracking-wide text-cyan-400">
              01. Capabilities &amp; Stack Matrix
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl [text-wrap:balance]">
              Interactive Tech Stack &amp; Capability Radar
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              Filter production skills by architectural domain or select a radar dimension to inspect core depth.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter skills by engineering domain"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/70 p-1.5"
          >
            {SKILL_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setSelectedCategory(category);
                    if (category !== 'All') {
                      const matchingAxis = RADAR_AXES.find((a) => a.category === category);
                      if (matchingAxis) setActiveAxisId(matchingAxis.id);
                    }
                  }}
                  className={`min-h-[36px] rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isSelected
                      ? 'bg-cyan-400 text-zinc-950 font-semibold'
                      : 'text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-100'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Two-Column Split: Capability Radar + Filterable Skills Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left: Interactive Capability Radar */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 lg:col-span-5">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-zinc-100">
                  Engineering Capability Radar
                </h3>
                <p className="text-xs text-zinc-400">Click any axis node to filter matching skills</p>
              </div>
              <span className="font-mono text-xs text-zinc-400 tabular-nums">
                {filteredSkills.length} / {SKILLS.length} skills
              </span>
            </div>

            <div className="mt-4 flex justify-center">
              <svg
                viewBox="0 0 320 320"
                className="h-auto w-full max-w-[320px]"
                role="img"
                aria-label="Hexagonal capability radar covering .NET Core, AWS Cloud, Distributed Systems, Data Layer, DevOps, and GenAI"
              >
                {/* Concentric Reference Rings */}
                {RINGS.map((ring) => {
                  const ringPoints = RADAR_AXES.map((_, idx) => {
                    const pt = getPoint(idx, RADAR_AXES.length, ring);
                    return `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
                  }).join(' ');
                  return (
                    <polygon
                      key={ring}
                      points={ringPoints}
                      fill="none"
                      stroke="currentColor"
                      className="text-zinc-800"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Axis Spokes */}
                {RADAR_AXES.map((axis, idx) => {
                  const end = getPoint(idx, RADAR_AXES.length, 1);
                  const isHighlighted =
                    activeAxis.id === axis.id ||
                    (selectedCategory !== 'All' && axis.category === selectedCategory);
                  return (
                    <line
                      key={axis.id}
                      x1={CENTER}
                      y1={CENTER}
                      x2={end.x}
                      y2={end.y}
                      stroke="currentColor"
                      className={isHighlighted ? 'text-cyan-500/60' : 'text-zinc-800'}
                      strokeWidth={isHighlighted ? '1.5' : '1'}
                    />
                  );
                })}

                {/* Filled Capability Polygon */}
                <polygon
                  points={polygonPoints}
                  fill="rgba(34, 211, 238, 0.14)"
                  stroke="#22d3ee"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                {/* Interactive Vertex Nodes & Labels */}
                {RADAR_AXES.map((axis, idx) => {
                  const nodePt = getPoint(idx, RADAR_AXES.length, axis.score / 100);
                  const labelPt = getPoint(idx, RADAR_AXES.length, 1.24);
                  const isActive = activeAxis.id === axis.id;
                  const isCategoryMatch =
                    selectedCategory !== 'All' && axis.category === selectedCategory;

                  return (
                    <g
                      key={axis.id}
                      className="cursor-pointer"
                      onClick={() => handleAxisClick(axis)}
                      onMouseEnter={() => setActiveAxisId(axis.id)}
                    >
                      <circle
                        cx={nodePt.x}
                        cy={nodePt.y}
                        r={isActive ? 6 : 4.5}
                        fill={isActive || isCategoryMatch ? '#f59e0b' : '#22d3ee'}
                        stroke="#09090b"
                        strokeWidth="2"
                      />
                      <text
                        x={labelPt.x}
                        y={labelPt.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className={`fill-current text-[11px] font-medium transition-colors ${
                          isActive || isCategoryMatch ? 'text-zinc-100 font-semibold' : 'text-zinc-400'
                        }`}
                      >
                        {axis.shortLabel}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Active Axis Readout separated by hairline divider */}
            <div className="mt-4 border-t border-zinc-800/80 pt-4">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-display text-sm font-semibold text-zinc-100">
                  {activeAxis.label}
                </span>
                <span className="font-mono text-sm font-semibold text-amber-400 tabular-nums">
                  {activeAxis.score} / 100
                </span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{activeAxis.summary}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
                <span>Domain · {activeAxis.category}</span>
                {selectedCategory !== 'All' && (
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('All')}
                    className="font-medium text-cyan-400 hover:text-cyan-300 focus-visible:outline-none focus-visible:underline"
                  >
                    Show all domains
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right: Filterable Skills Matrix Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {filteredSkills.map((skill) => {
                const isAmberDomain =
                  skill.category === 'AWS Cloud & DevOps' ||
                  skill.category === 'AI & Modern Workflows';

                return (
                  <article
                    key={`${skill.category}-${skill.name}`}
                    className="flex flex-col justify-between rounded-xl border border-zinc-800/90 bg-zinc-900/45 p-4 transition-colors duration-150 hover:border-zinc-700 hover:bg-zinc-900/80"
                  >
                    <div>
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-base font-semibold text-zinc-100">
                          {skill.name}
                        </h3>
                        <span
                          className={`font-mono text-[11px] font-medium shrink-0 ${
                            isAmberDomain ? 'text-amber-400/90' : 'text-cyan-400/90'
                          }`}
                        >
                          {skill.proficiency}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">{skill.focus}</p>
                    </div>

                    <div className="mt-3 flex items-center gap-2 border-t border-zinc-800/70 pt-2.5 text-[11px] text-zinc-500">
                      <span>{skill.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-zinc-400">{skill.yearsOrContext}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
