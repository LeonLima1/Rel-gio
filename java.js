const dt = document.getElementById('datas');
const data = dayjs()


dt.innerText = data.format("DD.MM.YYYY HH:mm:ss");

$(function() {
    setTimeout(function(){ location.reload(); }, 1000); 
});
