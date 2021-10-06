(function (){

//Select DOM Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

//Set Initial State of Menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if(!showMenu){
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
    } else{
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
    }
}


//Form

var form = document.querySelector(".my-form"),
    fields = document.querySelectorAll("[data-error");

    function isNotEmpty(field){
        return field.value !== "";
    }

    function isAtLeast(field, min){
        return field.value.length > min;
    }

    function displayErrors(errors){
        var ul = document.querySelector("ul.errors");

        if(!ul){
            ul = document.createElement("ul");
            ul.classList.add("errors");
        }

        ul.innerHTML = "";

        errors.forEach(function(errors){
            var li = document.createElement("li");

            li.textContent = errors;

            ul.appendChild(li);
        });

        form.parentNode.insertBefore(ul, form);

    }

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        var errors = [],
            isValid = false;

        for(var i = 0; i < fields.length; i++) {

            var field = fields[i];

            if(field.type === "text"){
                isValid = isNotEmpty(field);
            } else if(field.type === "email"){
                if(field.value === ""){
                    isValid = isNotEmpty(field);
                }
            } else if(field.type === "textarea"){
                isValid = isAtLeast(field, 10);
            }

            if(!isValid){
                field.classList.add("error")
                errors.push(field.dataset.error);
            } else{
                field.classList.remove("error");
            }

        }

        if(errors.length){
            displayErrors(errors);
        } else{
            form.submit();
        }

        console.log(errors);
        
    }, false);


})();