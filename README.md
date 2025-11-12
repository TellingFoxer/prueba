# prueba
# Portafolio Web - Proyectos IoT y Microcontroladores

Portafolio web moderno y sobrio para mostrar proyectos de Python, Arduino, ESP32 e IoT.

## 🎨 Características

- **Diseño Moderno y Sobrio**: Paleta de colores oscura y elegante con acentos rojos
- **Barra de Navegación Fija**: Menú responsivo con efecto hamburguesa en móvil
- **Secciones**:
  - 🏠 **Inicio**: Hero section con llamada a la acción
  - 👤 **Sobre Mí**: Información personal y estadísticas
  - 🔧 **Proyectos**: Grid de 6 proyectos de ejemplo (personalizables)
  - 💡 **Habilidades**: Categorías de competencias con barras de progreso
  - 📧 **Contacto**: Formulario de contacto y enlaces a redes sociales
- **Responsivo**: Adaptado para desktop, tablet y móvil
- **Animaciones**: Efectos suaves con Intersection Observer
- **Interactividad**: 
  - Menú hamburguesa para móvil
  - Enlaces suave (smooth scroll)
  - Animación de contadores
  - Efectos hover en tarjetas

## 📁 Estructura de Archivos

```
prueba/
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── script.js           # Funcionalidades JavaScript
└── README.md          # Este archivo
```

## 🚀 Cómo Usar

1. **Personalización de Información**:
   - Reemplaza "tu@email.com" con tu correo en la sección de contacto
   - Actualiza los enlaces de LinkedIn y GitHub
   - Modifica los proyectos de ejemplo con tus proyectos reales

2. **Editar Proyectos**:
   - Ve a la sección de proyectos en `index.html`
   - Cada tarjeta tiene: icono, título, tecnologías, descripción y enlace

3. **Cambiar Datos Personales**:
   - Sección "Sobre Mí": actualiza el texto descriptivo
   - Estadísticas: modifica números y textos
   - Habilidades: ajusta nombres y niveles de progreso

## 🎨 Personalización de Colores

Para cambiar la paleta de colores, edita las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #1a1a2e;      /* Color de fondo principal */
    --secondary-color: #16213e;    /* Color secundario */
    --accent-color: #0f3460;       /* Color de acento */
    --highlight-color: #e94560;    /* Color destacado (rojo) */
    --text-color: #eaeaea;         /* Color de texto */
    --text-light: #b8b8b8;         /* Color de texto claro */
}
```

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsivo y animaciones
- **JavaScript Vanilla**: Interactividad sin dependencias
- **Font Awesome**: Iconos profesionales

## 📱 Responsividad

- **Desktop**: Diseño completo con todos los elementos visibles
- **Tablet**: Grid adaptado a 768px y menores
- **Móvil**: Menú hamburguesa, layout en una columna

## ✨ Características JavaScript

- **Menú Hamburguesa**: Toggle automático en dispositivos pequeños
- **Scroll Smooth**: Navegación suave entre secciones
- **Navbar Dinámico**: Cambio de fondo al hacer scroll
- **Animaciones**: Fade-in en elementos cuando entran en vista
- **Contador Animado**: Números de estadísticas se animan al entrar en vista

## 🔗 Enlaces a Actualizar

Busca y reemplaza estos placeholders:

- `tu@email.com` → Tu correo electrónico
- `https://linkedin.com` → Tu perfil de LinkedIn
- `https://github.com` → Tu perfil de GitHub

## 📝 Notas

- Los proyectos mostrados son ejemplos. Personalízalos con tus proyectos reales
- Puedes agregar más proyectos duplicando la estructura `.project-card`
- El formulario de contacto es funcional en el frontend (necesita backend para enviar emails)

## 🎯 Próximas Mejoras Sugeridas

- Agregar backend para procesamiento de formulario de contacto
- Crear página de detalles para cada proyecto
- Agregar sección de blog o artículos
- Integrar galería de imágenes para los proyectos
- Agregar certificaciones y educación

---

**Hecho con ❤️ para mostrar tus proyectos de IoT y Microcontroladores**
