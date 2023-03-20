fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    const container = document.querySelector('.app')
    const productList = document.createElement('ul')
    productList.classList.add('products')
    const createProductElement = product => {
      const productItem = document.createElement('li')
      productItem.classList.add('product')
      const imageContainer = document.createElement('div')
      imageContainer.classList.add('product__image-container')
      const image = document.createElement('img')
      image.classList.add('product__image')
      image.src = product.image
      imageContainer.appendChild(image)
      const content = document.createElement('div')
      content.classList.add('product__content')
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
      header.appendChild(category)
      header.appendChild(title)
      header.appendChild(price)
      header.appendChild(description)
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
      footer.appendChild(likeLink)
      footer.appendChild(addToCartLink)
      content.appendChild(header)
      content.appendChild(footer)
      productItem.appendChild(imageContainer)
      productItem.appendChild(content)
      // Agrega un event listener para el botón de like
      likeLink.addEventListener('click', (e) => {
        e.preventDefault()
        likeIcon.classList.toggle('icon-heart-empty')
        likeIcon.classList.toggle('icon-heart')
      })
      return productItem
    }
    products.forEach(product => {
      productList.appendChild(createProductElement(product))
    })
    const title = document.createElement('h1')
    title.classList.add('app__title')
    title.textContent = 'Trending Products'
    container.appendChild(title)
    container.appendChild(productList)
  })