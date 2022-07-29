fetch("https://api.adviceslip.com/advice")
.then(data => data.json())
.then(adviceData=>
    {
    const advText = adviceData.slip.advice;
    const advElement=document.getElementById("advice");

    advElement.innerHTML=advText;    
})