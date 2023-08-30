const CLIENT_ID = ""; // insert your client id here from spotify
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "https://putonthespotify.netlify.app/";
const SPACE_DELIMITER = "%20";
const SCOPES = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "playlist-read-private",
  "user-library-read",
  "user-read-recently-played",
  "user-top-read",
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

export const loginUrl = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;

//export const loginUrl =
//  "https://accounts.spotify.com/authorize?client_id=0b27e5fcf04d44418616005eaed81e2e&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private";
