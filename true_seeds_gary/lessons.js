const lessons = [
  {
    lessonNumber: 1, // 這個單元在該門課程的排序
    title: "單元標題",
    intro: "單元簡短介紹",
    contents: `<h1><a href="https://cs50.harvard.edu/x/2020/notes/0/#lecture-0" target="_blank" style="color: rgb(33, 37, 41);">Lecture 0</a></h1>`, // 使用quill rich editor製作，再去資料庫複製文字
    videoURL: "https://www.youtube.com/embed/jjqgP9dpD1k", // 使用台大開放式課程的youtube影片，改embed/後面的編碼即可
    image: "", // 不用填
    totalTime: 62, // 依照youtube影片長度(分鐘計算，有秒數的話則無條件進位)
    isPreview: false, // 固定
    visible: true, // 固定
    CourseId: 1, // 對照courses.js裡面的課程順序(最小是1)
    createdAt: new Date(), // 固定
    updatedAt: new Date() // 固定
  }
];

module.exports = lessons;
