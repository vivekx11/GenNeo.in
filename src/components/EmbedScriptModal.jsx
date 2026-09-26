import React, { useState } from 'react';
import { X, Code2, Copy, Check, Terminal, Globe } from 'lucide-react';

export default function EmbedScriptModal({ isOpen, onClose }) {
  const [platform, setPlatform] = useState('html');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const scriptCode = {
    html: `<!-- GenNeo AI Grounded Agent 1-Line Embed -->\n<script \n  src="https://cdn.genneo.ai/v1/widget.js" \n  data-agent-id="gn_live_9481a7" \n  async\n></script>`,
    wordpress: `// Add to WordPress Header / Footer Scripts plugin or theme functions.php\nfunction add_genneo_agent() {\n    echo '<script src="https://cdn.genneo.ai/v1/widget.js" data-agent-id="gn_live_9481a7" async></script>';\n}\nadd_action('wp_footer', 'add_genneo_agent');`,
    webflow: `<!-- Webflow Project Settings -> Custom Code -> Footer Code -->\n<script \n  src="https://cdn.genneo.ai/v1/widget.js" \n  data-agent-id="gn_live_9481a7" \n  async\n></script>`,
    shopify: `<!-- Shopify Admin -> Online Store -> Themes -> Edit Code -> theme.liquid before </body> -->\n<script \n  src="https://cdn.genneo.ai/v1/widget.js" \n  data-agent-id="gn_live_9481a7" \n  async\n></script>`,
    react: `import { useEffect } from 'react';\n\nexport default function App() {\n  useEffect(() => {\n    const script = document.createElement('script');\n    script.src = 'https://cdn.genneo.ai/v1/widget.js';\n    script.setAttribute('data-agent-id', 'gn_live_9481a7');\n    script.async = true;\n    document.body.appendChild(script);\n  }, []);\n  return <div>Your App</div>;\n}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(scriptCode[platform]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          maxWidth: '640px',
          width: '100%',
          borderRadius: '24px',
          background: '#0d1117',
          border: '1px solid rgba(6, 182, 212, 0.4)',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
        }}
      >
        {/* Header */}
        <div style={{ padding: '1.25rem 1.5rem', background: 'linear-gradient(135deg, #0f172a, #161b22)', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Code2 size={20} color="#38bdf8" />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: '1.1rem', color: '#ffffff' }}>
              1-Line Embed Script Generator
            </span>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '1.75rem' }}>
          
          {/* Platform Switcher */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
            {[
              { id: 'html', label: 'HTML5' },
              { id: 'wordpress', label: 'WordPress' },
              { id: 'webflow', label: 'Webflow' },
              { id: 'shopify', label: 'Shopify' },
              { id: 'react', label: 'React / Next.js' }
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setPlatform(p.id)}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  border: platform === p.id ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)',
                  background: platform === p.id ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255,255,255,0.03)',
                  color: platform === p.id ? '#38bdf8' : '#94a3b8'
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Code Container */}
          <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
            <pre 
              style={{ 
                background: '#090b10', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '12px', 
                padding: '1.25rem', 
                color: '#34d399', 
                fontFamily: 'monospace', 
                fontSize: '0.85rem',
                overflowX: 'auto',
                margin: 0
              }}
            >
              {scriptCode[platform]}
            </pre>

            <button
              onClick={handleCopy}
              style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#ffffff',
                padding: '0.4rem 0.75rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: '0.78rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              {copied ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.5' }}>
            💡 <strong>Zero Backend Integration Required:</strong> Simply paste this tag before the closing <code>&lt;/body&gt;</code> tag on your website. Your grounded agent will initialize immediately.
          </div>

        </div>
      </div>
    </div>
  );
}
