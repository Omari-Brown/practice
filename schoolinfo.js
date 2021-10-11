"use strict";

function summarynotice()
{
    console.log("Creating summary message.");
    const myform = document.getElementsByTagName("form")[0];
    const fname = myform.elements['fname'];
    const lname = myform.elements['lname'];






    
}
function average(a,b,c,d)
{
    return (a+b+c+d)/4;
}
function calc_average()
{
    console.log("Calculating average")
    let result = document.getElementById("average_result");
    let num1 = document.getElementById("maths").value;
    let num2 = parseInt(document.getElementById("lang"), 10);
    let num3 = document.getElementById("social").value;
    let num4 = parseInt(document.getElementById("science"), 10);
    comment(average(num1, num2, num3, num4));
    result.innerText = average(num1, num2, num3, num4);
}
function comment(num)
{
    let commentdiv = document.getElementById("average_comment");
    switch(num)
    {
        case num <= 20:
            alert("You need to practice more.");
            commentdiv.innerText = "You have an E average.";
            break;

        case num <= 40:
            alert("You are almost there. Keep trying.");
            commentdiv.innerText = "You have an E average.";
            break;

        case num <= 60:
            alert("A fair attempt.");
            commentdiv.innerText = "You have an E average.";
            break;

        case num <= 80:
            alert("You are doing just fine. Dont get complacent now. ");
            commentdiv.innerText = "You have an E average.";
            break;

        case num <= 100:
            alert("Well done! Keep it up.");
            commentdiv.innerText = "You have an E average.";
            break;

        default:
            console.log("Default case reached");
            commentdiv.innerText = "You have an E average.";
            break;
    }
}