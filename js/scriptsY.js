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

    return dictKeys;
  }

  var dict = {};
  $(".form1").submit(function(event) {
    dict = {};
    var newList =[];
    event.preventDefault();
    var input = $("#input").val();
    input = input.replace(/[']/, "").toLowerCase();
    input = input.split(/[\W_]/g).filter(word => word.length > 0);
    newList = input;

    newList.forEach(function(listItem){
      if (listItem in dict) {
        dict[listItem] ++ ;
      } else {
        dict[listItem] = 1
      }
    });

    var dictKeys = sortArrays(dict);
    $("#outputList").text("");
    dictKeys.forEach(function(key) {
      $("#outputList").append('<li class="col-md-3"><b>"' + key + '"</b> was found <b>' + dict[key] + "</b> time(s)</li>")
    });
  })

  $(".searchForm").submit(function(event) {
    event.preventDefault();
    var search = $("#search").val().toLowerCase();
    if (search in dict)
      alert(search + " was found " + dict[search] + " times.");
    else
      alert(search + " was not found.");
  });
});
