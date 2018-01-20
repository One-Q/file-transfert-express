document.getElementById('form').addEventListener('submit', function(event){
  event.preventDefault()
  let fileFront = document.getElementById('fileInput')
  let titleFront = document.getElementById('title')
  console.log('file',fileFront.files[0])
  console.log('title', titleFront.value)
  fetch('http://localhost:4000/upload', {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: titleFront.value,
      file: fileFront.files[0]
    })
  })
})