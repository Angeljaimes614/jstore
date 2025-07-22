// Datos de productos (simulando una base de datos)
const products = [
    {
        id: 'taco1',
        name: 'Taco Profesional Classic',
        description: 'Taco de billar profesional con mango de arce canadiense y punta de fibra de alta densidad. Ideal para jugadores experimentados.',
        price: 185000,
        image: 'img/tacos/taco-carne-asada.jpg',
        images: [
            'img/tacos/taco-carne-asada.jpg',
            'img/tacos/taco-carnitas.jpg',
            'img/tacos/taco-pescado.jpg'
        ]
    },
    {
        id: 'taco2',
        name: 'Taco Principiante',
        description: 'Taco de billar para principiantes con mango ergonómico y punta resistente. Perfecto para quienes se inician en este deporte.',
        price: 75000,
        image: 'img/tacos/taco-pollo.jpg',
        images: [
            'img/tacos/taco-pollo.jpg',
            'img/tacos/taco-camaron.jpg',
            'img/tacos/taco-carne-asada.jpg'
        ]
    },
    {
        id: 'taco3',
        name: 'Taco Premium Luxury',
        description: 'Taco de billar de lujo con incrustaciones de madre perla y mango de palisandro. Incluye estuche exclusivo.',
        price: 280000,
        image: 'img/tacos/taco-carnitas.jpg',
        images: [
            'img/tacos/taco-carnitas.jpg',
            'img/tacos/taco-pollo.jpg',
            'img/tacos/taco-pescado.jpg'
        ]
    },
    {
        id: 'taco4',
        name: 'Taco Competición Pro',
        description: 'Taco de billar para competición con tecnología de precisión y balance perfecto. Usado por profesionales en torneos.',
        price: 320000,
        image: 'img/tacos/taco-pescado.jpg',
        images: [
            'img/tacos/taco-pescado.jpg',
            'img/tacos/taco-carne-asada.jpg',
            'img/tacos/taco-camaron.jpg'
        ]
    },
    {
        id: 'taco5',
        name: 'Taco Desmontable 3 Piezas',
        description: 'Taco de billar desmontable en 3 piezas, ideal para transportar. Incluye sistema de conexión de alta precisión.',
        price: 195000,
        image: 'img/tacos/taco-camaron.jpg',
        images: [
            'img/tacos/taco-camaron.jpg',
            'img/tacos/taco-carnitas.jpg',
            'img/tacos/taco-pollo.jpg'
        ]
    },
    {
        id: 'taco6',
        name: 'Taco Junior',
        description: 'Taco de billar diseñado especialmente para jóvenes y adolescentes. Tamaño y peso adaptados para facilitar el aprendizaje.',
        price: 70000,
        image: 'img/tacos/taco-vegetariano.jpg',
        images: [
            'img/tacos/taco-vegetariano.jpg',
            'img/tacos/taco-pescado.jpg',
            'img/tacos/taco-carne-asada.jpg'
        ]
    }
];

// Datos de kits
const combos = [
    {
        id: 'kit1',
        name: 'Kit Principiante',
        description: 'Taco de billar para principiantes, estuche básico, tiza y guía de iniciación al billar.',
        originalPrice: 95000,
        price: 80750,
        discount: '15%',
        image: 'img/tacos/combo-pareja.jpg',
        images: [
            'img/tacos/combo-pareja.jpg',
            'img/tacos/combo-amigos.jpg',
            'img/tacos/taco-pollo.jpg'
        ]
    },
    {
        id: 'kit2',
        name: 'Kit Intermedio',
        description: 'Taco profesional Classic, estuche de transporte, 2 tizas premium, guante y limpiador de puntas.',
        originalPrice: 250000,
        price: 212500,
        discount: '15%',
        image: 'img/tacos/combo-amigos.jpg',
        images: [
            'img/tacos/combo-amigos.jpg',
            'img/tacos/combo-familiar.jpg',
            'img/tacos/taco-carne-asada.jpg'
        ]
    },
    {
        id: 'kit3',
        name: 'Kit Profesional',
        description: 'Taco de competición Pro, estuche de lujo, set de 5 tizas premium, guante profesional, extensión y accesorios de mantenimiento.',
        originalPrice: 450000,
        price: 382500,
        discount: '15%',
        image: 'img/tacos/combo-familiar.jpg',
        images: [
            'img/tacos/combo-familiar.jpg',
            'img/tacos/combo-pareja.jpg',
            'img/tacos/taco-pescado.jpg'
        ]
    }
];

