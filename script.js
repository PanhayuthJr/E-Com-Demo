const products = [
  { 
    id: 1, 
    name: "Dell XPS 13", 
    price: 1299, 
    category: "ultrabook", 
    img: "images/plus_9320-2.png",
    desc: "Ultra-portable with stunning InfinityEdge display, perfect for mobility and visual tasks.",
    specs: {
      CPU: "Intel Core i7-1360P",
      RAM: "16GB LPDDR5",
      Storage: "512GB NVMe SSD",
      Display: "13.4-inch FHD+ (1920x1200)",
      OS: "Windows 11 Home"
    }
  },
  { 
    id: 2, 
    name: "MacBook Pro 16", 
    price: 2499, 
    category: "business", 
    img: "images/MacBook Pro 16-Inch Mockups High Quality MacBook Pro 16-Inch Mockups_.jpg",
    desc: "Professional-grade performance with M3 Pro chip for demanding creative workloads.",
    specs: {
      CPU: "Apple M3 Pro (12-core)",
      RAM: "18GB Unified Memory",
      Storage: "1TB SSD",
      Display: "16.2-inch Liquid Retina XDR",
      OS: "macOS Sonoma"
    }
  },
  { 
    id: 3, 
    name: "Asus ROG Strix", 
    price: 1899, 
    category: "gaming", 
    img: "images/ASUS Gaming Laptop.jpg",
    desc: "High-performance gaming with RTX 4070, providing desktop-class gaming experience.",
    specs: {
      CPU: "AMD Ryzen 9 7945HX",
      RAM: "32GB DDR5",
      Storage: "1TB PCIe 4.0 SSD",
      Display: "17.3-inch QHD (2560x1440) 240Hz",
      GPU: "NVIDIA GeForce RTX 4070"
    }
  },
  { 
    id: 4, 
    name: "Lenovo ThinkPad X1", 
    price: 1599, 
    category: "business", 
    img: "images/Lenovo ThinkPad X1.jpg",
    desc: "Business laptop with legendary durability, security features, and a comfortable keyboard.",
    specs: {
      CPU: "Intel Core i5-1335U",
      RAM: "16GB LPDDR5",
      Storage: "512GB SSD",
      Display: "14-inch WUXGA (1920x1200)",
      OS: "Windows 11 Pro"
    }
  },
  { 
    id: 5, 
    name: "HP Pavilion 15", 
    price: 699, 
    category: "budget", 
    img: "images/HP Pavilion 15.jpg",
    desc: "Affordable everyday computing for students and light productivity tasks.",
    specs: {
      CPU: "AMD Ryzen 5 7530U",
      RAM: "8GB DDR4",
      Storage: "256GB SSD",
      Display: "15.6-inch HD (1366x768)",
      OS: "Windows 11 Home"
    }
  },
  { 
    id: 6, 
    name: "MSI Stealth 15", 
    price: 1799, 
    category: "gaming", 
    img: "images/MSI Stealth 15.jpg",
    desc: "Sleek gaming powerhouse with a thin and light design without compromising performance.",
    specs: {
      CPU: "Intel Core i7-13700H",
      RAM: "16GB DDR5",
      Storage: "1TB NVMe SSD",
      Display: "15.6-inch FHD (1920x1080) 144Hz",
      GPU: "NVIDIA GeForce RTX 4060"
    }
  },
  { 
    id: 7, 
    name: "Acer Predator Helios 300", 
    price: 1599, 
    category: "gaming", 
    img: "images/Accer Predator.jpg",
    desc: "High-end gaming laptop with advanced cooling and fast refresh display.",
    specs: {
      CPU: "Intel Core i7-13700H",
      RAM: "16GB DDR5",
      Storage: "512GB SSD",
      Display: "15.6-inch FHD 165Hz",
      GPU: "NVIDIA GeForce RTX 4060"
    }
  },
  { 
    id: 8, 
    name: "Microsoft Surface Laptop 5", 
    price: 1299, 
    category: "business", 
    img: "images/Microsoft Surface Laptop 5.jpg",
    desc: "Sleek business laptop with excellent battery life and touchscreen display.",
    specs: {
      CPU: "Intel Core i5-1235U",
      RAM: "16GB LPDDR4x",
      Storage: "512GB SSD",
      Display: "13.5-inch PixelSense",
      OS: "Windows 11 Pro"
    }
  },
  { 
    id: 9, 
    name: "LG Gram 17", 
    price: 1799, 
    category: "ultrabook", 
    img: "images/LG Gram 17.jpg",
    desc: "Ultra-light 17-inch laptop with long battery life, perfect for on-the-go productivity.",
    specs: {
      CPU: "Intel Core i7-1365U",
      RAM: "16GB LPDDR5",
      Storage: "1TB SSD",
      Display: "17-inch WQXGA",
      OS: "Windows 11 Home"
    }
  },
  { 
    id: 10, 
    name: "HP Envy x360", 
    price: 999, 
    category: "ultrabook", 
    img: "images/HP Envy x360.jpg",
    desc: "Convertible ultrabook with touch and pen support for creative professionals.",
    specs: {
      CPU: "AMD Ryzen 7 7840U",
      RAM: "16GB DDR5",
      Storage: "512GB SSD",
      Display: "15.6-inch FHD Touch",
      OS: "Windows 11 Home"
    }
  },
  { 
    id: 11, 
    name: "Acer Aspire 5", 
    price: 549, 
    category: "budget", 
    img: "images/Acer Aspire 5.jpg",
    desc: "Budget-friendly laptop for everyday tasks with reliable performance.",
    specs: {
      CPU: "Intel Core i3-1215U",
      RAM: "8GB DDR4",
      Storage: "256GB SSD",
      Display: "15.6-inch FHD",
      OS: "Windows 11 Home"
    }
  },
  { 
    id: 12, 
    name: "Dell Inspiron 16 Plus", 
    price: 1099, 
    category: "business", 
    img: "images/Dell Inspiron 16 Plus.jpg",
    desc: "Business-oriented laptop with large display and solid performance for work.",
    specs: {
      CPU: "Intel Core i7-1360P",
      RAM: "16GB DDR4",
      Storage: "1TB SSD",
      Display: "16-inch FHD+",
      OS: "Windows 11 Pro"
    }
  }
];

