const courses = [
  {
    // 課程名稱
    name: "金魚都能懂 網頁設計入門",
    // 課程簡介
    description:
      "網頁教學如此淺顯易懂，就是金魚都能懂的網頁設計入門啦！請跟著Amos一步步的操作，讓我們踏出網頁的第一步吧。 ",
    image: "https://i.imgur.com/B8DwuX6.png", // 上傳到IMGUR再複製連結
    introVideo: "https://www.youtube.com/embed/qRHoSWpkbBo", // youtube嶔入
    teacherName: "Amos", // 老師名字
    // 老師介紹
    teacherDescrip:
      "熱血開發者、Youtube 直播主 https://www.youtube.com/c/csscoke",
    totalTime: 95, //單位(minutes) //依照影片長度
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
  },
  {
    // 課程名稱
    name: "Python 自學日記",
    // 課程簡介
    description:
      "用這影片作為一系列 Python 課程的介紹簡單介紹Python 的用途，以及常用的套件",
    image: "https://i.imgur.com/uECKdx2.png", // 上傳到IMGUR再複製連結
    introVideo: "https://www.youtube.com/embed/wqRlKVRUV_k", // youtube嶔入
    teacherName: "彭彭", // 老師名字
    // 老師介紹
    teacherDescrip:
      "無論是做網站、做應用程式、做前端、還是後端。彭彭都希望在這裡，和你一起在學習的道路中前進",
    totalTime: 53, //單位(minutes) //依照影片長度
    totalLessons: 3, // 依照lessons.js裡面該課程的lesson數量
    price: 2500, // 1000~5000 自訂
    status: "intoMarket", // 固定
    submittedDate: new Date(), // 固定
    intoMarketDate: new Date(), // 固定
    ratingAverage: 4, // 1~5 integer
    ratingCount: 5, // 1~6 integer
    studentCount: 0, // 預設為0，以保持學生人數計算正確
    CourseCategoryId: 1, // 主類別-程式
    CourseSubCategoryId: 41, // 次類別-網站後端
    UserId: 1, // 固定
    createdAt: new Date(), // 固定
    updatedAt: new Date() // 固定
  },
  {
    // 課程名稱
    name: "Vue.js 手牽手，一起嗑光全家桶",
    // 課程簡介
    description:
      "俗話說得好：東西亂吃跑廁所，基礎換亂程式崩，寫程式與吃東西基本是息息相關的，隨著時間與作者及開發社群的努力，Vue.js的資源越來越豐富，讓我們一道道試試口味，品嘗其中酸甜苦辣。",
    image: "https://i.imgur.com/DA61IzW.png", // 上傳到IMGUR再複製連結
    introVideo: "https://www.youtube.com/embed/yo1zTr2b2FY", // youtube嶔入
    teacherName: "Alex", // 老師名字
    // 老師介紹
    teacherDescrip:
      "大家好我是 Alex ，我在今年二月開始開設了Youtube頻道開始直播，主要分享遊戲直播與網頁技術主題",
    totalTime: 63, //單位(minutes) //依照影片長度
    totalLessons: 3, // 依照lessons.js裡面該課程的lesson數量
    price: 2000, // 1000~5000 自訂
    status: "intoMarket", // 固定
    submittedDate: new Date(), // 固定
    intoMarketDate: new Date(), // 固定
    ratingAverage: 4, // 1~5 integer
    ratingCount: 5, // 1~6 integer
    studentCount: 0, // 預設為0，以保持學生人數計算正確
    CourseCategoryId: 1, // 主類別-程式
    CourseSubCategoryId: 31, // 次類別-網站前端
    UserId: 1, // 固定
    createdAt: new Date(), // 固定
    updatedAt: new Date() // 固定
  }

];

module.exports = courses;
