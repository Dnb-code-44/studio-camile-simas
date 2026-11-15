import { Award, Heart, Star, Users } from 'lucide-react';
import { WHATSAPP_URL } from '../../config';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const VALUES = [
  {
    icon: Heart,
    title: 'Cuidado genuíno',
    desc: 'Cada cliente recebe atenção individual e um atendimento pensado especialmente para ela.',
  },
  {
    icon: Award,
    title: 'Técnica e precisão',
    desc: 'Procedimentos realizados com certificação, materiais premium e constante atualização.',
  },
  {
    icon: Star,
    title: 'Resultados naturais',
    desc: 'O foco é realçar a beleza única de cada cliente, sem excessos ou padrões impostos.',
  },
  {
    icon: Users,
    title: 'Ambiente acolhedor',
    desc: 'Um espaço pensado para o seu conforto e bem-estar desde o momento em que você entra.',
  },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="sobre" className="section about" ref={ref}>
      <div className="container about__container">
        {/* Bloco de imagem */}
        <div className="about__visual reveal-left">
          <div className="about__img-wrapper">
            {/*
             * Substitua o src abaixo por uma foto real do estúdio ou da profissional.
             * Exemplo: src="/images/studio.jpg"
             */}
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=85&auto=format&fit=crop"
              alt="Interior do Studio Camile Simas"
              className="about__img"
              loading="lazy"
            />
            {/* Badge flutuante */}
            <div className="about__badge" aria-hidden="true">
              <span className="about__badge-value">5+</span>
              <span className="about__badge-label">anos de<br />experiência</span>
            </div>
          </div>

          {/* Elemento decorativo */}
          <div className="about__img-deco" aria-hidden="true" />
        </div>

        {/* Bloco de texto */}
        <div className="about__content reveal-right">
          <p className="section-label">Quem somos</p>
          <h2 className="section-title about__title">
            Beleza que nasce<br />do cuidado com você
          </h2>

          <div className="about__text">
            <p>
              Mais do que procedimentos estéticos, oferecemos experiências de cuidado,
              autoestima e valorização da beleza natural. Cada detalhe é pensado para
              proporcionar resultados delicados e personalizados.
            </p>
            <p>
              O Studio Camile Simas nasceu da paixão por transformar o cuidado pessoal
              em um momento de prazer. Combinamos técnicas modernas com um atendimento
              próximo e humanizado, porque acreditamos que toda mulher merece sentir-se
              especial a cada visita.
            </p>
          </div>

          {/* Divisor */}
          <div className="ornament">
            <div className="ornament-diamond" />
          </div>

          {/* Valores */}
          <div className="about__values">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="about__value-item">
                <span className="about__value-icon" aria-hidden="true">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <div>
                  <h4 className="about__value-title">{title}</h4>
                  <p className="about__value-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary about__cta"
          >
            Conheça o studio
          </a>
        </div>
      </div>
    </section>
  );
}
