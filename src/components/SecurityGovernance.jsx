import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileCheck, 
  Cloud, 
  Server, 
  CheckCircle2, 
  FileText,
  Key
} from 'lucide-react';

export default function SecurityGovernance() {
  return (
    <section 
      id="security" 
      style={{ 
        padding: '5rem 0',
        position: 'relative',
        background: 'rgba(12, 16, 26, 0.7)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="badge-pill badge-cyan" style={{ marginBottom: '0.75rem' }}>
            <ShieldCheck size={14} /> Enterprise Governance
          </div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
            🔒 Security &amp; Data Governance
          </h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.05rem', color: '#94a3b8', maxWidth: '780px', margin: '0 auto' }}>
            Your intellectual property, customer data, and scraped documentation remain strictly private, isolated, and encrypted.
          </p>
        </div>

        {/* 5 Security Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
          
          <div className="glass-card" style={{ padding: '1.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', marginBottom: '1rem' }}>
              <Server size={22} />
            </div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
              Air-Gapped Vector Memory
            </h4>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
              Client knowledge bases are isolated in dedicated namespaces. Zero cross-referencing or pooling with other accounts.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '1.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8', marginBottom: '1rem' }}>
              <Key size={22} />
            </div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
              AES-256 Encryption
            </h4>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
              All ingested text, vector embeddings, and cached responses are encrypted at rest using military-grade AES-256 keys.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '1.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', marginBottom: '1rem' }}>
              <ShieldCheck size={22} />
            </div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
              Zero LLM Training Policy
            </h4>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
              Scraped or uploaded business IP is NEVER shared with OpenAI, Anthropic, or used to fine-tune public baseline models.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '1.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c084fc', marginBottom: '1rem' }}>
              <Cloud size={22} />
            </div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
              Private Cloud Data Residency
            </h4>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
              Enterprise option to run vector memory &amp; LLM instances inside your AWS Bedrock, Azure OpenAI, or GCP Vertex AI VPC.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '1.75rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24', marginBottom: '1rem' }}>
              <FileCheck size={22} />
            </div>
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
              Audit-Friendly Telemetry Logs
            </h4>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
              Comprehensive delta-sync logs and grounded query audit trails available on request for compliance and SOC2 reviews.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
