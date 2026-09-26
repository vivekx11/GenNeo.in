import React, { useState } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  UserCheck, 
  Sparkles,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('2026-09-29');
  const [selectedTime, setSelectedTime] = useState('10:00 AM EST');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    tierInterest: 'Growth AI Agent ($1,111 + $333/mo)'
  });

  if (!isOpen) return null;

  const availableTimes = [
    '09:00 AM EST',
    '10:30 AM EST',
    '01:00 PM EST',
    '02:30 PM EST',
    '04:00 PM EST'
  ];

  const handleConfirm = (e) => {
    e.preventDefault();
    setStep(2);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // fallback
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        background: 'rgba(9, 11, 16, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justify: 'center',
        padding: '1.5rem'
      }}
    >
      <div 
        className="glass-card"
        style={{
          maxWidth: '560px',
          width: '100%',
          borderRadius: '24px',
          background: '#0d1117',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
          position: 'relative'
        }}
      >
        {/* Modal Header */}
        <div style={{ padding: '1.25rem 1.5rem', background: 'linear-gradient(135deg, #1e1b4b, #0f172a)', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <CalendarIcon size={20} color="#38bdf8" />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.1rem', color: '#ffffff' }}>
              15-Min Scoping &amp; Discovery Call
            </span>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '0.2rem' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: '1.75rem' }}>
          
          {step === 1 ? (
            <form onSubmit={handleConfirm} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '0.9rem', borderRadius: '12px', border: '1px solid rgba(99, 102, 241, 0.25)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <UserCheck size={24} color="#818cf8" />
                <div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: '#ffffff' }}>
                    Direct With Bhavesh Mali
                  </div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.78rem', color: '#94a3b8' }}>
                    Founder &amp; Lead AI Engineer (&lt; 2-hr response SLA)
                  </div>
                </div>
              </div>

              {/* Slot Selectors */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.3rem' }}>
                    SELECT DATE
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    style={{
                      width: '100%',
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.88rem',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: '#161b22',
                      color: '#ffffff',
                      outline: 'none'
                    }}
                  >
                    <option value="2026-09-29">Tue, Sep 29, 2026</option>
                    <option value="2026-09-30">Wed, Sep 30, 2026</option>
                    <option value="2026-10-01">Thu, Oct 01, 2026</option>
                    <option value="2026-10-02">Fri, Oct 02, 2026</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.3rem' }}>
                    TIME SLOT
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    style={{
                      width: '100%',
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '0.88rem',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: '#161b22',
                      color: '#ffffff',
                      outline: 'none'
                    }}
                  >
                    {availableTimes.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.3rem' }}>
                  FULL NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.88rem',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: '#161b22',
                    color: '#ffffff',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.3rem' }}>
                  WORK EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@techcorp.io"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.88rem',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: '#161b22',
                    color: '#ffffff',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.3rem' }}>
                  TIER OF INTEREST
                </label>
                <select
                  value={formData.tierInterest}
                  onChange={(e) => setFormData({ ...formData, tierInterest: e.target.value })}
                  style={{
                    width: '100%',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.88rem',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: '#161b22',
                    color: '#ffffff',
                    outline: 'none'
                  }}
                >
                  <option value="Starter AI Agent ($999 + $222/mo)">Starter AI Agent ($999 + $222/mo)</option>
                  <option value="Growth AI Agent ($1,111 + $333/mo)">Growth AI Agent ($1,111 + $333/mo - ⭐ Most Popular)</option>
                  <option value="Custom Enterprise">Custom Enterprise (Private Cloud / Multi-Agent)</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.8rem' }}
              >
                Confirm 15-Min Scoping Slot <ArrowRight size={16} />
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', margin: '0 auto 1.25rem' }}>
                <CheckCircle2 size={36} />
              </div>

              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Scoping Call Confirmed!
              </h3>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.92rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Calendar invitation sent to <strong>{formData.email}</strong> for <strong>{selectedDate} at {selectedTime}</strong>. Lead Engineer Bhavesh Mali will review your site pre-call.
              </p>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', textAlign: 'left', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                <div style={{ color: '#38bdf8', fontWeight: 700, marginBottom: '0.3rem' }}>Need immediate assistance?</div>
                <div style={{ color: '#94a3b8' }}>WhatsApp Bhavesh Mali directly: <strong>+91 8468950877</strong></div>
              </div>

              <button
                onClick={onClose}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Done
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
