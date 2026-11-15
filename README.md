# Studio Camile Simas — Landing Page

Landing page profissional para o **Studio Camile Simas**, estúdio de beleza localizado em Barueri, São Paulo.

---

## Tecnologias

| Camada    | Stack                                    |
|-----------|------------------------------------------|
| Frontend  | React 18 + Vite + CSS puro               |
| Ícones    | Lucide React + SVG inline (InstagramIcon)|
| Backend   | Java 21 + Spring Boot 3.3 (skeleton)     |

---

## Estrutura do projeto

```
studio-camile-simas/
├── index.html                  # HTML base com fontes Google
├── src/
│   ├── config.js               # ← EDITE AQUI: WhatsApp, Instagram, endereço
│   ├── App.jsx
│   ├── index.css               # Design tokens globais (cores, fontes, espaçamento)
│   ├── hooks/
│   │   └── useScrollReveal.js  # Animações ao rolar a página
│   └── components/
│       ├── Header/             # Logo, navegação desktop/mobile
│       ├── Hero/               # Primeira dobra com estatísticas
│       ├── Services/           # Cards dos 4 serviços
│       ├── Gallery/            # Grid com lightbox e filtros
│       ├── About/              # Texto + foto do estúdio
│       ├── Booking/            # CTA de agendamento (fundo escuro)
│       ├── Location/           # Mapa + contatos + horários
│       ├── Footer/             # Rodapé completo
│       ├── WhatsAppFab/        # Botão flutuante com tooltip
│       └── icons/
│           └── InstagramIcon.jsx
└── backend/                    # Spring Boot API (pronta para expansão)
    ├── pom.xml
    └── src/main/java/com/studiocamilesimas/api/
        ├── config/CorsConfig.java
        ├── controller/ContactController.java
        ├── controller/GlobalExceptionHandler.java
        ├── dto/ContactRequestDto.java
        ├── dto/ApiResponseDto.java
        └── service/ContactService.java
```

---

## Como personalizar

### 1. WhatsApp, Instagram e endereço

Abra **`src/config.js`** e atualize:

```js
export const WHATSAPP_NUMBER = '5511999999999'; // número real sem espaços
export const STUDIO = {
  address:         'Barueri — Centro, São Paulo',
  instagram:       'https://www.instagram.com/SEU_PERFIL',
  instagramHandle: '@SEU_PERFIL',
  hours: [ ... ],
};
```

### 2. Substituir imagens

Cada componente tem comentários indicando onde trocar as URLs:

- **Hero** → `src/components/Hero/Hero.jsx` — prop `src` da imagem de fundo
- **Services** → `src/components/Services/Services.jsx` — array `SERVICES`, campo `image`
- **Gallery** → `src/components/Gallery/Gallery.jsx` — array `GALLERY_ITEMS`, campo `src`
- **About** → `src/components/About/About.jsx` — `<img src="...">` com comentário
- **Location** → `src/components/Location/Location.jsx` — iframe do Google Maps

### 3. Mapa real (Google Maps)

1. Acesse [maps.google.com](https://maps.google.com) e pesquise o endereço
2. Clique em **Compartilhar → Incorporar um mapa**
3. Copie o `<iframe>` gerado e substitua o existente em `Location.jsx`

---

## Rodando localmente

```bash
# Frontend (Vite dev server — porta 5173)
npm install
npm run dev

# Build de produção
npm run build
npm run preview
```

```bash
# Backend Spring Boot (porta 8080)
# Requer Java 21 e Maven instalados
cd backend
./mvnw spring-boot:run
```

---

## Paleta de cores

| Token                  | Valor     | Uso                        |
|------------------------|-----------|----------------------------|
| `--color-bg`           | `#faf8f5` | Fundo principal            |
| `--color-gold`         | `#c9a96e` | Detalhes e destaques       |
| `--color-brown`        | `#3d2b1f` | Textos e elementos escuros |
| `--color-nude`         | `#e8d5c0` | Fundos suaves e bordas     |
| `--color-bg-dark`      | `#1a1008` | Seções escuras             |

Todos os tokens estão em `src/index.css` na seção `:root`.

---

## Endpoints do backend

| Método | Rota           | Descrição                              |
|--------|----------------|----------------------------------------|
| GET    | `/api/health`  | Health-check                           |
| POST   | `/api/contact` | Recebe lead (nome, telefone, serviço)  |

> O backend está preparado para futuras integrações: e-mail, WhatsApp Business API e banco de dados.
