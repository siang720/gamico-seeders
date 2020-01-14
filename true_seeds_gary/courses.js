const courses = [
  {
    name: "正是時候讀莊子", // 課程名稱
    // 課程簡介
    description:
      "他這麼活過他的一生，留下一本書，《莊子》。這本書影響了陶淵明的一生。影響了李太白的一生。影響了白居易的一生。影響了蘇東坡的一生。唐玄宗下詔稱此書為南華真經，尊莊子為南華真人。清初名評論家金聖歎，評定這...",
    image: "https://i.imgur.com/DUCjw5k.jpg", // 上傳到IMGUR再複製連結
    introVideo: "https://www.youtube.com/embed/s-HHnyV0VG4", // youtube嶔入
    teacherName: "蔡璧名", // 老師名字
    // 老師介紹
    teacherDescrip:
      "大校、院優良教師，更榮獲臺大教學傑出獎，並於臺大開放式課程OCW推出「正是時候讀莊子」，累積點閱人次逾百萬；在國際線上教學平臺Coursera推出的「莊子——姿勢、意識與感情」線上課程，高踞「漢語學生學習的熱門課程」排行榜之首；二○一八年十月推出「莊子——人情」，亦居哲學類「頂級評分課程」排行首位。",
    totalTime: 180, //單位(minutes) //依照影片長度
    totalLessons: 3, // 依照lessons.js裡面該課程的lesson數量
    price: 800, // 1000~5000 自訂
    status: "intoMarket", // 固定
    submittedDate: new Date(), // 固定
    intoMarketDate: new Date(), // 固定
    ratingAverage: 4, // 1~5 integer
    ratingCount: 5, // 1~6 integer
    studentCount: 0, // 預設為0，以保持學生人數計算正確
    CourseCategoryId: 41, // 依照類別種子資料輸入，參考seeders裡面Category-and-SubCategory
    CourseSubCategoryId: 231, // 依照類別種子資料輸入，參考seeders裡面Category-and-SubCategory
    UserId: 1, // 固定
    createdAt: new Date(), // 固定
    updatedAt: new Date() // 固定
  }
];

module.exports = courses;
