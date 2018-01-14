<!--making rangeBar change together with input price change-->
            
    var minValue = document.querySelector(".minValue");
    var maxValue = document.querySelector(".maxValue");
    var minPrice = document.querySelector(".minPrice");
    var maxPrice = document.querySelector(".maxPrice");
    var bar = document.querySelector(".bar");
            
    var barChange = function () {    
                
        bar.style = "width: " + ((parseInt(maxValue.value) - parseInt(minValue.value))/4300*100) +"%;" + "left: " + (parseInt(minValue.value)/4300*100) + "%";
                
        minPrice.style = "left: " + (parseInt(minValue.value)/4300*100) + "%";
                
        maxPrice.style = "right: " + (100-(parseInt(maxValue.value)/4300*100)-4) + "%";
                
        };
            
            
    minValue.addEventListener("change", function() {barChange()});
    maxValue.addEventListener("change", function() {barChange()});
    minValue.addEventListener("click", function() {barChange()});
    maxValue.addEventListener("click", function() {barChange()});
                  
            
            
<!--setting style for active sort-btns-->
            
    var price = document.querySelector("#sortByPrice");
    var type = document.querySelector("#sortByType");
    var rating = document.querySelector("#sortByRating");
            
    var sortUp = document.querySelector(".sortUp");
    var sortDown = document.querySelector(".sortDown");
            
    var sorting = function (el1, el2, el3) {
        
            el1.classList.add("active");
            el2.classList.remove("active");
            el3.classList.remove("active");
        
        };
            
    var sortUpDown = function (el1, el2) {
        
            el1.classList.add("active");
            el2.classList.remove("active");
        
        };
            
            
    type.addEventListener("click", function() {sorting(type, price, rating);});
    price.addEventListener("click", function () {sorting(price, type, rating);});
    rating.addEventListener("click", function() {sorting(rating, type, price);});
            
    sortUp.addEventListener("click", function () {sortUpDown(sortUp, sortDown);});
    sortDown.addEventListener("click", function() {sortUpDown(sortDown, sortUp);});