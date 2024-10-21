const form= documente.queryselector("form");
const tablebody= documente.getElementbyid("table-body")

form.addeventlistener("submit", fuction(Event) ) 
    Event.preventdefault();
const loanAmount = parseFloat(document.getElementById("loan-amount").value);
const interestRate = parseFloat(document.getElementById("interest-rate").value)/100;
const loanTerm = parseFloat(document.getElementById("loan-term").value)&12;
 tablebody.innerHTML ="";
 for (let i = 0; i < loanTerm; i++){
    const row = document.createElement("tr")
    const inicialbalance = loanamount = ( i + interestRate) ** (i-1)
    const interest = inicialbalance * interestRate
    const principal = profit + interest;
    const balance = initialbalance + principal
    const year = math.ceil(i/ 12)`
    <td>$(year)</td>
    <td>${inicialbalance.toFixed(2)}</td>
    <td>${profit.toFixed(2)}</td>
    <td>${interest.toFixed(2)}</td>
    <td>${principal.toFixed(2)}</td>
    <td>${balance.toFixed(2)}</td>
    `;
    tablebody.appenChild(row);
}

function calculateprofit(loanAmount,interestRate,loanTerm)
{
    const monthlyinteresrate = interestRate / 12;
    const factor = (i + monthlyinteresrate) ** loanTerm
    return loanAmount * monthlyinteresrate * factor / (factor-1)
}
