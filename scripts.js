// Cotação do dia
const USD = 5.40
const EUR = 6.32
const GBP = 7.32

// Obtendo elementos do HTML

const form = document.querySelector("form")
const amountVar = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// Manipulando o input para receber apenas numeros
amountVar.addEventListener("input", () =>{
const hasCharactersRegex = /\D+/g
amountVar.value = amountVar.value.replace(hasCharactersRegex, "")
})

//Captando o evento de submit (enviar)
form.onsubmit = (event) =>{
event.preventDefault()

switch (currency.value){
    case "USD":
        convertCurrency(amountVar.value, USD, "US$")
        break
    case "EUR":
        convertCurrency(amountVar.value, EUR, "€")
        break
    case "GBP":
        convertCurrency(amountVar.value, GBP, "£")
        break
}

}

// Função para converter a moeda selecionada
function convertCurrency(amountVar, price, symbol){
    try{
        //Exibindo a cotação da moeda selecionada
        description.textContent = `Cotação atual ${symbol} 1 = ${formatCurrencyBRL(price)}`

        //Exibindo total
        let total = amountVar * price
        result.textContent = `${formatCurrencyBRL(total)} Reais`


        //Apliica a classe que exibe o footer para mostar o resultado
        footer.classList.add("show-result")
    }catch (error){

        // Remove a classe do footer removendo ele
        console.log(error)
        footer.classList.remove("show-result")
        alert("não é possivel convereter. Tente novamente mais tarde")
    }
}

// Formata a moeda em real Brasileiro 
function formatCurrencyBRL(value){
    // Converte para numero para utilizar o toLocaleString para formatar no pasrão BRL (R$ 00,000)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}