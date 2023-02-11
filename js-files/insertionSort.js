const isBtn=document.getElementById('i').addEventListener('click',insertionSort)

async function insertionSort(){
    let eles=document.querySelectorAll('.ele')
    algoStart()
    for(let i=1;i<eles.length;i++){
        let key=eles[i].style.height
        let j=i-1
        await waitforme(delay)
        while(j>=0 && (parseFloat(eles[j].style.height) > parseFloat(key))){
            eles[i].style.background="red";
            eles[j].style.background="red";
            eles[j + 1].style.height = eles[j].style.height
            // eles[i].style.background="yellow";
            // eles[j].style.background="yellow";
            j=j-1
            await waitforme(delay)
            for (let k = i; k >= 0; k--) {
                eles[k].style.background = 'yellow';
            }
        }
        eles[j+1].style.height= key
        eles[i].style.background="yellow"
    }
    algoEnd()
}