// routes d'API
var urlname = 'http://10.1.4.28:3000/api/v1/name'
var urllist = 'http://10.1.4.28:3000/api/v1/delivery'

getProfil()
// récupére les livreurs existant pour remplir le select
function getProfil(){
  $.get(urlname, function (data) {
    var option = document.createElement('option');
    option.innerHTML = "selectionnez un livreur"
    $("#deliveryboylist").append(option)
    data.forEach(function(element){
      var option = document.createElement('option');
      option.innerHTML = element.firstname+" "+element.lastname;
      option.value = element.ID+" "+element.firstname+" "+element.lastname;
      $("#deliveryboylist").append(option)
    })
  })
}
// récupére les livraisons existantes pour remplir le tableau
function getDelivery(name){
  var info = name.split(" ");
  var result = [info[1], info[2]]
    $("#tabody").empty()
    $.get(urllist, function (data) {
        for (var key in data){
            var item = data[key];
            if(item.deliveryboy == info[0]){
              var stamp = new Date(item.createdAt).getTime();
              result.push(stamp)
              var time = item.createdAt.replace('T', ' ').replace('Z', ' ');
              var tr = document.createElement('tr')
              var td1 = document.createElement('td')
              var td2 = document.createElement('td')
              var td3 = document.createElement('td')
              var td4 = document.createElement('td')
              td1.append(info[1])
              td2.append(info[2])
              td3.append(item.package)
              td4.append(time)
              tr.append(td1, td2, td3, td4)
              $("#tabody").append(tr);
            }
        }
        show(result)
    })
}
// affiche la moyenne de livraison du livreur selectionné
function show(info){
  var name = info[0]+ " " + info[1];
  info = info.slice(2)
  var nb = info.length;
  var millisec = info[nb-1]-info[0]
  var min = millisec/60000
  var result = Math.round(min/nb)
  console.log(info)
  $("#result").empty();
  if(info.length==0){
    $("#result").append("Votre livreur n'a effectué aucune livraison.")
  }else{
    $("#result").append("Le livreur " + name + " livre un coli toutes les "+ result +" minutes.")
  }

}
$( document ).ready(function() {
    $( "#deliveryboylist" ).change( function() {
      var name = document.getElementById("deliveryboylist").value
      getDelivery(name)
    });
});
