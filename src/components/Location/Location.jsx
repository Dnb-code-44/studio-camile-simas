import { MapPin, MessageCircle, Clock } from 'lucide-react';
import InstagramIcon from '../icons/InstagramIcon';
import { STUDIO, WHATSAPP_URL, WHATSAPP_NUMBER } from '../../config';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Location.css';

/* Endereço usado no link do Google Maps — edite conforme necessário */
const MAPS_QUERY = encodeURIComponent('Studio Camile Simas, Barueri, São Paulo');
const MAPS_URL   = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

/* Número formatado para exibição */
const WHATSAPP_DISPLAY = WHATSAPP_NUMBER
  .replace(/^55(\d{2})(\d{5})(\d{4})$/, '+55 ($1) $2-$3');

export default function Location() {
  const ref = useScrollReveal();

  return (
    <section id="contato" className="section location" ref={ref}>
      <div className="container location__container">
        {/* Bloco de informações */}
        <div className="location__info reveal-left">
          <p className="section-label">Onde nos encontrar</p>
          <h2 className="section-title">Localização<br />e contato</h2>
          <p className="location__intro">
            Estamos localizados no coração de Barueri. Venha nos visitar
            ou entre em contato para mais informações.
          </p>

          {/* Cards de contato */}
          <div className="location__cards">
            {/* Endereço */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="location__card"
              aria-label="Ver no Google Maps"
            >
              <span className="location__card-icon" aria-hidden="true">
                <MapPin size={20} strokeWidth={1.5} />
              </span>
              <div>
                <p className="location__card-title">Endereço</p>
                <p className="location__card-value">{STUDIO.addressFull}</p>
                <span className="location__card-link">Ver no mapa →</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="location__card"
              aria-label="Falar pelo WhatsApp"
            >
              <span className="location__card-icon location__card-icon--green" aria-hidden="true">
                <MessageCircle size={20} strokeWidth={1.5} />
              </span>
              <div>
                <p className="location__card-title">WhatsApp</p>
                <p className="location__card-value">{WHATSAPP_DISPLAY}</p>
                <span className="location__card-link">Enviar mensagem →</span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={STUDIO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="location__card"
              aria-label="Visitar Instagram"
            >
              <span className="location__card-icon location__card-icon--pink" aria-hidden="true">
                <InstagramIcon size={20} strokeWidth={1.5} />
              </span>
              <div>
                <p className="location__card-title">Instagram</p>
                <p className="location__card-value">{STUDIO.instagramHandle}</p>
                <span className="location__card-link">Ver perfil →</span>
              </div>
            </a>
          </div>

          {/* Horários */}
          <div className="location__hours">
            <div className="location__hours-header">
              <Clock size={16} strokeWidth={1.5} />
              <span>Horários de atendimento</span>
            </div>
            <ul className="location__hours-list">
              {STUDIO.hours.map(({ days, time }) => (
                <li key={days} className="location__hours-item">
                  <span className="location__hours-days">{days}</span>
                  <span className="location__hours-rule" aria-hidden="true" />
                  <span className="location__hours-time">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mapa */}
        <div className="location__map-block reveal-right">
          <div className="location__map-wrapper">
            {/*
             * Para incorporar o Google Maps real:
             * 1. Acesse https://maps.google.com
             * 2. Pesquise o endereço do studio
             * 3. Clique em "Compartilhar" → "Incorporar um mapa"
             * 4. Substitua o iframe abaixo pelo código gerado
             */}
            <iframe
              title="Localização Studio Camile Simas"
              className="location__map-iframe"
              src={`https://maps.google.com/maps?q=${MAPS_QUERY}&output=embed&z=15`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Mapa com a localização do Studio Camile Simas"
            />
            <div className="location__map-overlay" aria-hidden="true" />
          </div>

          {/* Card sobreposto */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="location__map-card"
          >
            <span className="location__map-card-pin" aria-hidden="true">
              <MapPin size={18} strokeWidth={1.5} />
            </span>
            <div>
              <p className="location__map-card-title">{STUDIO.name}</p>
              <p className="location__map-card-addr">{STUDIO.address}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
