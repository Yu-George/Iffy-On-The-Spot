interface Song {
  songName: string;
  artist: string[];
  album: string;
  previewUrl: string;
  albumImgUrl: string;
}

const sampleSongs = {
  genre: [
    [
      {
        songName: "P.Y.T. (Pretty Young Thing)",
        artist: ["Michael Jackson"],
        album: "Thriller 25 Super Deluxe Edition",
        previewUrl:
          "https://p.scdn.co/mp3-preview/575230ca230ab7a79f1b2980e303d7f1612073f3?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
      },
      {
        songName: "The Way You Make Me Feel - 2012 Remaster",
        artist: ["Michael Jackson"],
        album: "Bad 25th Anniversary",
        previewUrl:
          "https://p.scdn.co/mp3-preview/93f122101d44b96287fa0dea98f1b0f133a413b8?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b2731bb21d27effb96a1d0fe8d6d",
      },
      {
        songName: "Thriller",
        artist: ["Michael Jackson"],
        album: "Thriller 25 Super Deluxe Edition",
        previewUrl:
          "https://p.scdn.co/mp3-preview/dd0621b7f11364a37c96031dbedbca6b88dbfa7d?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
      },
      {
        songName: "Rock with You - Single Version",
        artist: ["Michael Jackson"],
        album: "Off the Wall",
        previewUrl:
          "https://p.scdn.co/mp3-preview/6d950aa4c01473bee46de9c601f7c9c06d7576b3?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b2737027294551db4fda68b5ddac",
      },
      {
        songName: "Beat It",
        artist: ["Michael Jackson"],
        album: "Thriller 25 Super Deluxe Edition",
        previewUrl:
          "https://p.scdn.co/mp3-preview/4901df6e0f8bf6ce93e08df7d98a50e220c45799?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
      },
      {
        songName: "They Don't Care About Us",
        artist: ["Michael Jackson"],
        album: "HIStory - PAST, PRESENT AND FUTURE - BOOK I",
        previewUrl:
          "https://p.scdn.co/mp3-preview/8b45e8eec4f6be9ecfd343a2db7dece8eb78d583?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b273d0593178c6c2594693ee34b7",
      },
      {
        songName: "Bad - 2012 Remaster",
        artist: ["Michael Jackson"],
        album: "Bad 25th Anniversary",
        previewUrl:
          "https://p.scdn.co/mp3-preview/5d08b76c5f2b944725394019c38b3ff08f867306?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b2731bb21d27effb96a1d0fe8d6d",
      },
      {
        songName: "Don't Stop 'Til You Get Enough",
        artist: ["Michael Jackson"],
        album: "Off the Wall",
        previewUrl:
          "https://p.scdn.co/mp3-preview/bcbf2c53e033e4df303f4a9c90c4eada0a70216f?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b2737027294551db4fda68b5ddac",
      },
      {
        songName: "Smooth Criminal - 2012 Remaster",
        artist: ["Michael Jackson"],
        album: "Bad 25th Anniversary",
        previewUrl:
          "https://p.scdn.co/mp3-preview/8dcbe2702477ac98c7c711cbafcac43e10063949?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b2731bb21d27effb96a1d0fe8d6d",
      },
      {
        songName: "Billie Jean",
        artist: ["Michael Jackson"],
        album: "Thriller 25 Super Deluxe Edition",
        previewUrl:
          "https://p.scdn.co/mp3-preview/f504e6b8e037771318656394f532dede4f9bcaea?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be",
      },
    ],
    [
      {
        songName: "Come Together - Remastered 2009",
        artist: ["The Beatles"],
        album: "Abbey Road (Remastered)",
        previewUrl:
          "https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
      },
      {
        songName: "Here Comes The Sun - Remastered 2009",
        artist: ["The Beatles"],
        album: "Abbey Road (Remastered)",
        previewUrl:
          "https://p.scdn.co/mp3-preview/6902e7da51d2f17e5369d57dadf8ce7d2a123f99?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
      },
      {
        songName: "Blackbird - Remastered 2009",
        artist: ["The Beatles"],
        album: "The Beatles (Remastered)",
        previewUrl:
          "https://p.scdn.co/mp3-preview/9cd5790f74f29046953ef511c3737a1121785b73?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b2734ce8b4e42588bf18182a1ad2",
      },
      {
        songName: "Something - Remastered 2009",
        artist: ["The Beatles"],
        album: "Abbey Road (Remastered)",
        previewUrl:
          "https://p.scdn.co/mp3-preview/c6f693ae5275fa2693450cb3fcbe4321d7bf0f2e?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",
      },
      {
        songName: "Twist And Shout - Remastered 2009",
        artist: ["The Beatles"],
        album: "Please Please Me (Remastered)",
        previewUrl:
          "https://p.scdn.co/mp3-preview/b7e3bc96b46e4dcc22cec5d23337d2446cb0ab87?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b273dbeec63ad914c973e75c24df",
      },
      {
        songName: "In My Life - Remastered 2009",
        artist: ["The Beatles"],
        album: "Rubber Soul (Remastered)",
        previewUrl:
          "https://p.scdn.co/mp3-preview/729eb2814049fdf4e8b62b614e459be1a55b5040?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b273ed801e58a9ababdea6ac7ce4",
      },
      {
        songName: "Help! - Remastered 2009",
        artist: ["The Beatles"],
        album: "Help! (Remastered)",
        previewUrl:
          "https://p.scdn.co/mp3-preview/7e1b66ed051e286477a9b0b781412f296c973aed?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b273e3e3b64cea45265469d4cafa",
      },
      {
        songName: "Hey Jude - Remastered 2015",
        artist: ["The Beatles"],
        album: "1 (Remastered)",
        previewUrl:
          "https://p.scdn.co/mp3-preview/c718fc992246a4b070500515880bed0b517631ab?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b273582d56ce20fe0146ffa0e5cf",
      },
      {
        songName: "Let It Be - Remastered 2009",
        artist: ["The Beatles"],
        album: "Let It Be (Remastered)",
        previewUrl:
          "https://p.scdn.co/mp3-preview/f7913ebb647d47835c34fa4db7e889c8a87c6d10?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b27384243a01af3c77b56fe01ab1",
      },
      {
        songName: "Yesterday - Remastered 2009",
        artist: ["The Beatles"],
        album: "Help! (Remastered)",
        previewUrl:
          "https://p.scdn.co/mp3-preview/e0e725ffb5467d8fc192f5f2bdc0656de2d5d8b3?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b273e3e3b64cea45265469d4cafa",
      },
    ],
    [
      {
        songName: "Wants and Needs (feat. Lil Baby)",
        artist: ["Drake", "Lil Baby"],
        album: "Scary Hours 2",
        previewUrl:
          "https://p.scdn.co/mp3-preview/cad4f8a85d1c9acbe893c1c99f215d2b24fb8187?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b2738b20e4631fa15d3953528bbc",
      },
      {
        songName: "Laugh Now Cry Later (feat. Lil Durk)",
        artist: ["Drake", "Lil Durk"],
        album: "Laugh Now Cry Later (feat. Lil Durk)",
        previewUrl:
          "https://p.scdn.co/mp3-preview/ddb5d34b981f6f0e0adff876fb80ba313ea6e231?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b27352c75ed37313b889447011ef",
      },
      {
        songName: "Way 2 Sexy (with Future & Young Thug)",
        artist: ["Drake", "Future", "Young Thug"],
        album: "Certified Lover Boy",
        previewUrl:
          "https://p.scdn.co/mp3-preview/e4a1bbc010e934bea0f4343c68d8c5fefecd0a76?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f",
      },
      {
        songName: "Champagne Poetry",
        artist: ["Drake"],
        album: "Certified Lover Boy",
        previewUrl:
          "https://p.scdn.co/mp3-preview/0a37353e91af6622f4c0bf5aba8b5f20c8a71d8a?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f",
      },
      {
        songName: "Fair Trade (with Travis Scott)",
        artist: ["Drake", "Travis Scott"],
        album: "Certified Lover Boy",
        previewUrl:
          "https://p.scdn.co/mp3-preview/8b7b8af3300f40e0bdd75ed39de3011380799c5d?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f",
      },
      {
        songName: "Passionfruit",
        artist: ["Drake"],
        album: "More Life",
        previewUrl:
          "https://p.scdn.co/mp3-preview/ec46afcb58baf2fa4a05e4ca62c2b77bbb53e3c7?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b2734f0fd9dad63977146e685700",
      },
      {
        songName: "One Dance",
        artist: ["Drake", "WizKid", "Kyla"],
        album: "Views",
        previewUrl:
          "https://p.scdn.co/mp3-preview/50aeec4e35621378996ae5a25fac1233051bd9a3?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c",
      },
      {
        songName: "Girls Want Girls (with Lil Baby)",
        artist: ["Drake", "Lil Baby"],
        album: "Certified Lover Boy",
        previewUrl:
          "https://p.scdn.co/mp3-preview/c9674962673ba795c96a7e30ee891dc43e03be1a?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f",
      },
      {
        songName: "Knife Talk (with 21 Savage ft. Project Pat)",
        artist: ["Drake", "21 Savage", "Project Pat"],
        album: "Certified Lover Boy",
        previewUrl:
          "https://p.scdn.co/mp3-preview/8abf389868024c191f73d10247567c2f0e4975d2?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f",
      },
      {
        songName: "God's Plan",
        artist: ["Drake"],
        album: "Scorpion",
        previewUrl:
          "https://p.scdn.co/mp3-preview/eb05491a217585c91ba646a5ee779e2a76aa400f?cid=0b27e5fcf04d44418616005eaed81e2e",
        albumImgUrl:
          "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5",
      },
    ],
  ],
};

{
}
export default { sampleSongs };
