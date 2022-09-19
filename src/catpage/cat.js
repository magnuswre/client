
//---- GET USER INPUT AND DISPLAY ON PAGE----// 

const formContainer = document.getElementById("form-container"); 
const userInput = document.getElementById("input-area")
let userName = document.getElementById("user-name")

let userInfo; 
userInput.addEventListener('input', (event)=>{
  event.preventDefault();
  userInfo = event.target.value
  
})

formContainer.addEventListener('submit', (event)=>{
  event.preventDefault();
  
  fetch(`https://petrescuenow.herokuapp.com/users/${userInfo}`)
  .then((response)=> response.json())
  .then((data)=>{
  userName.innerHTML = data.username;
  
})
.catch(err=>console.log(err)) // Lägg till här att det kommer ett meddelande att användare inte finns  
})