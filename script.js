let radioBtns = document.querySelectorAll('input[name="card"]');
let card = document.querySelector(".card");
let chooseBtn = document.querySelector("#choose");
let cardBox = document.querySelector(".chooseCard");
let body = document.querySelector("body");

console.log(radioBtns); // radio tugmalarni tekshirish uchun

// Radio tugmachalarni to‘g‘ri eshitish
radioBtns.forEach((x) => {
    x.addEventListener("change", (event) => {  // "click" emas, "change" ishlatish kerak
        console.log("Tanlangan qiymat:", event.target.value);
    });
});

chooseBtn.addEventListener("click", () => {
    let selectedRadio = document.querySelector('input[name="card"]:checked');
    if (selectedRadio) {
        console.log("Tanlangan kart:", selectedRadio.value);
        card.style.backgroundImage = `url('./${selectedRadio.value}.jpg')`; // `url()` ichida bo‘lishi kerak
    } else {
        console.log("Hech narsa tanlanmagan!");
    }

    body.removeChild(cardBox);
});
card.addEventListener("click", () => {
    card.classList.toggle("active");
    setTimeout(() => {
        success.style.display = "none";
        ballans.style.display = "none";
        pinkod.style.display = "none";
        screen.style.display = "flex";
        summa.style.display = "none";
    }, 800)
})


let summa = document.querySelector(".summa");
let screen = document.querySelector(".commands");
let success = document.querySelector(".success");
let pinkod = document.querySelector(".pinkod");
let ballans = document.querySelector(".balans");
let tochka = document.querySelector(".tochka");
let pinkodSpan = document.querySelector("#pinkod");
let successSpan = document.querySelector("#success");
let summaSpan = document.querySelector("#sum");
let balansSpan = document.querySelector("#balans");
let numbers = document.querySelectorAll(".numbers .btn");
let cancel = document.querySelector(".cancel");
let payBtn = document.querySelector(".payBtn");
let deleteBtn = document.querySelector(".delete");
let enter = document.querySelector(".enter");
function command() {
    numbers.forEach(x => {
        x.disabled = true;
        x.onclick = () => {
            console.log(5);
        }
    })
}
payBtn.onclick=() => {
    pay()
}
function pay() {
    success.style.display = "none";
    ballans.style.display = "none";
    pinkod.style.display = "none";
    screen.style.display = "none";
    summa.style.display = "flex";
    let i = 0;
    summaSpan.innerHTML = "";
    numbers.forEach(e => {
        e.addEventListener("click", () => {
            if (i == 11) {
                numbers.forEach(x => {
                    x.disabled = true;
                })
            } else {
                summaSpan.innerHTML += e.value;
                console.log(i);
            }
            i++
        })
    })
    enter.addEventListener("click", () => {
        successSpan.innerHTML = "";
        success.style.display = "flex";
        ballans.style.display = "none";
        pinkod.style.display = "none";
        screen.style.display = "none";
        summa.style.display = "none";
        successSpan.innerHTML = summaSpan.innerHTML
    })
    cancel.addEventListener("click", () => {
        success.style.display = "none";
        ballans.style.display = "none";
        pinkod.style.display = "none";
        screen.style.display = "flex";
        summa.style.display = "none";
        summaSpan.innerHTML = "";
    })


}
tochka.addEventListener("click", () => {
    balanss()
})
function balanss() {
        success.style.display = "none";
        ballans.style.display = "none";
        pinkod.style.display = "flex";
        screen.style.display = "none";
        summa.style.display = "none";
        let i = 0;
        summaSpan.innerHTML = "";
        numbers.forEach(e => {
            e.addEventListener("click", () => {
                if (i == 4) {
                    numbers.forEach(x => {
                        x.disabled = true;
                    })
                } else {
                    pinkod.innerHTML += e.value;
                    console.log(i);
                }
                i++
            })
        })
        enter.addEventListener("click", () => {
            success.style.display = "none";
            ballans.style.display = "flex";
            pinkod.style.display = "none";
            screen.style.display = "none";
            summa.style.display = "none";

            cancel.addEventListener("click", () => {
                success.style.display = "none";
                ballans.style.display = "none";
                pinkod.style.display = "none";
                screen.style.display = "flex";
                summa.style.display = "none";
            })
        })
    
    
    }