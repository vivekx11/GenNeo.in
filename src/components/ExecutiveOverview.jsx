import React from 'react';
import { 
  Target, 
  Clock, 
  ShieldCheck, 
  UserCheck, 
  CheckCircle2, 
  XCircle, 
  Phone, 
  Mail, 
  Share2, 
  MessageCircle, 
  Sparkles, 
  Zap, 
  Lock 
} from 'lucide-react';

export default function ExecutiveOverview({ onOpenBooking }) {
  return (
    <section 
      id="overview" 
      style={{ 
        padding: '5rem 0', 
        position: 'relative',
        background: 'rgba(12, 16, 26, 0.6)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-pill badge-indigo" style={{ marginBottom: '0.75rem' }}>
            <Target size={14} /> Executive Summary
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
            🎯 Built For Accuracy By Construction
          </h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.05rem', color: '#94a3b8', maxWidth: '750px', margin: '0 auto' }}>
            Stop leaking sales leads to generic chatbots that fabricate answers. GenNeo AI guarantees 100% grounded fidelity backed by founder-led SLA.
          </p>
        </div>

        {/* Executive Overview Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '1.75rem',
            marginBottom: '4rem'
          }}
        >
          {/* Executive Overview Card */}
          <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles color="#38bdf8" size={22} />
                Executive Value Matrix
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '0.82rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Core Value Proposition
                  </div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: '0.98rem', color: '#f8fafc', marginTop: '0.2rem' }}>
                    Converts static websites, PDFs &amp; docs into intelligent, zero-hallucination AI agents.
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1rem' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '0.82rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Delivery SLA
                  </div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '1.1rem', color: '#38bdf8', marginTop: '0.2rem' }}>
                    7–10 Business Days (Tier-Dependent)
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '1rem' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '0.82rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Key Differentiator
                  </div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: '0.92rem', color: '#e2e8f0', marginTop: '0.2rem', lineHeight: '1.5' }}>
                    100% grounded accuracy via air-gapped vector memory, AES-256 encrypted — zero business IP or scraped data is ever shared with or used to train public LLMs.
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34d399', fontSize: '0.88rem', fontWeight: 600 }}>
              <CheckCircle2 size={18} /> Turnkey deployment with 1-line JS embed tag
            </div>
          </div>

          {/* Why This Matters Card */}
          <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '4px solid #6366f1' }}>
            <div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#ffffff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap color="#818cf8" size={22} />
                Why This Matters
              </h3>

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Most chatbot tools bolt a generic LLM onto a website and hope for the best — leading to made-up answers, outdated pricing, and lost trust. 
              </p>

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: '0.98rem', color: '#ffffff', lineHeight: '1.7', background: 'rgba(99, 102, 241, 0.1)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(99, 102, 241, 0.25)' }}>
                <strong>GenNeo AI inverts this:</strong> the agent can only answer from what it has actually ingested from your business, with everything else routed to a human. The result is a support/sales layer that's <strong>accurate by construction, not by prompt engineering</strong>.
              </p>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span className="badge-pill badge-emerald"><CheckCircle2 size={14} /> Deterministic RAG</span>
              <span className="badge-pill badge-cyan"><Lock size={14} /> Zero Data Leaks</span>
            </div>
          </div>

          {/* Founder & Lead AI Engineer Card */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '2rem', 
              background: 'linear-gradient(135deg, rgba(18, 22, 34, 0.9), rgba(30, 27, 75, 0.5))',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div className="badge-pill badge-emerald">
                  <UserCheck size={14} /> Founder Led Engineering
                </div>
                <div style={{ fontSize: '0.75rem', color: '#a5b4fc', fontWeight: 600 }}>
                  &lt; 2-HOUR SLA
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: '1.4rem',
                  boxShadow: '0 0 15px rgba(99, 102, 241, 0.5)'
                }}>
                  BM
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.25rem', color: '#ffffff' }}>
                    Bhavesh Mali
                  </h4>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: '0.85rem', color: '#38bdf8' }}>
                    Founder / Lead AI Engineer
                  </p>
                </div>
              </div>

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Every client receives direct access to the founder. No junior support tiers or ticket queues. Guaranteed &lt; 2-hour response SLA.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
                <a href="mailto:genneob2c@gmail.com" style={{ textDecoration: 'none', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={16} color="#38bdf8" /> genneob2c@gmail.com
                </a>
                <a href="https://wa.me/918468950877" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} color="#34d399" /> +91 8468950877 (WhatsApp)
                </a>
              </div>
            </div>

            <div style={{ marginTop: '1.75rem' }}>
              <button 
                onClick={onOpenBooking}
                className="btn-primary"
                style={{ width: '100%', fontSize: '0.88rem', padding: '0.7rem' }}
              >
                Book Discovery Call With Bhavesh
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
