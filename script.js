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

    document.getElementById("result").innerHTML="<b>If</b> you deposit <mark>"+principal+"</mark>,\<br\><b>at</b> an interest rate of <mark>"+rate+"</mark>%\<br\><b>You</b> will receive an amount of <mark>"+amount+"</mark>,\<br\><b>in</b> the year <mark>"+year+"</mark>\<br\>"
    
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        