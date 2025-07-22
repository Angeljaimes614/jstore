============================== 
🎱 TACOS JSTORE - WEB 
============================== 

Gracias por utilizar la plantilla web de Tacos JStore para tacos de billar. A continuación, encontrarás información importante sobre la estructura y personalización de tu sitio web.

============================== 
📁 ESTRUCTURA DE ARCHIVOS 
============================== 

- index.html: Archivo principal HTML con la estructura de la página.
- estilos.css: Archivo CSS con todos los estilos del sitio.
- script.js: Archivo JavaScript con la funcionalidad del carrito y WhatsApp.
- img/: Carpeta donde debes colocar todas las imágenes.
  - logo.png: Logo de Tacos JStore.
  - banner.jpg: Imagen de fondo para el banner principal.
  - tacos/: Subcarpeta para imágenes de productos.
  - testimonials/: Subcarpeta para fotos de clientes.
- favicon.ico: Ícono para la pestaña del navegador.

============================== 
🔧 PERSONALIZACIÓN 
============================== 

1️⃣ INFORMACIÓN DE CONTACTO
   - Reemplaza el número de WhatsApp en script.js (líneas 326 y 424) con tu número real.
   - Actualiza el correo electrónico y dirección en el footer y sección de contacto.
   - Actualiza los enlaces a redes sociales en el footer.

2️⃣ PRODUCTOS Y KITS
   - Edita los arrays 'products' y 'combos' en script.js para agregar tus propios productos.
   - Asegúrate de mantener la misma estructura de datos para cada producto/kit.
   - Coloca las imágenes correspondientes en la carpeta img/tacos/.

3️⃣ IMÁGENES
   - Reemplaza todas las imágenes en la carpeta img/ con tus propias imágenes.
   - Dimensiones recomendadas:
     * Logo: 200x200px (PNG con fondo transparente)
     * Banner: 1920x1080px
     * Productos (tacos de billar): 600x400px (mismas dimensiones para todos)
     * Kits y accesorios: 600x400px
     * Testimonios: 100x100px (cuadradas)

4️⃣ COLORES Y ESTILOS
   - Los colores principales se definen en estilos.css al inicio del archivo (variables CSS).
   - Puedes cambiar la paleta de colores modificando estas variables:
     * --color-black: #000000 (Base elegante)
     * --color-gold: #FFD700 (Toques premium)
     * --color-white: #FFFFFF (Fondos limpios)
     * --color-red: #D72638 (Botones de acción)

5️⃣ TEXTOS
   - Modifica los textos directamente en el archivo index.html.
   - Secciones principales a personalizar:
     * Títulos y descripciones
     * Preguntas frecuentes
     * Testimonios
     * Información legal

============================== 
🚀 PUBLICACIÓN 
============================== 

Para publicar tu sitio web:

1. Adquiere un dominio (ej. tacosjstore.com).
2. Contrata un servicio de hosting.
3. Sube todos los archivos a tu hosting mediante FTP o el panel de control.
4. Configura tu dominio para que apunte a tu hosting.

============================== 
📱 INTEGRACIÓN CON WHATSAPP 
============================== 

La web está configurada para enviar pedidos directamente a WhatsApp:

1. El botón "Finalizar Pedido por WhatsApp" genera un mensaje con el detalle del pedido.
2. El mensaje incluye:
   - Lista de productos (tacos de billar y kits) con cantidades y precios
   - Total del pedido
   - Campos para que el cliente complete sus datos
   - Opciones de personalización (si aplica)
   - Código de pedido aleatorio

3. Para cambiar el número de WhatsApp:
   - Abre script.js
   - Busca la variable 'phoneNumber' (línea 326)
   - Reemplaza "573001234567" con tu número en formato internacional sin el '+'
   - También actualiza el número en la línea 424 para el botón de WhatsApp del header

============================== 
⚠️ IMPORTANTE 
============================== 

- Esta web utiliza localStorage para guardar el carrito, por lo que funciona sin base de datos.
- Para un sistema más complejo con gestión de pedidos, necesitarás implementar un backend.
- Las imágenes incluidas son ejemplos, reemplázalas con tus propias imágenes antes de publicar.
- Actualiza la información legal (términos, privacidad, etc.) según las leyes de tu país.

============================== 
🔍 OPTIMIZACIÓN SEO 
============================== 

La web incluye etiquetas meta básicas para SEO. Para mejorar el posicionamiento:

1. Actualiza las etiquetas meta en el <head> de index.html:
   - <title>
   - <meta name="description">
   - <meta property="og:title">
   - <meta property="og:description">
   - <meta property="og:image">
   - <meta property="og:url">

2. Registra tu sitio en Google Search Console y Google Analytics.

============================== 
📞 SOPORTE 
============================== 

Si necesitas ayuda con la personalización o tienes preguntas, contáctanos:

- Email: soporte@tacosjstore.com
- WhatsApp: +57 XXX XXX XXXX

============================== 
🎉 ¡LISTO PARA VENDER! 
============================== 

Con estas instrucciones, tu web de Tacos JStore estará lista para recibir pedidos y aumentar tus ventas. ¡Éxito con tu negocio!