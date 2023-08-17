const doneBtn = document.getElementById('doneBtn');
doneBtn.addEventListener("click", function () {
  var form = new FormData();
  var email = getLocalStorage("email");
  var balance = getLocalStorage("balance");
  var name = document.getElementById("task_name").value; // "test001";
  var overview = document.getElementById("overview").value;// "overview123";
  var token = document.getElementById("token").value; // "test001";
  var cover = getLocalStorage("task_cover");//`${TASK_COVER}`;

  
  
  form.append("email", email);
  form.append("balance", balance);
  form.append("name", name);
  form.append("token", token);
  form.append("overview", overview);
  form.append("cover", cover);

  let settings = {
    "url": `https://bernie3305730.ddns.net`,
    "method": "POST",
    "timeout": 0,
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": form
  };

  $.ajax(settings).done(function (res) {
    console.log(res);
    //window.location.replace("/verifier-cms-list.html");
  });
});
