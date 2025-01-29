/*Adding Interactivity*/
    //we can call functions based on special "events"...
    //...The events come from the Javascript API (we can start doing things based on different dynamic function calls such as clicking, mouse movement,  )

/*Events + How it works*/
//Evets
    //onclick = If user *clicks* Element then we want Javascript functions to execute
    //onload = When the browser finishes loading the page then run the function
    //onresize = When the browser window is resized we want J.S. to execute
    //onmouseover = 
//How it Works
    //any element can react to an event
    //You need to add the event to the tag and include what you want to happen
        /*(Ex:  
                <div onclick = "message()">
                    Clicking on this Div will invoke a J.S. function!
                </div> )
                                    ...
                note: <div onclick = "message('Hi')"> ...
                ... Meaning when you click on this element this div function is called to appear a message that reads "Hi" */


//STEP 1: Create the function for the element you want to use it on
function message(msg)
    {
        document.getElementById('output').innerHTML = msg + 'event' //the ID name is "output"
    } //if someone clicks on the element where the "output" ID is the message should go from "" to 

function reminder(note)
    {
        document.getElementById('doThis').innerHTML = note
    }