const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const mesaj = document.getElementById("yenimesaj");
const audio = document.getElementById("audio");

noButton.addEventListener("mouseover", function () {
  const x = Math.floor(
    Math.random() * (window.innerWidth - noButton.clientWidth)
  );
  const y = Math.floor(
    Math.random() * (window.innerHeight - noButton.clientHeight)
  );

  noButton.style.position = "absolute";
  noButton.style.left = x + "px";
  noButton.style.top = y + "px";
});

yesButton.addEventListener("click", function () {
  mesaj.innerHTML = "TEŞEKKÜR EDERİM PİŞMAN OLMAYACAKSIN <3 <3 <3";
  audio.play();
});
