// let btn = document.querySelectorAll(".btn")
let input = document.getElementById("input")

let show = (num) => {
    input.value = input.value + num
    console.log(typeof (num));
    console.log(eval("2" + "4"));
}

let clear = () => {
    input.value = " "
    console.log("Ima Working")
}

let dlt = ()=>{
    input.value = input.value.slice(0,-1)
}




let result = () => {
    console.log(input.value);
    console.log(typeof (input.value));

    input.value = eval(input.value);
}




