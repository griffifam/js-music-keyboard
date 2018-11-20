$(document).ready( function() {
  // your code here

  // SEMRET ASSIST - $('.instrument').on('click','button', function() {
  //   const musicNote = $(`#${$(this).html()}Audio`).get(0);
  //   console.log(musicNote);
  //   musicNote.load();
  //   musicNote.play();
  // });

  // SEMRET ASSIST - $('body').keypress(function(even) {
  //   const musicNote = document.getElementsById(`${event.key}Audio`);
  //   musicNote.load();
  //   musicNote.play();
  // })

  // BARBARA ASSIST - $('.c').click( function(event) {
  //   console.log('this is a c');
  //   $('audio#cAudio')[0].currentTime = 0;
  //   $('audio#cAudio')[0].play()
  //   // $('.c').append("<button>this is a c button</button>");
  // });

  const instrumentNotes = ["c", "d", "e", "f", "g", "a", "b"]

  for (let note of instrumentNotes) {
    switch (note) {
      case "c":
      $('.c').click( function() {
        console.log('this is a c');
        $('audio#cAudio')[0].currentTime = 0;
        $('audio#cAudio')[0].play()
      });
      break;
      case "d":
      $('.d').click( function() {
        console.log('this is a d');
        $('audio#dAudio')[0].currentTime = 0;
        $('audio#dAudio')[0].play()
      });
      break;
      case "e":
      $('.e').click( function() {
        console.log('this is a e');
        $('audio#eAudio')[0].currentTime = 0;
        $('audio#eAudio')[0].play()
      });
      break;
      case "f":
      $('.f').click( function() {
        console.log('this is a f');
        $('audio#fAudio')[0].currentTime = 0;
        $('audio#fAudio')[0].play()
      });
      break;
      case "g":
      $('.g').click( function() {
        console.log('this is a g');
        $('audio#gAudio')[0].currentTime = 0;
        $('audio#gAudio')[0].play()
      });
      break;
      case "a":
      $('.a').click( function() {
        console.log('this is a a');
        $('audio#aAudio')[0].currentTime = 0;
        $('audio#aAudio')[0].play()
      });
      break;
      case "b":
      $('.b').click( function() {
        console.log('this is a b');
        $('audio#bAudio')[0].currentTime = 0;
        $('audio#bAudio')[0].play()
      });
      break;
    }
  }
});


//- html() = Whatever is in the html- it will return whatever is inside *
// $('.note c').click( function() {
//   $(this).toggleClass('#cAudio');
// });
//
// buttonC = document.getElementsByClassName('note C');
// var snd = new Audio("media/c_note.wav");
// $("p").append("<b>Appended text</b>");
