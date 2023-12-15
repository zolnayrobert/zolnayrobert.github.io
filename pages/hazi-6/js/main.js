$(document).ready(function()
{ 
console.log("v.1831");    
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
console.log(frm); 
        e.preventDefault();   
        sendMessage(frm);
    }); 

    //Ajánlatkérés
    $('#offerForm').submit(function (e)
    {
        const frm = $('#offerForm');
console.log(frm);      
        e.preventDefault();  
        sendMessage(frm);
    });
});

//Üzenet küldése
function sendMessage(frm)
{
console.log(frm);    
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
        //  let message = v.closest('.form').find('#form-message-report').val();
        let form = document.getElementById(v.id);
        let inputs = form.getElementsByTagName('input');
        let textarea = form.getElementsByTagName('textarea');
        textarea.value = "";
console.log(inputs.type);                
        for (let i = 0; i < inputs.length; i++) {
console.log(inputs[i]);                      
            // Mezőtípus ellenőrzés
            if (inputs[i].type === "text" || inputs[i].type === "email" || inputs[i].type === "select")
            {
console.log(inputs[i].value);                
                // A mező értékének törlése
                inputs[i].value = "";
            //checkboxra külön kell
            } else if(inputs[i].type === "checkbox"  && inputs[i].checked) {
console.log(inputs[i].checked);             
                inputs[i].checked = false;
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

        