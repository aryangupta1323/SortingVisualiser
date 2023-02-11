const ssButton=document.getElementById('s').addEventListener('click',selectionSort)


async function selectionSort(){
    const eles=document.querySelectorAll('.ele')
    algoStart()
    for(let i=0;i<eles.length;i++){
        let min=eles[i]
        for(let j=i+1;j<eles.length;j++){
            let temp=parseFloat(eles[j].style.height)
            eles[i].style.background="red";
            eles[j].style.background="red";
            await waitforme(delay)
            if(parseFloat(min.style.height)>temp){
                min=eles[j]
            }
            eles[i].style.background="#FFD124";
            eles[j].style.background="#FFD124";
        }
        swap(min,eles[i])
        eles[i].style.background='yellow'
    }
    algoEnd()
}