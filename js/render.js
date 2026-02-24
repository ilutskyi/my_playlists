export default function renderPlayList(playlist) {
    renderPlayListHeader(playlist);

    const trackListElement = document.createElement("ul");
    for (let track of playlist.tracks) {
        const trackElement = createTrackElement(track);
        trackListElement.append(trackElement);
    }

    document.body.append(trackListElement);
}

function renderPlayListHeader(playlist) {
    const playlistTitleElement = document.createElement("h1");
    playlistTitleElement.append(playlist.title);
    document.body.append(playlistTitleElement);

    const playlistLogoElement = document.createElement("img");
    playlistLogoElement.src = playlist.coverImageUrl;
    playlistLogoElement.style.width = "100px";
    playlistLogoElement.style.height = "100px";
    document.body.append(playlistLogoElement);
}

function createTrackElement(track) {
    const trackElement = document.createElement("li");
    trackElement.append(`${track.artistName} - ${track.title}`);

    trackElement.append(document.createElement("br"));

    const playerElement = document.createElement("audio");
    playerElement.controls = true;
    playerElement.src = track.fileUrl;
    trackElement.append(playerElement);

    const trackLogo = document.createElement("img");
    trackLogo.src = track.imageUrl;
    trackElement.append(trackLogo);

    return trackElement;
}
