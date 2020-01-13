const courses = [
  {
    name: "CS50", // 課程名稱
    // 課程簡介
    description:
      "CS50 is Harvard University's introduction to the intellectual enterprises of computer science and the art of programming. Take the course for free at your own pace at https://cs50.edx.org/.",
    image: "https://i.imgur.com/9JT0byg.png", // 上傳到IMGUR再複製連結
    introVideo: "https://www.youtube.com/embed/3oFAJtFE8YU", // youtube嶔入
    teacherName: "David J. Malan", // 老師名字
    // 老師介紹
    teacherDescrip:
      "David J. Malan is Gordon McKay Professor of the Practice of Computer Science in the School of Engineering and Applied Sciences and a Member of the Faculty of Education in the Graduate School of Education at Harvard University.",
    totalTime: 275, //單位(minutes) //依照影片長度
    totalLessons: 3, // 依照lessons.js裡面該課程的lesson數量
    price: 2500, // 1000~5000 自訂
    status: "intoMarket", // 固定
    submittedDate: new Date(), // 固定
    intoMarketDate: new Date(), // 固定
    ratingAverage: 4, // 1~5 integer
    ratingCount: 2, // 1~6 integer
    studentCount: 2, // 1~6 integer
    CourseCategoryId: 1, // 依照類別種子資料輸入，參考seeders裡面Category-and-SubCategory
    CourseSubCategoryId: 11, // 依照類別種子資料輸入，參考seeders裡面Category-and-SubCategory
    UserId: 1, // 固定
    createdAt: new Date(), // 固定
    updatedAt: new Date() // 固定
  }
];

module.exports = courses;
