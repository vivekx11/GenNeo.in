import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  Layers, 
  Star,
  Calculator,
  PlusCircle,
  HelpCircle,
  Bot,
  MessageCircle,
  BarChart3,
  Globe2
} from 'lucide-react';

export default function PricingTiers({ onOpenBooking }) {
  // ROI Calculator state
  const [monthlyVisitors, setMonthlyVisitors] = useState(10000);
  const [avgLeadValue, setAvgLeadValue] = useState(150);

  // Estimations
  const estimatedLeadsCaptured = Math.round(monthlyVisitors * 0.035); // 3.5% conversion boost
  const estimatedMonthlyValue = estimatedLeadsCaptured * avgLeadValue;

  return (
    <section 
      id="pricing" 
      style={{ 
        padding: '5rem 0', 
        position: 'relative',
        background: 'rgba(9, 11, 16, 0.95)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge-pill badge-indigo" style={{ marginBottom: '0.75rem' }}>
            <Zap size={14} /> Transparent Pricing
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
            💰 Pricing &amp; Service Tiers
          </h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.05rem', color: '#94a3b8', maxWidth: '780px', margin: '0 auto' }}>
            Turnkey deployment, zero hidden fees, air-gapped security, and direct SLA support with Lead AI Engineer Bhavesh Mali.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem',
            marginBottom: '4.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Tier 1: Starter */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '2.25rem', 
              display: 'flex', 
              flexDirection: 'column', 
              justify: 'space-between',
              background: 'rgba(18, 22, 34, 0.75)'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge-pill badge-cyan">STARTER TIER</span>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>5–7 DAYS SLA</span>
              </div>

              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Starter AI Agent
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
                Ideal for small business sites &amp; basic document knowledge bases.
              </p>

              <div style={{ marginBottom: '1.75rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '2.5rem', color: '#ffffff' }}>
                    $999
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 500 }}>
                    one-time setup
                  </span>
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '1.1rem', color: '#38bdf8', marginTop: '0.2rem' }}>
                  + $222/mo maintenance
                </div>
              </div>

              {/* Features List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <Check size={18} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Up to <strong>30 pages</strong> ingested &amp; synced</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <Check size={18} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Custom branded floating &amp; embedded widget</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <Check size={18} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Context-aware intent responses &amp; contact cards</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <Check size={18} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>1-Line JS Embed Script deployment</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <Check size={18} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Direct founder support SLA (&lt; 2 hrs)</span>
                </div>
              </div>
            </div>

            <button 
              onClick={onOpenBooking}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Get Starter Package
            </button>
          </div>

          {/* Tier 2: Growth (⭐ Most Popular) */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '2.25rem', 
              display: 'flex', 
              flexDirection: 'column', 
              justify: 'space-between',
              background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.95), rgba(15, 23, 42, 0.95))',
              border: '2px solid #6366f1',
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.35)',
              position: 'relative',
              transform: 'scale(1.02)'
            }}
          >
            {/* Top Popular Badge */}
            <div 
              style={{ 
                position: 'absolute', 
                top: '-15px', 
                left: '50%', 
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                color: '#ffffff',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: '0.78rem',
                padding: '0.35rem 1.25rem',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 4px 15px rgba(99, 102, 241, 0.5)'
              }}
            >
              <Star size={14} fill="#ffffff" /> MOST POPULAR CHOICE
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', marginTop: '0.5rem' }}>
                <span className="badge-pill badge-indigo">GROWTH TIER</span>
                <span style={{ fontSize: '0.8rem', color: '#a5b4fc', fontWeight: 600 }}>7–10 DAYS SLA</span>
              </div>

              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Growth AI Agent + Automations
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', color: '#cbd5e1', marginBottom: '1.5rem' }}>
                Complete multi-document RAG with Calendly booking &amp; 50+ languages.
              </p>

              <div style={{ marginBottom: '1.75rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '2.75rem', color: '#ffffff' }}>
                    $1,111
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 500 }}>
                    one-time setup
                  </span>
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '1.25rem', color: '#38bdf8', marginTop: '0.2rem' }}>
                  + $333/mo maintenance
                </div>
              </div>

              {/* Features List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#ffffff', fontWeight: 600 }}>
                  <Check size={18} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Up to <strong>100 pages, PDFs, manuals &amp; catalogs</strong></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#ffffff', fontWeight: 600 }}>
                  <Check size={18} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Advanced multi-document hybrid-search RAG</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#ffffff' }}>
                  <Check size={18} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Dynamic Calendly booking &amp; URL navigation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#ffffff' }}>
                  <Check size={18} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Multilingual support (<strong>50+ languages</strong>)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#ffffff' }}>
                  <Check size={18} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Continuous scheduled delta-sync re-crawls</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#ffffff' }}>
                  <Check size={18} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Priority founder support SLA (&lt; 2 hrs)</span>
                </div>
              </div>
            </div>

            <button 
              onClick={onOpenBooking}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}
            >
              <Sparkles size={18} /> Choose Growth Tier
            </button>
          </div>

          {/* Tier 3: Custom Enterprise */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '2.25rem', 
              display: 'flex', 
              flexDirection: 'column', 
              justify: 'space-between',
              background: 'rgba(18, 22, 34, 0.75)'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge-pill badge-emerald">ENTERPRISE</span>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>10–14 DAYS SLA</span>
              </div>

              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Custom Enterprise
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
                Multi-agent orchestration, private cloud &amp; live API tool calling.
              </p>

              <div style={{ marginBottom: '1.75rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '2.25rem', color: '#ffffff' }}>
                  Custom Quote
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '1.1rem', color: '#34d399', marginTop: '0.2rem' }}>
                  Flexible Retainer Options
                </div>
              </div>

              {/* Features List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <Check size={18} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span><strong>Unlimited pages</strong> &amp; enterprise knowledge bases</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <Check size={18} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Multi-agent orchestration (Sales + Support + Account Mgr)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <Check size={18} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Real-time API/DB tool calling (order status, live DB)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <Check size={18} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>On-premise / Private Cloud (<strong>AWS Bedrock, Azure, Vertex AI</strong>)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                  <Check size={18} color="#34d399" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>Fine-tuned Llama 3 / Mistral open-source models</span>
                </div>
              </div>
            </div>

            <button 
              onClick={onOpenBooking}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Contact Enterprise Team
            </button>
          </div>

        </div>

        {/* Add-On Services List */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '2.5rem', 
            borderRadius: '20px', 
            marginBottom: '4.5rem',
            background: 'rgba(15, 20, 32, 0.85)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <PlusCircle size={24} color="#38bdf8" />
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#ffffff' }}>
              Add-On Services (Available Across All Tiers)
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#ffffff', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Bot size={18} color="#818cf8" /> CRM Integrations
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>
                Seamless bi-directional sync with HubSpot, Salesforce, Zoho, &amp; Pipedrive.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#ffffff', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageCircle size={18} color="#34d399" /> Social DM Extensions
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>
                Deploy grounded agents directly on WhatsApp Business &amp; Instagram DMs.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#ffffff', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BarChart3 size={18} color="#38bdf8" /> Custom Analytics Dashboard
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>
                Track query volume, unanswered-query reports, intent trends, and conversion rates.
              </p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#ffffff', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe2 size={18} color="#c084fc" /> White-Label Agency Deployment
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5' }}>
                Rebrand widget, dashboard &amp; reporting under your agency brand for client resale.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive ROI Calculator Card */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '2.5rem', 
            borderRadius: '24px', 
            background: 'linear-gradient(135deg, rgba(18, 22, 34, 0.95), rgba(30, 27, 75, 0.6))',
            border: '1px solid rgba(99, 102, 241, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Calculator size={24} color="#38bdf8" />
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.5rem', color: '#ffffff' }}>
              GenNeo Lead &amp; Savings ROI Estimator
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            {/* Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '0.5rem', fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                  <span>Monthly Website Visitors:</span>
                  <span style={{ color: '#38bdf8', fontWeight: 800 }}>{monthlyVisitors.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#6366f1', cursor: 'pointer' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '0.5rem', fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                  <span>Estimated Average Lead Value ($):</span>
                  <span style={{ color: '#34d399', fontWeight: 800 }}>${avgLeadValue}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={avgLeadValue}
                  onChange={(e) => setAvgLeadValue(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#10b981', cursor: 'pointer' }}
                />
              </div>
            </div>

            {/* Calculated Output Display */}
            <div style={{ background: 'rgba(9, 11, 16, 0.7)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                Projected Monthly Lead Impact
              </div>

              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '2.5rem', color: '#34d399', margin: '0.3rem 0' }}>
                +${estimatedMonthlyValue.toLocaleString()} / mo
              </div>

              <div style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                Based on an estimated <strong>+{estimatedLeadsCaptured} additional qualified leads/month</strong> via automated intent-to-action agent conversion.
              </div>

              <button 
                onClick={onOpenBooking}
                className="btn-primary"
                style={{ marginTop: '1.25rem', fontSize: '0.88rem' }}
              >
                Claim This ROI — Book Discovery Call
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
