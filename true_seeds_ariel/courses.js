const courses = [
  {
    // 課程名稱
    name: "金魚都能懂 網頁設計入門",
    // 課程簡介
    description:
      "網頁教學如此淺顯易懂，就是金魚都能懂的網頁設計入門啦！請跟著Amos一步步的操作，讓我們踏出網頁的第一步吧。 ",
    image: "", // 上傳到IMGUR再複製連結
    introVideo: "https://www.youtube.com/embed/qRHoSWpkbBo", // youtube嶔入
    teacherName: "Amos", // 老師名字
    // 老師介紹
    teacherDescrip:
      "熱血開發者、Youtube 直播主 https://www.youtube.com/c/csscoke",
    totalTime: 85, //單位(minutes) //依照影片長度
    totalLessons: 3, // 依照lessons.js裡面該課程的lesson數量
    price: 3000, // 1000~5000 自訂
    status: "intoMarket", // 固定
    submittedDate: new Date(), // 固定
    intoMarketDate: new Date(), // 固定
    ratingAverage: 4, // 1~5 integer
    ratingCount: 4, // 1~6 integer
    studentCount: 0, // 預設為0，以保持學生人數計算正確
    CourseCategoryId: 1, // 主類別-程式
    CourseSubCategoryId: 31, // 次類別-網站前端
    UserId: 1, // 固定
    createdAt: new Date(), // 固定
    updatedAt: new Date() // 固定
  }
];

module.exports = courses;
