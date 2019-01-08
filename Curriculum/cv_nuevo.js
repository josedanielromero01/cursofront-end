var posicion = 5;
var velocidad = 0.1;
var d1 = document.getElementById("d1");
var relojId = setInterval(funCadaDecimaSeg, 10);

function funCadaDecimaSeg() {
if (posicion >= window.innerWidth - 900){
    clearInterval(relojId);
}   else{

posicion += velocidad;
velocidad += 0.05;
d1.setAttribute("style", "margin: 0px 0px 0px " + posicion + "px; background: green; width: 500px")
}
}











function move() {
    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 60) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function move1() {
    var elem = document.getElementById("myBar2");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function move2() {
    var elem = document.getElementById("myBar3");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 30) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function move3() {
    var elem = document.getElementById("myBar4");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 5) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function move4() {
    var elem = document.getElementById("myBar5");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 25) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function move5() {
    var elem = document.getElementById("myBar6");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 11) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function move6() {
    var elem = document.getElementById("myBar7");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function move7() {
    var elem = document.getElementById("myBar8");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function move8() {
    var elem = document.getElementById("myBar9");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 35) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function move9() {
    var elem = document.getElementById("myBar10");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function move10() {
    var elem = document.getElementById("myBar11");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 40) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function move11() {
    var elem = document.getElementById("myBar12");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 50) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function move12() {
    var elem = document.getElementById("myBar13");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 60) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }

  function move13() {
    var elem = document.getElementById("myBar14");   
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
  }
