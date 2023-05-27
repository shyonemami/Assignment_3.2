function userInput()
 {
    var firstName = document.getElementById("string1").value;
    var lastName = document.getElementById("string2").value;
    var zipCode =  document.getElementById("string3").value;

    var fullName = firstName + lastName;

    if (fullName.length >20 || fullName.length <2)
    {
        document.getElementById("eventStatus").innerHTML = "INVALID: Name must be between 2-20 characters long"
    }
    else if (zipCode.length >5 || zipCode.length <5)
    {
        alert("INVALID: Zip Code must be 5 characters long")
    }
    else 
    {
        document.getElementById("eventStatus").innerHTML = "SUCCESS! User Accepted"  
    }

}