let order = [];


function addOrder(name, price, quantity) {

    let item = {
        name: name,
        price: price,
        quantity: Number(quantity)
    };
    order.push(item);

    showOrder();

}


function showOrder() {

    let orderList = document.getElementById("order-list");

    let total = 0;

    orderList.innerHTML = "";


    for (let i = 0; i < order.length; i++) {

        let itemTotal = order[i].price * order[i].quantity;

        total = total + itemTotal;


        orderList.innerHTML +=
            "<p>" +
            order[i].name +
            " × " +
            order[i].quantity +
            " — ৳" +
            itemTotal +
            "</p>";

    }


    document.getElementById("total-price").innerHTML =
        "Total: ৳" + total;

}
function placeOrder() {

    let pickupTime = document.getElementById("pickup-time").value;

    if (order.length == 0) {

        alert("Please add food to your order first.");

        return;

    }


    if (pickupTime == "") {

        alert("Please select a pickup time.");

        return;

    }


    let orderNumber = Math.floor(Math.random() * 900) + 100;


    document.getElementById("order-message").innerHTML =

        "<h3>Order Confirmed!</h3>" +

        "<p>Your Order Number: #" + orderNumber + "</p>" +

        "<p>Please come and collect your food at <strong>" +

        pickupTime +

        "</strong>.</p>";

}
function showCurrentTime() {

    const time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("current-time").innerHTML =
        hours + ":" + minutes + ":" + seconds + " " + ampm;
}

showCurrentTime();

setInterval(showCurrentTime, 1000);

/* ==============================
   RUNNING TIMER
============================== */

let seconds = 0;

function updateRunningTimer() {

    seconds++;

    let hours = Math.floor(seconds / 3600);

    let minutes = Math.floor((seconds % 3600) / 60);

    let secs = seconds % 60;

    hours = String(hours).padStart(2, "0");

    minutes = String(minutes).padStart(2, "0");

    secs = String(secs).padStart(2, "0");

    document.getElementById("running-timer").innerHTML =
        hours + ":" + minutes + ":" + secs;
}

setInterval(updateRunningTimer, 1000);

/* ==============================
   AUTOMATIC PICKUP TIMES
============================== */

function createPickupTimes() {

    let pickupSelect = document.getElementById("pickup-time");

    let now = new Date();

    /* Start 30 minutes from now */

    let startTime = new Date(now);

    startTime.setMinutes(
        Math.ceil(startTime.getMinutes() / 30) * 30
    );

    /* Create 6 choices */

    for (let i = 0; i < 6; i++) {

        let pickupTime = new Date(startTime);

        pickupTime.setMinutes(
            startTime.getMinutes() + (i * 30)
        );


        let hours = pickupTime.getHours();

        let minutes = pickupTime.getMinutes();


        let ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12;

        hours = hours ? hours : 12;

        minutes = String(minutes).padStart(2, "0");


        let formattedTime =
            hours + ":" + minutes + " " + ampm;


        let option = document.createElement("option");

        option.value = formattedTime;

        option.textContent = formattedTime;


        pickupSelect.appendChild(option);
    }
}

createPickupTimes();

function placeOrder() {
    document.getElementById("orderMessage").style.display = "block";
}