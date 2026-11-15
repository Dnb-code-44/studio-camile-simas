import { MessageCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_URL } from '../../config';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Booking.css';

export default function Booking() {
  const ref = useScrollReveal();

  return (
    <section id="agendamento" className="booking" ref={ref}>
      {/* Background decorativo */}
      <div className="booking__bg" aria-hidden="true">
        <div className="booking__bg-shape booking__bg-shape--1" />
        <div className="booking__bg-shape booking__bg-shape--2" />
      </div>

      <div className="container booking__inner">
        <div className="booking__content reveal">
          {/* Ícone decorativo */}
          <div className="booking__icon" aria-hidden="true">
            <Sparkles size={28} strokeWidth={1.3} />
          </div>

          {/* Label */}
          <p className="booking__label">Pronta para começar?</p>

          {/* Título */}
          <h2 className="booking__title">
            Seu momento de autocuidado<br />
            <em className="booking__title-em">começa aqui.</em>
          </h2>

          {/* Texto */}
          <p className="booking__text">
            Agende agora pelo WhatsApp e garanta o seu horário.<br />
            Atendimento rápido, prático e sem complicações.
          </p>

          {/* Divisor ornamental */}
          <div className="booking__ornament" aria-hidden="true">
            <span className="booking__ornament-line" />
            <span className="booking__ornament-diamond" />
            <span className="booking__ornament-line" />
          </div>

          {/* CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn booking__cta"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
            Agendar pelo WhatsApp
          </a>

          <p className="booking__footnote">
            Resposta rápida • Atendimento personalizado
          </p>
        </div>
      </div>
    </section>
  );
}
