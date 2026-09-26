import React, { useState } from 'react';
import { 
  Layers, 
  Globe, 
  FileText, 
  FileCheck, 
  Database, 
  Lock, 
  Code2, 
  Search, 
  ShieldCheck, 
  Zap, 
  RefreshCw, 
  UserCheck,
  Check,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function PipelineArchitecture({ onOpenEmbed }) {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section 
      id="architecture" 
      style={{ 
        padding: '5rem 0',
        position: 'relative' 
      }}
      className="bg-grid-pattern"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge-pill badge-cyan" style={{ marginBottom: '0.75rem' }}>
            <Layers size={14} /> Technical Architecture
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
            🛠️ The 3-Step Ingestion &amp; Grounding Engine
          </h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.05rem', color: '#94a3b8', maxWidth: '780px', margin: '0 auto' }}>
            From raw web content to AES-256 encrypted vector indices and 1-line script deployment — built for deterministic precision.
          </p>
        </div>

        {/* Interactive 3-Step Pipeline Tab Navigator */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          
          <button 
            onClick={() => setActiveStep(1)}
            className="glass-card"
            style={{ 
              padding: '1.5rem', 
              textAlign: 'left', 
              cursor: 'pointer',
              border: activeStep === 1 ? '1px solid #06b6d4' : '1px solid rgba(255,255,255,0.08)',
              background: activeStep === 1 ? 'rgba(6, 182, 212, 0.12)' : 'rgba(18, 22, 34, 0.75)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span className="badge-pill badge-cyan">STEP 01</span>
              <Globe size={20} color="#38bdf8" />
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.3rem' }}>
              Scrape &amp; Ingestion
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem', color: '#94a3b8' }}>
              Websites, PDFs, manuals &amp; Notion docs cleansed &amp; prepared.
            </p>
          </button>

          <button 
            onClick={() => setActiveStep(2)}
            className="glass-card"
            style={{ 
              padding: '1.5rem', 
              textAlign: 'left', 
              cursor: 'pointer',
              border: activeStep === 2 ? '1px solid #6366f1' : '1px solid rgba(255,255,255,0.08)',
              background: activeStep === 2 ? 'rgba(99, 102, 241, 0.12)' : 'rgba(18, 22, 34, 0.75)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span className="badge-pill badge-indigo">STEP 02</span>
              <Lock size={20} color="#818cf8" />
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.3rem' }}>
              Private Vector Memory
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem', color: '#94a3b8' }}>
              15% semantic overlap, AES-256 encrypted isolated index.
            </p>
          </button>

          <button 
            onClick={() => setActiveStep(3)}
            className="glass-card"
            style={{ 
              padding: '1.5rem', 
              textAlign: 'left', 
              cursor: 'pointer',
              border: activeStep === 3 ? '1px solid #10b981' : '1px solid rgba(255,255,255,0.08)',
              background: activeStep === 3 ? 'rgba(16, 185, 129, 0.12)' : 'rgba(18, 22, 34, 0.75)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <span className="badge-pill badge-emerald">STEP 03</span>
              <Code2 size={20} color="#34d399" />
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.3rem' }}>
              1-Line Embed Widget
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem', color: '#94a3b8' }}>
              CMS-agnostic script tag live in minutes.
            </p>
          </button>

        </div>

        {/* Detailed Active Step Content Panel */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '2.5rem', 
            borderRadius: '20px', 
            marginBottom: '4rem',
            background: 'rgba(15, 20, 32, 0.9)'
          }}
        >
          {activeStep === 1 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Globe size={28} color="#38bdf8" />
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.5rem', color: '#ffffff' }}>
                  Step 1 — Scrape &amp; Knowledge Ingestion
                </h3>
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Crawlers traverse public web pages, PDFs, FAQs, user manuals, and Notion docs. Non-essential elements (nav bars, footers, ads) are stripped to isolate pure factual knowledge. Automated delta-syncing detects and re-ingests updated content or pricing without manual re-uploads.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#38bdf8', marginBottom: '0.3rem' }}>
                    Multi-Format Ingestion
                  </div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.82rem', color: '#94a3b8' }}>
                    Web URLs, PDF catalogs, DOCX manuals &amp; Notion databases.
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#38bdf8', marginBottom: '0.3rem' }}>
                    Boilerplate Stripping
                  </div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.82rem', color: '#94a3b8' }}>
                    Filters out cookie popups, ads, navbars &amp; footers to isolate signal.
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#38bdf8', marginBottom: '0.3rem' }}>
                    Automated Delta-Syncing
                  </div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.82rem', color: '#94a3b8' }}>
                    Monitors live site changes; re-indexes updated pricing instantly.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Lock size={28} color="#818cf8" />
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.5rem', color: '#ffffff' }}>
                  Step 2 — Private Air-Gapped Vector Memory
                </h3>
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Extracted text is split into semantic chunks (15% overlap to preserve context across boundaries) and embedded into an AES-256 encrypted vector index, isolated per client — no shared tenancy of raw content.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#818cf8', marginBottom: '0.3rem' }}>
                    15% Contextual Overlap
                  </div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.82rem', color: '#94a3b8' }}>
                    Prevents boundary context loss when splitting multi-page specs.
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#818cf8', marginBottom: '0.3rem' }}>
                    AES-256 Encrypted
                  </div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.82rem', color: '#94a3b8' }}>
                    Encryption at rest &amp; in transit for all client embeddings.
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#818cf8', marginBottom: '0.3rem' }}>
                    Per-Client Isolation
                  </div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.82rem', color: '#94a3b8' }}>
                    Air-gapped database namespaces guarantee zero cross-tenant leaks.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Code2 size={28} color="#34d399" />
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.5rem', color: '#ffffff' }}>
                  Step 3 — 1-Line Embed Widget Deployment
                </h3>
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Deployed via a single JavaScript &lt;script&gt; tag, compatible with WordPress, Webflow, Shopify, React, and custom HTML. No backend integration required for standard tiers.
              </p>

              <div style={{ background: '#0d1117', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#64748b' }}>
                  <span>GENNEO-WIDGET-EMBED.HTML</span>
                  <button onClick={onOpenEmbed} style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                    Copy Script Code
                  </button>
                </div>
                <code style={{ color: '#34d399', fontSize: '0.88rem' }}>
                  &lt;script src="https://cdn.genneo.ai/v1/widget.js" data-agent-id="gn_live_9481a7" async&gt;&lt;/script&gt;
                </code>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span className="badge-pill badge-cyan">WordPress Compatible</span>
                <span className="badge-pill badge-indigo">Webflow Ready</span>
                <span className="badge-pill badge-emerald">Shopify &amp; React</span>
              </div>
            </div>
          )}
        </div>

        {/* 4 Core Capabilities Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.6rem', color: '#ffffff', textAlign: 'center', marginBottom: '2.5rem' }}>
            ⚡ Core Engine Capabilities
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem' }}>
            
            {/* Capability 1 */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8', marginBottom: '1rem' }}>
                <ShieldCheck size={22} />
              </div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                Zero-Hallucination Q&amp;A
              </h4>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
                Answers are strictly bound to verified, ingested data. Unresolved or out-of-scope queries gracefully hand off to human support rather than guessing.
              </p>
            </div>

            {/* Capability 2 */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', marginBottom: '1rem' }}>
                <Zap size={22} />
              </div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                Intent-to-Action Conversion
              </h4>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
                Detects high-intent language ("I need to talk to someone", "how do I book a demo") and dynamically surfaces contact badges, working hours, and calendar booking flows in-widget.
              </p>
            </div>

            {/* Capability 3 */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', marginBottom: '1rem' }}>
                <RefreshCw size={22} />
              </div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                Continuous Content Parity
              </h4>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
                Scheduled re-crawls keep the knowledge base aligned with live site changes — pricing updates, new product pages, policy edits — without a manual re-deploy.
              </p>
            </div>

            {/* Capability 4 */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c084fc', marginBottom: '1rem' }}>
                <UserCheck size={22} />
              </div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                Graceful Escalation
              </h4>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
                Every "I don't know" is a routed handoff, not a dead end, preserving lead capture even on edge-case questions.
              </p>
            </div>

          </div>
        </div>

        {/* What Makes the Grounding "Deterministic" Banner */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '2.5rem', 
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.8), rgba(15, 23, 42, 0.9))',
            border: '1px solid rgba(99, 102, 241, 0.4)'
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span className="badge-pill badge-cyan" style={{ marginBottom: '1rem' }}>
              CONFIDENCE-THRESHOLD GATING
            </span>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.8rem', color: '#ffffff', marginBottom: '1rem' }}>
              What Makes the Grounding "Deterministic"
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Unlike open-ended chatbot wrappers, GenNeo's retrieval layer enforces a strict <strong>citation-to-source constraint</strong>: the model is only permitted to generate a response when a matching chunk exists in the vector index above a confidence threshold. Below that threshold, the system defaults to escalation rather than inference — this is the mechanism that eliminates hallucinated pricing, policies, or specs.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(99, 102, 241, 0.15)', padding: '0.75rem 1.5rem', borderRadius: '9999px', border: '1px solid rgba(99, 102, 241, 0.3)', color: '#a5b4fc', fontSize: '0.9rem', fontWeight: 600 }}>
              <ShieldCheck size={18} color="#38bdf8" />
              Verified Chunk Similarity &gt; 85% Required For Response Generation
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
