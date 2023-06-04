// Definindo a data atual
var dataAtual = new Date(); // Isso retorna a data atual

// Definindo a data alvo (18 de dezembro)
var dataAlvo = new Date(dataAtual.getFullYear(), 11, 18); // O mês 11 representa dezembro, pois os meses são indexados a partir de 0

// Calculando a diferença em milissegundos
var diferencaEmMilissegundos = dataAlvo.getTime() - dataAtual.getTime();

// Convertendo a diferença em dias
var diferencaEmDias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

console.log("Faltam " + diferencaEmDias + " dias para o dia 18 de dezembro.");
