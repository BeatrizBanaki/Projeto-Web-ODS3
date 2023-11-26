var sugestList = []; 

function addSugestao(name, email, sugestao) {

  let dataAtual = new Date();
  let dia = dataAtual.getDate();
  let mes = dataAtual.getMonth();
  let ano = dataAtual.getFullYear();

  let data = `${dia}/${mes + 1}/${ano}`;

    var newSugestao = {id: sugestList.length+1,name: name, email: email, sugestao: sugestao, data: data};
    sugestList.push(newSugestao); 
    localStorage.setItem('sugestList', JSON.stringify(sugestList)); 
}

function getSugestList() {
    var storedList = JSON.parse(localStorage.getItem('sugestList')); 
    sugestList = storedList || []; 
}

getSugestList();

document.getElementById('sugestForm').addEventListener('submit', function (event) {
  event.preventDefault();
  var nameInput = document.getElementById('nome');
  var emailInput = document.getElementById('email');
  var sugestoesInput = document.getElementById('sugestoes');
  addSugestao(nameInput.value, emailInput.value, sugestoesInput.value);
  nameInput.value = '';
  emailInput.value = '';
  sugestoesInput.value = '';
  document.getElementById('idade').value = '';
  document.getElementById('telefone').value = '';
  document.getElementById('tuberculose').checked = false;
  document.getElementById('transito').checked = false;
  document.getElementById('tabaco').checked = false;
  document.getElementById('saude-mental').checked = false;
});