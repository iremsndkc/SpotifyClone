import { elements } from "./helpers.js";
//*ekrana gönderilen müzikleri aktarır.
export const renderSearchMusic = (songs) => {
    elements.list.innerHTML = "";
    songs.forEach((song) =>  {
        console.log(song);
        const div = document.createElement("div");
        //* kart datasına kart elemanına bazı verileri ekleme.
        div.dataset.url = song.hub.actions.pop().uri;
        console.log(song);
        div.dataset.title = song.title;
        div.dataset.img = song.images.coverart;
        div.className = "card";
        console.log(div);

        div.innerHTML = `
        <figure>
            <img 
            src="${song.images.coverart}" 
            alt=""
            />
            <div class="play">
            <i class='bx bx-play' id="play-btn" ></i>
            </div>
        </figure>
        <h4>${song.subtitle}</h4>
        <h4>${song.title}</h4>
        
        
        `;
        elements.list.appendChild(div);
});
    
};
//*başlığı aldığı parametreye göre gğnceller
export const updateTitle = (message) => {
    elements.title.innerText = message;
}

//*popüler müzikleri ekrana yazdırır.
export const renderSongs = (songs) => {
    elements.list.innerHTML = "";
    songs.forEach((song) => {
       const div =  document.createElement("div");
       div.dataset.url = song.preview_url;
       div.dataset.title = song.name;
       div.dataset.img = song.album.images[1].url;
       div.className = "card";
       div.innerHTML = `
       <figure>
       <img 
       src="${song.album.images[1].url}" 
       alt=""
       />
       <div class="play">
           <i class='bx bx-play' id="play-btn" ></i>
       </div>
       </figure>
        <h4>${song.album.artists[0].name}</h4>
        <h4>${song.name}</h4> 
       `;
       elements.list.appendChild(div);
    });

}

//*playinginfo kısmına resmi ve titleı aktardık.
export const renderPlayingInfo = (song) => {
    console.log(song);
    console.log(elements.playingInfo);
    elements.playingInfo.innerHTML = `
    <img src="${song.img}" 
        class="animate"    
        id="info-img"  
        alt="">
        <div>
            <p>şu an oynatılıyor</p>
            <h3>${song.title}</h3>
        </div>
    `;
};