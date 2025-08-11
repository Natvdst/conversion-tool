const getResult = (input,conversionType) => {
    

    console.log(input)
    console.log(conversionType)

    switch (true) {
        case (input !== "" && conversionType == "celsToFahrenheit"):
            return Number(((input * 9/5) + 32).toFixed(3));
            // break
            

        case (input !== "" && conversionType == "fahrenheitToCels"):
            return Math.round((input - 32) * 5/9);
            // break;
        case (input !== "" && conversionType == "kilometerToMiles"):
            return Math.round(input * 0.621371);
            // break;

        case (input !== "" && conversionType == "hoursToSeconds") :
            return Math.round(input * 60 * 60);    
    
        default:
           return "Error, no input";
        
    }
}
let printResult = () => {

        let inputFromHTML = document.getElementById("inputValue").value;
        let conversionTypeFromHTML = document.getElementById("conversionType").value;

        let result =  getResult(input=inputFromHTML,conversionType=conversionTypeFromHTML);

        if (conversionTypeFromHTML == "celsToFahrenheit")
        return (document.getElementById("result").innerHTML = inputFromHTML + "° Celsius is " + result + "° Fahrenheit.");

        else if (conversionTypeFromHTML == "fahrenheitToCels")
        return (document.getElementById("result").innerHTML = inputFromHTML + "° Fahrenheit is " + result + "° Celsius.");

        else if (conversionTypeFromHTML == "kilometerToMiles" && inputFromHTML!=="1")
        return (document.getElementById("result").innerHTML = inputFromHTML + " kilometers = " + result + " miles.");

        // else if (conversionTypeFromHTML == "kilometerToMiles" && inputFromHTML==1);
        // return (document.getElementById("result").innerHTML = inputFromHTML + " kilometer is " + result + " miles.");

        else if (conversionTypeFromHTML == "hoursToSeconds")
        return (document.getElementById("result").innerHTML = inputFromHTML + " hours are " + result + " seconds.");

        else
           return "Error, no input";

    };
    
    