// Carrito de compras
let cart = [];

// Elementos DOM
const productsContainer = document.getElementById('products-container');
const combosContainer = document.getElementById('combos-container');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const cartBtn = document.getElementById('cart-btn');
const cartContainer = document.getElementById('cart-container');
const cartOverlay = document.getElementById('cart-overlay');
const closeCart = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');
const cookieNotice = document.getElementById('cookie-notice');
const acceptCookies = document.getElementById('accept-cookies');
const productModal = document.createElement('div');
productModal.classList.add('product-modal');
productModal.id = 'product-modal';
document.body.appendChild(productModal);

// Cargar productos
function loadProducts() {
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-card');
        productElement.innerHTML = `
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.name}" class="product-img">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${formatPrice(product.price)}</p>
                <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-img="${product.image}">
                    Agregar al carrito
                </button>
                <button class="view-details" data-id="${product.id}">
                    Ver detalles
                </button>
            </div>
        `;
        productElement.querySelector('.product-img-container').addEventListener('click', () => {
            showProductDetails(product.id);
        });
        productElement.querySelector('.product-title').addEventListener('click', () => {
            showProductDetails(product.id);
        });
        productsContainer.appendChild(productElement);
    });
}

// Cargar combos
function loadCombos() {
    combos.forEach(combo => {
        const comboElement = document.createElement('div');
        comboElement.classList.add('combo-card');
        comboElement.innerHTML = `
            <span class="discount-badge">${combo.discount}</span>
            <div class="combo-img-container">
                <img src="${combo.image}" alt="${combo.name}" class="combo-img">
            </div>
            <div class="combo-info">
                <h3 class="combo-title">${combo.name}</h3>
                <p class="combo-description">${combo.description}</p>
                <div class="combo-price">
                    <span class="original-price">$${formatPrice(combo.originalPrice)}</span>
                    <span class="discounted-price">$${formatPrice(combo.price)}</span>
                </div>
                <button class="add-to-cart" data-id="${combo.id}" data-name="${combo.name}" data-price="${combo.price}" data-img="${combo.image}">
                    Agregar al carrito
                </button>
                <button class="view-details" data-id="${combo.id}" data-type="combo">
                    Ver detalles
                </button>
            </div>
        `;
        comboElement.querySelector('.combo-img-container').addEventListener('click', () => {
            showProductDetails(combo.id, 'combo');
        });
        comboElement.querySelector('.combo-title').addEventListener('click', () => {
            showProductDetails(combo.id, 'combo');
        });
        combosContainer.appendChild(comboElement);
    });
}

// Formatear precio
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Cargar carrito desde localStorage
function loadCart() {
    const savedCart = localStorage.getItem('tacosjstore_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Guardar carrito en localStorage
function saveCart() {
    localStorage.setItem('tacosjstore_cart', JSON.stringify(cart));
}

// Agregar producto al carrito
function addToCart(id, name, price, img) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id,
            name,
            price,
            img,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    showCartNotification(name);
}

// Mostrar notificación de producto agregado
function showCartNotification(productName) {
    const notification = document.createElement('div');
    notification.classList.add('cart-notification');
    notification.innerHTML = `<p>¡${productName} agregado al carrito!</p>`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Actualizar interfaz del carrito
function updateCartUI() {
    // Actualizar contador de items
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Actualizar lista de items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">$${formatPrice(item.price)}</p>
                    <div class="cart-item-controls">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span class="cart-item-quantity">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    
    // Actualizar total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${formatPrice(total)}`;
}

// Incrementar cantidad de un item
function increaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity++;
        saveCart();
        updateCartUI();
    }
}

