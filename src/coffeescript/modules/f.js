
$ = require("jquery");
var data = require("./people.json");
function randomNum(Min,Max){   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range)); 
}   
$(function(){
  var id;
  var tip = function(){
    var i=0;
    var people = data.people
    var number = randomNum(0,people.length-1);

    var personCode = people[number].id;

    var codeArr = personCode.split('')
    console.log(codeArr); 
    $("#first-number").text(codeArr[0])
    $("#second-number").text(codeArr[1])
    $("#third-number").text(codeArr[2])
    $("#forth-number").text(codeArr[3])
    $("#fifth-number").text(codeArr[4])


    var personname = people[number].name;
    var nameArr = personname.split('   ')
    console.log(nameArr); 
    $("#name").text(nameArr[0])

  }

  $("#start-lottery").click(function(){
    $("#result").css("visibility","hidden");
    $("p").removeClass("animated flash");
    id = window.setInterval(tip,10)
    console.log("click");
  })
  $("#btn-end").click(function(){
    $("p").addClass("animated flash");
    $("#result").css("visibility","visible");
    window.clearInterval(id)
    console.log("click end"); 
  })



  var cks = document.getElementsByName("click");
  for (var i = 0; i < cks.length; i++) {
                cks[i].onclick = function() {
                  for (var j = 0; j < cks.length;j++)
                  {
                    cks[j].disabled = false;
                  }
                  this.disabled = true;
                }
              }
})
