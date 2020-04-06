import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var angleOne = parseInt($("input#angle-one").val());
    var angleTwo = parseInt($("input#angle-two").val());
    var angleThree = parseInt($("input#angle-three").val());
    var sum = angleOne+angleTwo+angleThree;
    console.log(sum)
    if ((angleOne!=0)&&(angleTwo!=0)&&(angleThree!=0)){
     if ((angleOne==angleTwo)&&(angleTwo==angleThree)){
       console.log('equilateral');
     }
     if ((angleOne!=angleTwo)&&(angleTwo!=angleThree)&&(angleOne!=angleThree)){
       console.log('scalene');
     }
     if ((angleOne==angleTwo)&&(angleOne!=angleThree)||(angleTwo==angleThree)&&(angleTwo!=angleOne)){
       console.log('isoceles');
     }
   }
    //   $("#type").empty().append(quote);
    //   $("#type").show();
    // } else {
    //   alert('Please enter the angles.');
    // }

    event.preventDefault();
  });
});
