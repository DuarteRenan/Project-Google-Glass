function bg() {
    var checkBox = document.querySelector("#check");
    if (checkBox.checked == true){
        document.body.style.overflow = "hidden"
        document.getElementById("corpo").style.filter = "blur(8px)"
        document.getElementById("corpo").style.transition = "all 0.8s"
    } else {
        document.body.style.overflow = "initial"
        document.getElementById("corpo").style.filter = "none"
    }
  }


// function bg{

//     var checkBox = document.querySelector("#check")

//     if (checkBox.checked == true){
//         
//     }else{
//         
//     }

// }