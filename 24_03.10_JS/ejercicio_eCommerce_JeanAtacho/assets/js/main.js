//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
//sintaxis de mdn con createElement, append, setAttribute


fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(products => {
    //creacion del <ul> y su clase
    const container = document.querySelector('.app')
    const productList = document.createElement('ul')
        productList.classList.add('products')

    //creacion de las <li> y sus respectiva clase
    const createProductElement = product => {
        const productItem = document.createElement('li')
            productItem.classList.add('product')

        //creacion del div contenedor de la imagen y de la img src y su clase
        const imageContainer = document.createElement('div')
            imageContainer.classList.add('product__image-container')
        const image = document.createElement('img')
            image.classList.add('product__image')
            image.src = product.image
            imageContainer.appendChild(image)

        //creacion del div contenedor content y su clase  
        const content = document.createElement('div')
            content.classList.add('product__content')

        //creacion del header y su clase ademas de: h6, h2, p, textContent y la clase del contenedor content
        const header = document.createElement('header')
            header.classList.add('product__header')

        const category = document.createElement('h6')
            category.classList.add('product__category')
            category.textContent = product.category

        const title = document.createElement('h2')
            title.classList.add('product__title')
            title.textContent = product.title

        const price = document.createElement('p')
            price.classList.add('product__price')
            price.textContent = product.price

        const description = document.createElement('p')
            description.classList.add('product__description')
            description.textContent = product.description
            header.append(category, title, price, description)
        
        //creacion del footer, el like y add to cart
        const footer = document.createElement('footer')
            footer.classList.add('product__footer')

        const likeLink = document.createElement('a')
            likeLink.classList.add('product__like')
            likeLink.href = '#'
            likeLink.setAttribute('data-id', product.id)

        const likeIcon = document.createElement('i')
            likeIcon.classList.add('icon-heart-empty')
            likeLink.appendChild(likeIcon)

        const addToCartLink = document.createElement('a')
            addToCartLink.classList.add('product__add-to-cart')
            addToCartLink.href = '#'
            addToCartLink.textContent = 'Add to Cart'

        //agrupacion de los elementos en su respectivo contenedor
        footer.append(likeLink, addToCartLink)
        content.append(header, footer)
        productItem.append(imageContainer, content)

        //Agregar evento al botón de like
        likeLink.addEventListener('click', (e) => {
            e.preventDefault()
            likeIcon.classList.toggle('icon-heart-empty')
            likeIcon.classList.toggle('icon-heart')
        })
        
        //Agregar evento al botón add to cart
        addToCartLink.addEventListener('click', (e) => {
            e.preventDefault()
            addToCartLink.classList.toggle('product__add-to-cart')
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Producto agregado correctamente',
                showConfirmButton: false,
                timer: 1500
                })
        addToCartLink.classList.toggle('product__add')
        })

    return productItem
    }

    products.forEach(product => {
    productList.appendChild(createProductElement(product))
    })

    const title = document.createElement('h1')
    title.classList.add('app__title')
    title.textContent = 'Trending Products'
    container.append(title, productList)
})