let wrapper = document.getElementById('wrapper');

fetch('/api/allproducts')
      .then(res => res.json())
      .then(res => {
        let products = res.all_products
        let output = '<div class="row">'
        products.forEach(product => {
          let thumbnail;
          for(let img = 0; img < product.images.length; img++) {
            thumbnail = product.images[0]
          } 
          output += `<div class="col-3 wrapper_col">
            <div class="card">
              <img src="http://localhost:5050${thumbnail}" class="card-img-top mx-auto d-block" style="width: 250px; height: auto;">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Price: <span>${product.price}</span>&nbsp;Tk.</p>
                <p class="card-text">Manufactured By: <span>${product.manufacture_company}</span></p>
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