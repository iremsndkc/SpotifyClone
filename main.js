import { API } from "./api.js";
import { elements } from "./helpers.js";
import { renderPlayingInfo, updateTitle } from "./ui.js";
const api = new API()
//*form gönderildiği anda apiye istek at ve gelen cevabı ekrana yazdır.
elements.form.addEventListener("submit", (e) => {
    e.preventDefault(); //*form gönderildiği anda sayfanın yenilenmesini engeller.
    const query = (e.target[0].value); //*inputun içersindeki değere ulaştık.
    //*inputa girilen değer boş ise fonksiyonu burda durdur.
    if (!query) {
        alert("lütfen bir müzik ismi giriniz")
        return;     
    }


    updateTitle(`${query} İçin Sonuçlar`);

    api.searchMusic(query);
});
//*sayfa yüklenildiği anda apiye istek atıp popüler fonksiyonları getirecek fonksiyon.
document.addEventListener("DOMContentLoaded", async () => {
await api.topPopular()
});


const playMusic =(url) =>{
    //*müziğin url ini html ye aktardık.
    elements.audioSource.src = url;
    //*audio elementinin müziği yüklenmesini sağladık.
    elements.audio.load();
    //*audio elemtini yüklenmesini sağladık.
    elements.audio.play();
}

//* listede tıklamalarda çalışır.
const handleClick =(e) => {
    console.log("tılanıldı");
    if (e.target.id === "play-btn") {
        //*parentelement yerine kullanırız en yakın ebveyne götürürüz.
        const parent = (e.target.closest(".card"));
        renderPlayingInfo(parent.dataset);
        //*müziği çalar.
        playMusic(parent.dataset.url);
    }
    
};

//*liste alanındaki tıklamaları izler
document.addEventListener("click" , handleClick);
//*fotoğrafı döndürerir.
const animatePhoto = () => {
    document.querySelector(".info img");
    img.className = "animate";
};

//*img etiketine eklediğimiz animate classını kaldırır.
const stopAnimation = () => {
    const img = document.querySelector(".info img");
    img.classList.remove( "animate");
};
//*müziği çalma ve durdurma olaylarıını ziler.
elements.audio.addEventListener("play", animatePhoto);
elements.audio.addEventListener("pause", stopAnimation);