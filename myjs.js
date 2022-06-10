  
function natura(){
    let a = document.getElementById("bulb").src;
    console.log(a);

    if(a =='file:///C:/Users/CCT_2/Desktop/html/702814.png')
    document.getElementById("bulb").src = "../html/702797.png";

    else{
        document.getElementById("bulb").src = "../html/702814.png";
    }
}
