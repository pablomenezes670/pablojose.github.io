

function consultarCep (){
    let cep = document.getElementById('input-cep').value;
    if(cep.length !== 8){
        alert('CEP Invalido!');
        return;
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function(response){
        response.json().then(function(data){
        mostrarEndereço(data);

        })
    });

}
    function mostrarEndereço (data){
        document.getElementById('input-rua').value = data.logradouro;
        document.getElementById('input-bairro').value = data.bairro;
        document.getElementById('input-cidade').value = data.localidade;
        document.getElementById('input-uf').value = data.uf;
        
    }
    function limparDadosCep (){
        document.getElementById('limpar-dados').value = "";
    }
document.getElementById('input-cep').addEventListener('focusout',consultarCep);