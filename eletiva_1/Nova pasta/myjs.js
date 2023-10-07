function my_number_random() {
    var H1 = document.getElementById("my_id");
    var number1 = document.getElementById("my_number_random1");

    var randomNumber1 = Math.floor(Math.random() * 10);
    var randomNumber2 = Math.floor(Math.random() * 44);

    H1.textContent = randomNumber1;
    number1.textContent = randomNumber2;

    var uuu = document.getElementById("inp")

    var test = parseInt(H1.textContent);
    uuu2 = parseInt(uuu).value;
    var soma = test + uuu

    if (soma == uuu2) {
        var lll = document.getElementById("iii");
        lll.textContent = "Você acertou!";
    } else {
        var lll = document.getElementById("nbb");
        lll.textContent = "Você errou";
    }
}