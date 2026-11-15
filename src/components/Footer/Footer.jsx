import { MessageCircle, MapPin, Scissors, Heart } from 'lucide-react';
import InstagramIcon from '../icons/InstagramIcon';
import { STUDIO, WHATSAPP_URL } from '../../config';
import './Footer.css';

const NAV_LINKS = [
  { label: 'Início',      href: '#inicio' },
  { label: 'Serviços',    href: '#servicos' },
  { label: 'Galeria',     href: '#galeria' },
  { label: 'Sobre',       href: '#sobre' },
  { label: 'Contato',     href: '#contato' },
];

const scrollTo = (href) => {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    const offset = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--header-h')
    ) || 76;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  }
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      {/* Divisor decorativo */}
      <div className="footer__divider" aria-hidden="true">
        <span className="footer__divider-line" />
        <span className="footer__divider-diamond" />
        <span className="footer__divider-line" />
      </div>

      <div className="container footer__inner">
        {/* Logo + descrição */}
        <div className="footer__brand">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollTo('#inicio'); }} className="footer__logo">
            <span className="footer__logo-icon" aria-hidden="true">
              <Scissors size={16} strokeWidth={1.5} />
            </span>
            <span className="footer__logo-text">
              <span className="footer__logo-studio">Studio</span>
              <span className="footer__logo-name">Camile Simas</span>
            </span>
          </a>
          <p className="footer__desc">
            Estúdio de beleza especializado em unhas, cílios, sobrancelhas
            e micropigmentação labial. Em Barueri, São Paulo.
          </p>
          {/* Social icons */}
          <div className="footer__social">
            <a
              href={STUDIO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram do Studio Camile Simas"
            >
              <InstagramIcon size={18} strokeWidth={1.5} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link footer__social-link--wa"
              aria-label="WhatsApp do Studio Camile Simas"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Navegação */}
        <div className="footer__col">
          <h4 className="footer__col-title">Navegação</h4>
          <ul className="footer__nav">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="footer__nav-link"
                  onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Serviços */}
        <div className="footer__col">
          <h4 className="footer__col-title">Serviços</h4>
          <ul className="footer__nav">
            {[
              'Alongamento de Unhas',
              'Extensão de Cílios',
              'Design de Sobrancelhas',
              'Micropigmentação Labial',
            ].map((s) => (
              <li key={s}>
                <a
                  href="#servicos"
                  className="footer__nav-link"
                  onClick={(e) => { e.preventDefault(); scrollTo('#servicos'); }}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contato</h4>
          <ul className="footer__contact">
            <li className="footer__contact-item">
              <MapPin size={15} strokeWidth={1.5} />
              <span>{STUDIO.addressFull}</span>
            </li>
            <li className="footer__contact-item">
              <MessageCircle size={15} strokeWidth={1.5} />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer__contact-link">
                WhatsApp
              </a>
            </li>
            <li className="footer__contact-item">
              <InstagramIcon size={15} strokeWidth={1.5} />
              <a href={STUDIO.instagram} target="_blank" rel="noopener noreferrer" className="footer__contact-link">
                {STUDIO.instagramHandle}
              </a>
            </li>
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold footer__cta"
          >
            <MessageCircle size={15} strokeWidth={1.8} />
            Agendar agora
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {year} Studio Camile Simas. Todos os direitos reservados.
          </p>
          <p className="footer__love">
            Feito com <Heart size={12} strokeWidth={2} aria-label="amor" /> em Barueri, SP
          </p>
        </div>
      </div>
    </footer>
  );
}
