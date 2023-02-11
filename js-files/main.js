function newArray(size){
    const container=document.getElementById('container')
    container.textContent=''
    let arr=[]
    for(let i=0;i<size;i++){
        arr.push(Math.random()*size)
    }

    

    for(let i=0;i<size;i++){
        const ele=document.createElement('div')
        ele.style.height=`${4000*arr[i]%400}px`
        ele.classList.add('ele')
        ele.setAttribute("id", `ele${i+1}`)
        container.appendChild(ele)
    }
}
function waitforme(ms) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, ms); 
    }) 
}

let delay = 260;
let delayElement = document.querySelector('#speed');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 140 - parseInt(delayElement.value);
});

// no of bars updation

let noOfBars=document.querySelector('#noBars')
noOfBars.addEventListener('input',()=>{
    newArray(noOfBars.value)
})

newArray(100)
document.getElementById('new_array').addEventListener('click',()=>{
    newArray(noOfBars.value)
})