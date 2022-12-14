let wrapper = document.getElementById('wrapper');

fetch('/api/allproducts')
      .then(res => res.json())
      .then(res => {
        let products = res.all_products
        let output = '<div class="row">'
        products.forEach(product => {
          console.log(product.images);
          let thumbnail;
          for(let img = 0; img < product.images.length; img++) {
            thumbnail = product.images[0]
          } 
          console.log(thumbnail);
          output += `<div class="col-4 wrapper_col">
            <div class="card">
              <img src="http://localhost:5050${thumbnail}" class="card-img-top mx-auto d-block" style="width: 250px; height: auto;">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Price: <span>${product.price}</span>&nbsp;Tk.</p>
                <a href="allproducts/singleproduct/${product.id}" class="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>`
        })
        output += '</div>'

        wrapper.insertAdjacentHTML('afterbegin', output)
      })
      .catch(err => {
        console.log(err.msg);
      })