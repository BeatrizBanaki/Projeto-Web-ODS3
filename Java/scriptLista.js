var sugestList = []; 


function deleteSugest(sugestId) {

    var updatedSugestList = sugestList.filter(function (sugest) {
      return sugest.id !== sugestId; 
    });

    if (updatedSugestList.length < sugestList.length) { 
      sugestList = updatedSugestList;
      localStorage.setItem('sugestList', JSON.stringify(sugestList)); 
      renderSugestList();
    } else {
      alert('Sugestão não encontrada.');
    }
}

function cleanList() {
    sugestList = [];
    localStorage.setItem('sugestList', JSON.stringify(sugestList)); 
    renderSugestList();
}

function getSugestList() {
    var storedList = JSON.parse(localStorage.getItem('sugestList')); 
    sugestList = storedList || []; 
}

function renderSugestList() {
  var sugestListElement = document.getElementById('sugestList');
  sugestListElement.innerHTML = ''; 
  
  sugestList.forEach(function (sugest) {
    var listItem = document.createElement('li');
    
    listItem.innerHTML = '<span class="sugest-name">' + sugest.name + '</span> - ' + sugest.email + ' - '+ sugest.data + '<br>' + sugest.sugestao +' <span class="close" onclick="deleteSugest(' + sugest.id + ')">x</span>';
    sugestListElement.appendChild(listItem);
  });
}


function searchSugest() {
  var input = document.getElementById('searchInput').value.toUpperCase(); 
  
  var filteredSugest = sugestList.filter(function(sugest) {
    return sugest.name.toUpperCase().indexOf(input) > -1;
  });


  var sugestListElement = document.getElementById('sugestList');
  sugestListElement.innerHTML = '';

  filteredSugest.forEach(function(sugest) {
    var listItem = document.createElement('li');

    listItem.innerHTML = '<span class="sugest-name">' + sugest.name + '</span> - ' + sugest.email + ' - '+ sugest.data + '<br>' + sugest.sugestao +' <span class="close" onclick="deleteSugest(' + sugest.id + ')">x</span>';
    sugestListElement.appendChild(listItem);
  });

  document.getElementById('searchInput').value = '';
}

getSugestList();

renderSugestList();
