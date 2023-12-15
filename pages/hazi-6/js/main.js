$(document).ready(function()
{ 
console.log("v.1845");    //verzió szám
    //Kapcsolat űrlap
    $('#contactForm').submit(function (e)
    {
        const frm = $('#contactForm');
        e.preventDefault();
        sendMessage(frm);
    }); 

    //Hírlevél feliratkozás
    $('#newsletterForm').submit(function (e)
    {
        const frm = $('#newsletterForm');
        e.preventDefault();   
        sendMessage(frm);
    }); 

    //Ajánlatkérés
    $('#offerForm').submit(function (e)
    {
        const frm = $('#offerForm');
        e.preventDefault();  
        sendMessage(frm);
    });
});

//Üzenet küldése
function sendMessage(frm)
{   
    //Spinner mutatása válaszig
    document.getElementById("loading-overlay").style.display = "flex";

    $.ajax({
        type: frm.attr('method'),
        method: "POST",
        url: "https://formsubmit.co/ajax/520a354098799bbb56777753e910654f",
        dataType: 'html',
        accepts: 'application/json',
        data: frm.serialize(),
        success: function (response) {     
            //sikeres küldésről üzenet
            sMsg(response);
               
            //kiürítjük az űrlap mezőit
            clearInputs(frm);
        },
        error: function (data) {                    
            eMsg(); //hibaüzenet válaszba
        }
    });
    return false; //ne frissítsen oldalt
}

function clearInputs(frm)
{
    
    $.each(frm,function(k,v)
    {                     
        document.getElementById("message").value = ""; //textarea reset
        document.getElementById("_subject").value = "choose"; //select reset
        
        //minden más űrlap típus
        let form = document.getElementById(v.id);    
        let inputs = form.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++)
        {              
            // Mezőtípus ellenőrzés
            if (inputs[i].type === "text" || inputs[i].type === "email")
            {           
                inputs[i].value = ""; // mező értékének törlése
            } else if(inputs[i].type === "checkbox"  && inputs[i].checked) {           
                inputs[i].checked = false; //checkboxra külön kell
            }
        }
    });
}

//sikeres válasz feldolgozása
function sMsg(e)
{
    let msg = JSON.parse(e);   
    if(msg.success) {
        //Spinner elrejtése
        document.getElementById("loading-overlay").style.display = "none";

        // Jelenítse meg az üzenetet a küldésről
        $("#form-message-report").text("Köszönjük leveled, hamarosan válaszolunk!");
//        document.getElementById("form-message-report").style.color = "green"; //zöld színnel, mert siekres a küldés
        document.getElementById("form-message-report").style.display = "block"; 

        // 5 másodperc késleltetéssel
        setTimeout(function() {
            // Rejtse el az üzenetet
            document.getElementById("form-message-report").style.display = "none";
        }, 5000);
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

        