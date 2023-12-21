$(document).ready(function()
{    
    //galéria összes képszáma
    const sumPics = '';
    
    //kép előtöltés
    preloadImages();

    //szöveg színállítás
    $('.popup-img').hover(function(){   
        let bgColor = $(this).css("background-color");
        pickTextColorBasedOnBgColorSimple(bgColor); //háttérből szövegszín számítás
    });

    //képre kattinva galéria nyílik
    $('.popup-img').click(function(){      
        openModal($(this)); //galéria nyitás
    });
});

//képek betöltése
function preloadImages() {
    let qty = 0;
    $('.gallery-image img').each(function () {
      let img = new Image();
      img.src = $(this).attr('src');
      qty++;    
    });
    sumPics = qty; //ennyi kép van a galériában
}

//képekhez tartozó leírások betűszín módosítása
function pickTextColorBasedOnBgColorSimple(bgColor) {
    let color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    let r = parseInt(color.substring(0, 2), 16); // hexToR
    let g = parseInt(color.substring(2, 4), 16); // hexToG
    let b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
      '#000' : '#fff';
}

//galéria nyitása
function openModal(e) {
    $('#gallery-popup').fadeIn('fast','linear');  //galéria kinyit
    currentSlide(e);
}

//galéria zárása
function closeModal() { 
    $('#gallery-popup').fadeOut('fast','linear'); //galéria bezár     
    $("#h3-popup").html(""); //képcím ürítése
    $("#p-popup").html(""); //kép leírás ürítése
}

//aktuális kép betöltése
function currentSlide(n)
{ 
    //Spinner mutatása válaszig
    document.getElementById("loading-overlay").style.display = "flex"; 
   
    //kép betöltés
    $('.img-popup').attr('src', $(n[0].childNodes[1]).attr('data-large'));
    $('.img-popup').attr('alt', n[0].childNodes[1].alt); 
    $('.img-popup').attr('id', n[0].childNodes[1].id);
       
    //Spinner elrejtése
    document.getElementById("loading-overlay").style.display = "none"; 

    //kép cím betöltés
    let h3 = n[0].childNodes[3].children[0].innerText;   
    let h3HTML = document.getElementById('h3-popup');
    let h3Node = document.createTextNode(h3);
    h3HTML.appendChild(h3Node);

    //kép szöveg betöltés
    let p = n[0].childNodes[3].children[1].innerText;   
    let pHTML = document.getElementById('p-popup');
    let pNode = document.createTextNode(p);
    pHTML.appendChild(pNode);

}

//lapozás a galériában
function plusSlides(n)
{
    //Spinner mutatása válaszig
    document.getElementById("loading-overlay").style.display = "flex"; 
    
    //lekérjük az aktuáis kép ID-t  
    let imageId = $('.img-popup').attr('id');
    
    //n értékével módosítjuk az ID-t (+1: következő | -1: előző)
    nextNumber = Number(imageId)+Number(n);

    //végállások kezelése
    if(nextNumber <= 0) nextNumber = sumPics; //végéről újrakezdjük
    if(nextNumber > sumPics) nextNumber = 1; //előlről kezdjük
  
    //Új ID adatit lekérjük és betöltjük az .img-popupba
    let nextImageProp = document.getElementById(nextNumber);
    //  $('.img-popup').attr('src', nextImageProp.src);
    $('.img-popup').attr('src', $(nextImageProp).attr('data-large'));
    $('.img-popup').attr('alt', nextImageProp.alt);
    $('.img-popup').attr('id', nextNumber);

    //article element kikeresése
    let article = document.getElementById(nextNumber).parentElement;

    //kép cím csere
    let h3 = article.getElementsByTagName("h3")[0].innerText;   
    let h3HTML = document.getElementById('h3-popup');
    h3HTML.textContent = h3;

    //kép szöveg csere
    let p = article.getElementsByTagName("p")[0].innerText;   
    let pHTML = document.getElementById('p-popup');
    pHTML.textContent = p;
    
    //Spinner elrejtése
    document.getElementById("loading-overlay").style.display = "none"; 
}
