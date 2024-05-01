   const form = document.querySelector('form')
addEventListener('submit',function(e){
    e.preventDefault();
   const  height =  parseInt(document.querySelector('#height').value)
   const  weight =  parseInt(document.querySelector('#weight').value)
   const  results =  document.querySelector('#results')
    const guide = document.querySelector('#guide')
if(height===''|| height<0 ||isNaN(height) )
{
    // `please enter the valid height ${height}`
results.innerHTML=`please enter the valid height ${height}`
}

else if(height===''|| weight<0 ||isNaN(weight) )
{
    // `please enter the valid height ${height}`
results.innerHTML=`please enter the valid weight ${weight}`
}
else{

   const bmi =  (weight / ((height*height)/1000).toFixed(2))
    results.innerHTML = `<span>  Weight : ${bmi}</span>`

    if(bmi<=18.6){
        guide.innerHTML = `Under Weight = Less than 18.6`
    }

    
    else if(bmi>=18 && bmi<=24.9 ){
        guide.innerHTML = `Normal Range = 18.6 and 24.9`
    }
    else if (bmi>24.9){
        guide.innerHTML =  `Overweight = Greater than 24.9`
    }

    else{
        guide.innerHTML =  `Invalid`

    }


}

})
