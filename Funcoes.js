// Funções matemáticas em JS


// Math.round()
// Retorna o valor de um número arredondado para o inteiro mais próximo (se <= .4 arredanda para baixo OU se >= .5 arredonda para cima)
const varPI = Math.PI;
console.log("PI original: " + varPI + "\nPI com função Round: " + Math.round(varPI));

const varRoundParaBaixo = 7.4;
console.log("\nVariável original: " + varRoundParaBaixo + "\nVariável com função Round: " + Math.round(varRoundParaBaixo)); // Retorna "7"

const varRoundParaCima = 8.5;
console.log("\nVariável original: " + varRoundParaCima + "\nVariável com função Round: " + Math.round(varRoundParaCima)); // Retorna "9"


// toFixed()
// Controla o número de casas decimais após a vírgula.
const varToFixedParaBaixo = 2.164;
console.log("\n\n\nVariável original: " + varToFixedParaBaixo + "\nVariável com toFixed(2): " + varToFixedParaBaixo.toFixed(2)); // Retorna "2.16"

const varToFixedParaCima = 2.165;
console.log("\nVariável original: " + varToFixedParaCima + "\nVariável com toFixed(2): " + varToFixedParaCima.toFixed(2)); // Retorna "2.17"


/* toLocaleString()
Converte um número para uma string.
Já arredonda e converte para a moeda do país informado.
.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
syle = estilo do formato a ser utilizado. Pode ser:
    currency = formato monetário, indica a moeda que será utilizada;
    decimal = representa números simples;
    percent = formato percentual.
*/
const varDecimal = 3560.845;
console.log("\n\n\nDecimal original: " + varDecimal + "\nDecimal com toLocaleString(): " + varDecimal.toLocaleString('pt-BR', {minimumFractionDigits: 2})); // Retorna "3.560,845"

const varSalario = 3560.845;
console.log("\nSalario original: " + varSalario + "\nSalario com toLocaleString(): " + varSalario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); // Retorna "R$ 3.560,85"

const varPercentual = 98.74;
console.log("\nPercentual original: " + varPercentual + "\nPercentual com toLocaleString(): " + varPercentual.toLocaleString(undefined, {style: 'percent'}));



/* sort()
Ordena arrays/vetores.
Entretanto, a função sort() baseia a ordenação pela tabela Unicode, o que pode gerar uma orndenação inesperada.
*/
// Função auxiliar para a ordenação correta dos valores.
function comparaNumeros(a, b)
{
    if(a == b)
    {
        return 0;
    }
    if(a < b) 
    {
        return -1;
    } 
    if(a > b)
    {
        return 1;
    }
}

var vetor = [10, 1, 5, 9, 8, 12, 15];
console.log("\n\n\nVetor ordenado com sort(função): " + vetor.sort(comparaNumeros));

// Simplificando a função
console.log("\nVetor ordenado com sort((a, b) => a - b)): " + vetor.sort((a, b) => a - b));