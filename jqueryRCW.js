// ### Exercise 1: Selectors
// Using the provided HTML file ```selectors.html``` perform the following:
//
// Edit the HTML and add 3 buttons below the existing content:
// * This first ```Count all Paragraphs``` button when clicked,
// should draw a 3px green border around all the ```<p>``` elements in the document,
// and display an alert box that displays ```The number of paragraphs in the document is NUMBER```
// where ``NUMBER``` is number of paragraphs
// * This second ```Count all Paragraphs in First DIV```
// button when clicked, should draw a 3px red border around all the ```<p>```
// elements in the 1st DIV, and display an alert box that displays ```
// The number of paragraphs in the First DIV is NUMBER``` where ``NUMBER``` is number of paragraphs
// * This third ```Count all Paragraphs in Second DIV``` button when clicked,
//     should draw a 3px blue border around all the ```<p>```
// elements in the 2nd DIV, and display an alert box that displays
// ```The number of paragraphs in the First DIV is NUMBER``` where ``NUMBER``` is number of paragraphs

$("#b1").on('click', paraCount);

function paraCount() {
    //toggles border green and alerts the number of paragraphs
    $("p").toggleClass("countBorder");
    alert($("p").length);
    // for(num in $("p")){
    //     alert(num);
    //     num++;
    // }
}

$("#b2").on('click', divCount);

function divCount(){
    //toggles border red and alerts number of paragraphs in 1st div
    $("div:first>p").toggleClass("divBorder1");
    alert($("div:first>p").length);

}

$("#b3").on('click', deepDivCount);

function deepDivCount(){
    //toggles border blue and alerts number of paragraphs in 2nd div
    $("div:last>p").toggleClass("divBorder2");
    alert($("div:last>p").length);
}

// ## Exercise 2: Events and Attributes
// Add 2 buttons. When page initially displayed, the 1st button should be enabled and the 2nd button should be disabled.
// When the 1st button is clicked, the 2nd button should be enabled, and the first button be disabled.
// Clicking the 2nd button should enable the 1st buttonand disable the 2nd button and so on,
// alternating between buttons as they are clicked.

$("#b4").on('click', buttonOn);
$("#b5").on('click', buttonOn);
//sets variable 'boop' to false allowing use of flags
let boop = false;

function buttonOn(){
    //enables the first button and disables second button and allows the attribute 'disabled' to alternate
    //there is a delay, first click on the 'on' button does not fire, clicks after that work
    console.log("button");
    if(boop) {
        $("#b4").attr("disabled", "");
        $("#b5").removeAttr("disabled");
        boop = false;
    }
    else{
        $("#b4").removeAttr("disabled");
        $("#b5").attr("disabled", "");
        boop = true;
    }
}
