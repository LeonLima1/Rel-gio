const dt = document.getElementById('datas');
const data = dayjs()


dt.innerText = data.format("DD.MM.YYYY HH:mm:ss");

$(function() {
  setTimeout(function(){ 
    $("body").append(" o timeout aconteceu.");
  }, 1000);
});
