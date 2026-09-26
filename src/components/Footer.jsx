import React from 'react';
import { 
  Bot, 
  ShieldCheck, 
  Heart, 
  Mail, 
  Phone, 
  Share2, 
  Calendar,
  Lock
} from 'lucide-react';

export default function Footer({ onOpenBooking, onOpenEmbed }) {
  return (
    <footer 
      style={{
        background: '#06080c',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '4rem 0 2rem 0',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem' }}>
          
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg, #6366f1, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={22} color="#ffffff" />
              </div>
              <div className="brand-logo-text" style={{ fontSize: '1.4rem' }}>
                GenNeo<span style={{ color: '#06b6d4', fontWeight: 900 }}>.AI</span>
              </div>
            </div>

            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              GenNeo AI is an AI engineering agency specializing in custom, grounded AI agents, website scraping pipelines, and automated chatbot integrations. Turning passive visitors into engaged leads.
            </p>

            <div className="badge-pill badge-cyan" style={{ fontSize: '0.75rem' }}>
              <ShieldCheck size={13} /> Air-Gapped AES-256 Vector Memory
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: '#ffffff', marginBottom: '1.25rem' }}>
              PLATFORM &amp; SERVICES
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
              <a href="#overview" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Executive Overview</a>
              <a href="#architecture" style={{ color: '#cbd5e1', textDecoration: 'none' }}>3-Step Ingestion Pipeline</a>
              <a href="#simulator" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Live Agent Simulator</a>
              <a href="#pricing" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Pricing &amp; ROI Calculator</a>
              <a href="#security" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Security &amp; Data Governance</a>
              <a href="#comparison" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Why Choose GenNeo AI</a>
            </div>
          </div>

          {/* Column 3: Founder & Support SLA */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: '#ffffff', marginBottom: '1.25rem' }}>
              FOUNDER CONTACT &amp; SLA
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <div>Lead AI Engineer: <strong>Bhavesh Mali</strong></div>
              <div>Support SLA: <strong>&lt; 2-Hour Response Guaranteed</strong></div>
              <a href="mailto:genneob2c@gmail.com" style={{ color: '#38bdf8', textDecoration: 'none' }}>genneob2c@gmail.com</a>
              <a href="https://wa.me/918468950877" target="_blank" rel="noreferrer" style={{ color: '#34d399', textDecoration: 'none' }}>+91 8468950877 (WhatsApp)</a>
            </div>
          </div>

          {/* Column 4: Quick Action */}
          <div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: '#ffffff', marginBottom: '1.25rem' }}>
              GET STARTED TODAY
            </h4>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
              Deploy zero-hallucination AI agents on your site in 5–14 business days.
            </p>
            <button 
              onClick={onOpenBooking}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem', padding: '0.65rem 1rem' }}
            >
              <Calendar size={15} /> Book 15-Min Scoping Call
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div 
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.06)', 
            paddingTop: '1.5rem', 
            display: 'flex', 
            alignItems: 'center', 
            justify: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#64748b',
            fontFamily: "'Montserrat', sans-serif"
          }}
        >
          <div>
            © {new Date().getFullYear()} GenNeo AI Solutions. All rights reserved. Built with 100% grounded accuracy.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <span style={{ color: '#94a3b8' }}>Montserrat Typography System</span>
            <span style={{ color: '#34d399' }}>● System Operational (100% SLA)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
