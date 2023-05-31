//API keys 
var translateURL = "";
var translateKey = "";

var pictureURL ="";
var pictureKey ="";

//ajax request to translate API
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var translationResult = response.results;
    for (var i = 0; i < translationResult.length; i++) {
      console.log(translationResult[i].title);
      console.log(translationResult[i].image);
      var card = $(`
<div class="row">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${translationResult[i].title}</h5>
      <img src="${translationResult[i].image}" alt="..." width="200" height="200">
      <p class="card-text">
      </p>
      <button>
      <a href="${translationResult[i].id.summary}" class="btn btn-primary">
      <button />
      </a>
    </div>
  </div>
</div>
`)
  console.log(translationResult[i].id)
    $("#translationResult").append(card);
    }
  });