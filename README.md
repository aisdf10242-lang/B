# B — 생일 기념 웹페이지

사진, 동영상, 편지, 배경음악을 담는 모바일 중심의 감성 영화형 페이지입니다.

## 1. 자료 넣기

- 사진 6장: `dist/assets/photos/photo-01.jpg`부터 `photo-06.jpg`
- 영상 대표 이미지: `dist/assets/photos/video-cover.jpg`
- 영상: `dist/assets/video/our-memory.mp4`
- 음악: `dist/assets/music/our-song.mp3`

파일명은 위와 똑같이 맞추면 별도의 코드 수정 없이 표시됩니다. 사진 수나 파일명을 바꾸려면 `dist/content.js`의 `photos` 목록을 수정하세요.

## 2. 글 바꾸기

`dist/content.js` 하나만 열어 아래 내용을 수정하면 됩니다.

- 받는 사람 이름과 생일 날짜
- 첫 화면 문구
- 사진별 제목과 설명
- 편지 내용과 보내는 사람 이름

## 3. 미리 보기

`dist/index.html`을 브라우저에서 열면 됩니다. 브라우저 보안 설정에 따라 로컬 파일의 음악이나 영상 재생이 제한되면, 간단한 로컬 서버에서 확인하세요.

## 4. GitHub Pages 배포

이 프로젝트를 GitHub 저장소의 `main` 브랜치에 올린 뒤, 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 지정하세요. 이후 `main`에 올릴 때마다 자동 배포됩니다.

> GitHub Pages는 공개 웹페이지입니다. 민감한 사진과 영상은 올리지 마세요.