let cart = [];
let currentCategory = 'all';

// Slideshow variables
let currentSlide = 0;
let slideInterval;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartCount();
  initSlideshow();
  initEventListeners();
});

function initEventListeners() {
  // Search input
  document.getElementById('searchInput').addEventListener('input', e => {
    renderProducts(e.target.value);
  });

  // Cart toggle
  document.getElementById('cartToggle').addEventListener('click', () => {
    document.getElementById('cartPanel').classList.add('open');
  });

  // Close cart
  document.getElementById('closeCart').addEventListener('click', () => {
    document.getElementById('cartPanel').classList.remove('open');
  });

  // Category chips
  document.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', e => {
      document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.dataset.category;
      renderProducts();
    });
  });

  // Select all checkbox
  document.getElementById('selectAll').addEventListener('change', e => {
    cart.forEach(item => item.selected = e.target.checked);
    renderCart();
  });

  // Remove selected button
  document.getElementById('removeSelected').addEventListener('click', () => {
    const selectedItems = cart.filter(item => item.selected);
    if (selectedItems.length === 0) {
      alert('Please select items to remove');
      return;
    }
    
    if (confirm(`Are you sure you want to remove ${selectedItems.length} selected item(s)?`)) {
      cart = cart.filter(item => !item.selected);
      renderCart();
      updateCartCount();
    }
  });

  // Clear cart button
  document.getElementById('clearBtn').addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Cart is already empty');
      return;
    }
    
    if (confirm('Are you sure you want to clear the entire cart?')) {
      cart = [];
      renderCart();
      updateCartCount();
    }
  });

  // Checkout button
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    const selected = cart.filter(item => item.selected);
    if (selected.length === 0) {
      alert('Please select items to checkout');
      return;
    }
    renderCheckout(selected);
    document.getElementById('checkoutBackdrop').classList.add('open');
  });

  // Modal close events
  document.getElementById('modalBackdrop').addEventListener('click', closeModal);
  document.getElementById('modalClose').addEventListener('click', closeModal);

  // Checkout modal close
  document.getElementById('cancelCheckout').addEventListener('click', () => {
    document.getElementById('checkoutBackdrop').classList.remove('open');
  });
  
  document.getElementById('checkoutBackdrop').addEventListener('click', (e) => {
    if (e.target === document.getElementById('checkoutBackdrop')) {
      document.getElementById('checkoutBackdrop').classList.remove('open');
    }
  });

  // Checkout form submission
  document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    processCheckoutForm();
  });

  // QR modal handlers
  document.getElementById('cancelQr').addEventListener('click', () => {
    document.getElementById('qrBackdrop').classList.remove('open');
    document.getElementById('checkoutBackdrop').classList.add('open');
  });

  document.getElementById('qrBackdrop').addEventListener('click', (e) => {
    if (e.target === document.getElementById('qrBackdrop')) {
      document.getElementById('qrBackdrop').classList.remove('open');
      document.getElementById('checkoutBackdrop').classList.add('open');
    }
  });

  document.getElementById('confirmPayment').addEventListener('click', () => {
    document.getElementById('qrBackdrop').classList.remove('open');
    processOrderAfterPayment();
  });

  // Order confirmation close
  document.getElementById('closeConfirmation').addEventListener('click', () => {
    document.getElementById('confirmationBackdrop').classList.remove('open');
  });
  
  document.getElementById('confirmationBackdrop').addEventListener('click', (e) => {
    if (e.target === document.getElementById('confirmationBackdrop')) {
      document.getElementById('confirmationBackdrop').classList.remove('open');
    }
  });
}

