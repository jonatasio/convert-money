const convertButton = document.querySelector(".convert-button")
const currencySelectFrom = document.querySelector(".currency-select-from")
const currencySelect = document.querySelector(".currency-select")

function convertvalues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") //outras moedas
    let valueInReal = Number(inputCurrencyValue)

    const realToday = 1
    const dolarToday = 5.2
    const euroToday = 5.91
    const libraToday = 6.8
    const bitcoinToday = 326990.3

    if (currencySelectFrom.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrencyValue)
        valueInReal = Number(inputCurrencyValue) * realToday
    }

    if (currencySelectFrom.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(Number(inputCurrencyValue))
        valueInReal = Number(inputCurrencyValue) * dolarToday
    }

    if (currencySelectFrom.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue)
        valueInReal = Number(inputCurrencyValue) * euroToday
    }

    if (currencySelectFrom.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue)
        valueInReal = Number(inputCurrencyValue) * libraToday
    }

    if (currencySelectFrom.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue)
        valueInReal = Number(inputCurrencyValue) * bitcoinToday
    }


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(valueInReal / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(valueInReal / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInReal / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
        }).format(valueInReal / bitcoinToday)
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInReal / realToday)
    }
}

function changeCurrencyFrom() {
    const currencyImgToConvert = document.querySelector(".currency-logo")
    const currencyNameToConvert = document.getElementById("currency-name-to-convert")


    if (currencySelectFrom.value == "real") {
        currencyNameToConvert.innerHTML = "Real"
        currencyImgToConvert.src = "./assets/real.png"
    }

    if (currencySelectFrom.value == "dolar") {
        currencyNameToConvert.innerHTML = "Dólar"
        currencyImgToConvert.src = "./assets/dolar.png"
    }

    if (currencySelectFrom.value == "euro") {
        currencyNameToConvert.innerHTML = "Euro"
        currencyImgToConvert.src = "./assets/euro.png"
    }

    if (currencySelectFrom.value == "libra") {
        currencyNameToConvert.innerHTML = "Libra"
        currencyImgToConvert.src = "./assets/libra.png"
    }

    if (currencySelectFrom.value == "bitcoin") {
        currencyNameToConvert.innerHTML = "Bitcoin"
        currencyImgToConvert.src = "./assets/bitcoin.png"
    }

    convertvalues()
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-logo-converted")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "real"
        currencyImg.src = "./assets/real.png"
    }

    convertvalues()
}

currencySelectFrom.addEventListener("change", changeCurrencyFrom)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertvalues)