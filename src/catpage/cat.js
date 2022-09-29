// Info om att göra ett formulär https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form



let container = document.getElementById("test-upload-container");
let insertText = document.getElementById("insert-text");
let btn = document.getElementById("submit");
let animal = document.getElementById("animal");
 
// let svarsContainer = document.getElementById("svars-container")

// btn.onclick = visaText 
// // function visaText(){
// //     console.log(placeholder)
// // }



fetch(`https://petrescuenow.herokuapp.com/animals`)
.then((response)=> response.json())
.then((data)=> console.log(data))
//   userName.innerHTML = data.username;
.catch(err=>console.log(err)) // Lägg till här att det kommer ett meddelande att användare inte finns  






// function visaText(){

//     // tillbakaText.innerHTML = placeholder.value

// // let updatetext = placeholder.value 
// let nyText = document.createElement('p')
//  nyText.innerHTML = placeholder.value

// nyText.setAttribute("id", "search")
// svarsContainer.appenChild(nyText)

// placeholder = " ";
// }




// document.getElementById("demo")

// addEventListener("click", minFunktion)

// function minFunktion(){
//     document.getElementById("demo").innerHTML = "Hej Henkin";
// console.log("works")

// }

// let myinput = document.getElementById("input")

// function hej(){
// var x = document.getElementById("input").value
// document.getElementById("demo").innerHTML = "hej" + x;
// }


// let uploadBtn = document.getElementById("upload-btn")
// let imageUpload = document.getElementById("image-upload")

// let demo = document.getElementById("demo")

// function handleUpload(){
//     demo.innerHtml = 
// }

// uploadBtn.addEventlistener("click", handleUpload)




// {/* <button id="myBtn">Try it</button>

// <p id="demo">

// <script>
// const element = document.getElementById("myBtn");
// element.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }
// </script> */}




// // //---- GET USER INPUT AND DISPLAY ON PAGE----// 

// // const formContainer = document.getElementById("form-container"); 
// // const userInput = document.getElementById("input-area")
// // let userName = document.getElementById("user-name")

// // userInput.value









// let userInfo; 
// userInput.addEventListener('input', (event)=>{
//   event.preventDefault();
//   userInfo = event.target.value
  
// })

// formContainer.addEventListener('submit', (event)=>{
//   event.preventDefault();
  
//   fetch(`https://petrescuenow.herokuapp.com/users/${userInfo}`)
//   .then((response)=> response.json())
//   .then((data)=>{
//   userName.innerHTML = data.username;
  
// })
// .catch(err=>console.log(err)) // Lägg till här att det kommer ett meddelande att användare inte finns  
// })

