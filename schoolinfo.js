"use strict";

function validateGradeForm() 
{
    console.log("Validating gradeform")
    const myform = document.getElementsByTagName("form")[1]
    let a = myform.elements["maths"].value;
    console.log("Mathematics grade is ", a);
    let b = myform.elements["lang"].value;
    let c = myform.elements["social"].value;
    let d = myform.elements["science"].value;
    if (a < 0 || a > 100) 
    {
      alert("Valid mathematics grade must be submitted.");
      return false;
    } else if (b < 0 || b > 100) 
    {
      alert("Valid language grade must be submitted.");
      return false;
    } else if (c < 0 || c > 100) 
    {
      alert("Valid social Studies grade must be submitted.");
      return false;
    } else if (d < 0 || d > 100) 
    {
      alert("Valid sience grade must be submitted.");
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
    console.log("Calculating average grade")
    let result = document.getElementById("average_result");
    let num1 = parseInt(document.getElementById("maths").value, 10);
    let num2 = parseInt(document.getElementById("lang").value, 10);
    let num3 = parseInt(document.getElementById("social").value, 10);
    let num4 = parseInt(document.getElementById("science").value, 10);
    console.log("Mathematics grade is ", num1);
    console.log("Average is ", average(num1, num2, num3, num4));
    comment(average(num1, num2, num3, num4));
    result.innerText = average(num1, num2, num3, num4);
}
function comment(num)
{
    console.log("Preparing Comment");
    console.log("num is ", num);;
    let commentdiv = document.getElementById("average_comment");
    switch(true)
    {
        case (num <= 20):
            alert("You are almost there. Keep trying.");
            commentdiv.innerText = "You have an E average.";
            break;
        
        case (num <= 40):
            alert("You are almost there. Keep trying.");
            commentdiv.innerText = "You have an D average.";
            break;

        case (num <= 60):
            alert("A fair attempt.");
            commentdiv.innerText = "You have an C average.";
            break;

        case (num <= 80):
            alert("You are doing just fine. Dont get complacent now. ");
            commentdiv.innerText = "You have an B average.";
            break;

        default:
            console.log("Default case reached");
            commentdiv.innerText = "You have an A average.";
            break;
    }
}

window.onload = function ()
{
    console.log("Page successfuly loaded");
    let newNode = document.createElement("span");
    const mybox = document.getElementsByClassName("summarybox")[0];
    let mysubmit1 = document.getElementById("formsubmit");
    mysubmit1.onclick = function(element)
    {
        element.preventDefault();
        console.log("Creating summary message.");
        const myform = document.getElementsByTagName("form")[0];
        const fname = myform.elements['fname'].value;
        //console.log(fname);
        const lname = myform.elements['lname'].value;
        const gender = myform.elements['gender'].value;
        const age = myform.elements['age'].value;
        if (fname !="" && lname !="" && gender!="" && age!="")
        {
            newNode.innerText = "SUMMARY";
            let mystring = `${fname} ${lname} (${gender}) is ${age} years old.`;
            console.log(mystring);
            mybox.textContent = mystring;
            mybox.prepend(newNode);
        }else
        {
            newNode.innerText = "COMPLETE THE FORM FIRST";
            mybox.prepend(newNode);
        }; 
    };
    let myavgbtn = document.getElementById("avgbtn");
    myavgbtn.onclick = function(element)
    {
        element.preventDefault();
        if(validateGradeForm())
        {
            calc_average();
        };
    }    
    let myresetbtn = document.getElementById("gradereset");
    myresetbtn.onclick = function(element)
    {
        document.getElementById("maths").innerText = "";
        document.getElementById("lang").innerText = "";
        document.getElementById("social").innerText = "";
        document.getElementById("science").innerText = "";
        document.getElementById("average_comment").innerText = "";
    }   
}