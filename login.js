// Insert your code here
const registerBtn = document.querySelector('#register')
const connectBtn = document.querySelector('#connection')

registerBtn.addEventListener('click', function() {
  fetch('https://weatherapp-backend-peach-three.vercel.app/users/signup', {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({
      name: document.querySelector('#registerName').value,
      email: document.querySelector('#registerEmail').value,
      password: document.querySelector('#registerPassword').value
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === true) {
      window.location.assign('index.html')
    }
  }) 
})

connectBtn.addEventListener('click', function() {
  fetch('https://weatherapp-backend-peach-three.vercel.app/users/signin', {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({
      email: document.querySelector('#connectionEmail').value,
      password: document.querySelector('#connectionPassword').value
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === true) {
      window.location.assign('index.html')
    }
  })
})