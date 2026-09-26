import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Sparkles,
  MessageCircle,
  Phone
} from 'lucide-react';

export default function FAQSection({ onOpenBooking }) {
  const [openIdx, setOpenIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'How long does setup actually take?',
      a: 'Setup takes 5–14 business days depending on your tier (Starter: 5–7 days, Growth: 7–10 days, Enterprise: 10–14 days). This delivery SLA is primarily gated by the size of your knowledge base and any custom CRM/database integrations.'
    },
    {
      q: 'What happens when the agent doesn\'t know an answer?',
      a: 'It says so clearly and routes the visitor to a human channel (WhatsApp, Calendly booking link, or email contact form) rather than guessing — this is a core design principle of our confidence-gated RAG architecture, not a fallback bug.'
    },
    {
      q: 'Can it handle pricing or inventory that changes often?',
      a: 'Yes! Growth and Enterprise tiers include continuous, scheduled re-crawls and delta-syncing. Whenever you update pricing, policy documents, or product catalogs on your site, our crawlers re-index changed pages automatically.'
    },
    {
      q: 'Is our data used to train any public AI model?',
      a: 'No. Never. All ingested content is stored in an isolated, AES-256 encrypted vector index dedicated solely to your account. Your business IP and scraped data are never pooled or used to train baseline LLMs.'
    },
    {
      q: 'Can we bring our own LLM or host on our own cloud?',
      a: 'Yes! At the Custom Enterprise tier, we support private cloud deployments on AWS Bedrock, Azure OpenAI, GCP Vertex AI, or fine-tuned open-source models (Llama 3 / Mistral) inside your own cloud infrastructure.'
    },
    {
      q: 'Who supports us after deployment and what is the SLA?',
      a: 'Every client receives direct access to Lead AI Engineer & Founder Bhavesh Mali. We guarantee a < 2-hour response SLA via direct phone/WhatsApp (+91 8468950877) or email (genneob2c@gmail.com).'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section 
      id="faq" 
      style={{ 
        padding: '5rem 0', 
        position: 'relative',
        background: 'rgba(9, 11, 16, 0.95)'
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="badge-pill badge-cyan" style={{ marginBottom: '0.75rem' }}>
            <HelpCircle size={14} /> Clear Answers
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
            ❓ Frequently Asked Questions
          </h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.05rem', color: '#94a3b8' }}>
            Everything you need to know about our grounded AI agent pipeline &amp; SLA guarantee.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
          <input
            type="text"
            placeholder="Search questions about setup, SLA, security, privacy..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.95rem',
              padding: '0.9rem 1rem 0.9rem 2.75rem',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.12)',
              background: '#0d1117',
              color: '#ffffff',
              outline: 'none',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}
          />
          <Search size={20} color="#64748b" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3.5rem' }}>
          {filteredFaqs.map((faq, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: openIdx === idx ? '1px solid #6366f1' : '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.2s ease'
              }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '1.25rem 1.5rem',
                  background: openIdx === idx ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  gap: '1rem'
                }}
              >
                <span>{faq.q}</span>
                {openIdx === idx ? <ChevronUp size={20} color="#818cf8" /> : <ChevronDown size={20} color="#94a3b8" />}
              </button>

              {openIdx === idx && (
                <div 
                  style={{
                    padding: '0 1.5rem 1.5rem 1.5rem',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 400,
                    fontSize: '0.95rem',
                    color: '#cbd5e1',
                    lineHeight: '1.7',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '1rem'
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Founder Direct Line Card */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '2rem', 
            borderRadius: '20px', 
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.8), rgba(15, 23, 42, 0.9))',
            border: '1px solid rgba(99, 102, 241, 0.3)'
          }}
        >
          <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.5rem' }}>
            Have a custom architecture question?
          </h3>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.9rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
            Speak directly with Founder &amp; Lead AI Engineer Bhavesh Mali (&lt; 2-hour SLA response).
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenBooking}
              className="btn-primary"
              style={{ fontSize: '0.88rem' }}
            >
              Book 15-Min Scoping Call
            </button>
            <a 
              href="https://wa.me/918468950877" 
              target="_blank" 
              rel="noreferrer"
              className="btn-secondary"
              style={{ fontSize: '0.88rem' }}
            >
              <Phone size={16} color="#34d399" /> WhatsApp Bhavesh (+91 8468950877)
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
