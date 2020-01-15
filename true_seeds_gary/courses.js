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
  },
  {
    name: "CS50's Introduction to Game Development", // 課程名稱
    // 課程簡介
    description:
      "This course picks up where Harvard College’s CS50 leaves off, focusing on the development of 2D interactive games. Students explore the design of such childhood games as Super Mario Bros., Legend of Zelda, and Pokémon ......",
    image: "https://i.imgur.com/LeR53sp.png", // 上傳到IMGUR再複製連結
    introVideo: "https://www.youtube.com/embed/GfwpRU0cT10", // youtube嶔入
    teacherName: "David J. Malan", // 老師名字
    // 老師介紹
    teacherDescrip:
      "David J. Malan (/meɪlɛn/) is Gordon McKay Professor of the Practice of Computer Science at Harvard University.[1][2] Malan is best known for teaching Computer Science 50 (known as CS50)[3][4][5][6] which is the largest course at Harvard and the ....",
    totalTime: 866, //單位(minutes) //依照影片長度
    totalLessons: 8, // 依照lessons.js裡面該課程的lesson數量
    price: 1200, // 1000~5000 自訂
    status: "intoMarket", // 固定
    submittedDate: new Date(), // 固定
    intoMarketDate: new Date(), // 固定
    ratingAverage: 5, // 1~5 integer
    ratingCount: 5, // 1~6 integer
    studentCount: 0, // 預設為0，以保持學生人數計算正確
    CourseCategoryId: 1, // 依照類別種子資料輸入，參考seeders裡面Category-and-SubCategory
    CourseSubCategoryId: 61, // 依照類別種子資料輸入，參考seeders裡面Category-and-SubCategory
    UserId: 1, // 固定
    createdAt: new Date(), // 固定
    updatedAt: new Date() // 固定
  },
  {
    name: "CS50's Mobile App Development with React Native", // 課程名稱
    // 課程簡介
    description:
      "This course picks up where Harvard College’s CS50 leaves off, transitioning from web development to mobile app development with React Native, a popular open-source framework maintained by Facebook that enables cross-platform native apps using Javas..",
    image: "hhttps://i.imgur.com/7gvksse.png", // 上傳到IMGUR再複製連結
    introVideo: "https://www.youtube.com/embed/_P7wHN_kOv4", // youtube嶔入
    teacherName: "David J. Malan", // 老師名字
    // 老師介紹
    teacherDescrip:
      "David J. Malan (/meɪlɛn/) is Gordon McKay Professor of the Practice of Computer Science at Harvard University.[1][2] Malan is best known for teaching Computer Science 50 (known as CS50)[3][4][5][6] which is the largest course at Harvard and the ....",
    totalTime: 586, //單位(minutes) //依照影片長度
    totalLessons: 6, // 依照lessons.js裡面該課程的lesson數量
    price: 1000, // 1000~5000 自訂
    status: "intoMarket", // 固定
    submittedDate: new Date(), // 固定
    intoMarketDate: new Date(), // 固定
    ratingAverage: 5, // 1~5 integer
    ratingCount: 5, // 1~6 integer
    studentCount: 0, // 預設為0，以保持學生人數計算正確
    CourseCategoryId: 1, // 依照類別種子資料輸入，參考seeders裡面Category-and-SubCategory
    CourseSubCategoryId: 51, // 依照類別種子資料輸入，參考seeders裡面Category-and-SubCategory
    UserId: 1, // 固定
    createdAt: new Date(), // 固定
    updatedAt: new Date() // 固定
  }
];

module.exports = courses;
