"use strict";

function summarynotice()
{
        target.preventDefault();
        console.log("Creating summary message.");
        const myform = document.getElementsByTagName("form")[0];
        const fname = myform.elements['fname'].value;
        console.log(fname);
        const lname = myform.elements['lname'].value;
        const gender = myform.elements['gender'].value;
        const age = myform.elements['age'].value;
        //might need .value method
        const mybox = document.getElementsByClassName("summarybox")[0];
        console.log(mybox);
        let mystring = '${fname} ${lname} (${gender}) is ${age} years old.';
        console.log(mystring);
        mybox.textContent = '${fname} ${lname} (${gender}) is ${age} years old.';
}
function validateGradeForm() 
{
    const myform = document.getElementsByTagName("form")[1]
    let a = myform.elements["maths"].value;
    let b = myform.elements["lang"].value;
    let c = myform.elements["social"].value;
    let d = myform.elements["science"].value;
    if (a < 0 || a > 100) 
    {
      alert("Mathematics grade must be submitted.");
      return false;
    } else if (b < 0 || b > 100) 
    {
      alert("Language grade must be submitted.");
      return false;
    } else if (c < 0 || c > 100) 
    {
      alert("Social Studies grade must be submitted.");
      return false;
    } else if (d < 0 || d > 100) 
    {
      alert("Science grade must be submitted.");
      return false;
    } else 
    {
        return true;
    }
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

window.onload = function ()
{
    console.log("Page successfuly loaded");
    let mysubmit1 = document.getElementById("formsubmit");
    /*mysubmit1.onclick = function(element)
    {
        element.preventDefault();
        console.log("Creating summary message.");
        const myform = document.getElementsByTagName("form")[0];
        const fname = myform.elements['fname'].value;
        console.log(fname);
        const lname = myform.elements['lname'].value;
        const gender = myform.elements['gender'].value;
        const age = myform.elements['age'].value;
        //might need .value method
        const mybox = document.getElementsByClassName("summarybox")[0];
        console.log(mybox);
        let mystring = '${fname} ${lname} (${gender}) is ${age} years old.';
        console.log(mystring);
        mybox.textContent = '${fname} ${lname} (${gender}) is ${age} years old.';
    };*/
    mysubmit1.addEventListener("click", summarynotice());
}