const bsButton=document.getElementById('b').addEventListener('click',bubbleSort)
//  async function bubbleSort(){

//     for(let i=1;i<=100;i++){
//         for(let j=1;j<=100-i;j++){
//             let ele1=document.getElementById(`ele${j}`)
//             let ele2=document.getElementById(`ele${j+1}`)
//             if(arr[j-1]>arr[j]){
//                 ele1.style.background="red";
//                 ele2.style.background="red";
//                 await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));
//                 swap(ele1,ele2)
//                 ele1.style.background="yellow";
//                 ele2.style.background="yellow";
//             }    
//             else{
//                 continue
//             }   
//         }
//         document.getElementById(`ele${101-i}`).style.background="green"
//     }
// }

async function bubbleSort(){
    const eles = document.querySelectorAll(".ele");
    algoStart()
    for(let i=0;i<eles.length;i++){
        for(let j=0;j<eles.length-i-1;j++){
            if(parseFloat(eles[j].style.height) > parseFloat(eles[j + 1].style.height)){
                eles[j].style.background="red";
                eles[j+1].style.background="red";
                await waitforme(delay)
                swap(eles[j],eles[j+1])
                eles[j].style.background="#FFD124";
                eles[j+1].style.background="#FFD124";
            }    
            else{
                continue
            }   
        }
        eles[eles.length-1-i].style.background="yellow"
    }
    algoEnd()
}