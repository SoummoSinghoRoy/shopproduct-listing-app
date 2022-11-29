window.onload = function() {
  let shop_imgs = document.getElementById('shop_imgs');

  shop_imgs.addEventListener('change', function() {
    let imgsFile = this.files
    let uploadedImgs = []
    for (let img = 0; img < imgsFile.length; img++) {
      uploadedImgs.push(imgsFile[img])  
    }
    if(uploadedImgs) {
      uploadedImgs.map(imgfile => {
        let reader = new FileReader()
        reader.onload = function (event) {
          let uplodedpicsSize = imgfile.size
          const expectedsize = 1024 * 500
          if(uplodedpicsSize > expectedsize) {
            warning.innerHTML = `Profilepic must be less then 500kb & resulation 200px * 200px`
            warning.className = 'text-danger mt-2'
            shop_imgs.value = ''
          }else{
            warning.innerHTML = `Attached successfully`
            warning.className = 'text-success mt-2 fw-bolder'
          }
          
        }
        reader.readAsDataURL(imgfile)
      })
    }
  })
}