<div align="center">

<img src="./public/logo.png" alt="Nextopus Logo" width="220" />

### Digital Agency · Software Architecture · High Performance Web

[![GitHub](https://img.shields.io/badge/GitHub-sebastiancoronadev-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sebastiancoronadev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/company/somosnextopus)
[![Email](https://img.shields.io/badge/Email-contacto@somosnextopus.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contacto@somosnextopus.com)

---

### Created by:

<h1>@sebastiancoronadev&nbsp;<sub><a href="https://github.com/sebastiancoronadev" target="_blank" title="Verified"><img src="https://i.ibb.co/1F3qqjd/verified.gif" width="30"></a></sub></a></h1>

**Founder & CTO** · [somosnextopus.com](https://somosnextopus.com)

---

</div>

---

# <img src="https://flagcdn.com/w40/us.png" width="22" style="vertical-align: middle; margin-right: 8px;" /> ENGLISH

## 📋 Project Overview

**Nextopus** is the official website of a digital engineering agency specialized in high-performance web development, cloud architecture, and enterprise automation. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS, it delivers a full SSR/SSG experience with ultra-low latency and Awwwards-level visual design.

The site functions as the front-facing brand for a global team distributed across Venezuela, China, and LATAM, showcasing real client case studies, a technical services catalog, and a fully responsive experience optimized for Core Web Vitals.

## 🏗️ System Architecture

The site is a hybrid Next.js 14 application using Server Components for content-heavy sections (SEO) and Client Components for interactive elements (hero animations, modals, clock widget, form).

- **Server Components:** SEO-optimized layouts, legal pages, metadata generation, JSON-LD injection.
- **Client Components:** Hero typewriter animation, project modals, smooth-scroll clock widget, contact form with validation, navigation menu.
- **API Layer:** Serverless routes handling contact form submissions via FormSubmit, delivery to `contacto@somosnextopus.com`.

```
┌────────────────────────────────────────────────────┐
│                    NEXTOPUS                        │
├────────────────────────────────────────────────────┤
│  ┌──────────────┐   ┌──────────────┐   ┌─────────┐ │
│  │  Next.js 14  │◄─►│  Client UI   │◄─►│ Vercel  │ │
│  │  (App Router)│   │  Framer      │   │  Edge   │ │
│  └──────────────┘   └──────────────┘   └─────────┘ │
│         │                  │                       │
│         ▼                  ▼                       │
│  ┌──────────────┐   ┌──────────────┐               │
│  │  JSON-LD SEO │   │  FormSubmit  │               │
│  └──────────────┘   └──────────────┘               │
└────────────────────────────────────────────────────┘
```

## 🛠 Technology Stack

<div align="center">

<a href="https://www.google.com/search?q=Next.js+explanation" target="_blank">
  <img src="https://skillicons.dev/icons?i=nextjs" title="Next.js 14 - App Router" />
</a>
<a href="https://www.google.com/search?q=TypeScript+explanation" target="_blank">
  <img src="https://skillicons.dev/icons?i=ts" title="TypeScript - Strict Mode" />
</a>
<a href="https://www.google.com/search?q=React+explanation" target="_blank">
  <img src="https://skillicons.dev/icons?i=react" title="React 18 - Server & Client Components" />
</a>
<a href="https://www.google.com/search?q=Tailwind+CSS+explanation" target="_blank">
  <img src="https://skillicons.dev/icons?i=tailwind" title="Tailwind CSS - Utility-first Styling" />
</a>
<a href="https://www.google.com/search?q=Bootstrap+explanation" target="_blank">
  <img src="https://skillicons.dev/icons?i=bootstrap" title="Bootstrap Icons - Iconography" />
</a>
<a href="https://www.google.com/search?q=Vercel+explanation" target="_blank">
  <img src="https://skillicons.dev/icons?i=vercel" title="Vercel - Deployment Platform" />
</a>
<a href="https://www.google.com/search?q=Git+explanation" target="_blank">
  <img src="https://skillicons.dev/icons?i=git" title="Git - Version Control" />
</a>

</div>

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS, custom CSS keyframes |
| Animation | Framer Motion 11, custom conic-gradient effects |
| Icons | Bootstrap Icons |
| SEO | JSON-LD (Organization, LocalBusiness, FAQPage, BreadcrumbList), Open Graph, Twitter Cards |
| Deployment | Vercel Edge Network |
| Fonts | System UI stack (optimized for performance) |

## ✨ Key Features

| # | Feature | Description |
|---|---------|-------------|
| 🎬 | **Cinematic Hero** | Typewriter effect with animated light orbs and full scroll lock |
| 🌊 | **Smooth Scroll** | Native Lenis integration with fluid mobile touch behavior |
| 🕒 | **Live Clock Widget** | Animated analog clock with 360° rotation on click |
| 🎨 | **RGB Border Buttons** | Conic-gradient animated borders for CTAs |
| 🖼️ | **Project Showcase** | Case-study modals with SEO-optimized hidden content |
| 🌍 | **Multi-language UI** | Spanish, English, Chinese, Japanese selector (blocked UI, real translation ready) |
| 📊 | **Data-Driven Sections** | Metrics, testimonials, timeline, and process sections |
| 📱 | **Mobile-First Responsive** | 100% responsive layout, optimized for phone performance |
| 🔍 | **Technical SEO** | Full SSR/SSG, canonical URLs, JSON-LD, sitemap, robots.txt |
| ⚡ | **Performance** | LCP under 1.8s, CLS near 0, Lighthouse score 95+ |
| 🎯 | **Contact Form** | Server-side validation, FormSubmit integration, WhatsApp fallback |
| 📄 | **Legal Pages** | Terms, Privacy, Conditions with SEO metadata |
| 🖼️ | **WebP Assets** | All images converted to WebP with metadata stripped |
| 🎭 | **Awwwards-Level UI** | Glassmorphism, ambient light effects, animated transitions |
| 🔐 | **HTTPS + HSTS** | Security headers via Next.js config and Vercel |

## 📁 Project Structure

```
nextopus/
├── app/
│   ├── components/           # All React components
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── ClockWidget.tsx
│   │   ├── Projects.tsx
│   │   ├── Team.tsx
│   │   ├── TeamBios.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Metrics.tsx
│   │   ├── Services.tsx
│   │   ├── Stack.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── site.ts           # Site-wide data (routes, contact, team)
│   │   └── seo.ts            # JSON-LD schema builder
│   ├── legal/                # Legal pages (terms, privacy, conditions)
│   ├── styles/
│   │   └── globals.css
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Landing page composition
│   ├── sitemap.ts            # Dynamic sitemap
│   └── robots.ts             # robots.txt generator
├── public/
│   ├── images/
│   │   ├── brand/            # Logo (WebP + PNG for README)
│   │   ├── clock/            # Analog clock assets (WebP)
│   │   ├── projects/         # Project covers and logos (WebP)
│   │   ├── team/             # Team photos (WebP)
│   │   └── trust/            # Client logos
│   ├── videos/
│   │   ├── nextopus.webm     # Hero AI video
│   │   └── nextopus.mp4      # Fallback
│   └── favicon.ico
├── package.json
└── README.md
```

## 🔒 Security

### Performance & Security Headers

- **HTTPS enforced** via Vercel automatic TLS
- **HSTS** enabled (Strict-Transport-Security)
- **X-Content-Type-Options: nosniff**
- **X-Frame-Options: SAMEORIGIN**
- **Referrer-Policy: strict-origin-when-cross-origin**
- **Permissions-Policy:** disables camera, microphone, geolocation

### Form Handling

- Contact form sends via FormSubmit to `contacto@somosnextopus.com`
- No credentials stored on the client
- WhatsApp fallback on delivery failure

### Privacy

- No tracking pixels, no third-party analytics cookies
- User data handled per our [Privacy Policy](https://somosnextopus.com/legal/privacidad)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/sebastiancoronadev/somosnextopus.git

# Navigate
cd somosnextopus

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## 🔑 Environment Variables

```env
# No environment variables required for basic operation.
# Optional additions for analytics or custom integrations:
NEXT_PUBLIC_ANALYTICS_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=+584125008324
```

## 📄 License

All Rights Reserved · Copyright © 2026 **Nextopus**

For permissions: [contacto@somosnextopus.com](mailto:contacto@somosnextopus.com)

See [LICENSE](./LICENSE) for full terms.

## 📬 Contact

| Platform | Link |
|----------|------|
| 🌍 **Website** | [somosnextopus.com](https://somosnextopus.com) |
| 💼 **LinkedIn** | [somosnextopus](https://linkedin.com/company/somosnextopus) |
| 🐙 **GitHub** | [sebastiancoronadev](https://github.com/sebastiancoronadev) |
| 📺 **YouTube** | [@somosnextopus](https://www.youtube.com/@somosnextopus) |
| 📸 **Instagram** | [@somosnextopus](https://instagram.com/somosnextopus) |
| 🐦 **X (Twitter)** | [@somosnextopus](https://x.com/somosnextopus) |
| 👽 **Reddit** | [sebastiancoronadev](https://www.reddit.com/user/sebastiancoronadev) |
| 🎮 **Discord** | [sebmaster09](https://discord.com/users/sebmaster09) |
| 📘 **Facebook** | [somosnextopus](https://facebook.com/somosnextopus) |
| ✉️ **Email** | [contacto@somosnextopus.com](mailto:contacto@somosnextopus.com) |

📍 **Valencia, Carabobo, Venezuela** 🇻🇪

---

# <img src="https://flagcdn.com/w40/ve.png" width="22" style="vertical-align: middle; margin-right: 8px;" /> ESPAÑOL

## 📋 Descripción del Proyecto

**Nextopus** es el sitio web oficial de una agencia de ingeniería digital especializada en desarrollo web de alto rendimiento, arquitectura cloud y automatización empresarial. Construido con Next.js 14 (App Router), TypeScript y Tailwind CSS, ofrece una experiencia SSR/SSG con latencia ultra baja y un diseño visual de nivel Awwwards.

El sitio funciona como la cara visible de un equipo global distribuido entre Venezuela, China y LATAM, mostrando casos de éxito reales de clientes, un catálogo técnico de servicios y una experiencia totalmente responsiva optimizada para Core Web Vitals.

## 🏗️ Arquitectura del Sistema

El sitio es una aplicación híbrida de Next.js 14 que utiliza Server Components para secciones de contenido intensivo (SEO) y Client Components para elementos interactivos (animaciones del hero, modales, widget del reloj, formulario).

- **Server Components:** Layouts optimizados para SEO, páginas legales, generación de metadata, inyección de JSON-LD.
- **Client Components:** Animación de máquina de escribir del hero, modales de proyectos, widget de reloj con scroll suave, formulario de contacto con validación, menú de navegación.
- **Capa API:** Rutas serverless que gestionan envíos del formulario mediante FormSubmit, con entrega a `contacto@somosnextopus.com`.

## 🛠 Stack Tecnológico

| Categoría | Tecnologías |
|-----------|-------------|
| Framework | Next.js 14 (App Router), React 18, TypeScript |
| Estilos | Tailwind CSS, keyframes CSS personalizados |
| Animaciones | Framer Motion 11, efectos conic-gradient personalizados |
| Iconos | Bootstrap Icons |
| SEO | JSON-LD (Organization, LocalBusiness, FAQPage, BreadcrumbList), Open Graph, Twitter Cards |
| Despliegue | Vercel Edge Network |
| Tipografías | Stack de System UI (optimizado para rendimiento) |

## ✨ Características Principales

| # | Característica | Descripción |
|---|----------------|-------------|
| 🎬 | **Hero Cinemático** | Efecto máquina de escribir con orbes de luz animados y bloqueo total de scroll |
| 🌊 | **Scroll Suave** | Integración nativa de Lenis con comportamiento fluido en táctil |
| 🕒 | **Widget de Reloj** | Reloj analógico animado con rotación de 360° al hacer clic |
| 🎨 | **Botones RGB** | Bordes animados con conic-gradient para CTAs |
| 🖼️ | **Portafolio de Proyectos** | Modales de caso de estudio con contenido oculto optimizado para SEO |
| 🌍 | **Interfaz Multi-idioma** | Selector Español, Inglés, Chino y Japonés (UI bloqueada, traducción real lista) |
| 📊 | **Secciones con Datos** | Métricas, testimonios, timeline y proceso |
| 📱 | **Mobile-First** | Layout 100% responsivo, optimizado para rendimiento en móvil |
| 🔍 | **SEO Técnico** | SSR/SSG completo, URLs canónicas, JSON-LD, sitemap, robots.txt |
| ⚡ | **Rendimiento** | LCP por debajo de 1.8s, CLS cercano a 0, Lighthouse 95+ |
| 🎯 | **Formulario de Contacto** | Validación server-side, integración FormSubmit, fallback de WhatsApp |
| 📄 | **Páginas Legales** | Términos, Privacidad, Condiciones con metadata SEO |
| 🖼️ | **Assets WebP** | Todas las imágenes convertidas a WebP sin metadatos |
| 🎭 | **UI Nivel Awwwards** | Glassmorphism, efectos de luz ambiental, transiciones animadas |
| 🔐 | **HTTPS + HSTS** | Headers de seguridad vía Next.js y Vercel |

## 📁 Estructura del Proyecto

```
nextopus/
├── app/
│   ├── components/           # Componentes React
│   ├── lib/
│   │   ├── site.ts           # Datos del sitio (rutas, contacto, equipo)
│   │   └── seo.ts            # Constructor de esquemas JSON-LD
│   ├── legal/                # Páginas legales
│   ├── styles/
│   │   └── globals.css
│   ├── layout.tsx            # Layout raíz con metadata
│   ├── page.tsx              # Composición de la landing
│   ├── sitemap.ts            # Sitemap dinámico
│   └── robots.ts             # Generador de robots.txt
├── public/
│   ├── images/
│   │   ├── brand/            # Logo (WebP + PNG para README)
│   │   ├── clock/            # Assets del reloj (WebP)
│   │   ├── projects/         # Portadas y logos de proyectos (WebP)
│   │   ├── team/             # Fotos del equipo (WebP)
│   │   └── trust/            # Logos de clientes
│   ├── videos/
│   │   ├── nextopus.webm     # Video AI del hero
│   │   └── nextopus.mp4      # Fallback
│   └── favicon.ico
├── package.json
└── README.md
```

## 🔒 Seguridad

### Headers de Rendimiento y Seguridad

- **HTTPS obligatorio** vía Vercel (TLS automático)
- **HSTS** habilitado (Strict-Transport-Security)
- **X-Content-Type-Options: nosniff**
- **X-Frame-Options: SAMEORIGIN**
- **Referrer-Policy: strict-origin-when-cross-origin**
- **Permissions-Policy:** desactiva cámara, micrófono, geolocalización

### Manejo del Formulario

- Envío vía FormSubmit a `contacto@somosnextopus.com`
- Sin credenciales almacenadas en el cliente
- Fallback de WhatsApp en caso de fallo de entrega

### Privacidad

- Sin píxeles de tracking, sin cookies de analítica de terceros
- Datos del usuario gestionados según nuestra [Política de Privacidad](https://somosnextopus.com/legal/privacidad)

## 🚀 Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/sebastiancoronadev/somosnextopus.git

# Navegar
cd somosnextopus

# Instalar dependencias
npm install

# Ejecutar el servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000)

## 🔑 Variables de Entorno

```env
# No se requieren variables de entorno para la operación básica.
# Variables opcionales para analítica o integraciones personalizadas:
NEXT_PUBLIC_ANALYTICS_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=+584125008324
```

## 📄 Licencia

Todos los derechos reservados · Copyright © 2026 **Nextopus**

Para permisos: [contacto@somosnextopus.com](mailto:contacto@somosnextopus.com)

Ver [LICENSE](./LICENSE) para los términos completos.

## 📬 Contacto

| Plataforma | Enlace |
|------------|--------|
| 🌍 **Sitio web** | [somosnextopus.com](https://somosnextopus.com) |
| 💼 **LinkedIn** | [somosnextopus](https://linkedin.com/company/somosnextopus) |
| 🐙 **GitHub** | [sebastiancoronadev](https://github.com/sebastiancoronadev) |
| 📺 **YouTube** | [@somosnextopus](https://www.youtube.com/@somosnextopus) |
| 📸 **Instagram** | [@somosnextopus](https://instagram.com/somosnextopus) |
| 🐦 **X (Twitter)** | [@somosnextopus](https://x.com/somosnextopus) |
| 👽 **Reddit** | [sebastiancoronadev](https://www.reddit.com/user/sebastiancoronadev) |
| 🎮 **Discord** | [sebmaster09](https://discord.com/users/sebmaster09) |
| 📘 **Facebook** | [somosnextopus](https://facebook.com/somosnextopus) |
| ✉️ **Email** | [contacto@somosnextopus.com](mailto:contacto@somosnextopus.com) |

📍 **Valencia, Carabobo, Venezuela** 🇻🇪

---

# <img src="https://flagcdn.com/w40/cn.png" width="22" style="vertical-align: middle; margin-right: 8px;" /> 中文

## 📋 项目概述

**Nextopus** 是一家数字工程机构的官方网站，专注于高性能 Web 开发、云架构和企业自动化。该项目基于 Next.js 14（App Router）、TypeScript 和 Tailwind CSS 构建，提供完整的 SSR/SSG 体验，超低延迟和 Awwwards 级别的视觉设计。

该网站是 Nextopus 品牌的官方门面，团队分布于委内瑞拉、中国和拉丁美洲，展示真实的客户成功案例、技术服务目录，以及针对 Core Web Vitals 优化的完全响应式体验。

## 🏗️ 系统架构

该网站是一个混合型 Next.js 14 应用，使用 Server Components 处理内容密集的部分（SEO），使用 Client Components 处理交互元素（Hero 动画、弹窗、时钟组件、表单）。

- **Server Components：** SEO 优化的布局、法律页面、元数据生成、JSON-LD 注入。
- **Client Components：** Hero 打字机动画、项目弹窗、平滑滚动时钟组件、带验证的联系表单、导航菜单。
- **API 层：** 通过 FormSubmit 处理联系表单提交的无服务器路由，发送至 `contacto@somosnextopus.com`。

## 🛠 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Next.js 14（App Router）、React 18、TypeScript |
| 样式 | Tailwind CSS、自定义 CSS 关键帧 |
| 动画 | Framer Motion 11、自定义 conic-gradient 效果 |
| 图标 | Bootstrap Icons |
| SEO | JSON-LD（Organization、LocalBusiness、FAQPage、BreadcrumbList）、Open Graph、Twitter Cards |
| 部署 | Vercel Edge Network |
| 字体 | 系统 UI 字体栈（性能优化） |

## ✨ 主要功能

| # | 功能 | 描述 |
|---|------|------|
| 🎬 | **电影级 Hero** | 打字机效果与动态光球、完全锁定滚动 |
| 🌊 | **平滑滚动** | 原生 Lenis 集成，触屏流畅 |
| 🕒 | **实时时钟组件** | 点击时带 360° 旋转的动画模拟时钟 |
| 🎨 | **RGB 边框按钮** | CTA 使用 conic-gradient 动画边框 |
| 🖼️ | **项目组合** | 带 SEO 优化隐藏内容的案例研究弹窗 |
| 🌍 | **多语言界面** | 西班牙语、英语、中文、日语选择器（UI 锁定，翻译就绪） |
| 📊 | **数据驱动模块** | 指标、客户评价、时间线、流程 |
| 📱 | **移动优先响应式** | 100% 响应式布局，针对手机性能优化 |
| 🔍 | **技术 SEO** | 完整 SSR/SSG、规范 URL、JSON-LD、sitemap、robots.txt |
| ⚡ | **性能** | LCP 低于 1.8 秒，CLS 接近 0，Lighthouse 95+ |
| 🎯 | **联系表单** | 服务端验证、FormSubmit 集成、WhatsApp 备选 |
| 📄 | **法律页面** | 条款、隐私、条件，带 SEO 元数据 |
| 🖼️ | **WebP 资源** | 所有图片转换为 WebP 并清除元数据 |
| 🎭 | **Awwwards 级 UI** | 玻璃拟态、环境光效果、动画过渡 |
| 🔐 | **HTTPS + HSTS** | 通过 Next.js 与 Vercel 提供的安全头 |

## 📁 项目结构

```
nextopus/
├── app/
│   ├── components/           # React 组件
│   ├── lib/
│   │   ├── site.ts           # 站点数据（路由、联系方式、团队）
│   │   └── seo.ts            # JSON-LD 架构构建器
│   ├── legal/                # 法律页面
│   ├── styles/
│   │   └── globals.css
│   ├── layout.tsx            # 带元数据的根布局
│   ├── page.tsx              # 首页组合
│   ├── sitemap.ts            # 动态 sitemap
│   └── robots.ts             # robots.txt 生成器
├── public/
│   ├── images/
│   ├── videos/
│   └── favicon.ico
├── package.json
└── README.md
```

## 🔒 安全性

### 性能与安全头

- **强制 HTTPS**（Vercel 自动 TLS）
- **HSTS** 已启用
- **X-Content-Type-Options: nosniff**
- **X-Frame-Options: SAMEORIGIN**
- **Referrer-Policy: strict-origin-when-cross-origin**
- **Permissions-Policy：** 禁用摄像头、麦克风、地理位置

### 表单处理

- 联系表单通过 FormSubmit 发送至 `contacto@somosnextopus.com`
- 客户端不存储任何凭据
- 投递失败时回退到 WhatsApp

### 隐私

- 无跟踪像素，无第三方分析 Cookie
- 用户数据处理请参阅[隐私政策](https://somosnextopus.com/legal/privacidad)

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/sebastiancoronadev/somosnextopus.git

# 进入目录
cd somosnextopus

# 安装依赖
npm install

# 运行开发服务器
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm start
```

打开 [http://localhost:3000](http://localhost:3000)

## 🔑 环境变量

```env
# 基础运行不需要环境变量。
# 可选：分析或自定义集成
NEXT_PUBLIC_ANALYTICS_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=+584125008324
```

## 📄 许可证

版权所有 · 版权 © 2026 **Nextopus**

如需授权请联系：[contacto@somosnextopus.com](mailto:contacto@somosnextopus.com)

完整条款见 [LICENSE](./LICENSE)

## 📬 联系方式

| 平台 | 链接 |
|------|------|
| 🌍 **网站** | [somosnextopus.com](https://somosnextopus.com) |
| 💼 **LinkedIn** | [somosnextopus](https://linkedin.com/company/somosnextopus) |
| 🐙 **GitHub** | [sebastiancoronadev](https://github.com/sebastiancoronadev) |
| 📺 **YouTube** | [@somosnextopus](https://www.youtube.com/@somosnextopus) |
| 📸 **Instagram** | [@somosnextopus](https://instagram.com/somosnextopus) |
| 🐦 **X (Twitter)** | [@somosnextopus](https://x.com/somosnextopus) |
| 👽 **Reddit** | [sebastiancoronadev](https://www.reddit.com/user/sebastiancoronadev) |
| 🎮 **Discord** | [sebmaster09](https://discord.com/users/sebmaster09) |
| 📘 **Facebook** | [somosnextopus](https://facebook.com/somosnextopus) |
| ✉️ **Email** | [contacto@somosnextopus.com](mailto:contacto@somosnextopus.com) |

📍 **委内瑞拉 卡拉沃沃州 瓦伦西亚** 🇻🇪

---

<div align="center">

**⭐ If you like this project, give it a star on GitHub!** 💜  
**⭐ ¡Si te gusta este proyecto, dale una estrella en GitHub!** 💜  
**⭐ 如果你喜欢这个项目，请在 GitHub 上给它一个星标！** 💜

</div>

---

**Released with 💜 by Nextopus**  
*Engineering high-performance digital experiences for the modern world.*