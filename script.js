function validate() {
  var password = document.getElementById("password").value;
  if (password.length > 8) {
    document.write("I did it!!! We mueeeveeee!!!");
    return 0;
  } else {
    alert("Password length must be greater than 8");
  }
}

// // **copied online from codepen
// // ** I don't know how jquery works yet
// // but i can see that they created a class and linked it to the submit button
// // it didnt work for me

// $(function movement(){
//     $(".move").on({
//         mouseover:function(){
//             $(this).css({
//                 left:(Math.random()*90)+"%",
//                 top:(Math.random()*90)+"%",
//             });
//         }
//     });
//     $(".btn-wrap").hover(function() {
//        	$(this).toggleClass('active');
//     });
// });

// $('.move').bind('touchstart', function(){
//     $(this).css({
//            left:(Math.random()*90)+"%",
//            top:(Math.random()*90)+"%"
//        });
// })
