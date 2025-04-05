# 📌 Proyecto E-commerce - CoderHouse

## 🛍️ Descripción
Hola, mi nombre es **Romina Castillo**, y este es mi proyecto para **CoderHouse**. El objetivo es crear un **menú e-commerce** para mi tienda, acompañado de una **landing page**, utilizando **React.js** como tecnología principal.

## 🚀 Tecnologías Utilizadas
Este proyecto ha sido desarrollado utilizando:
- ⚛️ **React.js** - Biblioteca para construir interfaces de usuario interactivas.
- 🎨 **CSS** - Para los estilos del sitio.
- 📦 **Vite** - Herramienta de desarrollo rápida para proyectos con React.
- 🖥️ HTML5 - Estructura de las páginas web.

## 📥 Instalación y Configuración
Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1️⃣ **Clonar el repositorio:**
```sh
 git clone https://github.com/Romina-Castillo46110/Entrega1-Castillo.git
```

2️⃣ **Acceder al directorio:**
```sh
 cd Entrega1-Castillo
```

3️⃣ **Instalar dependencias:**
```sh
 npm install
```

4️⃣ **Ejecutar la aplicación:**
```sh
 npm run dev
```

## 📂 Estructura del Proyecto
El proyecto está organizado de la siguiente manera:
```
📁 PROYECTOFINAL
├── 🚫 .gitignore
├── ⚙️ eslint.config.js
├── 🌐 index.html
├── 📦 package-lock.json
├── 📦 package.json
├── 📜 README.md
├── ⚙️ vite.config.js
├── 📦 node_modules
├── 📁 public
├── 📁 src
│   ├── 🚀 App.jsx
│   ├── 📄 index.css
│   ├── 🚀 main.jsx
│
│   ├── 📁 assets
│   │   └── 🖼️ shopping-cart.svg
│
│   ├── 📁 components
│   │   ├── 💠 AddItemButton.jsx
│   │   ├── 💠 Brief.jsx
│   │   ├── 💠 CartModal.jsx
│   │   ├── 💠 CartWidget.jsx
│   │   ├── 💠 Checkout.jsx
│   │   ├── 💠 Footer.jsx
│   │   ├── 💠 Header.jsx
│   │   ├── 💠 ItemDetail.jsx
│   │   ├── 💠 ItemDetailContainer.jsx
│   │   ├── 💠 ItemList.jsx
│   │   ├── 💠 ItemListContainer.jsx
│   │   ├── 💠 ItemQuantitySelector.jsx
│   │   ├── 💠 Navbar.jsx
│   │   └── 💠 Notificacion.jsx
│
│   ├── 📁 context
│   │   └── 💠 CartContext.jsx
│
│   └── 📁 style
│       ├── 🎨 AddItemButton.css
│       ├── 🎨 Brief.css
│       ├── 🎨 CartModal.css
│       ├── 🎨 CartWidget.css
│       ├── 🎨 Checkout.css
│       ├── 🎨 Footer.css
│       ├── 🎨 Header.css
│       ├── 🎨 ItemDetail.css
│       ├── 🎨 ItemDetailContainer.css
│       ├── 🎨 ItemList.css
│       ├── 🎨 ItemListContainer.css
│       ├── 🎨 ItemQuantitySelector.css
│       ├── 🎨 Navbar.css
│       └── 🎨 Notificacion.css
```

## 🛠️ Funcionamiento General

- **Navbar.jsx**: Contiene el menú de navegación con enlaces.
- **CartWidget.jsx**: Muestra un ícono de carrito con un número de productos fijo.
- **ItemListContainer.jsx**: Recibe una `prop` llamada `greeting` y la muestra en la pantalla. Obtiene productos de la API. Filtra por categoría.
- **ItemList.jsx**: Se separa de ItemListContainer y se encarga de renderizar la lista de productos.
- **ItemDetailContainer.jsx**: Obtiene el detalle de un producto desde la API usando useParams(). 
- **ItemDetail.jsx**: Se separa de ItemDetailContainer y solo se encarga de mostrar los detalles del producto.
- **ItemQuantitySelector.jsx**: Permite al usuario elegir cuántas unidades del producto agregar al carrito antes de confirmar la compra. Permite aumentar, disminuir y visualizar la cantidad de productos seleccionados.
- **AddItemButton.jsx**: Es un componente reutilizable que se encarga exclusivamente de manejar el evento de agregar productos al carrito.
- **Checkout.jsx**: Permite revisar su compra y confirmar el pedido. Muestra un resumen de los productos, permite al usuario completar los datos para finalizar la compra. Incluye un botón de "Finalizar compra".
- **Brief.jsx**: Muestra un resumen previo al checkout.
- **App.jsx**: Es el componente principal que organiza la estructura de la aplicación.
- **CartContext.jsx**: Manejo global del carrito con funciones para agregar, eliminar y mostrar productos.
- **CartModal.jsx**: Ventana modal flotante que muestra el contenido del carrito.
- **Notificacion.jsx**: Notificaciones emergentes cuando se agrega un producto al carrito.

## 📌 Contacto

Si tienes dudas o sugerencias, puedes contactarme en GitHub: [Romina-Castillo46110](https://github.com/Romina-Castillo46110). O por medio de un correo a: Romina.Castillo195@gmail.com

¡Gracias por visitar mi proyecto! 🚀

