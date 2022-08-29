function validateForm(){

    var formErrors = false;
    var errorMessages = "";

    //check variables
    var numbers = /^[0-9]+$/;
    var emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
    //var emailPattern = /^[\w]+@[\w]+\.[\w]+$/;

    //declaring the elements from the form
    var fnElement = document.getElementById("fullName");
    var phoneElement = document.getElementById("phoneNumber");
    var emailElement = document.getElementById("email");

    //Checking the fields
    if(fnElement.value.length === 0 ){
        formErrors=true;
        errorMessages += "Enter a name\n";
    }

    if(phoneElement.value.length === 0 || !(phoneElement.value.match(numbers))){
        formErrors=true;
        errorMessages += "Enter numbers\n";
    }

    if(emailElement.value.length === 0 || !(emailElement.value.match(emailPattern))){
        formErrors=true;
        errorMessages += "Invalid email\n";
    }



    //Create alert
    if(formErrors){
        alert(errorMessages);
    }
    else{
        alert("Success!!!");
        document.getElementById("contactUs").reset();
    }
}

//Function reacts to the submit button
document.getElementById("submit").addEventListener("click",function(e){
    validateForm();
    
});

//slideShow
var slideIndex = 1;

showSlides(slideIndex);

//dot control
function currentSlide(n){
    showSlides(slideIndex = n);
}

//manage slides
function showSlides(n){
    var i;
    var slidesElement = document.getElementsByClassName("slides");
    var dotElement = document.getElementsByClassName("dot");

    for(i=0;i < slidesElement.length;i++){
        slidesElement[i].style.display="none";
    }
    for(i=0;i < dotElement.length;i++){
        dotElement[i].className=dotElement[i].className.replace(" active","");
    }
    slidesElement[slideIndex-1].style.display="block";
    dotElement[slideIndex-1].className +=" active";

}

