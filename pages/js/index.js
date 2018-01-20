let form = document.getElementById('form')

form.addEventListener('submit', function(event){
  event.preventDefault()
  let formData = new FormData(form)
  let fileFront = document.getElementById('fileFront')
  let titleFront = document.getElementById('title')
  console.log('File', fileFront.files[0])
  console.log('Title', titleFront.value)
  // form.append('title', titleFront.value)
  fetch('http://localhost:4000/upload', {
    method: 'post',
    body: form
  })
})