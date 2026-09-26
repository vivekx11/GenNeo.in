import React from 'react';
import { 
  Rocket, 
  Calendar, 
  Database, 
  Sparkles, 
  Code2, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export default function GettingStartedRoadmap({ onOpenBooking, onOpenEmbed }) {
  const steps = [
    {
      stepNum: '01',
      title: 'Book a 15-minute Scoping Call',
      description: 'We review your site, documentation, PDFs, and goals to recommend the exact tier and architecture fit.',
      icon: Calendar,
      color: '#38bdf8'
    },
    {
      stepNum: '02',
      title: 'Kickoff & Ingestion Crawl',
      description: 'Crawlers begin pulling, stripping boilerplate nav/ads, creating semantic chunks with 15% overlap, and building your AES-256 vector store.',
      icon: Database,
      color: '#818cf8'
    },
    {
      stepNum: '03',
      title: 'Live Simulator Review',
      description: 'Test the agent live on your own site pre-launch to verify zero-hallucination accuracy, citations, and intent-to-action badges.',
      icon: Sparkles,
      color: '#c084fc'
    },
    {
      stepNum: '04',
      title: 'Go Live & Parity Sync',
      description: 'Deploy via 1-line JS embed tag. Continuous scheduled delta-syncing maintains parity with live site edits automatically.',
      icon: Code2,
      color: '#34d399'
    }
  ];

  return (
    <section 
      id="getting-started" 
      style={{ 
        padding: '5rem 0',
        position: 'relative'
      }}
      className="bg-grid-pattern"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge-pill badge-emerald" style={{ marginBottom: '0.75rem' }}>
            <Rocket size={14} /> Rapid Turnaround
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
            🚀 Getting Started in 4 Simple Steps
          </h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.05rem', color: '#94a3b8', maxWidth: '780px', margin: '0 auto' }}>
            From initial discovery call to live 1-line embed deployment in 5–14 business days.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem', marginBottom: '4rem' }}>
          {steps.map((s, idx) => {
            const IconComp = s.icon;
            return (
              <div 
                key={idx}
                className="glass-card"
                style={{ 
                  padding: '2rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justify: 'space-between',
                  position: 'relative',
                  borderTop: `4px solid ${s.color}`
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '1.5rem', color: s.color }}>
                      {s.stepNum}
                    </span>
                    <div style={{ padding: '0.5rem', borderRadius: '10px', background: 'rgba(255,255,255,0.04)' }}>
                      <IconComp size={22} color={s.color} />
                    </div>
                  </div>

                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                    {s.title}
                  </h3>

                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
                    {s.description}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: s.color, fontWeight: 700 }}>
                  <CheckCircle2 size={14} /> Step {idx + 1} Guaranteed SLA
                </div>
              </div>
            );
          })}
        </div>

        {/* Final CTA Box */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '3rem 2rem', 
            borderRadius: '24px', 
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.9), rgba(15, 23, 42, 0.95))',
            border: '1px solid rgba(99, 102, 241, 0.4)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
          }}
        >
          <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '2rem', color: '#ffffff', marginBottom: '1rem' }}>
            Ready to Turn Passive Visitors Into Qualified Leads?
          </h3>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.05rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 2rem' }}>
            Book your 15-minute scoping call with Founder &amp; Lead AI Engineer Bhavesh Mali today.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenBooking}
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '0.9rem 2.2rem' }}
            >
              <Calendar size={18} /> Book 15-Min Scoping Call
            </button>
            <button 
              onClick={onOpenEmbed}
              className="btn-secondary"
              style={{ fontSize: '1rem', padding: '0.9rem 2.2rem' }}
            >
              <Code2 size={18} color="#38bdf8" /> View 1-Line Embed Code
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
