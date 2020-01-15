const lessons = [

  // 所屬課程：金魚都能懂 網頁設計入門
  {
    lessonNumber: 1, // 這個單元在該門課程的排序
    title: "網頁入門第一步",
    intro: "HTML是甚麼? 關於撰寫網頁的入門觀念有哪些? 剛接觸網頁的朋友有哪些資訊查詢的管道? 又該如何開始呢?",
    contents: `<h2><span style="color: rgb(51, 51, 51);">HTML 到底是什麼？</span></h2><p>HTML 是一種<em>標記語言（markup language）</em>，而非一般熟知的程式設計語言；它會告訴瀏覽器該如何呈現你的網頁──單純簡易或是極其複雜的頁面都沒問題。HTML 包含了一系列的<strong>元素（</strong><a href="https://developer.mozilla.org/en-US/docs/Glossary/element" target="_blank" style="color: inherit;"><strong>elements</strong></a><strong>）</strong>，而元素包含了<strong>標籤（</strong><a href="https://developer.mozilla.org/en-US/docs/Glossary/tag" target="_blank" style="color: inherit;"><strong>tags</strong></a><strong>）</strong>與<strong>內容（content）</strong>，我們用標籤來控制內容的呈現樣貌，例如字體大小、斜體粗體、在文字或圖片設置超連結等。舉例來說，請看看以下這個句子：</p><pre class="ql-syntax" spellcheck="false">My cat <span class="hljs-keyword">is</span> very grumpy
 </pre><p><br></p><p>如果我們想讓這個句子自成一個段落，那麼可以在它前後分別加上段落標籤 (<code style="color: rgb(153, 0, 0); background-color: rgba(220, 220, 220, 0.5);">&lt;p&gt;</code>)，它就變成一個段落元素了：</p><pre class="ql-syntax" spellcheck="false">&lt;p&gt;My cat is very grumpy&lt;/p&gt;
 </pre><p><br></p><p><span style="background-color: rgb(51, 51, 51); color: rgb(255, 255, 255);"><span class="ql-cursor">﻿</span>HTML 元素的組成</span>讓我們來仔細的觀察一下，內容、標籤和元素的關係：</p><p><img src="https://mdn.mozillademos.org/files/9347/grumpy-cat-small.png"></p><p>我們可以看到基本的架構：</p><ol><li><strong>起始標籤 （The opening tag）：</strong>先打角括弧，也就是大於、小於的符號「&lt; &gt;」，裡面再放入元素名稱，如上面的例子「&lt;p&gt;」。起始標籤代表這個元素從這裡開始。</li><li><strong>結束標籤 （The closing tag）：</strong>&nbsp;與起始標籤一樣，只是在元素名稱前面多了個<em>前置斜線</em>「/」。很容易理解地，內容的最後加上結束標籤，代表這個元素的尾端。在寫HTML時，很容易忘了最後的結束標籤，提醒大家要多注意唷！</li><li><strong>內容（The content）：</strong>&nbsp;這個元素的內容，以上面的例子來說，內容就是這句文字。</li><li><strong>元素（The element）：</strong>&nbsp;由起始標籤、結束標籤、內容所組成。</li></ol><p>元素還可以有「屬性（Attribute）」，請大家看看下面的例子：</p><p><img src="https://mdn.mozillademos.org/files/9345/grumpy-cat-attribute-small.png"></p><p>屬性能提供更多的資訊（當然，這個資訊是幫助我們更有效及方便編輯，不會呈現在網頁上），屬性包含了屬性名稱與值，你可以利用屬性設定這個元素的色彩、對齊方式、圖表的格線等等。</p><p>屬性的組成包含：</p><ol><li>在元素名稱和屬性之間有一個空格（如果有多個屬性，屬性之間也需要有空格）</li><li>屬性名稱後面接著等於符號「=」</li><li>屬性包在起始標籤裡面，如範例所示</li></ol><p><br></p>`,
    videoURL: "https://www.youtube.com/embed/ZavL9y4Adrk",
    image: "", // 不用填
    totalTime: 19, // 依照youtube影片長度(分鐘計算，有秒數的話則無條件進位)
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
    totalTime: 34, // 依照youtube影片長度(分鐘計算，有秒數的話則無條件進位)
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
    totalTime: 42, // 依照youtube影片長度(分鐘計算，有秒數的話則無條件進位)
    isPreview: false, // 固定
    visible: true, // 固定
    CourseId: 1, // 對照courses.js裡面的課程順序(最小是1)
    createdAt: new Date(), // 固定
    updatedAt: new Date() // 固定
  },



  // 所屬課程：Vue.js 手牽手，一起嗑光全家桶
  {
    lessonNumber: 1, // 這個單元在該門課程的排序
    title: "餐具擺盤 - 萬用白瓷 VS Code 與套裝工具組",
    intro: "主要介紹所準備使用的開發環境與外掛設定包含VS Code、Vue.js devtools、Node.js",
    contents: `<h2><span style="color: rgb(48, 50, 51);">安裝套件</span></h2><p><span style="color: rgb(48, 50, 51);">VS Code除了內建市集介面外，還可到網站</span><a href="https://marketplace.visualstudio.com/vscode" target="_blank" style="color: rgb(48, 50, 51);">https://marketplace.visualstudio.com/vscode</a></p><p><span style="color: rgb(48, 50, 51);">逛逛，雖然VS Code已支援許多功能，不過還是能依自已喜好安裝其它選擇，而且VS Code不只會把設定分門別類，介面選單也相當好用，現在就讓我們來看看有哪些好用的套件吧！</span></p><p><span style="color: rgb(48, 50, 51);">首先我們先開起VS Code，接著看到最左邊的選單，選到倒數第二個選項，進入後，右上就有搜尋擴充功能的輸入框，接下來就直接從這裡找套件就行！</span></p><p><span style="color: rgb(48, 50, 51);"><img src="https://ithelp.ithome.com.tw/upload/images/20181009/20111956LxIhh6lx6n.png"></span></p><h3><span style="color: rgb(48, 50, 51);">套件名稱：npm</span></h3><h3><span style="color: rgb(48, 50, 51);">套件名稱：npm Intellisense</span></h3><p><span style="color: rgb(48, 50, 51);">要使用vue，這兩個套件是必裝的，我們需要它來裝vue cli(明天會用到它)。</span></p><h3><span style="color: rgb(48, 50, 51);">套件名稱：AutoFileName</span></h3><p><span style="color: rgb(48, 50, 51);">這是一套在你輸入檔名時，自動帶入的套件，讓寫程時更有效率！</span></p><h3><span style="color: rgb(48, 50, 51);">套件名稱：Beautify</span></h3><p><span style="color: rgb(48, 50, 51);">自動幫你排版的套件，超方便的。</span></p><h3><span style="color: rgb(48, 50, 51);">套件名稱：Chinese (Traditional) Language Pack for Visual Studio Code</span></h3><p><span style="color: rgb(48, 50, 51);">中文(繁體)語言套件，讓VS Code提供本地化的使用者界面。</span></p><h3><span style="color: rgb(48, 50, 51);">套件名稱：Code Spell Checker</span></h3><p><span style="color: rgb(48, 50, 51);">好用的拼字除錯軟體，再也不用擔心因為打錯字，而浪費許多時間找錯誤了！！</span></p><h3><span style="color: rgb(48, 50, 51);">套件名稱：Live Server</span></h3><p><span style="color: rgb(48, 50, 51);">可以在存檔後即時更新瀏覽器內容，不用一直按重整，很棒吧。</span></p><h3><span style="color: rgb(48, 50, 51);">套件名稱：One Dark Pro</span></h3><p><span style="color: rgb(48, 50, 51);">設計人難免是個外貌協會，不改個好看的佈景主題怎行？One Dark Pro就是一個許多人使用評價相當好的佈景，當然喜好是很主觀的，你也可以找找其它的來使用。</span></p><h3><span style="color: rgb(48, 50, 51);">套件名稱：Path Intellisense</span></h3><p><span style="color: rgb(48, 50, 51);">你在下連結位置，有時會不小心連錯層嗎？這個套件就方便了！它會直接跳個下拉選單讓你選，有效避免因連錯位置而發生的錯誤！目前為5顆星！評價相當好。</span></p><h3><span style="color: rgb(48, 50, 51);">套件名稱：Vetur</span></h3><p><span style="color: rgb(48, 50, 51);">要寫vue的話，這套件必裝！它包含語法上的視覺化、自動完成等等…功能，提高你寫vue的效率！</span></p><h3><span style="color: rgb(48, 50, 51);">套件名稱：vscode-icons</span></h3><p><span style="color: rgb(48, 50, 51);">vscode的一大賣點就是有icon圖示視覺化你的檔案，想要有更多icon選擇嗎？那就下載它吧。</span></p><p><span style="color: rgb(48, 50, 51);">網路上還有許多推薦的套件，有興趣還可以多看看。</span></p><p><span style="color: rgb(48, 50, 51);">套件安裝完了，那明天就要開始使用vue了！</span></p><p><br></p>`,
    videoURL: "https://www.youtube.com/embed/HMAGqMkIUfY",
    image: "", // 不用填
    totalTime: 10, // 依照youtube影片長度(分鐘計算，有秒數的話則無條件進位)
    isPreview: false, // 固定
    visible: true, // 固定
    CourseId: 2, // 對照courses.js裡面的課程順序(最小是1)
    createdAt: new Date(), // 固定
    updatedAt: new Date() // 固定
  },
  {
    lessonNumber: 2, // 這個單元在該門課程的排序
    title: "開胃餐點 - 中式資料綁定佐無毒 jQuery 畫面處理",
    intro: "主要介紹 Vue.js 資料綁定觀念]與以往 jQuery 畫面處理的差異與相似之處",
    contents: `<h1><span style="color: rgb(48, 50, 51);">Vue與 jQuery</span></h1><p><span style="color: rgb(48, 50, 51);">vue是以資料來進行操作，jQ則是以DOM來操作。</span></p><p><span style="color: rgb(48, 50, 51);">有人說兩者無法比較，不過要比也是可以，至於要選擇哪個，可以視專案的大小、生命週期來決定。</span></p><ul><li><span style="color: rgb(48, 50, 51);">如果專案週期短、畫面要超炫砲，還是用jQ會比較方便，但就會容易產生邏輯組織分散、很糾結又扭曲的麵條式程式碼</span></li><li><span style="color: rgb(48, 50, 51);">vue的話會較好維護、適用在資料呈現</span></li></ul><p><span style="color: rgb(48, 50, 51);">可以參考：</span></p><p><a href="https://yami.io/jquery-to-vuejs/" target="_blank" style="color: rgb(48, 50, 51);">脫離資料分散的問題，從 jQuery 換到 Vue.js</a></p><p><a href="https://teed7334-restore.gitbooks.io/-jquery-vue-js-rx-js/content/" target="_blank" style="color: rgb(48, 50, 51);">給jQuery愛好者的Vue.js 2教學手冊</a></p><p><a href="https://www.itread01.com/articles/1495690694.html" target="_blank" style="color: rgb(48, 50, 51);">jquery和vue對比</a></p><p><a href="https://tw.saowen.com/a/c9f8f95e9f7ae14ebbbaee8ef4b33d93b4702ac70c7b610d637723eeb749f823" target="_blank" style="color: rgb(48, 50, 51);">vue與jq的比較。</a></p><h1><span style="color: rgb(48, 50, 51);">一小堆指令們...</span></h1><h2><span style="color: rgb(48, 50, 51);">onclick</span></h2><p><span style="color: rgb(48, 50, 51);">我們先到官網來瞧瞧那些常用的</span><a href="https://cn.vuejs.org/v2/guide/events.html" target="_blank" style="color: rgb(48, 50, 51);">事件處理</a><span style="color: rgb(48, 50, 51);">指令們，第一個看到就是使用頻率超高的</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">onclick="something"</code><span style="color: rgb(48, 50, 51);">，而在vue中要改成</span></p><pre class="ql-syntax" spellcheck="false">v-on:click=<span class="hljs-string">"something"</span>
 </pre><p><span style="color: rgb(48, 50, 51);">以前都只會用jQuery在.js檔裡面寫</span></p><pre class="ql-syntax" spellcheck="false">$(<span class="hljs-string">'.className'</span>).click(<span class="hljs-function"><span class="hljs-keyword">function</span>()</span>{ ... })
 </pre><p><span style="color: rgb(48, 50, 51);">連on都不會用，更別說再html裡onclick了，趁這次找了.on('click')跟.click()的差別：</span></p><p><span style="color: rgb(48, 50, 51);">關鍵字是較少記憶體、動態(快來不及了先給關鍵字)</span></p><p><a href="https://stackoverflow.com/questions/9122078/difference-between-onclick-vs-click" target="_blank" style="color: rgb(48, 50, 51);">Stack overflow:Difference between .on('click') vs .click()</a></p><p><a href="http://skaih.logdown.com/posts/712464-jquery-click-on-the-where-different" target="_blank" style="color: rgb(48, 50, 51);">JQuery事件處理 .click 與 .on()到底哪裡不同</a></p><h2><span style="color: rgb(48, 50, 51);">用on調用自定義method</span></h2><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">new</span> Vue(){
     其他屬性...
     methods:{
         <span class="hljs-attr">methodName</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>()</span>{ ... }
     }
 }
 </pre><p><span style="color: rgb(48, 50, 51);">html寫成：</span></p><pre class="ql-syntax" spellcheck="false">&lt;a href="#" v-on:click="methodName"&gt;click me&lt;/a&gt;
 </pre><h2><span style="color: rgb(48, 50, 51);">preventDefault()</span></h2><p><span style="color: rgb(48, 50, 51);">官網點選</span><a href="https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6" target="_blank" style="color: rgb(48, 50, 51);">事件修飾符</a><span style="color: rgb(48, 50, 51);">。</span></p><p>阻止預設事件發生，例如click me，點它會造成置頂，我們可以在.js檔中用preventDefault()阻止。在vue裡面更方便，寫成：</p><pre class="ql-syntax" spellcheck="false">&lt;a href="#" v-on:click.prevent="methodName"&gt;click me&lt;/a&gt;
 </pre><p><span style="color: rgb(48, 50, 51);">這時不置頂，且methodsName裡面的程式碼照樣運作</span></p><h2><span style="color: rgb(48, 50, 51);">其他指令</span></h2><p><span style="color: rgb(48, 50, 51);">官網搜尋</span><a href="https://cn.vuejs.org/v2/api/#%E6%8C%87%E4%BB%A4" target="_blank" style="color: rgb(48, 50, 51);">API 指令</a><span style="color: rgb(48, 50, 51);">。</span></p><p>會看到常用的if、for...還有v-on縮寫的寫法都在這個頁面裡面，多看多多益善。</p><p>今天實在時間沒抓好，沒有寫出很多實例又有點偷懶一直丟官方連結，明日改進～小弟尚有要事，先跪安了</p><p><br></p>`,
    videoURL: "https://www.youtube.com/embed/VW4RZSKqIEE",
    image: "", // 不用填
    totalTime: 16, // 依照youtube影片長度(分鐘計算，有秒數的話則無條件進位)
    isPreview: false, // 固定
    visible: true, // 固定
    CourseId: 2, // 對照courses.js裡面的課程順序(最小是1)
    createdAt: new Date(), // 固定
    updatedAt: new Date() // 固定
  },
  {
    lessonNumber: 3, // 這個單元在該門課程的排序
    title: "開胃餐點 - 古早味事件燉畫面綁定",
    intro: "主要介紹 Vue.js 的事件綁定、v-on、v-if、computed、與methods",
    contents: `<p><span style="color: rgb(48, 50, 51);">目前為止介紹了下面幾種事件監聽的時機：</span></p><ul><li><span style="color: rgb(48, 50, 51);">元素上使用&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">v-on</code><span style="color: rgb(48, 50, 51);">&nbsp;監聽原生事件</span></li><li>父組件設定&nbsp;<code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">v-on</code><span style="color: rgb(48, 50, 51);">&nbsp;設定所需要監聽的事件，子組件用&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">$emit</code><span style="color: rgb(48, 50, 51);">&nbsp;觸發事件</span></li><li>在 Vue 實體上設定生命週期鉤子監聽各個鉤子事件</li></ul><p><span style="color: rgb(48, 50, 51);">上面的方式都是在組件被定義時就要做的設定，也就是靜態的定義方式，但如果要在執行時去動態增減事件的監聽，這時就需要用到&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">$on</code><span style="color: rgb(48, 50, 51);">,&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">$once</code><span style="color: rgb(48, 50, 51);">&nbsp;及&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">$off</code><span style="color: rgb(48, 50, 51);">&nbsp;這些 JS 函式來做設定。</span></p><h2><span style="color: rgb(48, 50, 51);">靜態事件監聽</span></h2><p><span style="color: rgb(48, 50, 51);">開始說明動態方式之前，先來複習一下靜態的方式。</span></p><h3><span style="color: rgb(48, 50, 51);">元素上使用&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">v-on</code><span style="color: rgb(48, 50, 51);">&nbsp;監聽原生事件</span></h3><pre class="ql-syntax" spellcheck="false">&lt;div id=<span class="hljs-string">"app"</span>&gt;
     <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"alert('native')"</span>&gt;</span>native<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-keyword">var</span> vm = <span class="hljs-keyword">new</span> Vue({
   <span class="hljs-attr">el</span>: <span class="hljs-string">'#app'</span>
 });
 </pre><p><span style="color: rgb(48, 50, 51);">簡單使用&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">v-on</code><span style="color: rgb(48, 50, 51);">&nbsp;註冊原生事件，就可以設定事件的監聽。</span></p><h3><span style="color: rgb(48, 50, 51);">父組件設定&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">v-on</code><span style="color: rgb(48, 50, 51);">&nbsp;設定所需要監聽的事件，子組件用&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">$emit</code><span style="color: rgb(48, 50, 51);">&nbsp;觸發事件</span></h3><p><span style="color: rgb(48, 50, 51);">如果要使用自定義事件，在子組件中設定&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">$emit</code><span style="color: rgb(48, 50, 51);">&nbsp;發送信號表示欲叫用何種事件，這時父組件如果有使用&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">v-on</code><span style="color: rgb(48, 50, 51);">&nbsp;註冊該事件，就會觸發事件。</span></p><pre class="ql-syntax" spellcheck="false">&lt;div id=<span class="hljs-string">"app"</span>&gt;
   <span class="hljs-tag">&lt;<span class="hljs-name">my-button</span> @<span class="hljs-attr">component-click</span>=<span class="hljs-string">"alert('component')"</span>&gt;</span>component<span class="hljs-tag">&lt;/<span class="hljs-name">my-button</span>&gt;</span>
 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
 Vue.component(<span class="hljs-string">'my-button'</span>, {
   <span class="hljs-attr">template</span>: <span class="hljs-string">`& lt; button @click="$emit('component-click')" & gt;& lt; slot & gt;& lt; /slot&gt;&lt;/button & gt; `</span>
 });
 
 <span class="hljs-keyword">var</span> vm = <span class="hljs-keyword">new</span> Vue({
   <span class="hljs-attr">el</span>: <span class="hljs-string">'#app'</span>
 });
 </pre><p><span style="color: rgb(48, 50, 51);">在&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">&lt;my-button&gt;</code><span style="color: rgb(48, 50, 51);">&nbsp;按下按鈕後，送出的&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">component-click</code><span style="color: rgb(48, 50, 51);">&nbsp;信號會被&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">v-on</code><span style="color: rgb(48, 50, 51);">&nbsp;所註冊的&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">component-click</code><span style="color: rgb(48, 50, 51);">&nbsp;接收並觸發事件。</span></p><h3><span style="color: rgb(48, 50, 51);">在 Vue 實體上設定生命週期鉤子監聽各個鉤子事件</span></h3><p><span style="color: rgb(48, 50, 51);">鉤子事件的觸發可以在 Vue 實體上設定各個&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">hook</code><span style="color: rgb(48, 50, 51);">&nbsp;的函式。</span></p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> vm = <span class="hljs-keyword">new</span> Vue({
   <span class="hljs-attr">el</span>: <span class="hljs-string">'#app'</span>,
   <span class="hljs-attr">mounted</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>() </span>{
     alert(<span class="hljs-string">'mounted'</span>);
   }
 });
 </pre><p><span style="color: rgb(48, 50, 51);">設定&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">mounted</code><span style="color: rgb(48, 50, 51);">&nbsp;函式，就可以監聽&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">mounted</code><span style="color: rgb(48, 50, 51);">&nbsp;鉤子。</span></p><h2><span style="color: rgb(48, 50, 51);">動態註冊事件監聽器</span></h2><p><span style="color: rgb(48, 50, 51);">在整個專案都是使用 Vue.js 構築時，使用靜態註冊事件監聽器是足夠的，但如果專案中 Vue.js 只佔了一部分，要配合其他框架或工具設定監聽事件的話，這時就要靠動態註冊事件。</span></p><p><span style="color: rgb(48, 50, 51);">下面的例子模擬在其他非 Vue 元素建立後，要去註冊對應的事件使 Vue 可以觸發。</span></p><pre class="ql-syntax" spellcheck="false">&lt;div id=<span class="hljs-string">"app"</span>&gt;
   <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"vue-app"</span>&gt;</span>
     <span class="hljs-tag">&lt;<span class="hljs-name">button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"$emit('on')"</span>&gt;</span>Emit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
   <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"other-app"</span>&gt;</span>
     <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">"otherAppClick()"</span>&gt;</span>Add Event<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
     <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">"otherAppClick('once')"</span>&gt;</span>Add Event ( once )<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
     <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">"otherAppClick('off')"</span>&gt;</span>Off All Event<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
   <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-keyword">let</span> echoFunc = <span class="hljs-function">(<span class="hljs-params">echoStr</span>) =&gt;</span> <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {alert(echoStr)};
 
 <span class="hljs-keyword">var</span> vm = <span class="hljs-keyword">new</span> Vue({
   <span class="hljs-attr">el</span>: <span class="hljs-string">'#vue-app'</span>
 });
 
 <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">otherAppClick</span>(<span class="hljs-params">type</span>) </span>{
   <span class="hljs-keyword">if</span> (type === <span class="hljs-string">'once'</span>) {
     vm.$once(<span class="hljs-string">'on'</span>, echoFunc(<span class="hljs-string">'once'</span>));
   } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (type === <span class="hljs-string">'off'</span>) {
     vm.$off(<span class="hljs-string">'on'</span>);
   } <span class="hljs-keyword">else</span> {
     vm.$on(<span class="hljs-string">'on'</span>, echoFunc(<span class="hljs-string">'on'</span>));
   }
 }
 </pre><ul><li><span style="color: rgb(48, 50, 51);">在 Vue 實體中的按鈕點擊事件觸發&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">on</code><span style="color: rgb(48, 50, 51);">&nbsp;事件</span></li><li>在 Vue 實體外按鈕點擊中模擬&nbsp;<code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">$on</code><span style="color: rgb(48, 50, 51);">,&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">$once</code><span style="color: rgb(48, 50, 51);">&nbsp;及&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">$off</code><span style="color: rgb(48, 50, 51);">&nbsp;方法</span></li></ul><p><span style="color: rgb(48, 50, 51);">如果沒有使用函式註冊事件的話，在 Vue 實體以外的事件是不能被&nbsp;</span><code style="color: rgb(48, 50, 51); background-color: rgb(249, 242, 244);">$emit</code><span style="color: rgb(48, 50, 51);">&nbsp;所觸發的。</span></p><p><br></p>`,
  videoURL: "https://www.youtube.com/embed/68ItsYcqjHI",
    image: "", // 不用填
      totalTime: 37, // 依照youtube影片長度(分鐘計算，有秒數的話則無條件進位)
        isPreview: false, // 固定
          visible: true, // 固定
            CourseId: 2, // 對照courses.js裡面的課程順序(最小是1)
              createdAt: new Date(), // 固定
                updatedAt: new Date() // 固定
  },
];

module.exports = lessons;
