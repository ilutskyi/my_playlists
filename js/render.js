export default function renderPlayList(playlist) {
    document.body.append(createPlayListHeader(playlist));
    document.body.append(createTrackListElement(playlist.tracks));
}

function createPlayListHeader(playlist) {
    const playlistHeaderElement = document.createElement("div")

    const playlistTitleElement = document.createElement("h1");
    playlistTitleElement.append(playlist.title);
    playlistHeaderElement.append(playlistTitleElement);

    const playlistLogoElement = createHeaderLogoElement(playlist.coverImageUrl)
    playlistHeaderElement.append(playlistLogoElement);

    return playlistHeaderElement
}

function createHeaderLogoElement(logoImageUrl) {
    const playlistLogoElement = document.createElement("img");

    playlistLogoElement.src = logoImageUrl;
    playlistLogoElement.style.width = "100px";
    playlistLogoElement.style.height = "100px";

    return playlistLogoElement
}

function createTrackListElement(trackList) {
    const trackListElement = document.createElement("ul");

    for (let track of trackList) {
        const trackElement = createTrackElement(track);
        trackListElement.append(trackElement);
    }

    return trackListElement;
}

function createTrackElement(track) {

    const trackElement = document.createElement("li");
    if (track.inTrend) {
        trackElement.append("🔥")
    }
    trackElement.append(`${track.artistName} - ${track.title}`);

    trackElement.append(document.createElement("br"));

    const trackLogo = document.createElement("img");
    trackLogo.src = track.imageUrl;
    trackElement.append(trackLogo);

    const playerElement = document.createElement("audio");
    playerElement.controls = true;
    playerElement.src = track.fileUrl;
    trackElement.append(playerElement);


    return trackElement;
}
