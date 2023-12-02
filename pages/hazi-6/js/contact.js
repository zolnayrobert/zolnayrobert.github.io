$(document).ready(function()
{ 
    //Küldés gomb megnyomására visszajelzés
    $('#contact-submit').click(function(){
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
*/        
    });
});

function sendresponse(e){
console.log(e);
alert(e);
    // Jelenítse meg az üzenetet a küldésről
    document.getElementById("form-message-report").style.display = "block"; 

    // 2 másodperc késleltetéssel
    setTimeout(function() {
        // Rejtse el az üzentet
        document.getElementById("form-message-report").style.display = "none";
    }, 2000);
}
        