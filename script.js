function publishResult()
{
    const Cprogarmming  =   document.getElementById("C").value;
    const java          =   document.getElementById("java").value;
    const HTML          =   document.getElementById("Web").value;
    const css           =   document.getElementById("css").value;
    const Nodejs        =   document.getElementById("Node").value;

        let total =  parseFloat(Cprogarmming) +
        parseFloat(java) + parseFloat(HTML)   +
        parseFloat(css) + parseFloat(Nodejs);
    
    document.getElementById("sum").innerHTML="The Sum Is :" + total;
    let percentage = (total*100)/500;
    document.getElementById("percentage").innerHTML="The Percentage Is :" + percentage;

    if (percentage >= 90)
    {
       document.getElementById("grade").innerHTML="Youre Passed In A+ Grade";
    }
    else if (percentage >= 80)
    {
        document.getElementById("grade").innerHTML="Youre  Passed In A Grade";
    }
    else if (percentage >= 70)
    {
        document.getElementById("grade").innerHTML="Youre  Passed In B+ Grade";
    }
    else if (percentage >= 60)
    {
        document.getElementById("grade").innerHTML="Youre Passed In B Grade";
    }
    else if (percentage >= 50)
    {
        document.getElementById("grade").innerHTML="Youre  Passed In C+ Grade";
    }
    else if (percentage >= 40)
    {
        document.getElementById("grade").innerHTML="Youre  Passed In C Grade";
    }
    else if (percentage>=30) {
        document.getElementById("grade").innerHTML="Youre Passed In D+ Grade";
    }
    else{
        document.getElementById("grade").innerHTML="Youre Failed";;

    }
}