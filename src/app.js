
let student={id:1,name:"berkay"}

function save(ogrenci,sayi=10) {
    // console.log(ogrenci.name+":"+sayi);
}

save(student,100);

let students=["Engin Demiroğ","Halit Kalaycı","Engin Toprak","Büşra"]

// console.log(students)

let sudents2=[student,{id:2,name:"Halit"},"Ankara",{city:"İstanbul"}]
// console.log(sudents2);

//rest
//params
//varArgs
let showProducts=function name(id,...products){
    console.log(id)
    console.log(products[0])
}

// console.log(typeof showProducts);
// showProducts(10,["Elma","Armut","Karpuz"])


//spred
let points=[1,2,3,4,40,60,14]
console.log(...points)
console.log(Math.max(...points ))
console.log(..."ABC","D",..."EFG","H")

//Destructuring

let populations=[10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maxium]] =populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maxium)

function someFunction([small1],number){
    console.log(small1)
}

someFunction(populations)


let category={id:1,name:"içecek"}

console.log(category.id)
console.log(category["name"])

let{id,name}=category
console.log(id);
console.log(name);