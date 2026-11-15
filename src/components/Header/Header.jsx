import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { WHATSAPP_URL } from '../../config';
import './Header.css';

const NAV_LINKS = [
  { label: 'Início',    href: '#inicio' },
  { label: 'Serviços',  href: '#servicos' },
  { label: 'Galeria',   href: '#galeria' },
  { label: 'Sobre',     href: '#sobre' },
  { label: 'Contato',   href: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeSection, setActive] = useState('inicio');

  /* Detecta scroll para adicionar sombra no header */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Fecha menu ao redimensionar para desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* Bloqueia scroll do body quando menu mobile está aberto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* Intersection Observer para seção ativa */
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace('#', ''));
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  const handleNavClick = useCallback((href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 76;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="container header__inner">
          {/* Logo */}
          <a
            href="#inicio"
            className="header__logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
            aria-label="Studio Camile Simas — página inicial"
          >
            <span className="header__logo-icon" aria-hidden="true">
              <Scissors size={18} strokeWidth={1.5} />
            </span>
            <span className="header__logo-text">
              <span className="header__logo-name">Studio</span>
              <span className="header__logo-surname">Camile Simas</span>
            </span>
          </a>

          {/* Nav desktop */}
          <nav className="header__nav" aria-label="Navegação principal">
            <ul className="header__nav-list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`header__nav-link${activeSection === href.replace('#', '') ? ' header__nav-link--active' : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA desktop */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold header__cta"
          >
            Agendar horário
          </a>

          {/* Hambúrguer mobile */}
          <button
            className="header__hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-menu__nav" aria-label="Navegação mobile">
          <ul className="mobile-menu__list">
            {NAV_LINKS.map(({ label, href }, i) => (
              <li
                key={href}
                className="mobile-menu__item"
                style={{ transitionDelay: menuOpen ? `${i * 55 + 80}ms` : '0ms' }}
              >
                <a
                  href={href}
                  className={`mobile-menu__link${activeSection === href.replace('#', '') ? ' mobile-menu__link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold mobile-menu__cta"
            style={{ transitionDelay: menuOpen ? '360ms' : '0ms' }}
            onClick={() => setMenuOpen(false)}
          >
            Agendar horário
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
