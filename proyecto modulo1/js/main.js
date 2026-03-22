const productos = [
    {
        nombre: "Smartphone Ultra X",
        descripcion: "Pantalla AMOLED de 6.7 pulgadas, cámara de 108MP, batería de 5000mAh y 5G.",
        precio: "$499.990"
    },
    {
        nombre: "Laptop Pro 15",
        descripcion: "Procesador Intel i7, 16GB RAM, SSD 512GB, pantalla 4K UHD, ideal para profesionales.",
        precio: "$899.990"
    },
    {
        nombre: "Auriculares Wireless",
        descripcion: "Cancelación activa de ruido, 30 horas de batería, sonido de alta fidelidad.",
        precio: "$89.990"
    },
    {
        nombre: "Smartwatch Fitness",
        descripcion: "Monitoreo cardíaco, GPS integrado, resistente al agua, seguimiento de actividad física.",
        precio: "$149.990"
    },
    {
        nombre: "Tablet Educativa",
        descripcion: "Pantalla de 10.5 pulgadas, lápiz digital incluido, ideal para estudio y entretenimiento.",
        precio: "$299.990"
    },
    {
        nombre: "Cámara Mirrorless",
        descripcion: "Sensor de 24MP, grabación 4K, estabilización de imagen, lente intercambiable.",
        precio: "$649.990"
    }
];

function renderizarProductos() {
    const grid = document.getElementById('productos-grid');
    
    productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.innerHTML = `
            <div class="producto-card">
                <div class="producto-img">
                </div>
                <div class="producto-body">
                    <h3 class="producto-titulo">${producto.nombre}</h3>
                    <p class="producto-descripcion">${producto.descripcion}</p>
                    <div class="producto-precio">${producto.precio}</div>
                    <button class="btn-producto">Comprar Ahora</button>
                </div>
            </div>
        `;
        grid.appendChild(productoElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-producto')) {
            alert('Producto agregado al carrito');
        }
    });
});