function initSlideshow() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.slide-arrow.prev');
  const nextBtn = document.querySelector('.slide-arrow.next');
  const slideBtns = document.querySelectorAll('.slide-btn');

  // Start auto-slide
  startAutoSlide();

  // Event listeners for arrows
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }
  
  // Event listeners for dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.dataset.slide);
      goToSlide(slideIndex);
    });
  });
  
  // Event listeners for category buttons in slides
  slideBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const category = btn.dataset.category;
      if (category) {
        // Activate the corresponding category chip
        document.querySelectorAll('.category-chip').forEach(chip => {
          chip.classList.remove('active');
          if (chip.dataset.category === category) {
            chip.classList.add('active');
            currentCategory = category;
          }
        });
        
        // Scroll to categories section
        document.querySelector('.categories').scrollIntoView({ 
          behavior: 'smooth' 
        });
        
        // Filter products
        renderProducts();
      }
    });
  });
}

function startAutoSlide() {
  // Clear existing interval
  if (slideInterval) {
    clearInterval(slideInterval);
  }
  
  // Start new interval
  slideInterval = setInterval(nextSlide, 5000);
}

function nextSlide() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  // Remove active class from current slide
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  
  // Calculate next slide
  currentSlide = (currentSlide + 1) % slides.length;
  
  // Add active class to next slide
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  
  // Restart auto-slide timer
  startAutoSlide();
}

function prevSlide() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  // Remove active class from current slide
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  
  // Calculate previous slide
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  
  // Add active class to previous slide
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  
  // Restart auto-slide timer
  startAutoSlide();
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  
  // Remove active class from current slide
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  
  // Go to specified slide
  currentSlide = index;
  
  // Add active class to new slide
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  
  // Restart auto-slide timer
  startAutoSlide();
}