// Decrementar cantidad de un item
function decreaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity--;
        if (item.quantity === 0) {
            removeItem(id);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Eliminar item del carrito
function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

// Finalizar pedido por WhatsApp
function checkout() {
    if (cart.length === 0) return;
    
    let message = "¡Hola! Quiero hacer un pedido:\n\n";
    
    cart.forEach(item => {
        message += `• ${item.quantity}x ${item.name} - $${formatPrice(item.price * item.quantity)}\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\nTotal: $${formatPrice(total)}\n\n`;
    message += "Datos para la entrega:\n";
    message += "Nombre: \n";
    message += "Dirección: \n";
    message += "Teléfono: \n";
    message += "Forma de pago: \n";
    
    // Generar código de pedido aleatorio
    const orderCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    message += `\nCódigo de pedido: #${orderCode}`;
    
    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Número de WhatsApp (reemplazar con el número real)
    const phoneNumber = "573142673051";
    
    // Abrir WhatsApp con el mensaje
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
}

// Mostrar/ocultar carrito
function toggleCart() {
    cartContainer.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

// Mostrar/ocultar menú móvil
function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

// Mostrar detalles del producto
function showProductDetails(id, type = 'product') {
    let item;
    
    if (type === 'combo') {
        item = combos.find(combo => combo.id === id);
    } else {
        item = products.find(product => product.id === id);
    }
    
    if (!item) return;
    
    let priceDisplay = '';
    
    if (type === 'combo') {
        priceDisplay = `
            <div class="modal-price">
                <span class="modal-original-price">$${formatPrice(item.originalPrice)}</span>
                <span class="modal-discounted-price">$${formatPrice(item.price)}</span>
                <span class="modal-discount-badge">${item.discount}</span>
            </div>
        `;
    } else {
        priceDisplay = `<p class="modal-price">$${formatPrice(item.price)}</p>`;
    }
    
    // Generar el carrusel de imágenes
    let imagesCarousel = '';
    let thumbnailsHtml = '';
    
    if (item.images && item.images.length > 0) {
        // Generar slides para el carrusel
        imagesCarousel = `
            <div class="modal-carousel">
                <div class="carousel-container">
                    <div class="carousel-slides">
        `;
        
        // Generar miniaturas
        thumbnailsHtml = `<div class="carousel-thumbnails">`;
        
        item.images.forEach((img, index) => {
            const isActive = index === 0 ? 'active' : '';
            imagesCarousel += `
                <div class="carousel-slide ${isActive}" data-index="${index}">
                    <img src="${img}" alt="${item.name} - Imagen ${index + 1}">
                </div>
            `;
            
            thumbnailsHtml += `
                <div class="carousel-thumbnail ${isActive}" data-index="${index}">
                    <img src="${img}" alt="Miniatura ${index + 1}">
                </div>
            `;
        });
        
        imagesCarousel += `
                    </div>
                    <button class="carousel-control prev">&lt;</button>
                    <button class="carousel-control next">&gt;</button>
                </div>
        `;
        
        thumbnailsHtml += `</div>`;
        
        imagesCarousel += thumbnailsHtml + `</div>`;
    } else {
        // Si no hay múltiples imágenes, mostrar la imagen principal
        imagesCarousel = `
            <div class="modal-image-container">
                <img src="${item.image}" alt="${item.name}" class="modal-image">
            </div>
        `;
    }
    
    productModal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal">&times;</button>
            <div class="modal-body">
                ${imagesCarousel}
                <div class="modal-info">
                    <h2 class="modal-title">${item.name}</h2>
                    <div class="modal-description">
                        <p>${item.description}</p>
                        <div class="modal-features">
                            <h3>Características:</h3>
                            <ul>
                                <li>Material de alta calidad</li>
                                <li>Diseño ergonómico</li>
                                <li>Acabado profesional</li>
                                <li>Garantía de 1 año</li>
                            </ul>
                        </div>
                    </div>
                    ${priceDisplay}
                    <div class="modal-actions">
                        <button class="modal-add-to-cart" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-img="${item.image}">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    productModal.classList.add('active');
    document.body.classList.add('no-scroll');
    
    // Inicializar el carrusel de imágenes
    initImageCarousel();
    
    // Cerrar modal al hacer clic en el botón de cerrar
    const closeModalBtn = productModal.querySelector('.close-modal');
    closeModalBtn.addEventListener('click', closeProductModal);
    
    // Cerrar modal al hacer clic fuera del contenido
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            closeProductModal();
        }
    });
    
    // Agregar al carrito desde el modal
    const addToCartBtn = productModal.querySelector('.modal-add-to-cart');
    addToCartBtn.addEventListener('click', () => {
        const id = addToCartBtn.getAttribute('data-id');
        const name = addToCartBtn.getAttribute('data-name');
        const price = parseFloat(addToCartBtn.getAttribute('data-price'));
        const img = addToCartBtn.getAttribute('data-img');
        
        addToCart(id, name, price, img);
        closeProductModal();
    });
}

// Cerrar modal de producto
function closeProductModal() {
    productModal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// Inicializar carrusel de imágenes
function initImageCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    if (!carouselContainer) return;
    
    const slides = document.querySelectorAll('.carousel-slide');
    const thumbnails = document.querySelectorAll('.carousel-thumbnail');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    
    if (slides.length <= 1) return;
    
    let currentIndex = 0;
    
    // Función para mostrar una diapositiva específica
    function showSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        currentIndex = index;
        
        // Actualizar slides
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentIndex);
        });
        
        // Actualizar miniaturas
        thumbnails.forEach((thumbnail, i) => {
            thumbnail.classList.toggle('active', i === currentIndex);
        });
    }
    
    // Event listeners para los botones de navegación
    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });
    
    // Event listeners para las miniaturas
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            showSlide(index);
        });
    });
}

