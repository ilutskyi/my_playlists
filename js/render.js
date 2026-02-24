import createPlayListElement from "./elements.js";

const main = document.getElementById("main");

export default function renderPlaylists(playlists) {
    for (let playlist of playlists) {
        main.appendChild(createPlayListElement(playlist));
    }
}
