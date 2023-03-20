//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
//sintaxis de mdn con createElement, append, setAttribute


fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    //creacion de la <ul> y su clase
    const container = document.querySelector('.app')
    const productList = document.createElement('ul')
    productList.classList.add('products')
    //creacion de la <li> y su clase
    const createProductElement = product => {
      const productItem = document.createElement('li')
      productItem.classList.add('product')

      //creacion del div contenedor de la image
      const imageContainer = document.createElement('div')
      imageContainer.classList.add('product__image-container')
      //creacion de la img src
      const image = document.createElement('img')
      // creacion de la clase
      image.classList.add('product__image')
      //asignacion del valor
      image.src = product.image
      //agrupacion de elementos
      imageContainer.appendChild(image)

       //creacion del div y su clase  contenedor content
      const content = document.createElement('div')
      content.classList.add('product__content')
      
         //creacion del header y su clase contenedor content
      const header = document.createElement('header')
      header.classList.add('product__header')

       //creacion del h6, h2, p, textContent y la clase del  contenedor content
      const category = document.createElement('h6')
      category.classList.add('product__category')
       //creacion del textContent item del contenedor content
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
      //agrupacion de elementos por medio de append por que nos permite agrupar varios elements a mismo tiempo
      header.append(category, title, price, description)
      
      //creacion del footer, a like, a  to card.
      const footer = document.createElement('footer')
      footer.classList.add('product__footer')

      const likeLink = document.createElement('a')
      likeLink.classList.add('product__like')
      likeLink.href = '#'
      likeLink.setAttribute('data-id', product.id)
      // button like
      const likeIcon = document.createElement('i')
      likeIcon.classList.add('icon-heart-empty')
      likeLink.appendChild(likeIcon)

      // button add to card 
      const addToCartLink = document.createElement('a')
      addToCartLink.classList.add('product__add-to-cart')
      addToCartLink.href = '#'
      addToCartLink.textContent = 'Add to Cart'

      const deleToCartLink = document.createElement('a')
      deleToCartLink.classList.add('product__delete-to-car')
      deleToCartLink.href = '#'
      deleToCartLink.textContent = 'Delete'

      //agrupacion de los elements
      footer.append(likeLink, addToCartLink,  deleToCartLink)
      content.append(header, footer)
      productItem.append(imageContainer, content)
      // botón de like
      likeLink.addEventListener('click', (e) => {
        e.preventDefault()
        likeIcon.classList.toggle('icon-heart-empty')
        likeIcon.classList.toggle('icon-heart')
        
      })
      //button add
      addToCartLink.addEventListener('click', (e) => {
        e.preventDefault()
          addToCartLink.classList.toggle('product__add-to-cart')
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto agregado',
            showConfirmButton: false,
            timer: 1500
          })
          addToCartLink.classList.toggle('product__add')
        
      })

      //buttton delete
      deleToCartLink.addEventListener('click', (e) => {
        e.preventDefault()
        deleToCartLink.classList.toggle('product__delete-to-cart')
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto eliminado con exito',
            showConfirmButton: false,
            timer: 1500
          })
        
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