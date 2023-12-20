$(document).ready(function()
{ 

console.log("v.1880");    //verzió szám
console.log(document.title); //oldal neve

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

    //Képre húzva megjelenítjük az ország nevét
    $('.pic-wrapper').hover(function()
	{
        let h2 = $(this)[0].parentNode.childNodes[3];
        let h2Val = $(h2).text();

        if (typeof h2Val !== 'undefined' && $("#overlay-h2").length) {   
            $("#overlay-h2").text(h2Val); //országnév behelyezése a DIV-be
            $("#tooltip-text").text(''); //töröljük a tooltipet
        } else {
            $("#overlay-h2").text(''); //különben töröljük, ha volt benne szöveg
            $("#tooltip-text").text(''); //töröljük a tooltipet
        }
    });

    //ország aloldalak ikonokra húzva az egeret, megjelenítjük a tooltipet a képen
    $('.icon-holder i').hover(function()
	{
        let tooltip_i = $(this).closest('i').attr('tooltip');
        let tooltip_span = $(this).closest('span').attr('tooltip');
        
        //ha nem i-ben van, spanba is megnézni
        let tooltip = tooltip_i;
        if(typeof tooltip === 'undefined') tooltip = tooltip_span;

        if (typeof tooltip !== 'undefined' && $("#tooltip-text").length) {   
            $("#tooltip-text").text('"'+tooltip+'"'); //tooltip behelyezése a DIV-be
        } else {
            $("#tooltip-text").text(''); //különben töröljük, ha volt benne szöveg
        }
    });
});



//Üzenet küldése
function sendMessage(frm)
{   
    //Spinner mutatása válaszig
    document.getElementById("loading-overlay").style.display = "flex";
    setTimeout(addLoaderText, 3000); //ha sokáig tart a küldés, akkor addig nyugtassuk meg a felhasználót

    setTimeout(console.log("Ez a kód végrehajtódik 6 másodperc után."), 6000); //TESZT
    $.ajax({
        type: frm.attr('method'),
        method: "POST",
        url: "https://formsubmit.co/ajax/520a354098799bbb56777753e910654f",
        dataType: 'html',
        accepts: 'application/json',
        data: frm.serialize(),
        success: function (response) {               
            
            //kiürítjük az űrlap mezőit
            clearInputs(frm);
              
            //sikeres küldésről üzenet
            sMsg(response,frm);
        },
        error: function (data) {                    
            eMsg(); //hibaüzenet válaszba
        }
    });
    return false; //ne frissítsen oldalt
}

//űrlapmezők ürítése
function clearInputs(frm)
{
    $.each(frm,function(k,v)
    {                     
        if(document.getElementById("message")) document.getElementById("message").value = ""; //textarea reset
        if(document.getElementById("_subject")) document.getElementById("_subject").value = "choose"; //select reset
        
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
function sMsg(e,frm)
{
    let from = frm.closest('.desktop_detailSubRowLeft').find('#form-message-report');       
    let msg = JSON.parse(e);   
    if(msg.success) {
        //Spinner elrejtése
        document.getElementById("loading-overlay").style.display = "none";

        //melyik űrlap lett elküldve?
        if(frm[0].id == "newsletterForm"){                   
            $("#form-subscribe-report").text("Sikeres feliratkozás!"); //Válasz megadása
            document.getElementById("form-subscribe-report").style.display = "block"; //Jelenítse meg az üzenetet a küldésről                               
        } else {
            $("#form-message-report").text("Köszönjük leveled, hamarosan válaszolunk!"); //Válasz megadása
            document.getElementById("form-message-report").style.display = "block"; //Jelenítse meg az üzenetet a küldésről
        }       

        // 5 másodperc késleltetéssel
        setTimeout(function() {
            // Rejtse el az üzenetet
            if(frm[0].id == "newsletterForm") document.getElementById("form-subscribe-report").style.display = "none";
            document.getElementById("form-message-report").style.display = "none";
        }, 8000);
    }
}

//ha hibára futna is adunk választ
function eMsg()
{
    //Spinner elrejtése
    document.getElementById("loading-overlay").style.display = "none";
    
    //hibaüzenet szövege
    $("#form-message-report").text("Sajnos valami hiba történt, kérjük próbálja meg később! :-(");
        
    // Jelenítse meg az üzenetet a küldésről
    document.getElementById("form-message-report").style.color = "red"; //piros színnel jelezzük a hibát
    document.getElementById("form-message-report").style.display = "block"; //hiba megjelenítése

    // 5 másodperc késleltetéssel
    setTimeout(function() {
        // Rejtse el az üzenetet
        document.getElementById("form-message-report").style.display = "none"; //üzenet eltüntetése
    }, 5000);
}

//ha sokáig tart a küldés, akkor addig nyugtassuk meg a felhasználót
function addLoaderText()
{
    let newParagraph = document.createElement('p'); //létrehozunk egy új <p> elemet
    newParagraph.classList.add('text-justify'); //class hozzáadása

    let paragraphText = document.createTextNode('Úgy tűnik lassan megy át az üzenet, kérlek légy türelemmel!'); //<p> elem tartalma
    newParagraph.appendChild(paragraphText); //hozzáadjuk a szöveget a <p> elemhez
    
    let container = document.getElementById('loading-overlay'); //kiválasztjuk a HTML-ben lévő elemet, amelybe beszúrjuk az új <p> elemet
    container.appendChild(newParagraph); //Beszúrjuk az új <p> elemet a kiválasztott elembe

}

        