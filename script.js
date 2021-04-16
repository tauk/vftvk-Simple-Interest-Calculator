function compute()
{
    p = document.getElementById("principal").value;

    var principal = document.getElementById("principal").value;

    //validation for principal
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * (rate / 100);
    var amount = interest;

    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML="<b>If</b> you deposit "+principal+",\<br\><b>at</b> an interest rate of "+rate+"%\<br\><b>You</b> will receive an amount of "+amount+",\<br\><b>in</b> the year "+year+"\<br\>"
    
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        