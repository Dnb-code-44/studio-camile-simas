/* ============================================================
   CONFIGURAÇÕES DO STUDIO — edite aqui para personalizar
   ============================================================ */

/** Número do WhatsApp no formato internacional, sem espaços ou traços */
export const WHATSAPP_NUMBER = '5511948584240';

/** Mensagem padrão ao abrir o WhatsApp */
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Vim pelo site e gostaria de agendar um horário no Studio Camile Simas. 😊'
);

/** URL completa do WhatsApp */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

/** Dados do estúdio */
export const STUDIO = {
  name:        'Studio Camile Simas',
  address:     'Barueri — Centro, São Paulo',
  addressFull: 'Barueri, SP — Centro',
  instagram:   'https://www.instagram.com/studio_camilesimas?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw==',
  instagramHandle: '@studio_camilesimas',
  hours: [
    { days: 'Segunda a Sexta', time: '9h às 20h' },
    { days: 'Sábado',          time: '9h às 18h' },
    { days: 'Domingo',         time: 'Fechado'   },
  ],
};
