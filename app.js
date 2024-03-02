// let date= new Date();

// console.log(date);

// let num=Math.random()*11;

// console.log(num);

// let customer={
//     name :"Nidula",
//     age  :20,
//     address:"Kadawatha"
// }

// console.log(customer);

// let jsonObj=JSON.stringify(customer)

// console.log(jsonObj);

// console.log(JSON.parse(jsonObj));

// let jsObj=JSON.parse(jsonObj);

// console.log(jsObj.address);


// let fun=function(){
//     console.log("Hello World  !!!");
// }

// let fun =() =>{
//     console.log("hello world...!");
// }

//let fun =() => console.log("Hello World !!!");

//let fun=(val) =>console.log("hello world !!!  "+val);

// let fun= val =>{return "Hello World !!!"+val};

// console.log(fun(12));



function get() {
    let num=document.getElementById('inputNum').value;
    console.log(num);

    let random=Math.random()*11;

    let round=Math.round(random);

    console.log(random);
    console.log(round);

    if (num==round) {
        alert("You Win ! ! !");
    }else if (num<round) {
        alert("Input number is less than the generated number");
    }else {
        alert("Input number is greater than the generated number");
        
    }

}







