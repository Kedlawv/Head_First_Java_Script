function setPassword(setPassword){   // setPassword is a local variable for setPassword
    return function checkPassword(checkPassword){  // and a free variable for checkPassword
        return setPassword === checkPassword;       // parameters are local variables
    }
}

function getCounter(){
    let counter = 0;         // counter is a free variable in the inner function
    return function(){       // it is contained in the functions environment
        return counter ++;   // it is updated and stored
    }
}

function init() {
    let para = document.getElementById("display");
    let pswdCheck = setPassword("secret");

    para.innerHTML = "Is 'magic' the correct password? :" + pswdCheck("magic");
    para.innerHTML += "</br> Is 'secret' the correct password? :" + pswdCheck("secret");

    let counter = getCounter();

    para.innerHTML += "</br></br> counter(): " + counter();
    para.innerHTML += "</br> counter(): " + counter();
    para.innerHTML += "</br> counter(): " + counter();
    para.innerHTML += "</br> counter(): " + counter();
}