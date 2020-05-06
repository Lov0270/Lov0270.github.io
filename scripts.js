// https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/

//https://mauuu21.github.io/my%20first%20big%20Project/

//https://css-tricks.com/snippets/css/a-guide-to-flexbox/

//http://stayathome-syllabus.greenfox.academy/week03/my-first-web-app.html

//https://books.google.hu/books?id=MwwxCgAAQBAJ&pg=PT579&lpg=PT579&dq=$(%27%23photo-title%27).attr(%27src%27,+data.title);&source=bl&ots=YxcSbrS77i&sig=ACfU3U1BOHdP5J_BU8V6zrmv15sctFvnCQ&hl=hu&sa=X&ved=2ahUKEwio8oi6xprpAhWjxoUKHWxrBj8Q6AEwAHoECAYQAQ#v=onepage&q=%24('%23photo-title').attr('src'%2C%20data.title)%3B&f=false


// Ennek menj neki eloszor de csinalj elotte egy biztonsagi mentest!
//https://www.youtube.com/watch?v=Dc2WHsuiXos

//https://www.w3schools.com/js/js_arrays.asp foreach pl az aljan

//https://codepen.io/WAWI/pen/pYjByd

/*ERROROK:
-Bele kellene tenni azt ha a jobb/ball nyillall kattintasz akkor a thumbnailseken is mutatja melyik
kép van kijelölve

- Vmi gebasz van az osszevissza kattingatással

-Meg kell csinalni a szoveget eltunonek!

-Thumbnailsre ha raviszed a kurzort akkor irja ki a kep nevet

*/


let data = {                     // foto objektumok
photo:'images/1.jpg',
title: '',
description:"",
id:1
};

let data2 = {
    photo:'images/2.jpg',
    title: 'First Apearance',
    description:'Batman is a fictional superhero appearing in American comic books published by DC Comics.<br> The character was created by artist Bob Kane and writer Bill Finger, and first appeared in Detective Comics #27 in 1939.',
    };

let data3 = {
    photo:'images/3.jpg',
    title: 'Modern Age',
    description:"Frank Miller's limited series The Dark Knight Returns (February–June 1986) returned the character to his darker roots, both in atmosphere and tone.",
    };    

let data4 = {
    photo:'images/4.jpg',
    title: 'The Animated Series',
    description:"The series was praised for its thematic complexity, film noir aesthetics, darker tone, artistic presentation, and modernization of its title character's crime-fighting origins.",
    };  

    let data5 = {
        photo:'images/5.jpg',
        title: 'Enemies',
        description:"Antagonists that appeared in the series included classic villain such <br> as Poison Ivy, Catwoman, the Riddler, Two-Face, the Mad Hatter, Ra's al Ghul, Talia al Ghul, <br> Man-Bat, the Penguin, the Scarecrow, Killer Croc, Bane, the Ventriloquist and his dummy Scarface, Hugo Strange and Tony Zucco.",
        id:5
        };  

    
 /* ez lehet meg kell!
$('#photo').attr('src', data.photo);
$('#photo-title').html(data.title);
$('#photo-description').html(data.description);
*/
let currentPhoto = 0;
let imagesData = [data, data2, data3, data4, data5]; //tomb amiben az objektumok vannak
$('#photo').attr('src', imagesData[currentPhoto].photo); //a currentPhotohoz tartozo tombelemnek meghivja a photojat
$('#photo-title').html(imagesData[currentPhoto].title);
$('#photo-description').html(imagesData[currentPhoto].description);

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').html(imagesData[currentPhoto].title);
    $('#photo-description').html(imagesData[currentPhoto].description);
  }

  loadPhoto(currentPhoto);
  
  
//thumbnails
imagesData.forEach((item, index) => { // ez teszi bele a képeket a boxokba, de majd at kell alakitani, hogy ez is hozza őket letre a lent levo komment sorral
                $('footer').append(`<div class="box" id=${index}  </div>`);

             /*   $('.box').click((event) => {
                  let indexClicked = $(event.target).attr('data-index');
                   indexClicked is now a string! if you need it as a number you have to change it
                   because for example "1" + 1 is going to be "11" and not 2
                  let numberIndex = parseInt(indexClicked);
                   now numberIndex is a number
                  $('#clicked').text(imagesData[indexClicked]);
                }); */

                //  illeszd az id moge: data-index=${index}>${item} (data-index="${index}")
                $('#0').css("background-image", "url(images/1.jpg)");
                $('#1').css("background-image", "url(images/2.jpg)");
                $('#2').css("background-image", "url(images/3.jpg)");
                $('#3').css("background-image", "url(images/4.jpg)"); 
                $('#4').css("background-image", "url(images/5.jpg)");        
                });

          
