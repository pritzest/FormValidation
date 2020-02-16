function Dropbox(){
    var dropbox = document.getElementbyId("eventType");
    var selected = dropbox.options[dropbox.selectedIndex].value;
    var selected = dropbox.options[dropbox.selectedIndex].text;
        if(selected==0)
        {
            alert("Choose one or more");
        }
}

function Textbox() {
    if (document.getElementById("eventTitle").value == "") {
        alert("Please Fill up the Event Title");
    } 
    else if (document.getElementById("eventDates").value == "") {
        alert("Please Fill up the Date.");
    }
    else if (document.getElementById("eventDates2").value == "") {
        alert("Please Fill up the Date.");
    }
    else if (document.getElementById("postingDates").value == "") {
        alert("Please Fill up the Posting Dates.");
    }
}

function Checkbox(){
    var checkbox = document.getElementsByName("check");
    var checkReg = 0;

    for(var i = 0; i < checkbox.length; i++)  
    {  
        if(checkbox[i].checked)  
        checkReg++;  
    }  
    if(checkReg<1)  
    {  
        alert("Please Check at Least One of the Choices");  
    } 
    
}

function clear(){
    eventType=document.getElementById("eventType").value="";
    eventTitle=document.getElementById("eventTitle").value="";
    eventDates=document.getElementById("eventDates").value="";
    eventDates2=document.getElementById("eventDates2").value="";
    postingDates=document.getElementById("postingDates").value="";

    document.getElementById("checkReg").checked=false;
    document.getElementById("checkEvents").checked=false;
    document.getElementById("checkComp").checked=false;
    document.getElementById("checkContacts").checked=false;
    document.getElementById("checkHost").checked=false;
}   

function Submit(){
    var checkReg=document.getElementById("checkReg").value;
    var checkEvents=document.getElementById("checkEvents").value;
    var checkComp=document.getElementById("checkComp").value;
    var checkContacts=document.getElementById("checkContacts").value;
    var checkHost=document.getElementById("checkHost").value;

    var eventType=document.getElementById("eventType").value;
    var eventTitle=document.getElementById("eventTitle").value;
    var eventDates=document.getElementById("eventDates").value;
    var eventDates2=document.getElementById("eventDates2").value;
    var postingDates=document.getElementById("postingDates").value; 
    
    if(eventType|eventTitle|eventDates|eventDates2|postingDates !=""){
    alert("Thanks for Answering!");
    clear();
    }
    else{
    Textbox();
    Checkbox();
    Dropbox();
    } 
}