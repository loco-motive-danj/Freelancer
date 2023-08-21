// document.getElementById()
// document.querySelector=(".H1").add("Freelance Forum");
// const newElement= document.createElement("h1");
// newElement.innerHTML = "Freelance Forum";
// newElement.classList.add("new");
// document.getElementsByClassName("container").appendChild(newElement)
// const added = document.querySelector(".available")
// document.h2.forEach((i)=>{
//     i.setAttribute("class", "cool")
// })
// document.getElementsByClassName("available").append(h2)


const Freelancers= [
    {
        name: "Alice",
        occupation: "writer",
        price: 30,
        
    },
    {
        name:"Bob",
        occupation: "teacher",
        price: 50,
        
    },
    {
        name: "Carol",
        occupation: "programmer",
        price: 70,
    }
]

function createFreelancer(Freelancer){
    const ele = document.createElement("div");
    const nameEle = document.createElement('h2');
    const priceEle = document.createElement('h3');
    const occupationEle = document.createElement('h4');
    nameEle.innerHTML = Freelancer.name;
    priceEle.innerHTML = "$" + Freelancer.price;
    occupationEle.innerHTML = Freelancer.occupation;
    ele.appendChild(nameEle);
    ele.appendChild(priceEle);
    ele.appendChild(occupationEle);
    ele.classList.add("Freelancer");
    document.getElementById("Freelancers-List").appendChild(ele);
    document.getElementById("Freelancers-List").style.gap = "30px";
    document.getElementById("Freelancers-List").style.justifyContent = "center";
    document.getElementById("Freelancers-List").style.display = "flex";
    document.getElementById("Freelancers-List").style.display = "column";


}


Freelancers.forEach((i)=>{
    createFreelancer(i);
}
)

function calculateAverageP(Freelancers) {
    const total = Freelancers.reduce((ttl, freelancer) => 
    ttl + freelancer.price, 0);
    return total / Freelancers.length;
}

const randomNameGen= ["Dr.Nick", "Alfred Hitchcock", "Doc Holiday", "Mike Kryzowski", "Steven Wright"]
const range= 250;
const randomOccGen= ["Medical Doctor", "Storyteller", "Hitman", "Green Thing", "Existentialist"]

function randomFreelancerGen(){
const name= randomNameGen[Math.floor(Math.random() * randomNameGen.length)];
const occupation= randomOccGen[Math.floor(Math.random()* randomOccGen.length)];
const price= Math.floor(Math.random()* range);

return{
    name: name,
    price: price,
    occupation: occupation,
  }
}

const randomNumber = Math.floor(Math.random() * 4 + 1);
for(let i=0; i<randomNumber; i++){
let newFreelancer = randomFreelancerGen();
while (Freelancers.some(freelancer => freelancer.name === newFreelancer.name)) {
    newFreelancer = randomFreelancerGen();
 }
 Freelancers.push(newFreelancer);
createFreelancer(newFreelancer);
}

const avg= document.createElement("h5");
const h1Name= document.querySelector("h1")
h1Name.appendChild(avg)
avg.innerHTML= "The average cost of a freelancer is: $ " + calculateAverageP(Freelancers).toFixed(2);
document.getElementById("Freelancers").style.textAlign = "center";