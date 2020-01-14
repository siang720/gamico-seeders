const lessons = [
  {
    lessonNumber: 1, // 這個單元在該門課程的排序
    title: "網頁入門第一步",
    intro: "HTML是甚麼? 關於撰寫網頁的入門觀念有哪些? 剛接觸網頁的朋友有哪些資訊查詢的管道? 又該如何開始呢?",
    contents: `<h2><span style="color: rgb(51, 51, 51);">HTML 到底是什麼？</span></h2><p>HTML 是一種<em>標記語言（markup language）</em>，而非一般熟知的程式設計語言；它會告訴瀏覽器該如何呈現你的網頁──單純簡易或是極其複雜的頁面都沒問題。HTML 包含了一系列的<strong>元素（</strong><a href="https://developer.mozilla.org/en-US/docs/Glossary/element" target="_blank" style="color: inherit;"><strong>elements</strong></a><strong>）</strong>，而元素包含了<strong>標籤（</strong><a href="https://developer.mozilla.org/en-US/docs/Glossary/tag" target="_blank" style="color: inherit;"><strong>tags</strong></a><strong>）</strong>與<strong>內容（content）</strong>，我們用標籤來控制內容的呈現樣貌，例如字體大小、斜體粗體、在文字或圖片設置超連結等。舉例來說，請看看以下這個句子：</p><pre class="ql-syntax" spellcheck="false">My cat <span class="hljs-keyword">is</span> very grumpy
 </pre><p><br></p><p>如果我們想讓這個句子自成一個段落，那麼可以在它前後分別加上段落標籤 (<code style="color: rgb(153, 0, 0); background-color: rgba(220, 220, 220, 0.5);">&lt;p&gt;</code>)，它就變成一個段落元素了：</p><pre class="ql-syntax" spellcheck="false">&lt;p&gt;My cat is very grumpy&lt;/p&gt;
 </pre><p><br></p><p><span style="background-color: rgb(51, 51, 51); color: rgb(255, 255, 255);"><span class="ql-cursor">﻿</span>HTML 元素的組成</span>讓我們來仔細的觀察一下，內容、標籤和元素的關係：</p><p><img src="https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png"></p><p>我們可以看到基本的架構：</p><ol><li><strong>起始標籤 （The opening tag）：</strong>先打角括弧，也就是大於、小於的符號「&lt; &gt;」，裡面再放入元素名稱，如上面的例子「&lt;p&gt;」。起始標籤代表這個元素從這裡開始。</li><li><strong>結束標籤 （The closing tag）：</strong>&nbsp;與起始標籤一樣，只是在元素名稱前面多了個<em>前置斜線</em>「/」。很容易理解地，內容的最後加上結束標籤，代表這個元素的尾端。在寫HTML時，很容易忘了最後的結束標籤，提醒大家要多注意唷！</li><li><strong>內容（The content）：</strong>&nbsp;這個元素的內容，以上面的例子來說，內容就是這句文字。</li><li><strong>元素（The element）：</strong>&nbsp;由起始標籤、結束標籤、內容所組成。</li></ol><p>元素還可以有「屬性（Attribute）」，請大家看看下面的例子：</p><p><img src="https://mdn.mozillademos.org/files/9345/grumpy-cat-attribute-small.png"></p><p>屬性能提供更多的資訊（當然，這個資訊是幫助我們更有效及方便編輯，不會呈現在網頁上），屬性包含了屬性名稱與值，你可以利用屬性設定這個元素的色彩、對齊方式、圖表的格線等等。</p><p>屬性的組成包含：</p><ol><li>在元素名稱和屬性之間有一個空格（如果有多個屬性，屬性之間也需要有空格）</li><li>屬性名稱後面接著等於符號「=」</li><li>屬性包在起始標籤裡面，如範例所示</li></ol><p><br></p>`,
    videoURL: "https://www.youtube.com/embed/ZavL9y4Adrk",
    image: "", // 不用填
    totalTime: 20, // 依照youtube影片長度(分鐘計算，有秒數的話則無條件進位)
    isPreview: false, // 固定
    visible: true, // 固定
    CourseId: 1, // 對照courses.js裡面的課程順序(最小是1)
    createdAt: new Date(), // 固定
    updatedAt: new Date() // 固定
  },
  {
    lessonNumber: 2, // 這個單元在該門課程的排序
    title: "用甚麼工具寫網頁?",
    intro: "今天要給各位的內容是，工程師或設計師都用甚麼軟體寫網頁的。 Brackets、ATOM、Sublime Text、Visual Studio Code 到底我該選哪一套來使用呢。答案影片中會告訴你。",
    contents: `<h2><span style="color: rgb(51, 51, 51); background-color: initial;">HTML+CSS程式編輯軟體</span></h2><h3><span style="color: rgb(51, 51, 51); background-color: initial;">新手做網站，大家都推Adobe Dreamweaver？</span></h3><p><br></p><p><span style="color: rgb(102, 102, 102);">因為「新手」、「做網站」，兩個關鍵字組合起來，要新手寫程式是困難的事，而Adobe&nbsp;Dreamweaver把網站製作整合成圖形化的編排介面，使用點選、編排的方式製作你的網站元素，再透過勾選、輸入的方式來編排CSS，對於新手入門會比直接編寫HTML及CSS程式來得簡單上許多，但畢竟是「</span><span style="color: rgb(102, 102, 102); background-color: initial;">網站</span><span style="color: rgb(102, 102, 102);">」製作，並不是簡單的Word文件編排，想做出想要的網站，還是得經過學習後網站的特性、及CSS的功用後⋯⋯才能得心應手的編排網站，但對於新手來說入門門檻較低、介面友善。</span></p><h3><br></h3><h3><span style="color: rgb(51, 51, 51); background-color: initial;"><span class="ql-cursor">﻿</span>FontPage</span></h3><p><span style="color: rgb(102, 102, 102);">跟Dreamweaver同樣是圖形化的網站設計軟體，早年Dreamweaver風行之前，幾乎是網站設計的代名詞，後來這個地位被Dreamweaver取代，使用上更簡單、但因功能無法滿足更高的需求、幾乎沒有專業者採用。</span></p><h3><br></h3><h3><span style="color: rgb(51, 51, 51); background-color: initial;">Sublime Text3</span></h3><p><br></p><p><span style="color: rgb(102, 102, 102);">這是黃裕二自己最愛的網站製作工具，是一款純文字編輯器，由於沒有圖形化介面、因此必須透過程式編輯也就是俗稱Coding的方式來編寫網站的HTML+CSS，如果不只是臨時需求，而是將來有意願成為專職網站工作者的人，建議可以從程式編輯的方式學起，這樣才能真正掌控網站前端中的一切需求，透過程式編輯也更能了解每一行HTML與CSS的特性。</span></p><h3><br></h3><h3><span style="color: rgb(51, 51, 51); background-color: initial;">VSCODE （ Visual Studio Code ）</span></h3><p><br></p><p><span style="color: rgb(102, 102, 102);">微軟所開發並提供的免費編輯器，功能強大、介面簡潔現代，推出時候很吸引裴瑞跳過去使用了一陣子，但因為習慣問題、加上那時剛推出，功能還不齊全，因此還是先回頭使用Sublime Text3，之後不排除還會再回去使用看看。</span></p><h3><br></h3><h3><span style="color: rgb(51, 51, 51); background-color: initial;">NetBeans IDE</span></h3><p><br></p><p><span style="color: rgb(102, 102, 102);">裴瑞剛開始學習純程式開發的時候的第一款編輯器，是昇陽電腦所開發的軟體開發工具，一樣功能強大，甚至只比較網頁前端程式的開發部分，我覺得可能還比現在在用的Sublime Text3還好用，印象很深刻他內建的所寫即所得功能，大幅的加快了開發的速度與效率。</span></p><p><br></p>`, // 使用quill rich editor製作，再去資料庫複製文字
    videoURL: "https://www.youtube.com/embed/0XhNnLOJO_0",
    image: "", // 不用填
    totalTime: 35, // 依照youtube影片長度(分鐘計算，有秒數的話則無條件進位)
    isPreview: false, // 固定
    visible: true, // 固定
    CourseId: 1, // 對照courses.js裡面的課程順序(最小是1)
    createdAt: new Date(), // 固定
    updatedAt: new Date() // 固定
  },
  {
    lessonNumber: 3, // 這個單元在該門課程的排序
    title: "再談HTML ",
    intro: "今天回頭來談談HTML還有哪些標籤是需要注意的，此外在網頁中HTML是就是網頁的內容資料跟結構，對於網頁來說內容資料跟你的網頁被搜尋到的機會是息息相關的，所以不得不重視，就讓Amos帶著大家一起來了解吧。",
    contents: `<h2><span style="color: rgb(51, 51, 51);">基本：標題與段落</span></h2><p>多數結構化的文字由標題及段落構成，不論你是在閱讀故事，翻閱報紙，讀教科書，翻閱雜誌，等等。</p><p><img src="https://mdn.mozillademos.org/files/12371/newspaper_small.jpg"></p><p>充滿結構性的文字內容讓閱讀經驗變得輕鬆且更加愉悅。</p><p>在HTML裡，每個段落都被包在&nbsp;<code style="color: rgb(153, 0, 0); background-color: rgba(220, 220, 220, 0.5);">&lt;p&gt;</code>&nbsp;元素中，就像：</p><pre class="ql-syntax" spellcheck="false">&lt;p&gt;I am a paragraph, oh yes I am.&lt;/p&gt;
 </pre><p>而每個標題需要被包在標題元素中：</p><pre class="ql-syntax" spellcheck="false">&lt;h1&gt;I am the title of the story.&lt;/h1&gt;
 </pre><p>在HTML裡有六種標題元素：<code style="color: rgb(153, 0, 0); background-color: rgba(220, 220, 220, 0.5);">&lt;h1&gt;</code>,&nbsp;<code style="color: rgb(153, 0, 0); background-color: rgba(220, 220, 220, 0.5);">&lt;h2&gt;</code>,&nbsp;<code style="color: rgb(153, 0, 0); background-color: rgba(220, 220, 220, 0.5);">&lt;h3&gt;</code>,&nbsp;<code style="color: rgb(153, 0, 0); background-color: rgba(220, 220, 220, 0.5);">&lt;h4&gt;</code>,&nbsp;<code style="color: rgb(153, 0, 0); background-color: rgba(220, 220, 220, 0.5);">&lt;h5&gt;</code>，跟&nbsp;<code style="color: rgb(153, 0, 0); background-color: rgba(220, 220, 220, 0.5);">&lt;h6&gt;</code>. 每個元素分別代表著在文件中的不同層級;&nbsp;<code style="background-color: rgba(220, 220, 220, 0.5);">&lt;h1&gt;</code>&nbsp;代表主標題,&nbsp;<code style="background-color: rgba(220, 220, 220, 0.5);">&lt;h2&gt;</code>&nbsp;代表副標題,&nbsp;<code style="background-color: rgba(220, 220, 220, 0.5);">&lt;h3&gt;</code>&nbsp;代表更次級的副標題, 依此類推。</p><p><span style="background-color: rgb(51, 51, 51); color: rgb(255, 255, 255);">實作架構化階層</span>舉例來說，在一個故事裡，<code style="background-color: rgba(220, 220, 220, 0.5);">&lt;h1&gt;</code>&nbsp;將用來代表整個故事的標題，<code style="background-color: rgba(220, 220, 220, 0.5);">&lt;h2&gt;</code>&nbsp;則代表每個章節的標題，而<code style="background-color: rgba(220, 220, 220, 0.5);">&lt;h3&gt;</code>&nbsp;代表每個章節中的副標題，依此類推下去。</p><p><br></p>`, // 使用quill rich editor製作，再去資料庫複製文字
    videoURL: "https://www.youtube.com/embed/88qmvi4snuo", // 使用台大開放式課程的youtube影片，改embed/後面的編碼即可
    image: "", // 不用填
    totalTime: 30, // 依照youtube影片長度(分鐘計算，有秒數的話則無條件進位)
    isPreview: false, // 固定
    visible: true, // 固定
    CourseId: 1, // 對照courses.js裡面的課程順序(最小是1)
    createdAt: new Date(), // 固定
    updatedAt: new Date() // 固定
  }
];

module.exports = lessons;
