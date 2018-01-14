<!--showing/hiding hotel search form-->
            
    var link = document.querySelector(".rightbtn");
    var popup = document.querySelector(".trip-form-off");
            
            
    link.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.toggle("trip-form-on");
        });
            
        
            
<!--making plus/minus buttons functional for number input-->
            
    var p = document.querySelector("#personNumber");
    var ch = document.querySelector("#childrenNumber")
    var upPerson = document.querySelector(".plus-btn-one");
    var downPerson = document.querySelector(".minus-btn-one");
    var upChildren = document.querySelector(".plus-btn-two");
    var downChildren = document.querySelector(".minus-btn-two");
            
    var increase = function (element) {
            element.value = parseInt(element.value) + 1;
            };  
            
    var decrease = function (element) {
            if (parseInt(element.value) < 1) {
                element.value = 0;
                    }
            else  { 
                element.value = parseInt(element.value) - 1;
                    };
            };
            
    upPerson.addEventListener("click", function(){increase(p);});
    upChildren.addEventListener("click", function(){increase(ch);});
    downPerson.addEventListener("click", function(){decrease(p);});
    downChildren.addEventListener("click", function(){decrease(ch);});