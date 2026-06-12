import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PartnerTicker from './components/PartnerTicker'
import CoreSystems from './components/CoreSystems'
import ConnectedEcosystem from './components/ConnectedEcosystem'
import MissionControl from './components/MissionControl'
import OmnichainAdvantage from './components/OmnichainAdvantage'
import SettlementStream from './components/SettlementStream'
import StrategicMandate from './components/StrategicMandate'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-on-surface)]">
      <Navbar />
      <main>
        <Hero />
        <PartnerTicker />
        <CoreSystems />
        <ConnectedEcosystem />
        <MissionControl />
        <OmnichainAdvantage />
        <SettlementStream />
        <StrategicMandate />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
