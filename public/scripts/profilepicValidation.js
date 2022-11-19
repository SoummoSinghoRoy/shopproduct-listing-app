window.onload = function() {
  let profilepic = document.getElementById('profilepic');
  let warning = document.getElementById('warning');

  profilepic.addEventListener('change', function() {
    let uploadedpic = this.files[0]
    console.dir(profilepic);
    if(uploadedpic) {
      let reader = new FileReader()
      reader.onload = function (event) {
        let img = new Image()
        img.src = event.target.result
        img.onload = function () {
          let uplodedpicsize = profilepic.files[0].size / 1024
          const expectedsize = 1024*50/1024
          if(this.width > 200 && this.height > 200 && expectedsize < uplodedpicsize) {
            warning.innerHTML = `Profilepic must be less then 50kb & resulation 200px * 200px`
            warning.className = 'text-danger mt-2'
            profilepic.value = ''
          }else{
            warning.innerHTML = `Attached successfully`
            warning.className = 'text-success mt-2 fw-bolder'
          }
        }
      }
      reader.readAsDataURL(uploadedpic)
    }
  })
}