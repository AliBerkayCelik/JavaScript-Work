
function addToCard(quantity,productName="Elma") {
    console.log("Sepete eklendi: "+ productName+" adet: "+quantity)
}

// addToCard()
addToCard(10)
// addToCard(15)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2=function () {
    console.log("Hello world 2")
}

sayHello2()

function addToCard2(productName,quantity,unitPrice) {
    
}

addToCard2("Elma",5,10)
addToCard2("Armut",2,20)
addToCard2("Limon",3,15)

let product1= {productName:"Elma",unitPrice:10,quantity:5}

function addToCard3(product){
    console.log("Ürün: "+product.productName)
    console.log("Adet: "+product.quantity)
    console.log("Fiyat: "+product.unitPrice)
}

addToCard3(product1)

let product2= {productName:"Elma",unitPrice:10,quantity:5}
let product3= {productName:"Elma",unitPrice:10,quantity:5}

product2=product3;
product2.productName="Karpuz"
console.log(product3.productName)

function addToCard4(products) {
    console.log(products)
}

let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCard4(products)


function add(...numbers) { //rest
    let total=0
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]
        
    }
    console.log(total)
    
}



add(20,30)
add(20,30,40)
add(20,30,40,50)


let numbers=[30,10,500,600,120]
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri]]=[
   {name: "İç Anadolu",population :"20M"},
   {name: "Marmara",population : "30M"},
   {name: "Karadeniz",population : "10M"},
   [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],

   ]

    
]

console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)
console.log(marmaraSehirleri)
console.log(marmaraSehirleri[1])


let {productName,unitPrice,quantity}={productName:"Elma",unitPrice:10,quantity:5}

console.log(productName)
console.log(unitPrice)
console.log(quantity)
