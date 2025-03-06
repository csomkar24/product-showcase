const products = [
    {
        id: 1,
        name: "Elegant Smart Watch",
        price: "$199.99",
        description: "A sleek and modern smartwatch with advanced health tracking features and long battery life.",
        image: "images/smart-watch.jpg",
        specs: [
            "Heart Rate Monitoring",
            "Sleep Tracking",
            "Water Resistant",
            "7-Day Battery Life"
        ]
    },
    {
        id: 2,
        name: "Wireless Headphones",
        price: "$249.99",
        description: "Premium over-ear headphones with industry-leading noise cancellation technology.",
        image: "images/wireless-headphones.png",
        specs: [
            "Active Noise Cancellation",
            "40-Hour Battery Life",
            "Touch Controls",
            "Bluetooth 5.0"
        ]
    },
    {
        id: 3,
        name: "Compact Mirrorless Camera",
        price: "$799.99",
        description: "Professional-grade mirrorless camera with 4K video capabilities and interchangeable lenses.",
        image: "images/compact-mirrorless-camera.jpg",
        specs: [
            "24MP Sensor",
            "4K Video Recording",
            "5-Axis Image Stabilization",
            "Wi-Fi Connectivity"
        ]
    },
    {
        id: 4,
        name: "Portable Bluetooth Speaker",
        price: "$129.99",
        description: "Rugged outdoor speaker with exceptional sound quality and waterproof design.",
        image: "images/portable-bluetooth-speaker.webp",
        specs: [
            "IPX7 Waterproof",
            "12-Hour Battery",
            "360-Degree Sound",
            "Built-in Microphone"
        ]
    },
    {
        id: 5,
        name: "Handcrafted Wooden Coffee Table",
        price: "$299.99",
        description: "Elegant and sturdy wooden coffee table with a unique design and polished finish.",
        image: "images/handcrafted-wooden-coffee-table.webp",
        specs: [
            "Solid Oak Wood",
            "Handcrafted Design",
            "Modern Style",
            "Easy Assembly"
        ]
    },
    {
        id: 6,
        name: "Ceramic Tea Set",
        price: "$69.99",
        description: "Elegant tea set made from high-quality ceramic, perfect for afternoon tea gatherings.",
        image: "images/ceramic-tea-set.jpg",
        specs: [
            "6-Piece Set",
            "Dishwasher Safe",
            "High-Quality Ceramic",
            "Elegant Design"
        ]
    },
    {
        id: 7,
        name: "Adjustable Standing Desk",
        price: "$350.00",
        description: "Height-adjustable desk that promotes better posture and productivity during work hours.",
        image: "images/adjustable-standing-desk.png",
        specs: [
            "Electric Height Adjustment",
            "Spacious Desk Surface",
            "Cable Management System",
            "Sturdy Steel Frame"
        ]
    },
    {
        id: 8,
        name: "Organic Cotton Bed Sheets",
        price: "$119.99",
        description: "Soft, breathable, and eco-friendly bed sheets made from 100% organic cotton.",
        image: "images/organic-cotton-bed-sheets.jpeg",
        specs: [
            "100% Organic Cotton",
            "Breathable & Soft",
            "Sustainable Production",
            "Machine Washable"
        ]
    },
    {
        id: 9,
        name: "Yoga Mat",
        price: "$29.99",
        description: "Non-slip yoga mat for comfortable and stable practice during your yoga sessions.",
        image: "images/yoga-mat.webp",
        specs: [
            "Non-Slip Surface",
            "Durable & Lightweight",
            "Eco-Friendly Material",
            "Thick Padding"
        ]
    },
    {
        id: 10,
        name: "Stainless Steel Water Bottle",
        price: "$24.99",
        description: "Double-walled stainless steel water bottle that keeps drinks hot or cold for hours.",
        image: "images/stainless-steel-water-bottle.webp",
        specs: [
            "BPA-Free",
            "Insulated",
            "Leak-Proof",
            "Eco-Friendly"
        ]
    },
    {
        id: 11,
        name: "Indoor Plant Pot",
        price: "$19.99",
        description: "Beautiful ceramic indoor plant pot with drainage hole, perfect for your home plants.",
        image: "images/indoor-plant-pot.png",
        specs: [
            "Ceramic Material",
            "Drainage Hole",
            "Suitable for Indoor Plants",
            "Minimalist Design"
        ]
    },
    {
        id: 12,
        name: "Vintage Leather Journal",
        price: "$29.99",
        description: "Handcrafted vintage leather journal with a durable cover and high-quality paper.",
        image: "images/vintage-leather-journal.jpeg",
        specs: [
            "Genuine Leather",
            "200 Pages",
            "Handcrafted",
            "Ideal for Journaling"
        ]
    },
    {
        id: 13,
        name: "Smart Thermostat",
        price: "$149.99",
        description: "Energy-efficient smart thermostat with remote control and voice integration.",
        image: "images/smart-thermostat.webp",
        specs: [
            "Voice Assistant Integration",
            "Wi-Fi Connectivity",
            "Energy Saving Mode",
            "Remote Control via App"
        ]
    },
    {
        id: 14,
        name: "Pet Bed",
        price: "$69.99",
        description: "Comfortable and plush pet bed for your furry friend to rest in luxury.",
        image: "images/pet-bed.jpg",
        specs: [
            "Memory Foam",
            "Washable Cover",
            "Soft & Cozy",
            "Non-Slip Bottom"
        ]
    },
    {
        id: 15,
        name: "Essential Oils Diffuser",
        price: "$49.99",
        description: "A stylish essential oils diffuser that helps create a relaxing atmosphere in your home.",
        image: "images/essential-oils-diffuser.webp",
        specs: [
            "Ultrasonic Technology",
            "Quiet Operation",
            "Auto Shutoff",
            "LED Light"
        ]
    },
    {
        id: 16,
        name: "Cordless Handheld Vacuum Cleaner",
        price: "$119.99",
        description: "Lightweight and powerful cordless vacuum cleaner for quick clean-ups.",
        image: "images/cordless-handheld-vacuum-cleaner.webp",
        specs: [
            "Cord-Free",
            "Lightweight",
            "High Suction Power",
            "Detachable Battery"
        ]
    },
    {
        id: 17,
        name: "French Press Coffee Maker",
        price: "$39.99",
        description: "Classic French press coffee maker that brews rich, flavorful coffee.",
        image: "images/french-press-coffee-maker.avif",
        specs: [
            "Glass & Stainless Steel",
            "4-Cup Capacity",
            "Easy to Clean",
            "Brews Rich Coffee"
        ]
    },
    {
        id: 18,
        name: "Outdoor Hammock",
        price: "$79.99",
        description: "Comfortable and durable hammock for relaxing outdoors.",
        image: "images/outdoor-hammock.jpg",
        specs: [
            "Durable Nylon",
            "Easy to Hang",
            "Compact & Lightweight",
            "Supports Up to 400lbs"
        ]
    },
    {
        id: 19,
        name: "Eco-Friendly Laundry Detergent",
        price: "$14.99",
        description: "Gentle, eco-friendly laundry detergent that’s tough on stains but safe for the environment.",
        image: "images/eco-friendly-laundry-detergent.jpg",
        specs: [
            "Biodegradable Ingredients",
            "Plant-Based",
            "Hypoallergenic",
            "Non-Toxic"
        ]
    },
    {
        id: 20,
        name: "Portable Blender",
        price: "$49.99",
        description: "Compact, rechargeable blender that’s perfect for smoothies and shakes on the go.",
        image: "images/portable-blender.jpg",
        specs: [
            "Rechargeable",
            "Compact & Lightweight",
            "Stainless Steel Blades",
            "USB Charging"
        ]
    },
    {
        id: 21,
        name: "Adjustable Dumbbells",
        price: "$159.99",
        description: "Set of adjustable dumbbells for a versatile home workout.",
        image: "images/adjustable-dumbbells.webp",
        specs: [
            "Adjustable Weight",
            "Space Saving",
            "Durable Cast Iron",
            "Easy to Use"
        ]
    },
    {
        id: 22,
        name: "Bamboo Cutting Board Set",
        price: "$39.99",
        description: "Set of eco-friendly bamboo cutting boards for all your kitchen prep needs.",
        image: "images/bamboo-cutting-board-set.webp",
        specs: [
            "Bamboo Material",
            "Dishwasher Safe",
            "Knife-Friendly Surface",
            "Non-Slip Feet"
        ]
    },
    {
        id: 23,
        name: "Tennis Racket",
        price: "$89.99",
        description: "High-quality tennis racket with a lightweight frame and excellent balance.",
        image: "images/tennis-racket.jpg",
        specs: [
            "Lightweight Frame",
            "Powerful Strings",
            "Comfortable Grip",
            "Balanced Design"
        ]
    },
    {
        id: 24,
        name: "Bluetooth Smart Scale",
        price: "$49.99",
        description: "Track your weight and body metrics with this smart Bluetooth scale.",
        image: "images/bluetooth-smart-scale.jpg",
        specs: [
            "Bluetooth Connectivity",
            "Body Composition Analysis",
            "High-Accuracy Sensors",
            "App Sync"
        ]
    }
];