function renderProducts(search = '') {
  const grid = document.getElementById('productsGrid');
  const filtered = products.filter(p => {
    const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                         p.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔍</div><p>No products found</p></div>';
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const specsArray = Object.entries(p.specs);
    
    const productSpecsHtml = specsArray.map(([key, value]) => `
      <div class="spec-item">
        <span class="spec-key">${key}:</span>
        <span class="spec-value-mini">${value}</span>
      </div>
    `).join('');

    return `
      <div class="product-card" onclick="openModal(${p.id})">
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}">
        </div>
        <div class="product-info">
          <div class="product-title">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-specs">
            ${productSpecsHtml}
          </div>
          <div class="product-footer">
            <div class="product-price">${formatPrice(p.price)}</div>
            <button class="btn-add" onclick="event.stopPropagation(); addToCart(${p.id})">
              🛒 Add
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1, selected: true });
  }
  renderCart();
  updateCartCount();
  
  // Show cart panel automatically on mobile
  if (window.innerWidth <= 768) {
    document.getElementById('cartPanel').classList.add('open');
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
  updateCartCount();
}

function renderCart() {
  const container = document.getElementById('cartItems');
  
  if (cart.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🛒</div><p>Your cart is empty</p></div>';
    updateCartSummary();
    document.getElementById('selectAll').checked = false;
    document.getElementById('selectAll').disabled = true;
    document.getElementById('removeSelected').style.display = 'none';
    return;
  }

  document.getElementById('selectAll').disabled = false;
  document.getElementById('removeSelected').style.display = 'flex';
  
  container.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <input type="checkbox" class="cart-item-checkbox" ${item.selected ? 'checked' : ''} onchange="toggleSelect(${idx})">
      <div class="cart-item-img"><img src="${item.img}" alt="${item.name}"></div>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-actions">
          <button class="qty-btn" onclick="changeQty(${idx}, -1)">-</button>
          <span style="padding: 0 8px; font-weight: 600; font-size: 14px;">${item.quantity}</span>
          <button class="qty-btn" onclick="changeQty(${idx}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${idx})" title="Remove item">×</button>
    </div>
  `).join('');

  document.getElementById('selectAll').checked = cart.every(item => item.selected);
  updateCartSummary();
}

function toggleSelect(idx) {
  cart[idx].selected = !cart[idx].selected;
  renderCart();
}

function changeQty(idx, delta) {
  cart[idx].quantity += delta;
  if (cart[idx].quantity <= 0) {
    cart.splice(idx, 1);
  }
  renderCart();
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartCount').textContent = count;
}

function calculateTotal() {
  return cart.filter(item => item.selected).reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function updateCartSummary() {
  const subtotal = calculateTotal();
  const taxRate = 0.1;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  document.getElementById('subtotal').textContent = formatPrice(subtotal);
  document.getElementById('tax').textContent = formatPrice(tax);
  document.getElementById('cartTotal').textContent = formatPrice(total);
}

function openModal(id) {
  const product = products.find(p => p.id === id);
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalPrice').textContent = formatPrice(product.price);
  document.getElementById('modalDesc').textContent = product.desc;
  document.getElementById('modalImg').innerHTML = `<img src="${product.img}" alt="${product.name}">`;

  const specsHtml = Object.entries(product.specs).map(([key, value]) => `
    <li>
      <span class="spec-name">${key}:</span>
      <span class="spec-value">${value}</span>
    </li>
  `).join('');

  document.getElementById('modalSpecs').innerHTML = `<ul class="specs-list">${specsHtml}</ul>`;

  document.getElementById('modalAdd').onclick = () => {
    addToCart(id);
    closeModal();
  };
  document.getElementById('modalBackdrop').classList.add('open');
}

function closeModal() {
  document.getElementById('modalBackdrop').classList.remove('open');
}

function formatPrice(price) {
  return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function renderCheckout(items) {
  const container = document.getElementById('checkoutItems');
  const qrAmount = document.getElementById('qrAmount');
  
  if (items.length === 0) {
    container.innerHTML = '<p>No items selected</p>';
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="checkout-item">
      <img src="${item.img}" alt="${item.name}">
      <div class="checkout-item-info">
        <div class="checkout-item-title">${item.name}</div>
        <div class="checkout-item-price">${formatPrice(item.price)} × ${item.quantity}</div>
      </div>
    </div>
  `).join('');

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  document.getElementById('checkoutSubtotal').textContent = formatPrice(subtotal);
  document.getElementById('checkoutTax').textContent = formatPrice(tax);
  document.getElementById('checkoutTotal').textContent = formatPrice(total);
  
  // Update QR amount
  if (qrAmount) {
    qrAmount.textContent = formatPrice(total);
  }
}

function processCheckoutForm() {
  const name = document.getElementById('checkoutName').value.trim();
  const phone = document.getElementById('checkoutPhone').value.trim();
  const payment = document.getElementById('checkoutPayment').value;
  const terms = document.getElementById('termsAgree').checked;

  if (!name || !phone || !payment) {
    alert('Please fill all fields');
    return;
  }

  if (!terms) {
    alert('Please agree to the Terms & Conditions');
    return;
  }

  if (payment === "KHQR") {
    document.getElementById('checkoutBackdrop').classList.remove('open');
    document.getElementById('qrBackdrop').classList.add('open');
  } else {
    processOrder(name, phone, payment);
  }
}

function processOrderAfterPayment() {
  const name = document.getElementById('checkoutName').value.trim();
  const phone = document.getElementById('checkoutPhone').value.trim();
  const payment = document.getElementById('checkoutPayment').value;
  processOrder(name, phone, payment);
}

function processOrder(name, phone, payment) {
  const selectedItems = cart.filter(item => item.selected);
  const order = {
    customerName: name,
    contact: phone,
    paymentMethod: payment,
    items: selectedItems,
    total: document.getElementById('checkoutTotal').textContent,
    orderId: `#LSP-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`
  };

  // Update order ID in confirmation modal
  document.getElementById('orderId').textContent = order.orderId;
  
  // Show confirmation modal
  document.getElementById('confirmationBackdrop').classList.add('open');
  
  // Remove selected items from cart
  cart = cart.filter(item => !item.selected);
  
  // Reset and update UI
  renderCart();
  updateCartCount();
  document.getElementById('checkoutForm').reset();
  document.getElementById('checkoutBackdrop').classList.remove('open');
  document.getElementById('qrBackdrop').classList.remove('open');
}

// Expose functions for inline onclick
window.openModal = openModal;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.toggleSelect = toggleSelect;
window.changeQty = changeQty;
window.prevSlide = prevSlide;
window.nextSlide = nextSlide;