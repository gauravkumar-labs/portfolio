/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CaseStudiesSection from './components/CaseStudiesSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ImpactMetricsBar from './components/ImpactMetricsBar';
import LiveLabsSection from './components/LiveLabsSection';
import Navbar from './components/Navbar';
import TechStackRadar from './components/TechStackRadar';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main>
        <HeroSection />
        <ImpactMetricsBar />
        <TechStackRadar />
        <CaseStudiesSection />
        <LiveLabsSection />
      </main>
      <Footer />
    </div>
  );
}
