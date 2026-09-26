import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExecutiveOverview from './components/ExecutiveOverview';
import PipelineArchitecture from './components/PipelineArchitecture';
import LiveSimulator from './components/LiveSimulator';
import PricingTiers from './components/PricingTiers';
import SecurityGovernance from './components/SecurityGovernance';
import ComparisonMatrix from './components/ComparisonMatrix';
import FAQSection from './components/FAQSection';
import GettingStartedRoadmap from './components/GettingStartedRoadmap';
import DirectContact from './components/DirectContact';
import BookingModal from './components/BookingModal';
import EmbedScriptModal from './components/EmbedScriptModal';
import Footer from './components/Footer';
import { Bot, MessageSquare } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isEmbedOpen, setIsEmbedOpen] = useState(false);
  const [showFloatingNotice, setShowFloatingNotice] = useState(true);

  return (
    <div style={{ minHeight: '100vh', background: '#090b10', color: '#f8fafc', position: 'relative' }}>
      {/* Navigation Header */}
      <Navbar 
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenEmbed={() => setIsEmbedOpen(true)}
      />

      {/* Hero Section */}
      <Hero 
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Executive Overview */}
      <ExecutiveOverview 
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* 3-Step Ingestion Pipeline & Architecture */}
      <PipelineArchitecture 
        onOpenEmbed={() => setIsEmbedOpen(true)}
      />

      {/* Interactive Live Agent Simulator & Sandbox */}
      <LiveSimulator 
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Pricing Tiers & ROI Calculator */}
      <PricingTiers 
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Security & Data Governance */}
      <SecurityGovernance />

      {/* Why Choose GenNeo AI Comparison Matrix */}
      <ComparisonMatrix 
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* FAQ Accordion */}
      <FAQSection 
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* 4-Step Getting Started Roadmap */}
      <GettingStartedRoadmap 
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenEmbed={() => setIsEmbedOpen(true)}
      />

      {/* Founder Direct Contact & Inquiry Form */}
      <DirectContact 
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Footer */}
      <Footer 
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenEmbed={() => setIsEmbedOpen(true)}
      />

      {/* Modals */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <EmbedScriptModal 
        isOpen={isEmbedOpen}
        onClose={() => setIsEmbedOpen(false)}
      />

      {/* Floating Widget Trigger Button (simulating the 1-Line Embed Widget on site) */}
      <div 
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '8px'
        }}
      >
        {showFloatingNotice && (
          <div 
            style={{
              background: 'rgba(18, 22, 34, 0.95)',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              borderRadius: '14px',
              padding: '0.75rem 1rem',
              color: '#ffffff',
              fontSize: '0.82rem',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              maxWidth: '280px'
            }}
          >
            <span>Test the floating 1-line agent widget preview!</span>
            <button 
              onClick={() => setShowFloatingNotice(false)}
              style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '0.8rem' }}
            >
              ✕
            </button>
          </div>
        )}

        <a
          href="#simulator"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)',
            cursor: 'pointer',
            border: '2px solid rgba(255,255,255,0.2)',
            textDecoration: 'none',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          title="Open GenNeo AI Agent Simulator"
        >
          <Bot size={28} />
        </a>
      </div>

    </div>
  );
}
