const form = document.getElementById('form-contatos');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    colocaNaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputSobrenome = document.getElementById('sobrenome');
    const inputTelefone = document.getElementById('telefone');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputSobrenome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNome.value = '';
    inputSobrenome.value = '';
    inputTelefone.value = '';
}

function colocaNaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}