const productCategories = {
    "Technology & Gadgets": ["Elegant Smart Watch", "Wireless Noise Cancelling Headphones", "Compact Mirrorless Camera", "Portable Bluetooth Speaker", "Smart Thermostat", "Cordless Handheld Vacuum Cleaner", "Portable Blender", "Adjustable Dumbbells", "Bluetooth Smart Scale"],
    "Home & Furniture": ["Handcrafted Wooden Coffee Table", "Adjustable Standing Desk", "Organic Cotton Bed Sheets", "Indoor Plant Pot", "Vintage Leather Journal", "Pet Bed", "French Press Coffee Maker", "Outdoor Hammock", "Bamboo Cutting Board Set"],
    "Kitchen & Dining": ["Ceramic Tea Set", "French Press Coffee Maker", "Portable Blender", "Bamboo Cutting Board Set"],
    "Health & Fitness": ["Yoga Mat", "Adjustable Dumbbells", "Tennis Racket"],
    "Eco-friendly & Sustainable Products": ["Organic Cotton Bed Sheets", "Eco-Friendly Laundry Detergent", "Stainless Steel Water Bottle", "Bamboo Cutting Board Set"],
    "Personal Care & Relaxation": ["Essential Oils Diffuser", "Vintage Leather Journal", "Pet Bed", "Ceramic Tea Set"],
    "Outdoor & Sports": ["Tennis Racket", "Outdoor Hammock"],
    "Home Improvement & Office": ["Adjustable Standing Desk", "Smart Thermostat", "Bluetooth Smart Scale"],
    "Miscellaneous": ["Indoor Plant Pot", "French Press Coffee Maker"]
};

