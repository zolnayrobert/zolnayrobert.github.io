$(document).ready(function()
{ 
/*    //Küldés gomb megnyomására visszajelzés
    $('#contact-submit').submit(function(e){

        e.preventDefault();

        //adatok összegyűjtése küldéshez
        let datas = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val(),
        };
console.log(datas);  

        //elküldjük az adatokat
        $.ajax({
            url: "https://formsubmit.co/ajax/520a354098799bbb56777753e910654f",
            method: "POST",
            data: datas,
            dataType: 'json',
            accepts: 'application/json',
            success: function() {
                sendresponse("success");
            },
            error: function() {sendresponse("error");}
        });

/*
        $.post("https://formsubmit.co/520a354098799bbb56777753e910654f", datas, function() {});
        // Jelenítse meg az üzenetet a küldésről
        document.getElementById("form-message-report").style.display = "block";   
        // 2 másodperc késleltetéssel
        setTimeout(function() {
            // Rejtse el az üzentet
            document.getElementById("form-message-report").style.display = "none";
        }, 2000);
       
    });

   */ 

const frm = $('#contactForm');
const msg_res ='';

frm.submit(function (e)
{
    e.preventDefault();
   
    $.ajax({
        type: frm.attr('method'),
        method: "POST",
        url: "https://formsubmit.co/ajax/520a354098799bbb56777753e910654f",
        dataType: 'html',
        accepts: 'application/json',
        data: frm.serialize(),
        success: function (response) {
console.log(response);          
        $("#form-message-report").html(sendresponse(response));
            if(response != msg_res){
//                msg_res = response; //store new response
              }
        },
        error: function (data) {
            console.log('An error occurred.');
            console.log(data);
        }
    });
    return false; // here a change
}); 
});

function sendresponse(e){
console.log(e);
    let msg = JSON.parse(e);
    if(msg.success === true) {
        // Jelenítse meg az üzenetet a küldésről
        document.getElementById("form-message-report").style.display = "block"; 

        // 2 másodperc késleltetéssel
        setTimeout(function() {
            // Rejtse el az üzentet
            document.getElementById("form-message-report").style.display = "none";
        }, 2000);
    } else {
        $("#form-message-report").text("Sajnos valami hiba történt, kérjük próbálja meg később!");
        
        // Jelenítse meg az üzenetet a küldésről
        document.getElementById("form-message-report").style.color = "red"; 
        document.getElementById("form-message-report").style.display = "block"; 

        // 2 másodperc késleltetéssel
        setTimeout(function() {
            // Rejtse el az üzentet
            document.getElementById("form-message-report").style.display = "none";
        }, 2000);
    }
}
        