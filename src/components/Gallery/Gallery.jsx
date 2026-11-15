import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import InstagramIcon from '../icons/InstagramIcon';
import { STUDIO } from '../../config';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Gallery.css';

/*
 * Para adicionar fotos reais: substitua os valores de "src" abaixo
 * por caminhos locais (ex: "/images/galeria/foto1.jpg") ou URLs.
 * "span" controla o tamanho da célula no grid (1 = normal, 2 = largo/alto).
 */
const GALLERY_ITEMS = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=85&auto=format&fit=crop',
    alt: 'Alongamento de unhas em gel com acabamento nude',
    category: 'Unhas',
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=85&auto=format&fit=crop',
    alt: 'Design de sobrancelhas modeladas com precisão',
    category: 'Sobrancelhas',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=800&q=85&auto=format&fit=crop',
    alt: 'Extensão de cílios volume russo',
    category: 'Cílios',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85&auto=format&fit=crop',
    alt: 'Micropigmentação labial com técnica aquarela',
    category: 'Micropigmentação',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=85&auto=format&fit=crop',
    alt: 'Unhas decoradas com nail art delicada',
    category: 'Unhas',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=85&auto=format&fit=crop',
    alt: 'Resultado de cílios naturais com extensão clássica',
    category: 'Cílios',
    colSpan: 1,
    rowSpan: 1,
  },
];

const FILTERS = ['Todos', 'Unhas', 'Cílios', 'Sobrancelhas', 'Micropigmentação'];

export default function Gallery() {
  const ref = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeFilter === 'Todos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="section gallery" ref={ref}>
      <div className="container">
        {/* Cabeçalho */}
        <div className="gallery__header reveal">
          <p className="section-label">Nossos trabalhos</p>
          <h2 className="section-title">Resultados que falam<br />por si mesmos</h2>
          <p className="section-subtitle">
            Cada foto representa dedicação, técnica e o cuidado que colocamos
            em cada atendimento. Confira alguns dos nossos trabalhos.
          </p>
        </div>

        {/* Filtros */}
        <div className="gallery__filters reveal delay-1" role="tablist" aria-label="Filtrar por categoria">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={activeFilter === f}
              className={`gallery__filter-btn${activeFilter === f ? ' gallery__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery__grid reveal delay-2">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="gallery__item"
              style={{
                gridColumn: `span ${item.colSpan}`,
                gridRow: `span ${item.rowSpan}`,
              }}
              onClick={() => setLightbox(item)}
              role="button"
              tabIndex={0}
              aria-label={`Ver foto: ${item.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="gallery__item-img"
                loading="lazy"
              />
              <div className="gallery__item-overlay" aria-hidden="true">
                <div className="gallery__item-info">
                  <span className="gallery__item-category">{item.category}</span>
                  <ZoomIn size={20} strokeWidth={1.5} className="gallery__item-zoom" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link Instagram */}
        <div className="gallery__instagram reveal delay-3">
          <p className="gallery__instagram-text">
            Acompanhe nosso trabalho no Instagram
          </p>
          <a
            href={STUDIO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="gallery__instagram-link"
          >
            <InstagramIcon size={16} strokeWidth={1.8} />
            {STUDIO.instagramHandle}
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização da foto"
          onClick={() => setLightbox(null)}
        >
          <button
            className="lightbox__close"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <X size={22} strokeWidth={1.8} />
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="lightbox__img"
            />
            <div className="lightbox__caption">
              <span className="lightbox__cat">{lightbox.category}</span>
              <p className="lightbox__alt">{lightbox.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
