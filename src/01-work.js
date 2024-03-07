//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

function prime (...numbers) {
    for(let i=0;i<numbers.length;i++){
        let counter=0;

        if(numbers[i] <= 1){
            counter++;
        }

        for(let k= 2;k < numbers[i]; k++){
            if(numbers[i]%k===0){
                counter++;

            }
        }
        if(counter>0){
            console.log(numbers[i],"Asal değil")
        }else{
            console.log(numbers[i],"Asal")

        }
    }
}


prime(-11,-10,1,7,16,53,82,34,71,25)



console.log("---------------------------------------------------")

//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

function friendsNumbers(...numbers) {
    let num1=0;
    let num2=0;
    for(let i=0;i<numbers[0];i++){
        if(numbers[0] % i===0){
            num1+=i
        }
    }
    for(let i=0;i<numbers[1];i++){
        if(numbers[1] % i===0){
            num2+=i
        }
    }
    if(num1===numbers[1]&&num2===numbers[0]){
        console.log(numbers[0]+ " ve "+ numbers[1]+" arkadaş sayılardır.")
    }
    else{
        console.log(numbers[0]+ " ve "+ numbers[1]+" arkadaş sayılar değildir.")
    }
   
}
   

friendsNumbers(1184,1210)
friendsNumbers(220,284)
friendsNumbers(300,400)

console.log("---------------------------------------------------")

//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

for (let i = 2; i < 1000; i++) {
    let add = 1;
    for (let k = 2; k * k <= i; k++) {
        if (i % k === 0) {
            add += k;
            if (k * k !== i) {
                add += i / k;
            }
        }
    }
    if (add === i) {
        console.log(i);
    }
}

console.log("---------------------------------------------------")

//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.


let a;
let k;
let result;
for(let a=1;a<1000;a++){
    result=true;
    for(let k=2;k<a;k++){
        if(a%k===0)
        result=false;
    
    }
    if(result==true){
        console.log(a)
    }
}

