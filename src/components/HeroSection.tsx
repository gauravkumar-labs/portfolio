import { ArrowUpRight, Layers, Server } from 'lucide-react';
import { useState } from 'react';
import heroArchImg from '../assets/images/hero_cloud_architecture_1794535325163.jpg';
import { SOCIAL_LINKS } from '../data/portfolioData';

export default function HeroSection() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="top" className="border-b border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-10 lg:pt-16 lg:pb-14">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Executive Typography & Primary Actions */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-sm font-medium tracking-wide text-cyan-400">
                Senior Software Engineer · .NET &amp; AWS Cloud · 15+ Years Experience
              </p>

              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl [text-wrap:balance]">
                Gaurav Kumar
              </h1>

              <p className="mt-4 font-display text-xl font-medium text-zinc-300 sm:text-2xl [text-wrap:balance]">
                Architecting resilient, high-throughput .NET microservices on AWS and modern GenAI workflows.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400">
                Over 15 years of hands-on engineering leadership turning complex legacy platforms into
                observable, fault-tolerant distributed systems. Focused on C# / .NET 8–9, serverless and
                containerized AWS architectures, event-driven reliability, and enterprise-safe RAG integration.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors duration-150 hover:bg-cyan-300 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <span>GitHub · gauravkumar-labs</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/80 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition-colors duration-150 hover:border-amber-400/60 hover:text-amber-300 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Matching-height Architectural Visual */}
          <div className="lg:col-span-5 flex">
            <div className="relative flex w-full flex-col justify-end overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 min-h-[280px] lg:min-h-full">
              {!imgFailed ? (
                <img
                  src={heroArchImg}
                  alt="Isometric architectural visualization of distributed cloud nodes and high-throughput data conduits"
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-slate-900 to-zinc-950 p-6 text-center">
                  <Server className="h-10 w-10 text-cyan-400/70" aria-hidden="true" />
                  <p className="mt-3 text-sm font-medium text-zinc-300">
                    Distributed .NET &amp; AWS Cloud Architecture
                  </p>
                </div>
              )}

              <div
                className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/35 to-transparent"
                aria-hidden="true"
              />

              <div className="relative z-10 border-t border-zinc-800/80 bg-zinc-950/80 px-5 py-4 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Layers className="h-4 w-4 text-amber-400 shrink-0" aria-hidden="true" />
                    <span className="truncate text-xs font-medium text-zinc-200">
                      Systems Focus: .NET 8/9 · ECS/Fargate · EventBridge · Semantic Kernel
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
