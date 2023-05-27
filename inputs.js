// Function for userInput
function userInput()
 {
    //Records user inputs for all form elememts
    var firstName = document.getElementById("string1").value;
    var lastName = document.getElementById("string2").value;
    var zipCode =  document.getElementById("string3").value;
    // Concatinates the first name and last name
    var fullName = firstName + lastName;
    // Checks if full name is greater than 20 characters or less than 2 characters
    if (fullName.length >20 || fullName.length <2)
    {
        // If above condition is true, user inputs are registered as "invalid"
        document.getElementById("eventStatus").innerHTML = "INVALID: Name must be between 2-20 characters long"
    }
    // Checks if zip code is greater or less than 5 characters long
    else if (zipCode.length >5 || zipCode.length <5)
    {
        //alerts "invalid" if zip code is not exactly 5 characters long
        alert("INVALID: Zip Code must be 5 characters long")
    }
    else 
    {
        // If all above conditions are not true, than user input is validated.
        document.getElementById("eventStatus").innerHTML = "SUCCESS! User Accepted"  
    }

}