import renderPlayList from "./render.js";

const playlists = [
    {
        title: "Hip Hop Hits",
        coverImageUrl: "istockphoto-1269075876-612x612.jpg",
        info: {
            totalTtrackCount: 4,
            totalTracksDurationInSeconds: 1008,
        },
        tracks: [
            {
                title: "Straight Outta Compton",
                artistName: "N.W.A",
                fileUrl:
                    "N.W.A_-_Quiet_On_Tha_Set_Golos_ulic_2015_Straight_Outta_Compton_(mp3.pm).mp3",
                imageUrl: "Straight_Outta_Compton_logo.jpg",
            },
            {
                title: "One Mic",
                artistName: "Nas",
                fileUrl: "Nas - One Mic (Official HD Video).mp3",
                imageUrl: "artworks-001016415490-n8t0lg-t500x500.jpg",
            },
            {
                title: "Forgot About Dre",
                artistName: "Dr. Dre ft. Eminem",
                fileUrl:
                    "Eminem, Dr. Dre - Forgot About Dre (Explicit) (Official Music Video) ft. Hittman.mp3",
                imageUrl: "artworks-h38vVbu1Dy1GuBo1-Nngjpw-t1080x1080.jpg",
            },
            {
                title: "It Was a Good Day",
                artistName: "Ice Cube",
                fileUrl: "Ice Cube - It Was A Good Day.mp3",
                imageUrl: "images.jpg",
            },
        ],
    },
];

for (let playlist of playlists) {
    renderPlayList(playlist);
}
