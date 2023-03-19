fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        const div = document.querySelector('.app')
        const ul = document.createElement('products')
        const app = products.map(product => {
            return ` 
            <h1 class="app__title">Trending Products</h1>
             <ul class="products">
               <li class="product">
                    <div class="product__image-container">
                    <img src="${product.image}" class="product__image" />
                    </div>
                    <div class="product__content">
                    <header class="product__header">
                        <h6 class="product__category">${product.category}</h6>
                        <h2 class="product__title">${product.title}</h2>
                        <p class="product__price">${product.price}</p>
                        <p class="product__description">${product.description}</p>
                    </header>
                    <footer class="product__footer">
                        <a href="#" data-id="1" class="product__like"><i class="icon-heart-empty"></i></a>
                        <a href="#" class="product__add-to-cart">Add to Cart</a>
                    </footer>
                 </div>
              </li>       
           </ul>
         `
        })
        div.innerHTML = app.join('')
    })
 
   
    

    





