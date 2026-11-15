import { ArrowDown, Calendar, ChevronRight } from 'lucide-react';
import { WHATSAPP_URL } from '../../config';
import './Hero.css';

export default function Hero() {
  const scrollToServices = () => {
    const el = document.getElementById('servicos');
    if (el) {
      const offset = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--header-h')
      ) || 76;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero" aria-label="Apresentação do Studio Camile Simas">
      {/* Imagem de fundo com overlay */}
      <div className="hero__bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600&q=85&auto=format&fit=crop"
          alt=""
          className="hero__bg-img"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero__overlay" />
      </div>

      {/* Detalhe decorativo esquerdo */}
      <div className="hero__side-line" aria-hidden="true">
        <span className="hero__side-text">Studio Camile Simas</span>
        <div className="hero__side-rule" />
      </div>

      {/* Conteúdo principal */}
      <div className="container hero__content">
        <div className="hero__text-block">
          {/* Label superior */}
          <p className="hero__label">
            <span className="hero__label-dot" />
            Estúdio de Beleza em Barueri
          </p>

          {/* Título */}
          <h1 className="hero__title">
            Sua beleza,{' '}
            <em className="hero__title-em">realçada</em>
            <br />
            em cada detalhe.
          </h1>

          {/* Divisor ornamental */}
          <div className="hero__ornament" aria-hidden="true">
            <span className="hero__ornament-line" />
            <span className="hero__ornament-diamond" />
            <span className="hero__ornament-line" />
          </div>

          {/* Subtítulo */}
          <p className="hero__subtitle">
            Procedimentos estéticos de excelência para valorizar
            a sua beleza natural. Unhas, cílios, sobrancelhas e
            micropigmentação com cuidado e precisão.
          </p>

          {/* CTAs */}
          <div className="hero__actions">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold hero__btn-primary"
            >
              <Calendar size={16} strokeWidth={2} />
              Agende seu horário
            </a>
            <button
              className="btn btn-outline-white hero__btn-secondary"
              onClick={scrollToServices}
            >
              Conheça nossos serviços
              <ChevronRight size={16} strokeWidth={2} />
            </button>
          </div>

          {/* Badges de confiança */}
          <div className="hero__trust">
            {[
              'Profissional certificada',
              'Atendimento personalizado',
              'Produtos premium',
            ].map((item) => (
              <span key={item} className="hero__trust-badge">
                <span className="hero__trust-dot" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="hero__scroll-indicator"
        onClick={scrollToServices}
        aria-label="Rolar para serviços"
      >
        <ArrowDown size={18} strokeWidth={1.5} />
      </button>

      {/* Faixa inferior decorativa */}
      <div className="hero__bottom-bar" aria-hidden="true">
        <div className="container hero__stats">
          {[
            { value: '5+',   label: 'Anos de experiência' },
            { value: '500+', label: 'Clientes atendidas' },
            { value: '4',    label: 'Especialidades' },
            { value: '★ 5.0', label: 'Avaliação média' },
          ].map(({ value, label }) => (
            <div key={label} className="hero__stat">
              <span className="hero__stat-value">{value}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
