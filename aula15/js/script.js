let mostraNotification = document.querySelector('#mostra-notification');

mostraNotification.addEventListener('click', function(event){
  event.preventDefault();
  chamaNotification();
});

function chamaNotification(){
  if(!Notification){
    alert("Verifica notification");
    return;
  }
  if(Notification.permission !== "granted"){
    Notification.requestPermission();
  }

  abriNotification();
}

function abriNotification(){
  if(Notification.permission !== "granted"){
    Notification.requestPermission()
  }else{
    var notificationValue = new Notification("Notification Title", {
      icon: "https://image.flaticon.com/icons/png/128/1827/1827504.png",
      body: "Iorgama Porcely",
      image: "https://entretetizei.com.br/site/wp-content/uploads/2020/11/o-rei-leao.jpg"
    });
    notificationValue.onclick = function(){
      console.log("Teste");
    }
  }
}