let borderCss = '#946e08 ridge'; //clicked tumbnail border
let borderdefault = 'ridge'; //defeault thumbnail border

            $('#0').click((event) => {
                 $('#photo').attr('src', "images/1.jpg");
                 $('#photo-title').html(data.title);
                 $('#photo-description').html(data.description);
                 $('#0').css('border', borderCss);
                 $('#1, #2, #3, #4').css('border', borderdefault);
               });

               $('#1').click((event) => { //1. thumbnail-re clicknel betolti a kepet a h1et meg a p-t
                $('#photo').attr('src', "images/2.jpg");
                $('#photo-title').html(data2.title);
                $('#photo-description').html(data2.description);
                $('#1').css('border', borderCss); //ha clickelve van a thumbnaire akkor kicsereli a bordert
                $('#0, #2, #3, #4').css('border', borderdefault); //a tobbinek meg beallitja a defaultot
                
              });

              $('#2').click((event) => {
                $('#photo').attr('src', "images/3.jpg");
                $('#photo-title').html(data3.title);
                $('#photo-description').html(data3.description);
                $('#2').css('border', borderCss);
                $('#0, #1, #3, #4').css('border', borderdefault);
                
              });

              $('#3').click((event) => {
                $('#photo').attr('src', "images/4.jpg");
                $('#photo-title').html(data4.title);
                $('#photo-description').html(data4.description);
                $('#3').css('border', borderCss);
                $('#0, #1, #2, #4').css('border', borderdefault);
              });

              $('#4').click((event) => {
                $('#photo').attr('src', "images/5.jpg");
                $('#photo-title').html(data5.title);
               $('#photo-description').html(data5.description);
               $('#4').css('border', borderCss);
               $('#0, #1, #2, #3').css('border', borderdefault);
              });

            

  $('#right').click(() => {
    if(currentPhoto>=imagesData.length-1 ){  
      //  hogyha a current photo erteke nagyonn mint a tomb akkor ne menjen tovabb
        console.log("This is the LAST item");
    }else{
        currentPhoto++;
    loadPhoto(currentPhoto)
                //$('#2').css('border', borderCss);
               // $('#0, #1, #3, #4, #5').css('border', borderdefault);
    } /*itt valamigaz van, mert bizonyos click utan nem enged tovabb clickelni*/
 });

 $('#left').click(() => {
  if(currentPhoto===0){
   console.log("This is the first item");
   }else{
       currentPhoto--;
   loadPhoto(currentPhoto);
  }
});

    
  /** 
   *  
$('#left').click(() => {
       if(currentPhoto===0){
        console.log("This is the first item");
        }else{
            currentPhoto--;
        loadPhoto(currentPhoto);
       }
  });
   * 
   * 
   * 
   * 
   * background-image: radial-gradient(circle at 97% 32%, rgba(131, 131, 131,0.05) 0%, rgba(131, 131, 131,0.05) 50%,rgba(20, 20, 20,0.05) 50%, rgba(20, 20, 20,0.05) 100%),radial-gradient(circle at 61% 40%, rgba(35, 35, 35,0.05) 0%, rgba(35, 35, 35,0.05) 50%,rgba(239, 239, 239,0.05) 50%, rgba(239, 239, 239,0.05) 100%),radial-gradient(circle at 47% 73%, rgba(122, 122, 122,0.05) 0%, rgba(122, 122, 122,0.05) 50%,rgba(5, 5, 5,0.05) 50%, rgba(5, 5, 5,0.05) 100%),linear-gradient(90deg, rgb(0, 209, 117),rgb(205, 241, 44));
https://www.gradientmagic.com/
https://www.svgbackgrounds.com/
https://cssgradient.io/
:slight_smile:

*/