// Cerrar menú móvil al hacer clic en un enlace
function closeMenuOnLinkClick() {
    if (window.innerWidth <= 768) {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
}

// Mostrar aviso de cookies
function showCookieNotice() {
    const cookiesAccepted = localStorage.getItem('tacosjstore_cookies_accepted');
    if (!cookiesAccepted) {
        setTimeout(() => {
            cookieNotice.classList.add('active');
        }, 2000);
    }
}

// Aceptar cookies
function acceptCookiesHandler() {
    localStorage.setItem('tacosjstore_cookies_accepted', 'true');
    cookieNotice.classList.remove('active');
}

// Manejar preguntas frecuentes
function setupFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = document.getElementById(question.id.replace('faq', 'answer'));
            
            // Cerrar todas las respuestas abiertas
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer) {
                    item.classList.remove('active');
                }
            });
            
            document.querySelectorAll('.faq-question').forEach(item => {
                if (item !== question) {
                    item.classList.remove('active');
                }
            });
            
            // Abrir/cerrar la respuesta actual
            question.classList.toggle('active');
            answer.classList.toggle('active');
        });
    });
}

// Configurar slider de testimonios
function setupTestimonialsSlider() {
    const slider = document.getElementById('testimonials-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    let currentIndex = 0;
    
    function showTestimonial(index) {
        if (index < 0) index = testimonials.length - 1;
        if (index >= testimonials.length) index = 0;
        
        currentIndex = index;
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }
    
    prevBtn.addEventListener('click', () => {
        showTestimonial(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        showTestimonial(currentIndex + 1);
    });
    
    // Auto-slide cada 5 segundos
    setInterval(() => {
        showTestimonial(currentIndex + 1);
    }, 5000);
}

// Configurar cuenta regresiva
function setupCountdown() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Establecer la fecha de finalización (24 horas desde ahora)
    const now = new Date();
    const endTime = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    function updateCountdown() {
        const currentTime = new Date();
        const diff = endTime - currentTime;
        
        if (diff <= 0) {
            // Reiniciar la cuenta regresiva cuando llegue a cero
            endTime.setTime(currentTime.getTime() + 24 * 60 * 60 * 1000);
        }
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
    
    // Actualizar cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Manejar formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Verificar honeypot (protección contra spam)
            const honeypot = document.getElementById('website');
            if (honeypot.value) {
                return; // Es un bot, ignorar silenciosamente
            }
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Preparar mensaje para WhatsApp
            let whatsappMessage = `*Mensaje de Contacto - Tacos JStore*\n\n`;
            whatsappMessage += `*Nombre:* ${name}\n`;
            whatsappMessage += `*Email:* ${email}\n`;
            whatsappMessage += `*Mensaje:*\n${message}\n\n`;
            
            // Codificar mensaje para URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Número de WhatsApp (usar el mismo que está configurado para el checkout)
            const phoneNumber = "573142673051";
            
            // Abrir WhatsApp con el mensaje
            window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
            
            // Resetear el formulario
            contactForm.reset();
        });
    }
}

