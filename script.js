const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('What is your name?')
appendMessage('You joined')
socket.emit('new-user', name)

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name => {
  appendMessage(`${name} connected`)
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`)
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`You: ${message}`)
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function appendMessage(message) {
  const messageElement = document.createElement('div')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}

function myFunction() {
  document.getElementById("content").style.fontSize = "x-large";
  document.getElementById("YIKE").style.fontSize = "x-large";
  document.getElementById("YIKE2").style.fontSize = "x-large";
  document.getElementById("YIKE3").style.fontSize = "x-large";
  document.getElementById("YIKE4").style.fontSize = "x-large";
}
function myFunction2() {
  document.getElementById("content").style.fontSize = "18px";
  document.getElementById("YIKE").style.fontSize = "18px";
  document.getElementById("YIKE2").style.fontSize = "18px";
  document.getElementById("YIKE3").style.fontSize = "18px";
  document.getElementById("YIKE4").style.fontSize = "18px";
}

function myFunction3() {
  document.getElementById("content").style.fontFamily = "myfont";
  document.getElementById("YIKE").style.fontFamily = "myfont";
  document.getElementById("YIKE2").style.fontFamily = "myfont";
  document.getElementById("YIKE3").style.fontFamily = "myfont";
  document.getElementById("YIKE4").style.fontFamily = "myfont";
  
}
function myFunction4() {
  document.getElementById("content").style.fontFamily = "Roboto, sans-serif";
  document.getElementById("YIKE").style.fontFamily = "Roboto, sans-serif";
  document.getElementById("YIKE2").style.fontFamily = "Roboto, sans-serif";
  document.getElementById("YIKE3").style.fontFamily = "Roboto, sans-serif";
  document.getElementById("YIKE4").style.fontFamily = "Roboto, sans-serif";
}
document.getElementById("buttons5").onclick = function () {
  location.href = "index2.html";
};
document.getElementById("buttons6").onclick = function () {
  location.href = "index.html";
};


