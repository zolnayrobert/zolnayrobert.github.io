$(document).ready(function()
{ 
    const frm = $('#contactForm');

    frm.submit(function (e)
    {
        //Spinner mutatása válaszig
        document.getElementById("loading-overlay").style.display = "flex";
        e.preventDefault();
    
        $.ajax({
            type: frm.attr('method'),
            method: "POST",
            url: "https://formsubmit.co/ajax/520a354098799bbb56777753e910654f",
            dataType: 'html',
            accepts: 'application/json',
            data: frm.serialize(),
            success: function (response) {        
                //sikerres küldés
                sMsg(response);
            },
            error: function (data) {
                eMsg();
            }
        });
        return false; // here a change
    }); 
});

//sikeres válasz feldolgozása
function sMsg(e)
{
    let msg = JSON.parse(e);
    if(msg.success === true) {
        //Spinner elrejtése
        document.getElementById("loading-overlay").style.display = "none";

        // Jelenítse meg az üzenetet a küldésről
        $("#form-message-report").text("Köszönjük leveled, hamarosan válaszolunk!");
        document.getElementById("form-message-report").style.display = "block"; 

        // 5 másodperc késleltetéssel
        setTimeout(function() {
            // Rejtse el az üzenetet
            document.getElementById("form-message-report").style.display = "none";
        }, 5000);
    } else {
        eMsg();
    }
}

//ha hibára futna is adunk választ
function eMsg()
{
    //Spinner elrejtése
    document.getElementById("loading-overlay").style.display = "none";
    
    //hibaüzenet szövege
    $("#form-message-report").text("Sajnos valami hiba történt, kérjük próbálja meg később!");
        
    // Jelenítse meg az üzenetet a küldésről
    document.getElementById("form-message-report").style.color = "red"; //piros színnel jelezzük a hibát
    document.getElementById("form-message-report").style.display = "block"; //hiba megjelenítése

    // 5 másodperc késleltetéssel
    setTimeout(function() {
        // Rejtse el az üzenetet
        document.getElementById("form-message-report").style.display = "none"; //üzenet eltüntetése
    }, 5000);
}

        