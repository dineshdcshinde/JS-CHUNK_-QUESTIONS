const unorderList = [...document.querySelectorAll(" ul li")];


const uniqueLiElements = []

unorderList.forEach((ele)=>{
    if(!uniqueLiElements.includes(ele.textContent)){
        uniqueLiElements.push(ele.textContent)
    }
})