// Smooth scroll para enlaces internos
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Cerrar menú móvil si está abierto
                closeMenuOnLinkClick();
                
                // Scroll suave
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inicializar la aplicación
function init() {
    // Cargar productos y combos
    if (productsContainer) loadProducts();
    if (combosContainer) loadCombos();
    
    // Cargar carrito desde localStorage
    loadCart();
    
    // Event Listeners
    document.addEventListener('click', function(e) {
        // Agregar al carrito
        if (e.target.classList.contains('add-to-cart')) {
            const button = e.target;
            const id = button.dataset.id;
            const name = button.dataset.name;
            const price = parseInt(button.dataset.price);
            const img = button.dataset.img;
            
            addToCart(id, name, price, img);
        }
        
        // Ver detalles del producto
        if (e.target.classList.contains('view-details')) {
            const id = e.target.dataset.id;
            const type = e.target.dataset.type || 'product';
            
            showProductDetails(id, type);
        }
        
        // Incrementar cantidad
        if (e.target.classList.contains('increase')) {
            const id = e.target.dataset.id;
            increaseQuantity(id);
        }
        
        // Decrementar cantidad
        if (e.target.classList.contains('decrease')) {
            const id = e.target.dataset.id;
            decreaseQuantity(id);
        }
        
        // Eliminar item
        if (e.target.classList.contains('remove-item') || 
            (e.target.parentElement && e.target.parentElement.classList.contains('remove-item'))) {
            const button = e.target.classList.contains('remove-item') ? e.target : e.target.parentElement;
            const id = button.dataset.id;
            removeItem(id);
        }
    });
    
    // Botón de carrito
    if (cartBtn) cartBtn.addEventListener('click', toggleCart);
    
    // Cerrar carrito
    if (closeCart) closeCart.addEventListener('click', toggleCart);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);
    
    // Finalizar pedido
    if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);
    
    // Menú móvil
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Cerrar menú al hacer clic en enlaces
    if (navLinks) {
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', closeMenuOnLinkClick);
        });
    }
    
    // Aviso de cookies
    showCookieNotice();
    if (acceptCookies) acceptCookies.addEventListener('click', acceptCookiesHandler);
    
    // Configurar FAQ
    setupFAQ();
    
    // Configurar slider de testimonios
    setupTestimonialsSlider();
    
    // Configurar cuenta regresiva
    setupCountdown();
    
    // Configurar formulario de contacto
    setupContactForm();
    
    // Configurar smooth scroll
    setupSmoothScroll();
    
    // Botones de WhatsApp en el header
    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        if (!btn.classList.contains('checkout-btn')) { // Excluir el botón de checkout
            btn.addEventListener('click', () => {
                const phoneNumber = "573142673051";
                window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
            });
        }
    });
}

// Iniciar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', init);

// Estilos adicionales para notificaciones
const style = document.createElement('style');
style.textContent = `
    .cart-notification {
        position: fixed;
        bottom: 20px;
        left: 20px;
        background-color: var(--color-black);
        color: var(--color-white);
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: var(--shadow-md);
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
    }
    
    .cart-notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .empty-cart {
        text-align: center;
        padding: 2rem 0;
        color: #999;
    }
    
    .no-scroll {
        overflow: hidden;
    }
`;

document.head.appendChild(style);