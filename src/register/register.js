//let user = document.getElementById("username")
//let registerUser = document.getElementById("register")
//let button1 = document.getElementById("btn2")  
let imageChanger = document.getElementById("image-changer")

const registerForm = document.getElementById("register-form");
const userinput = document.getElementById("register")
let userName = document.getElementById("user-name")
let userID = "";



registerForm.addEventListener('submit', (event)=>{
  event.preventDefault();
  userID=userinput.value
  fetch('https://petrescuenow.herokuapp.com/users?q=${userID}')
  .then((response)=> response.json())
  .then((data)=>{
  userName.innerHTML = data.id;
})
.catch(err=>console.log(err))  
})





  // function changeImage(){} det här var funktionen   
  
   // TRE VARIANTER add a function ta a button. 
//button3.onclick = changeImage; // connecta med id
//button3.addEventListener("click", changeImage)  // eller gör såhär med eventlistener sprint 13: 0500
imageChanger.addEventListener("click", ()=>{ // 07:00 i sprint 13 () Man behöver inte ge ett namn i parentesen om det bara används en gång
// om functionen/knappen ska användas EN gång är den sista bäst. Men ska den användas fler gånger ta en annan 
  let image = document.querySelector("img") //access img from the DOM (kan vara id eller class)sparar i en varibl
  image.setAttribute("src", allImages[indexNumber]) // 10:00 sprint 12 Här andrar vi attributet. setAttribute. // Kan skapa ett som inte finns eller ändra ett som finns 
if(indexNumber === allImages.length-1){ // ta length minus ett, då får man samma samma positon som indexnummer. sen kan man increment/öka med ett. (++;) 
    indexNumber = 0;
  }else{
    indexNumber++;   //här ökas indexnumber med ett varje gång knappen trycks 
} 
});

let allImages=[
  "images/dog.jpg", 
  "images/cat.jpg", 
  "images/snake.jpg", 
  "images/rodent.jpg" 
] // byt ut dessa till kattbilder

let indexNumber = 1; // det här blir nästa indexnummer från allImages när knappen trycks

/*function getUser(){
   user.innerHTML = registerUser.value
   registerUser.value = " ";  // här "nollställs" placeholdern efter man skrivit något i den. 31:00 i sprint 11 
   
}
button1.onclick = getUser;
*/

function toggleDarkMode(){
  let container = document.querySelector(".dark-mode")

  container.classList.toggle("darkMode"); //TOGGLE 23:00 sprint 12
  

}