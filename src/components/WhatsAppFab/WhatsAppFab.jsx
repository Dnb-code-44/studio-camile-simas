import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_URL, STUDIO } from '../../config';
import './WhatsAppFab.css';

export default function WhatsAppFab() {
  const [visible, setVisible]   = useState(false);
  const [tooltip, setTooltip]   = useState(false);
  const [dismissed, setDismiss] = useState(false);

  /* Aparece após 3 s ou quando o usuário rola 400 px */
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    const onScroll = () => { if (window.scrollY > 400) setVisible(true); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { clearTimeout(timer); window.removeEventListener('scroll', onScroll); };
  }, []);

  /* Mostra tooltip automaticamente após aparecer */
  useEffect(() => {
    if (visible && !dismissed) {
      const t = setTimeout(() => setTooltip(true),  600);
      const h = setTimeout(() => setTooltip(false), 5000);
      return () => { clearTimeout(t); clearTimeout(h); };
    }
  }, [visible, dismissed]);

  return (
    <div className={`wa-fab-wrapper${visible ? ' wa-fab-wrapper--visible' : ''}`}>
      {/* Tooltip */}
      {tooltip && !dismissed && (
        <div className="wa-fab-tooltip" role="tooltip">
          <button
            className="wa-fab-tooltip__close"
            onClick={() => { setTooltip(false); setDismiss(true); }}
            aria-label="Fechar sugestão"
          >
            <X size={12} strokeWidth={2} />
          </button>
          <p className="wa-fab-tooltip__text">
            Olá! Posso te ajudar a agendar seu horário? 😊
          </p>
          <span className="wa-fab-tooltip__name">{STUDIO.name}</span>
          <div className="wa-fab-tooltip__arrow" aria-hidden="true" />
        </div>
      )}

      {/* Botão principal */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-fab"
        aria-label="Fale conosco pelo WhatsApp"
        onClick={() => setTooltip(false)}
      >
        {/* Pulso animado */}
        <span className="wa-fab__pulse" aria-hidden="true" />
        <MessageCircle size={26} strokeWidth={1.8} />
      </a>
    </div>
  );
}
