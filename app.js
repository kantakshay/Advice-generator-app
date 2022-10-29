


const p = fetch("https://api.adviceslip.com/advice")

p.then((response) =>{
    return response.json();
}).then((value2)=>{
    console.log(value2);
    document.getElementById('header').innerHTML = `Advice #${ value2.slip.id}` ;
    document.getElementById('advice_para').innerHTML = `"${value2.slip.advice}"` 
})