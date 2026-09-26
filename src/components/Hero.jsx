import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Lock, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  Database,
  Search,
  MessageSquare,
  UserCheck
} from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section 
      id="hero"
      style={{
        position: 'relative',
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.25), transparent)'
      }}
      className="bg-grid-pattern"
    >
      {/* Background Ambient Blur Orbs */}
      <div 
        className="ambient-glow animate-pulse-slow" 
        style={{ top: '10%', left: '15%', width: '400px', height: '400px', background: 'rgba(99, 102, 241, 0.2)' }} 
      />
      <div 
        className="ambient-glow animate-pulse-slow" 
        style={{ top: '30%', right: '10%', width: '350px', height: '350px', background: 'rgba(6, 182, 212, 0.18)', animationDelay: '3s' }} 
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        
        {/* Top Floating Security Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}>
          <div 
            className="badge-pill badge-cyan animate-float"
            style={{ 
              padding: '0.5rem 1.25rem', 
              fontSize: '0.82rem',
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <ShieldCheck size={16} />
            100% Grounded Accuracy · Air-Gapped Vector Memory · AES-256 Encrypted
          </div>
        </div>

        {/* Hero Main Heading & Pitch */}
        <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto' }}>
          <h1 
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900, 
              color: '#ffffff',
              marginBottom: '1.25rem',
              lineHeight: '1.12'
            }}
          >
            Zero-Hallucination <span className="brand-accent-text">AI Agents</span>, Built From Your Content, Deployed in Days.
          </h1>

          <p 
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', 
              color: '#94a3b8',
              lineHeight: '1.7',
              maxWidth: '820px',
              margin: '0 auto 2.5rem'
            }}
          >
            GenNeo AI is an AI engineering agency specializing in custom, grounded AI agents, website scraping pipelines, and automated chatbot integrations. We convert static websites, documentation, and product catalogs into private, deterministic RAG systems — turning passive visitors into qualified, engaged leads.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
            <a 
              href="#simulator" 
              className="btn-primary"
              style={{ fontSize: '1rem', padding: '0.9rem 2.2rem' }}
            >
              <Sparkles size={18} />
              Test Live Simulator
              <ArrowRight size={18} />
            </a>

            <button 
              onClick={onOpenBooking}
              className="btn-secondary"
              style={{ fontSize: '1rem', padding: '0.9rem 2.2rem' }}
            >
              <Calendar size={18} color="#38bdf8" />
              Book 15-Min Scoping Call
            </button>
          </div>

          {/* Key Differentiating Metrics Cards */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '1.25rem', 
              textAlign: 'left',
              marginBottom: '4rem'
            }}
          >
            <div className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
                  <ShieldCheck size={20} />
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.3rem', color: '#ffffff' }}>
                  100% Grounded
                </div>
              </div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '0.85rem', color: '#94a3b8' }}>
                Zero hallucinated answers. Citation-to-source confidence gating built-in.
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.15)', color: '#38bdf8' }}>
                  <Zap size={20} />
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.3rem', color: '#ffffff' }}>
                  7–10 Days SLA
                </div>
              </div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '0.85rem', color: '#94a3b8' }}>
                Turnkey scrapers & vector ingestion pipelines delivered rapidly.
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
                  <UserCheck size={20} />
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.3rem', color: '#ffffff' }}>
                  &lt; 2-Hour SLA
                </div>
              </div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '0.85rem', color: '#94a3b8' }}>
                Direct support line to Founder & Lead AI Engineer Bhavesh Mali.
              </div>
            </div>

            <div className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(139, 92, 246, 0.15)', color: '#c084fc' }}>
                  <Lock size={20} />
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.3rem', color: '#ffffff' }}>
                  AES-256 Air-Gapped
                </div>
              </div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '0.85rem', color: '#94a3b8' }}>
                Per-client isolation. Zero data ever used to train public LLMs.
              </div>
            </div>
          </div>

        </div>

        {/* Visual RAG Workflow Graphic Card */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '2rem', 
            borderRadius: '24px', 
            background: 'rgba(15, 20, 32, 0.85)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Cpu size={22} color="#38bdf8" />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#ffffff' }}>
                GenNeo Grounded RAG Architecture Pipeline
              </span>
            </div>
            <div className="badge-pill badge-emerald">
              <CheckCircle2 size={14} /> Deterministic Accuracy Active
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {/* Step 1 Graphic */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#38bdf8' }}>
                <Database size={18} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.9rem' }}>
                  1. Multi-Source Scrape
                </span>
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.5' }}>
                Crawlers extract text from Web Pages, PDFs, FAQs &amp; Notion. Boilerplate nav/ads stripped out.
              </p>
            </div>

            {/* Step 2 Graphic */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#818cf8' }}>
                <Lock size={18} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.9rem' }}>
                  2. Air-Gapped Vector Store
                </span>
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.5' }}>
                Chunks with 15% overlap embedded into AES-256 encrypted vector index. 0% cross-tenant sharing.
              </p>
            </div>

            {/* Step 3 Graphic */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#c084fc' }}>
                <Search size={18} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.9rem' }}>
                  3. Confidence-Gated Q&amp;A
                </span>
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.5' }}>
                Strict vector similarity score required. Out-of-scope queries gracefully route to human support.
              </p>
            </div>

            {/* Step 4 Graphic */}
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#34d399' }}>
                <MessageSquare size={18} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.9rem' }}>
                  4. Intent &amp; Lead Capture
                </span>
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.5' }}>
                High-intent triggers surface Calendly booking widgets, working hours &amp; CRM contact flows.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
