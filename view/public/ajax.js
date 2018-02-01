var url = 'http://localhost:3000/api/v1/'

getProfil(url)

function getProfil(url){
    $("#tabody").empty()
    $.get(url, function (data) {
        for (var key in data){
            var item = data[key];
            var tr = document.createElement('tr')
            for (var key in item){
                var td = document.createElement('td')
                td.append(item[key])
                tr.append(td)
            }
            $("#tabody").append(tr);
        }
    })
}

function getLink(act){
    $("#dllbut").empty()
    var a = document.createElement('a')
    a.setAttribute("class", "btn btn-info glyphicon glyphicon-save-file")
    a.setAttribute("href", "http://localhost:3000/download/"+act)
    a.innerHTML = 'Téléchargement'
    var p = document.createElement('p')
    p.innerHTML = 'Veuillez cliquer sur le bouton afin de télécharger la liste des profils du secteur : '+act
    $("#dllbut").append(p)
    $("#dllbut").append(a)
}

$( document ).ready(function() {
    $( "#allbut" ).click( function() {
        getProfil(url)
        $("#dllbut").empty()
    });
    $( "#assbut" ).click( function() {
        getProfil(url+'assurance')
        getLink('assurance')
    });
    $( "#banbut" ).click( function() {
        getProfil(url+'banque')
        getLink('banque')
    });
    $( "#batbut" ).click( function() {
        getProfil(url+'batiment')
        getLink('batiment')
    });
    $( "#devbut" ).click( function() {
        getProfil(url+'developpement')
        getLink('developpement')
    });
    $( "#sanbut" ).click( function() {
        getProfil(url+'sante')
        getLink('sante')
    });
});