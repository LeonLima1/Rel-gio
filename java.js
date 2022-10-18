const dt = document.getElementById('datas');
const data = dayjs()


dt.innerText = data.format("DD.MM.YYYY HH:mm:ss");

// Recarrega a página atual sem usar o cache
document.location.reload(true);