document.addEventListener("DOMContentLoaded", () => {
    // Force initial render of all products
    renderProductGrid();
});

// Render product grid
function renderProductGrid(category = "all") {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = "";

    const filteredProducts = category === "all"
        ? products
        : products.filter(product => {
            // Debugging console log
            const matchedCategories = Object.keys(productCategories).filter(cat => 
                productCategories[cat].includes(product.name)
            );
            console.log(`Product: ${product.name}, Matched Categories: ${matchedCategories}`);
            
            // Check if the product belongs to the selected category
            return productCategories[category]?.includes(product.name);
        });

    filteredProducts.forEach(product => {
        grid.innerHTML += `
            <div class="col">
                <div class="card product-card" data-bs-toggle="modal" data-bs-target="#product-modal" data-product-id="${product.id}">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text text-primary">${product.price}</p>
                    </div>
                </div>
            </div>`;
    });

    // Reattach event listeners to new product cards
    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", openProductModal);
    });
}




// Open product modal
function openProductModal(event) {
    const productId = event.currentTarget.dataset.productId;
    const product = products.find(p => p.id === parseInt(productId));

    const modal = document.getElementById('product-modal');
    const modalContent = modal.querySelector('.modal-content');

    // Update modal content
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-image').alt = product.name;
    document.getElementById('modal-product-title').textContent = product.name;
    document.getElementById('modal-product-description').textContent = product.description;
    document.getElementById('modal-product-price').textContent = product.price;

    // Render product specifications in modal
    const specsContainer = document.getElementById('modal-product-specs');
    specsContainer.innerHTML = '<h3>Specifications:</h3>' +
        product.specs.map(spec => `<p>• ${spec}</p>`).join('');

    // Show modal
    modal.style.display = 'block';
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.classList.add('show');
    }, 10);

    // Focus management
    modalContent.focus();
}

// Close modal functionality
function closeModal() {
    const modal = document.getElementById('product-modal');
    const modalContent = modal.querySelector('.modal-content');

    modal.style.opacity = '0';
    modalContent.classList.remove('show');

    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}


document.addEventListener("DOMContentLoaded", () => {
    // Use the correct close button selector
    const closeButton = document.querySelector('#product-modal .btn-close');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Modal backdrop close
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === e.currentTarget) closeModal();
        });
    }

    // Keyboard accessibility for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Initial category filter setup
    const categoryFilter = document.getElementById("category-filter");
    if (categoryFilter) {
        categoryFilter.addEventListener("change", function () {
            renderProductGrid(this.value);
        });
        
        // Trigger initial render with "all"
        renderProductGrid("all");
    } else {
        console.error("Category filter dropdown not found");
        // Fallback to render all products
        renderProductGrid();
    }
});

no_of_items = 0;
function increment(){
    no_of_items += 1;
    document.getElementById('no_of_items').innerHTML = `Cart (${no_of_items})`;
}
