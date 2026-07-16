const buttons = document.querySelectorAll(".read-more-btn");

buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

        const card = btn.closest(".service-box");

        card.classList.toggle("active");

        if(card.classList.contains("active")){
            btn.textContent = "Read Less";
        }else{
            btn.textContent = "Read More";
        }

    });

});