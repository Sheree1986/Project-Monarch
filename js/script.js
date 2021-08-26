
let joke = document.getElementsByClassName("click")
Array.from(joke).forEach((dad) =>
dad.addEventListener("click", random)
)
function random () {
	fetch("https://dad-jokes.p.rapidapi.com/random/joke/png", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "dad-jokes.p.rapidapi.com",
		"x-rapidapi-key": "18ecff8f64msh9622fc0fc1f18d0p169363jsnb403ed70929c"
	}
})
.then(response => response.json()
)
.then(data => { console.log(data)
const laugh = document.getElementById("jokes")
const pull = document.createElement("span");
pull.innerHTML = `<img src="${data.body.image}">`
laugh.appendChild(pull);


})




.catch(err => console.error(err)
);
}

//steps for logic behind code get div by id or class 
// create div 
// add image to created div
//append child created div to first div 6 lines of codes)