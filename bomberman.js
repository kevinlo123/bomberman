/*jquery*/

var $bomberMan = $('section');

$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $bomberMan.css('left', $bomberMan.offset().left - 10);
        break;
    case 38:
        $bomberMan.css('top', $bomberMan.offset().top - 10);
        break;
    case 39:
        $bomberMan.css('left', $bomberMan.offset().left + 10);
        break;
    case 40:
        $bomberMan.css('top', $bomberMan.offset().top + 10);
        break;
    }
})




/*user makes bomberman move (make section move)*/

/*vanilla javascript

var marginTop = 0;
var marginLeft = 0;

document.onkeydown = move;

function move(e){
  e = e || window.event;

  if(e.keyCode == '38'){
    marginTop -= 5;
    document.getElementById("bomberMan").style.marginTop = marginTop + "px";
  }
  else if(e.keyCode == '40'){
    marginTop += 5;
    document.getElementById("bomberMan").style.marginTop = marginTop + "px";
  }
  else if(e.keyCode == '37'){
    marginLeft -= 5;
    document.getElementById("bomberMan").style.marginLeft = marginLeft + "px";
  }
  else if(e.keyCode == '39'){
    marginLeft += 5;
    document.getElementById("bomberMan").style.marginLeft = marginLeft + "px";
  }
}*/
