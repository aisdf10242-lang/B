/*
  여기만 수정하면 페이지의 글과 파일을 바꿀 수 있습니다.
  사진은 assets/photos, 영상은 assets/video, 음악은 assets/music 폴더에 넣으세요.
*/
window.BIRTHDAY_CONTENT = {
  recipient: "사랑하는 너에게",
  birthdayLabel: "HAPPY BIRTHDAY",
  heroMessage: "오늘, 너에게 보여주고 싶은 우리의 장면들",
  storyIntro: "평범했던 날들도 너와 함께라서 오래 기억하고 싶은 장면이 됐어.",
  birthdayDate: "2026. 00. 00",
  endingTitle: "생일 정말 축하해.",

  music: "./assets/music/our-song.mp3",

  photos: [
    {
      src: "./assets/photos/photo-01.jpg",
      date: "우리의 첫 번째 장면",
      caption: "이 사진에 담긴 이야기를 한두 문장으로 적어주세요.",
    },
    {
      src: "./assets/photos/photo-02.jpg",
      date: "함께 웃었던 날",
      caption: "그날의 장소, 기분, 기억하고 싶은 말을 적어주세요.",
    },
    {
      src: "./assets/photos/photo-03.jpg",
      date: "소중한 어느 하루",
      caption: "사진을 볼 때마다 떠오르는 마음을 적어주세요.",
    },
    {
      src: "./assets/photos/photo-04.jpg",
      date: "우리의 네 번째 장면",
      caption: "짧고 솔직한 문장이 사진을 더 특별하게 만들어줘요.",
    },
    {
      src: "./assets/photos/photo-05.jpg",
      date: "오래 기억할 순간",
      caption: "둘만 아는 작은 에피소드를 적어도 좋아요.",
    },
    {
      src: "./assets/photos/photo-06.jpg",
      date: "그리고, 지금",
      caption: "앞으로 함께 만들고 싶은 장면을 적어주세요.",
    },
  ],

  video: {
    src: "./assets/video/our-memory.mp4",
    poster: "./assets/photos/video-cover.jpg",
    intro: "사진만으로는 다 담기지 않았던 우리의 한 장면.",
  },

  letter: {
    to: "사랑하는 너에게,",
    paragraphs: [
      "함께한 시간을 돌아보면 거창한 날보다 아무렇지 않게 웃고 이야기했던 순간들이 더 선명하게 떠올라.",
      "네가 내 하루에 있어줘서 평범한 날도 특별해졌어. 지금까지 함께 만든 추억만큼, 앞으로 같이 만들 순간들도 많이 기대돼.",
      "오늘은 누구보다 행복했으면 좋겠어. 태어나줘서, 그리고 내 곁에 있어줘서 정말 고마워. 생일 진심으로 축하해.",
    ],
    from: "늘 네 편인, ○○가",
  },
};
