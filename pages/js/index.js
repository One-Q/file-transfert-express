document.getElementById('form').addEventListener('submit', function(event){
  event.preventDefault()
  let form = new FormData()
  let fileFront = document.getElementById('fileInput')
  let titleFront = document.getElementById('title')
  form.append('fileFront', fileFront.files[0])
  // form.append('title', titleFront.value)
  fetch('http://localhost:4000/upload', {
    method: 'post',
    body: form
  })
})