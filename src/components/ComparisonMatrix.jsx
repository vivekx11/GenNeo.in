import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Scale, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

export default function ComparisonMatrix({ onOpenBooking }) {
  const comparisonData = [
    {
      problem: 'Hallucinated answers',
      generic: 'Common — LLM fills gaps with plausible-sounding guesses',
      genneo: 'Prevented by design via retrieval-confidence gating (>85% vector similarity match constraint)'
    },
    {
      problem: 'Stale pricing & info',
      generic: 'Manual re-training or re-upload required for every site change',
      genneo: 'Automated delta-sync keeps parity with live site continuously'
    },
    {
      problem: 'Setup complexity',
      generic: 'Often requires dedicated dev resources & complex prompt engineering',
      genneo: '1-line JS script tag, fully turnkey & deployed in 7–10 days'
    },
    {
      problem: 'Data privacy & security',
      generic: 'Often pooled/shared across tenants or used for public model training',
      genneo: 'Air-gapped vector memory, AES-256 encrypted, zero public model training'
    },
    {
      problem: 'Lead capture on "I don\'t know"',
      generic: 'Dead-end response or generic apology leading to lost visitors',
      genneo: 'Routed handoff to human channels (+91 8468950877 WhatsApp / Calendly) + contact capture'
    }
  ];

  return (
    <section 
      id="comparison" 
      style={{ 
        padding: '5rem 0',
        position: 'relative' 
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge-pill badge-indigo" style={{ marginBottom: '0.75rem' }}>
            <Scale size={14} /> Competitive Advantage
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
            📈 Why Businesses Choose GenNeo AI
          </h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.05rem', color: '#94a3b8', maxWidth: '780px', margin: '0 auto' }}>
            See how GenNeo AI's deterministic RAG engine compares to generic chatbot tools.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div 
          className="glass-card" 
          style={{ 
            borderRadius: '24px', 
            overflow: 'hidden', 
            border: '1px solid rgba(99, 102, 241, 0.25)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
            marginBottom: '3rem'
          }}
        >
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #1e1b4b, #0f172a)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, padding: '1.25rem 1.5rem', color: '#94a3b8', fontSize: '0.88rem', textTransform: 'uppercase', width: '22%' }}>
                    Business Challenge
                  </th>
                  <th style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, padding: '1.25rem 1.5rem', color: '#f43f5e', fontSize: '0.95rem', width: '38%' }}>
                    Generic Chatbot Tools
                  </th>
                  <th style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, padding: '1.25rem 1.5rem', color: '#38bdf8', fontSize: '1.05rem', background: 'rgba(99, 102, 241, 0.15)', width: '40%' }}>
                    ✨ GenNeo AI Solution
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr 
                    key={idx}
                    style={{ 
                      borderBottom: idx < comparisonData.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                      background: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.03)'
                    }}
                  >
                    {/* Problem */}
                    <td style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, padding: '1.25rem 1.5rem', color: '#ffffff', fontSize: '0.92rem' }}>
                      {row.problem}
                    </td>

                    {/* Generic */}
                    <td style={{ fontFamily: "'Montserrat', sans-serif", padding: '1.25rem 1.5rem', color: '#cbd5e1', fontSize: '0.88rem', lineHeight: '1.5' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <XCircle size={18} color="#f43f5e" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{row.generic}</span>
                      </div>
                    </td>

                    {/* GenNeo AI */}
                    <td style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, padding: '1.25rem 1.5rem', color: '#ffffff', fontSize: '0.92rem', lineHeight: '1.5', background: 'rgba(99, 102, 241, 0.08)' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <CheckCircle2 size={18} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{row.genneo}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Banner */}
        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={onOpenBooking}
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '0.9rem 2.2rem' }}
          >
            Switch To Zero-Hallucination RAG — Book Call <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
