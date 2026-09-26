import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Sparkles, 
  Send, 
  ShieldCheck, 
  Database, 
  CheckCircle2, 
  AlertTriangle, 
  Calendar, 
  Phone, 
  Mail, 
  Maximize2, 
  Minimize2, 
  RefreshCw, 
  ArrowRight,
  ExternalLink,
  Lock,
  Search,
  UserCheck,
  Globe
} from 'lucide-react';

const PRESET_DEMOS = [
  {
    id: 'saas',
    name: 'Tech SaaS & Docs',
    url: 'https://docs.cloudpulse-ai.com',
    ingestedPages: 42,
    sampleQuestions: [
      'What are the Growth Agent tier pricing details?',
      'Is my business data used to train public LLMs?',
      'How do I book a 15-min discovery call with Bhavesh Mali?',
      'What is the secret recipe of Coca Cola?'
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Store',
    url: 'https://catalog.luxeapparel.co',
    ingestedPages: 85,
    sampleQuestions: [
      'What is your return & refund policy?',
      'How fast is the delivery SLA for GenNeo AI agents?',
      'Can I connect WhatsApp and Instagram DM agents?',
      'Can I get free unlimited custom software?'
    ]
  },
  {
    id: 'legal',
    name: 'Legal & Financial Advisory',
    url: 'https://advisory.apexlegal.io',
    ingestedPages: 28,
    sampleQuestions: [
      'What security encryption standards do you use?',
      'Can we deploy on our own AWS Bedrock or Azure cloud?',
      'How does human escalation work when confidence is low?',
      'Who is your founder and how fast is his support SLA?'
    ]
  }
];

export default function LiveSimulator({ onOpenBooking }) {
  const [selectedPreset, setSelectedPreset] = useState(PRESET_DEMOS[0]);
  const [customUrl, setCustomUrl] = useState('');
  const [isCrawling, setIsCrawling] = useState(false);
  const [crawlProgress, setCrawlProgress] = useState(0);

  // Chat State
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: 'Hello! I am the GenNeo AI Agent for this site. Ask me anything about our services, pricing, security, or implementation SLA!',
      confidence: 100,
      citation: 'system_manifest.json',
      intent: 'GREETING',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [widgetMode, setWidgetMode] = useState('embedded'); // 'embedded' | 'floating'
  const [floatingOpen, setFloatingOpen] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleCrawlSim = (urlToUse) => {
    setIsCrawling(true);
    setCrawlProgress(10);
    
    setTimeout(() => setCrawlProgress(40), 500);
    setTimeout(() => setCrawlProgress(75), 1000);
    setTimeout(() => setCrawlProgress(100), 1600);
    setTimeout(() => {
      setIsCrawling(false);
      setMessages([
        {
          id: Date.now(),
          sender: 'agent',
          text: `Ingestion complete for ${urlToUse || selectedPreset.url}! Ingested ${Math.floor(Math.random() * 50 + 20)} pages with 15% chunk overlap into AES-256 vector store. Ask me a question to test zero-hallucination accuracy!`,
          confidence: 100,
          citation: 'vector_index_active',
          intent: 'INGESTION_READY',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 2000);
  };

  const handleSendQuestion = (questionText) => {
    const q = questionText || inputText;
    if (!q.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = {};
      const lowerQ = q.toLowerCase();

      if (lowerQ.includes('pricing') || lowerQ.includes('growth') || lowerQ.includes('cost')) {
        botResponse = {
          text: 'GenNeo AI offers 3 main tiers: Starter ($999 setup, $222/mo), Growth ($1,111 setup, $333/mo - Most Popular), and Custom Enterprise. Growth tier includes up to 100 pages/PDFs, multi-document hybrid RAG, dynamic Calendly booking, and 50+ languages.',
          confidence: 99.4,
          citation: 'pricing_matrix_2026.pdf #chunk-04',
          intent: 'HIGH_INTENT_PRICING',
          showBookingButton: true
        };
      } else if (lowerQ.includes('train') || lowerQ.includes('privacy') || lowerQ.includes('security') || lowerQ.includes('data')) {
        botResponse = {
          text: 'Your business data is 100% private. GenNeo AI uses air-gapped vector memory encrypted with AES-256 at rest. Zero scraped data or business IP is ever shared with or used to train public LLMs.',
          confidence: 98.9,
          citation: 'security_governance.md #chunk-02',
          intent: 'SECURITY_VERIFIED'
        };
      } else if (lowerQ.includes('bhavesh') || lowerQ.includes('founder') || lowerQ.includes('book') || lowerQ.includes('call') || lowerQ.includes('contact')) {
        botResponse = {
          text: 'Our Founder & Lead AI Engineer is Bhavesh Mali. All packages include direct access to Bhavesh with a guaranteed < 2-hour response SLA. You can book a 15-minute discovery call right now or reach out directly on WhatsApp (+91 8468950877)!',
          confidence: 99.8,
          citation: 'founder_sla_contract.pdf #chunk-01',
          intent: 'HIGH_INTENT_BOOKING',
          showBookingButton: true
        };
      } else if (lowerQ.includes('refund') || lowerQ.includes('return')) {
        botResponse = {
          text: 'According to the ingested site policy: We provide a 100% satisfaction guarantee. If your agent is not deployed to specification within the 7–10 business day SLA, full refund or extended complimentary support applies.',
          confidence: 96.2,
          citation: 'terms_and_policies.html #chunk-08',
          intent: 'POLICY_INQUIRY'
        };
      } else if (lowerQ.includes('whatsapp') || lowerQ.includes('instagram') || lowerQ.includes('connect')) {
        botResponse = {
          text: 'Yes! GenNeo AI supports Add-On extensions for WhatsApp DM agents, Instagram DM integrations, CRM sync (HubSpot, Salesforce, Zoho), and custom analytics dashboards.',
          confidence: 97.5,
          citation: 'add_on_integrations.pdf #chunk-05',
          intent: 'FEATURE_INQUIRY'
        };
      } else if (lowerQ.includes('aws') || lowerQ.includes('azure') || lowerQ.includes('cloud')) {
        botResponse = {
          text: 'Yes! Under our Custom Enterprise tier, we support full private cloud deployments on AWS Bedrock, Azure OpenAI, or GCP Vertex AI for zero data-residency compliance concerns.',
          confidence: 98.1,
          citation: 'enterprise_specifications.md #chunk-09',
          intent: 'ENTERPRISE_INQUIRY'
        };
      } else if (lowerQ.includes('coca cola') || lowerQ.includes('secret') || lowerQ.includes('unlimited free') || lowerQ.includes('nonsense')) {
        botResponse = {
          text: 'I do not have verified ingested data to answer this specific out-of-scope question with > 85% vector similarity. In accordance with GenNeo zero-hallucination rules, I am gracefully routing your request to human support & Lead Engineer Bhavesh Mali.',
          confidence: 24.1,
          citation: 'OUT_OF_SCOPE_UNMATCHED',
          intent: 'HUMAN_ESCALATION',
          showHumanEscalation: true
        };
      } else {
        botResponse = {
          text: `Ingested knowledge base search completed for "${q}". GenNeo AI agents answer strictly from your ingested business facts. Would you like to schedule a 15-minute scoping call to test your specific website?`,
          confidence: 94.8,
          citation: 'general_faq.html #chunk-02',
          intent: 'GENERAL_INQUIRY',
          showBookingButton: true
        };
      }

      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          sender: 'agent',
          ...botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 900);
  };

  return (
    <section 
      id="simulator" 
      style={{ 
        padding: '5rem 0',
        position: 'relative' 
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-pill badge-emerald" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} /> Pre-Launch Sandbox
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
            🧪 Interactive Live AI Agent Simulator
          </h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.05rem', color: '#94a3b8', maxWidth: '780px', margin: '0 auto' }}>
            Experience deterministic RAG in action. Test ingestion crawlers, confidence score gating, intent detection badges, and human escalation routing.
          </p>
        </div>

        {/* Top Control Bar: Select Preset or Input Website URL */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '1.5rem', 
            borderRadius: '20px', 
            marginBottom: '2.5rem',
            background: 'rgba(15, 20, 32, 0.9)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Database size={18} color="#38bdf8" />
                Select Ingestion Target Profile:
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {PRESET_DEMOS.map(preset => (
                  <button
                    key={preset.id}
                    onClick={() => {
                      setSelectedPreset(preset);
                      handleCrawlSim(preset.url);
                    }}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.82rem',
                      padding: '0.45rem 0.9rem',
                      borderRadius: '9999px',
                      cursor: 'pointer',
                      border: selectedPreset.id === preset.id ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)',
                      background: selectedPreset.id === preset.id ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255,255,255,0.03)',
                      color: selectedPreset.id === preset.id ? '#38bdf8' : '#94a3b8',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {preset.name} ({preset.ingestedPages} pages)
                  </button>
                ))}
              </div>
            </div>

            {/* Custom URL Crawl Input */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Enter your website URL (e.g. https://yourcompany.com)..."
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  style={{
                    width: '100%',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.9rem',
                    padding: '0.75rem 1rem 0.75rem 2.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: '#0d1117',
                    color: '#ffffff',
                    outline: 'none'
                  }}
                />
                <Globe size={18} color="#64748b" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
              </div>

              <button
                onClick={() => handleCrawlSim(customUrl)}
                disabled={isCrawling}
                className="btn-primary"
                style={{ fontSize: '0.88rem', padding: '0.75rem 1.5rem', borderRadius: '12px' }}
              >
                <RefreshCw size={16} className={isCrawling ? 'animate-spin' : ''} />
                {isCrawling ? 'Crawling & Chunking...' : 'Simulate Ingestion Crawl'}
              </button>
            </div>

            {/* Ingestion Progress Bar */}
            {isCrawling && (
              <div style={{ marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#38bdf8', marginBottom: '0.3rem', fontWeight: 600 }}>
                  <span>Crawling target site &amp; extracting 15% overlap vector chunks...</span>
                  <span>{crawlProgress}%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ width: `${crawlProgress}%`, height: '100%', background: 'linear-gradient(90deg, #6366f1, #06b6d4)', transition: 'width 0.4s ease' }} />
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Main Simulator Workspace Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
          
          {/* Left Column: Recommended Sample Questions & Inspection Panel */}
          <div style={{ display: 'flex', flexFlexDirection: 'column', gap: '1.25rem' }}>
            
            <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(18, 22, 34, 0.85)' }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.98rem', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Search size={18} color="#818cf8" />
                Click Sample Grounded Queries:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {selectedPreset.sampleQuestions.map((sq, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendQuestion(sq)}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 500,
                      fontSize: '0.85rem',
                      textAlign: 'left',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#cbd5e1',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'space-between',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(99, 102, 241, 0.15)';
                      e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.color = '#cbd5e1';
                    }}
                  >
                    <span>"{sq}"</span>
                    <ArrowRight size={14} color="#6366f1" />
                  </button>
                ))}
              </div>
            </div>

            {/* Active Ingestion Telemetry Card */}
            <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(18, 22, 34, 0.85)' }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.98rem', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={18} color="#34d399" />
                Live Ingestion Telemetry
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.82rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ color: '#94a3b8' }}>Target URL:</span>
                  <span style={{ color: '#38bdf8', fontWeight: 600 }}>{selectedPreset.url}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ color: '#94a3b8' }}>Vector Database:</span>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Air-Gapped Pinecone Index</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ color: '#94a3b8' }}>Encryption:</span>
                  <span style={{ color: '#34d399', fontWeight: 600 }}>AES-256 At Rest</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94a3b8' }}>Confidence Threshold:</span>
                  <span style={{ color: '#a5b4fc', fontWeight: 600 }}>&gt; 85.0% Grounded</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Chat Widget Sandbox */}
          <div 
            className="glass-card" 
            style={{ 
              borderRadius: '20px', 
              display: 'flex', 
              flexDirection: 'column',
              height: '560px',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}
          >
            {/* Widget Header */}
            <div 
              style={{ 
                padding: '1rem 1.25rem', 
                background: 'linear-gradient(135deg, #1e1b4b, #0f172a)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #6366f1, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bot size={20} color="#ffffff" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '0.95rem', color: '#ffffff' }}>
                    GenNeo Grounded Assistant
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }} />
                    Connected to {selectedPreset.name} Vector Memory
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button 
                  onClick={() => handleCrawlSim(selectedPreset.url)}
                  title="Reset conversation"
                  style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '0.2rem' }}
                >
                  <RefreshCw size={16} />
                </button>
              </div>
            </div>

            {/* Message Body Area */}
            <div style={{ flex: 1, padding: '1.25rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#090b10' }}>
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  style={{
                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%'
                  }}
                >
                  <div 
                    style={{
                      padding: '0.9rem 1.1rem',
                      borderRadius: msg.sender === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                      background: msg.sender === 'user' ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : '#1e293b',
                      color: '#ffffff',
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.88rem',
                      lineHeight: '1.55',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }}
                  >
                    {msg.text}

                    {/* Metadata Badges for Grounded AI Responses */}
                    {msg.sender === 'agent' && msg.confidence && (
                      <div style={{ marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.75rem' }}>
                        
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                          <span style={{ 
                            color: msg.confidence > 85 ? '#34d399' : '#f43f5e', 
                            fontWeight: 700,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem'
                          }}>
                            {msg.confidence > 85 ? <CheckCircle2 size={13} /> : <AlertTriangle size={13} />}
                            {msg.confidence}% Vector Similarity Match
                          </span>

                          <span style={{ color: '#94a3b8', fontSize: '0.72rem' }}>
                            {msg.timestamp}
                          </span>
                        </div>

                        {msg.citation && (
                          <div style={{ color: '#38bdf8', fontSize: '0.72rem', fontFamily: 'monospace' }}>
                            Source: {msg.citation}
                          </div>
                        )}

                        {/* Interactive Action Badges surfaced in widget */}
                        {msg.showBookingButton && (
                          <div style={{ marginTop: '0.4rem' }}>
                            <button
                              onClick={onOpenBooking}
                              className="btn-primary"
                              style={{ fontSize: '0.78rem', padding: '0.4rem 0.85rem', width: '100%', justifyContent: 'center' }}
                            >
                              <Calendar size={13} /> Book 15-Min Scoping Call
                            </button>
                          </div>
                        )}

                        {msg.showHumanEscalation && (
                          <div style={{ marginTop: '0.4rem', background: 'rgba(244, 63, 94, 0.15)', padding: '0.6rem', borderRadius: '8px', border: '1px solid rgba(244, 63, 94, 0.3)' }}>
                            <div style={{ color: '#f43f5e', fontWeight: 700, marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                              <UserCheck size={14} /> Routed Handoff Active
                            </div>
                            <div style={{ color: '#cbd5e1', fontSize: '0.75rem', marginBottom: '0.4rem' }}>
                              Out-of-scope query forwarded to Lead Engineer Bhavesh Mali.
                            </div>
                            <a
                              href="https://wa.me/918468950877"
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.3rem',
                                color: '#34d399',
                                textDecoration: 'none',
                                fontWeight: 700,
                                fontSize: '0.78rem'
                              }}
                            >
                              <Phone size={13} /> WhatsApp Founder: +91 8468950877
                            </a>
                          </div>
                        )}

                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div style={{ alignSelf: 'flex-start', background: '#1e293b', padding: '0.75rem 1rem', borderRadius: '14px', color: '#94a3b8', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Bot size={16} className="animate-spin" /> Grounded RAG index searching...
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSendQuestion(); }}
              style={{ 
                padding: '0.85rem 1rem', 
                background: '#0d1117', 
                borderTop: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                gap: '0.5rem'
              }}
            >
              <input
                type="text"
                placeholder="Ask a question about pricing, security, SLA..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                style={{
                  flex: 1,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.88rem',
                  padding: '0.65rem 1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: '#161b22',
                  color: '#ffffff',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '0.65rem 1.1rem', borderRadius: '10px' }}
              >
                <Send size={16} />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
