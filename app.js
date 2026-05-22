

let currentList = 0;

let currentWord  = 0;

let selectedContentType = "";

let selectedMode = "";

let selectedTheme = "";

let selectedList = "";


function displayWord() {
    let currentItem =   
    content[currentList].items[currentWord];

document.getElementById("word").innerHTML = currentItem.content;

document.getElementById("partOfSpeech").innerHTML = currentItem.partOfSpeech;

document.getElementById("wordStatus").innerHTML = currentItem.status;

document.getElementById("pronunciation").innerHTML = currentItem.pronunciation;

document.getElementById("definition").innerHTML = currentItem.meaning;

document.getElementById("relatedWords").innerHTML = currentItem.synonyms;

document.getElementById("oppositeWords").innerHTML = currentItem.antonyms;

let usageText = "<div class='usage-item'>";

for (let i = 0; i < currentItem.usage.length; i++) {

    usageText = 
     usageText + 
     currentItem.usage[i] + 
     "</div><div class='usage-item'>";
}

document.getElementById("usage").innerHTML = usageText;

document.getElementById("image").src = currentItem.image;

document.querySelector(".progress-text").innerHTML =

(currentWord + 1) +

" / " +

content[currentList].items.length +

" words";

let progressPercent =

((currentWord + 1) /

content[currentList].items.length) * 100;

document.querySelector(".progress-fill").style.width =
progressPercent + "%";

}

function openLearnPage(listName) {

    selectedList = listName;

    for (let i = 0; i < content.length; i++) {

        if (content[i].listName == selectedList) {

            currentList = i;
    }
    }

    currentWord = 0;

    displayWord();

    document.getElementById("learnTitle").innerHTML =

    selectedContentType + " → " + 
    
    selectedMode +

    " → " + 
    selectedTheme +

    " → " +
    
    selectedList;


    document.getElementById("listPage").style.display =
    "none";

    document.getElementById("learnPage").style.display =
    "block";

}

displayWord()


function openModePage(contentType) {

    selectedContentType = contentType;

    document.getElementById("homePage").style.display =
    "none";

    document.getElementById("modePage").style.display = 
    "block";

}

function goHome() {

    document.getElementById("modePage").style.display = 
    "none";
    document.getElementById("themePage").style.display = 
    "none";
    document.getElementById("listPage").style.display =
    "none";
    document.getElementById("learnPage").style.display =
    "none";
    document.getElementById("homePage").style.display =
    "block";
}

function goToModePage(){

    document.getElementById("themePage").style.display =
    "none";

    document.getElementById("modePage").style.display =
    "block";
}

function goToThemePage() {

    document.getElementById("listPage").style.display = 
    "none";

    document.getElementById("themePage").style.display =
    "block";
}

function goToListPage() {

    document.getElementById("learnPage").style.display =
    "none";

    document.getElementById("listPage").style.display =
    "block";
}

function openThemePage(mode) {

    selectedMode = mode;

    document.getElementById("themeTitle").innerHTML =

    selectedContentType + " → " + selectedMode;

    document.getElementById("modePage").style.display =
    "none";

    document.getElementById("themePage").style.display = 
    "block";

}

function displayThemes() {

    let themeContainer = 

    document.getElementById("themeContainer");
    themeContainer.innerHTML = "";
    let themes = [];
    for (let i = 0; i <content.length; i++) {

        let currentTheme = content[i].theme;
         if (themes.includes(currentTheme) == false) {

            themes.push(currentTheme);
         }
    }
    console.log(themes);

    for (let i = 0; i < themes.length; i++) {

        let currentTheme = themes[i];

        let buttonHTML =

        '<button class="nav-button" onclick="openListPage(\'' +

        currentTheme +

        '\')">' +

        currentTheme +

        '</button>';

        themeContainer.innerHTML += buttonHTML;

    }
}

displayThemes()

function openListPage(theme) {

    selectedTheme = theme;

    document.getElementById("listTitle").innerHTML = 

    selectedContentType + " → " + 
    
    selectedMode +

    " → " +
    selectedTheme;
    
    displayLists();

    document.getElementById("themePage").style.display =
    "none";
    
    document.getElementById("listPage").style.display = 
    "block";
}


function displayLists() {

    let listContainer = 

    document.getElementById("listContainer");

    listContainer.innerHTML = "";

    let lists = [];

    for (let i = 0; i < content.length; i++) {

        if (content[i].theme == selectedTheme) {

            let currentList = content[i].listName;

            if (lists.includes(currentList) == false) {

                lists.push(currentList);

            }

        }

    }

    console.log(lists);

    for (let i = 0; i < lists.length; i++) {

    let currentList = lists[i];

    let buttonHTML =

    '<button class="nav-button" onclick="openLearnPage(\'' +

    currentList +

    '\')">' +

    currentList +

    '</button>';

    listContainer.innerHTML += buttonHTML;

    }   
}  


function nextWord() {

    if (
        currentWord <
        content[currentList].items.length - 1
    ) {

        currentWord++;

        displayWord();
    } else {
        alert("Lesson Complete!");
    }
}



function previousWord() {

    if (currentWord > 0) {

        currentWord--;

        displayWord();

    }
}

function restartLesson() {

    currentWord = 0;

    displayWord();
}

function markMastered() {

    content[currentList].items[currentWord].status =
    "mastered";

    console.log(

        content[currentList].items[currentWord]
    );
}

function markRevision() {

    content[currentList].items[currentWord].status =
    "revision";

    console.log(

        content[currentList].items[currentWord]
    );
}