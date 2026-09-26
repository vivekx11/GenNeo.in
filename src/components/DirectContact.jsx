import React from 'react';
import { 
  Phone, 
  Mail, 
  Share2, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  UserCheck,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export default function DirectContact({ onOpenBooking }) {
  return (
    <section 
      id="contact" 
      style={{ 
        padding: '5rem 0',
        position: 'relative',
        background: 'rgba(12, 16, 26, 0.85)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-pill badge-emerald" style={{ marginBottom: '0.75rem' }}>
            <UserCheck size={14} /> Founder Direct SLA
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
            📞 Direct Contact &amp; Engineering Support
          </h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.05rem', color: '#94a3b8', maxWidth: '750px', margin: '0 auto' }}>
            All packages include direct access to Lead AI Engineer &amp; Founder Bhavesh Mali, with a guaranteed &lt; 2-hour response SLA.
          </p>
        </div>

        {/* Founder Profile & Contact Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Card 1: Founder Direct Card */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '2.5rem', 
              background: 'linear-gradient(135deg, rgba(18, 22, 34, 0.95), rgba(30, 27, 75, 0.7))',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justify: 'center',
                  color: '#ffffff',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: '1.6rem',
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)'
                }}>
                  BM
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                    Bhavesh Mali
                  </h3>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '0.9rem', color: '#38bdf8' }}>
                    Founder &amp; Lead AI Engineer
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#34d399', fontWeight: 700, marginTop: '0.2rem' }}>
                    <Clock size={13} /> &lt; 2-Hour Response SLA
                  </div>
                </div>
              </div>

              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.92rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Whether you need a custom scraping pipeline, an air-gapped vector store deployment, or dynamic API tool calling, you talk directly with the engineer building your agent.
              </p>

              {/* Direct Info List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
                <a 
                  href="mailto:genneob2c@gmail.com" 
                  style={{ 
                    textDecoration: 'none', 
                    color: '#ffffff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem',
                    background: 'rgba(255,255,255,0.03)',
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600
                  }}
                >
                  <Mail size={20} color="#38bdf8" />
                  <span>genneob2c@gmail.com</span>
                </a>

                <a 
                  href="https://wa.me/918468950877" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ 
                    textDecoration: 'none', 
                    color: '#ffffff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600
                  }}
                >
                  <Phone size={20} color="#34d399" />
                  <span>+91 8468950877 (WhatsApp / Direct)</span>
                </a>

                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ 
                    textDecoration: 'none', 
                    color: '#ffffff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem',
                    background: 'rgba(255,255,255,0.03)',
                    padding: '0.8rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600
                  }}
                >
                  <Share2 size={20} color="#818cf8" />
                  <span>GenNeo AI Solutions Profile</span>
                </a>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button 
                onClick={onOpenBooking}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Calendar size={18} /> Book 15-Min Scoping Call
              </button>
            </div>
          </div>

          {/* Card 2: Quick Discovery Form Simulation */}
          <div className="glass-card" style={{ padding: '2.5rem', background: 'rgba(18, 22, 34, 0.85)' }}>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              Quick Scoping Inquiry
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
              Send your project specifications directly to Lead AI Engineer Bhavesh Mali for instant evaluation.
            </p>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! Your scoping inquiry has been submitted directly to Founder Bhavesh Mali. Expect a response within < 2 hours.');
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <div>
                <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>
                  YOUR NAME
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Sarah Jenkins"
                  style={{
                    width: '100%',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.9rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: '#0d1117',
                    color: '#ffffff',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>
                  WORK EMAIL
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. sarah@company.com"
                  style={{
                    width: '100%',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.9rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: '#0d1117',
                    color: '#ffffff',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>
                  WEBSITE OR DOCUMENTATION URL TO SCRAPE
                </label>
                <input 
                  type="url" 
                  placeholder="e.g. https://company.com/docs"
                  style={{
                    width: '100%',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.9rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: '#0d1117',
                    color: '#ffffff',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '0.4rem' }}>
                  PROJECT REQUIREMENTS / GOALS
                </label>
                <textarea 
                  rows="3"
                  placeholder="Describe your site size, desired integrations (Calendly, HubSpot, WhatsApp), or private cloud needs..."
                  style={{
                    width: '100%',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.9rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: '#0d1117',
                    color: '#ffffff',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
              >
                Send Inquiry To Founder (&lt; 2-Hr Response SLA)
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
