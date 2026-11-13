import { ArrowUpRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-zinc-100">Gaurav Kumar</p>
          <p className="mt-1 text-xs text-zinc-400">
            Senior Software Engineer · .NET, AWS Cloud &amp; Distributed Systems
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-400">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-cyan-400"
          >
            <span>GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-cyan-400"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <a
            href={SOCIAL_LINKS.labs}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-amber-400"
          >
            <span>gauravkumar-labs.vercel.app</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <span className="text-zinc-500">© {new Date().getFullYear()} Gaurav Kumar</span>
        </div>
      </div>
    </footer>
  );
}
