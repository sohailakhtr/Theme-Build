const digitl = document.getElementById('clock') // both anyone menthod can use 
// document.querySelector('#clock')
setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    digitl.innerHTML = date.toLocaleTimeString()
}, 1000);
 