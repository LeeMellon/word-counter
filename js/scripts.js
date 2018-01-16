$(document).ready(function() {

function sortArrays(dict) {
  var dictKeys = Object.keys(dict);


  for (start = 0; start < dictKeys.length - 1; start++) {
    var max = start;
    for (i = start + 1; i < dictKeys.length; i++) {
      if (dict[ dictKeys[max]] < dict[dictKeys[i]]) {
        max = i;
      }
    }
    var temp = dictKeys[max];
    dictKeys[max] = dictKeys[start];
    dictKeys[start] = temp;
  }

  dictKeys.forEach(function(key) {
    $("#outputList").append('<li class="col-md-3">"' + key + '" was found ' + dict[key] + " times</li>")
  });
  // console.log(dictKeys);
}


  $(".form1").submit(function(event) {
    var dict = {};
    var newList =[];
    event.preventDefault();
    var input = $("#input").val().replace(/[\[\].,\/#!$%\^&\*;:{}=_`~()\-]/g, " ").replace("", " ").split(" ");
    input = input.filter(word => word.length > 0);

    input.forEach(function(word){
      newList.push(word);
    });
    newList.forEach(function(listItem){
      if (listItem in dict) {
        dict[listItem] ++ ;
      } else {
        dict[listItem] = 1
      }
    });

    console.log(newList, dict)

    sortArrays(dict);
  })
});
