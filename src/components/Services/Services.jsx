import { ArrowUpRight } from 'lucide-react';
import { WHATSAPP_URL } from '../../config';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Services.css';

const SERVICES = [
  {
    id: 'unhas',
    image: '/studio-camile-simas/images/unhas.jpg',
    title: 'Alongamento de Unhas',
    subtitle: 'Gel & Fibra de Vidro',
    description:
      'Unhas perfeitas que combinam com sua personalidade. Técnica em gel e fibra de vidro com acabamento impecável, durabilidade e leveza.',
    tag: 'Mais procurado',
  },
  {
    id: 'cilios',
    image: '/studio-camile-simas/images/cilios.jpg',
    title: 'Extensão de Cílios',
    subtitle: 'Volume Russo & Clássico',
    description:
      'Olhar marcante e expressivo sem esforço. Aplicação fio a fio ou volume russo com materiais hipoalergênicos de alta qualidade.',
    tag: null,
  },
  {
    id: 'sobrancelhas',
    image: '/studio-camile-simas/images/sobrancelhas.jpg',
    title: 'Design de Sobrancelhas',
    subtitle: 'Modelagem & Henna',
    description:
      'Sobrancelhas desenhadas para valorizar o seu rosto. Mapeamento personalizado, henna e técnicas de remoção precisas.',
    tag: null,
  },
  {
    id: 'micropigmentacao',
    image: '/studio-camile-simas/images/micropigmentacao.webp',
    title: 'Micropigmentação Labial',
    subtitle: 'Técnica Aquarela',
    description:
      'Lábios com cor, definição e beleza duradoura. Resultado natural e delicado que realça o volume e a expressão do seu sorriso.',
    tag: 'Premium',
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="servicos" className="section services" ref={ref}>
      <div className="container">
        <div className="services__header reveal">
          <p className="section-label">O que oferecemos</p>
          <h2 className="section-title">Serviços especializados<br />para realçar sua beleza</h2>
          <p className="section-subtitle">
            Cada procedimento é realizado com técnica apurada, produtos selecionados
            e atenção aos mínimos detalhes para garantir o seu melhor resultado.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <article
              key={service.id}
              className={`service-card reveal delay-${i + 1}`}
              aria-label={`Serviço: ${service.title}`}
            >
              <div className="service-card__img-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card__img"
                  loading="lazy"
                />
                <div className="service-card__img-overlay" aria-hidden="true" />
                {service.tag && (
                  <span className="service-card__tag">{service.tag}</span>
                )}
              </div>

              <div className="service-card__body">
                <p className="service-card__subtitle">{service.subtitle}</p>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>

                <div className="service-card__footer">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-card__cta"
                    aria-label={`Agendar ${service.title}`}
                  >
                    <span>Agendar agora</span>
                    <span className="service-card__cta-icon" aria-hidden="true">
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
