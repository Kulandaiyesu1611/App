let currentList = 0;

let currentWord  = 0;

let selectedContentType = "";

let selectedMode = "";

let selectedTheme = "";

let selectedList = "";

let answered = false;

let filteredItems = [];


function displayWord() {
    let currentItem =   
    filteredItems[currentWord];


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

filteredItems.length +

" words";

let progressPercent =

((currentWord + 1) /

filteredItems.length) * 100;

document.querySelector(".progress-fill").style.width =
progressPercent + "%";

if (

    currentWord == filteredItems.length - 1

) {

    document.querySelector(".next-btn").innerHTML =

    "Finish";
} 

else {

    document.querySelector(".next-btn").innerHTML = 

    "Next";
} 

if (currentWord == 0) {

    document.querySelector(".previous-btn").style.display =

    "none";
}

else {

    document.querySelector(".previous-btn").style.display =

    "inline-block";
}
if (currentItem.saved == true) {

    document.getElementById("wordBankButton").innerHTML =

    "Remove";
}

else {

    document.getElementById("wordBankButton").innerHTML =

    "MyWordBank";
}

}

function openLearnPage(listName) {

    selectedList = listName;

    for (let i = 0; i < content.length; i++) {

        if (content[i].listName == selectedList) {

            currentList = i;
    }
    }

    currentWord = 0;

    if (document.getElementById("learnCard")) {

    document.getElementById("learnCard").style.display =
    "block";
}

if (document.getElementById("assessmentCard")) {

    document.getElementById("assessmentCard").style.display =
    "block";
}

if (document.getElementById("learnCompletionMessage")) {

    document.getElementById("learnCompletionMessage").innerHTML =
    "";
}

if (document.getElementById("assessmentCompletionMessage")) {

    document.getElementById("assessmentCompletionMessage").innerHTML =
    "";
}

    if (selectedMode == "Mastered") {

        filteredItems =

        content[currentList].items.filter(item =>
            
            item.status == "mastered"
        );
    } 

    else if (selectedMode == "Revision") {

        filteredItems =

        content[currentList].items.filter(item =>

            item.status == "revision"
        );
    } 

    else if (selectedMode == "MyWordBank") {

    filteredItems =

    content[currentList].items.filter(item =>

        item.saved == true
    );
}

    else if (selectedMode == "Assessment") {

    filteredItems =

    content[currentList].items.filter(item =>

        item.status != "mastered"
    );
}

else {

    filteredItems =

    content[currentList].items;
}
    
    document.getElementById("learnTitle").innerHTML =

    selectedContentType + " → " + 
    
    selectedMode +

    " → " + 
    selectedTheme +

    " → " +
    
    selectedList;


    document.getElementById("listPage").style.display =
    "none";

    document.getElementById("modePage").style.display =
   "none";

    document.getElementById("learnPage").style.display =
    "none";

    document.getElementById("assessmentPage").style.display =
    "none";


     if (

    selectedMode == "Learn"

    ||

    selectedMode == "Mastered"

    ||

    selectedMode == "Revision"

    ||

    selectedMode == "MyWordBank"

) {

    document.getElementById("learnPage").style.display =
    "block";
}

else if (selectedMode == "Assessment") {

    document.getElementById("assessmentPage").style.display =
    "block";
}

         if (

    selectedMode == "Learn"

    ||

    selectedMode == "Mastered"

    ||

    selectedMode == "Revision"

    ||

    selectedMode == "MyWordBank"

) {

    displayWord();
}
        else if (selectedMode == "Assessment") {

            displayAssessmentQuestion();
        }
}   

function openModePage(contentType) {

    selectedContentType = contentType;

    document.getElementById("homePage").style.display =
    "none";

    document.getElementById("modePage").style.display = 
    "block";

}

function openStatisticsPage() {

    document.getElementById("modePage").style.display =
    "none";
    document.getElementById("statisticsPage").style.display =
    "block";

    let total = 0;

    let mastered = 0;

    let revision = 0;

    let saved = 0;

    for (

        i = 0;

        i < content.length;

        i++
    ) {

        total += content[i].items.length;

        for (

            let j = 0;

            j < content[i].items.length;

            j++
        ) {

            let item = content[i].items[j];

            if (item.status == "mastered") {

                mastered++;
            }

            if (item.status == "revision") {

                revision++;
            }

            if (item.saved == true) {

                saved++;
            }
        }
    }

    document.getElementById("totalWords").innerHTML =
    total;

    document.getElementById("masteredWords").innerHTML =
    mastered;

    document.getElementById("revisionWords").innerHTML =
    revision;

    document.getElementById("savedWords").innerHTML =
    saved;
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
    document.getElementById("statisticsPage").style.display =
    "none";
    document.getElementById("homePage").style.display =
    "block";
}

function goToModePage(){

    document.getElementById("themePage").style.display =
    "none";

    document.getElementById("statisticsPage").style.display =
    "none";

    document.getElementById("modePage").style.display =
    "block";
}

function goToThemePage() {

    document.getElementById("listPage").style.display = 
    "none";

    document.getElementById("statisticsPage").style.display =
    "none";

    document.getElementById("themePage").style.display =
    "block";
}

function goToListPage() {

    document.getElementById("learnPage").style.display =
    "none";

    document.getElementById("assessmentPage").style.display =
    "none";

    document.getElementById("statisticsPage").style.display =
    "none";

    document.getElementById("listPage").style.display =
    "block";
}

function openThemePage(mode) {

    selectedMode = mode;

    displayThemes();

    document.getElementById("themeTitle").innerHTML =

    selectedContentType + " → " + selectedMode;

    document.getElementById("homePage").style.display =
    "none";

    document.getElementById("modePage").style.display =
    "none";

    document.getElementById("themePage").style.display =
    "none";

    document.getElementById("listPage").style.display =
    "none";

    document.getElementById("learnPage").style.display =
    "none";

    document.getElementById("assessmentPage").style.display =
    "none";

    document.getElementById("statisticsPage").style.display =
    "none";

    document.getElementById("themePage").style.display =
    "block";

}

function displayThemes() {

    let themeContainer = 

    document.getElementById("themeContainer");

    themeContainer.innerHTML = "";

    let themes = [];

    for (let i = 0; i < content.length; i++) {

        if (

            selectedMode == "Learn"

            ||

            (

                selectedMode == "Assessment" &&

                content[i].learned == true &&

                content[i].items.some(item =>

                    item.status != "mastered"
                )
            )

            ||

            (

                selectedMode == "Mastered" &&

                content[i].items.some(item =>

                    item.status == "mastered"
                )
            )

            ||

            (

                selectedMode == "Revision" &&

                content[i].items.some(item =>

                    item.status == "revision"
                )
            )

            ||

            (

                selectedMode == "MyWordBank" &&

                content[i].items.some(item =>

                    item.saved == true
                )
            )

        ) {

            let currentTheme = content[i].theme;

            if (

                themes.includes(currentTheme) == false

            ) {

                themes.push(currentTheme);
            }
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

    document.getElementById("learnPage").style.display =
    "none";

    document.getElementById("assessmentPage").style.display =
    "none";

    document.getElementById("statisticsPage").style.display =
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

        if 
        (
            content[i].theme == selectedTheme &&

            (
                selectedMode == "Learn"

                ||

                (
    selectedMode == "Assessment" &&

    content[i].learned == true &&

    content[i].items.some(item =>

        item.status != "mastered"
    )
)

                ||

                (

                    selectedMode == "Mastered" &&

                    content[i].items.some(item=>
                    
                        item.status == "mastered"
                    )
                )

                || 

                (

                    selectedMode == "Revision" && 

                    content[i].items.some(item =>

                        item.status == "revision"
                    )
                )

                ||
                (
                selectedMode == "MyWordBank" &&

                content[i].items.some(item =>

                    item.saved == true

                )
                
                )
            )
        ) {

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

        filteredItems.length - 1

    ) {

        currentWord++;

        displayWord();
    }

    else {

        if (selectedMode == "Learn") {

            for (

                let i = 0;

                i < content.length;

                i++

            ) {

                if (

                    content[i].listName == selectedList

                    &&

                    content[i].theme == selectedTheme

                ) {

                    content[i].learned = true;
                }
            }

            saveProgress();

            goToListPage();
        }

        else if (selectedMode == "Revision") {

            for (

                let i = 0;

                i < filteredItems.length;

                i++

            ) {

                filteredItems[i].status = "review";
            }
saveProgress();

goToListPage();
        }
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



function displayAssessmentQuestion() {

    let currentItem =

    filteredItems[currentWord];

    answered = false;

    document.getElementById("questionWord").innerHTML =

    currentItem.question;

    let optionsHTML = "";

    for (let i = 0; i < currentItem.options.length; i++) {

        optionsHTML +=

        '<button class="assessment-option" onclick="checkAnswer(this, \'' +

        currentItem.options[i] +

        '\')">' +

        currentItem.options[i] +

        '</button>';
    }

    document.getElementById("optionsContainer").innerHTML =

    optionsHTML;
}


function markMastered() {

    filteredItems[currentWord].status =
    "mastered";

    console.log(

        filteredItems[currentWord]
    );
}

function markRevision() {

    filteredItems[currentWord].status =
    "revision";

    console.log(

        filteredItems[currentWord]
    );
}

function checkAnswer(button, selectedOption) {

    let allOptions =

    document.querySelectorAll(".assessment-option");

    for (let i = 0; i < allOptions.length; i++) {

        allOptions[i].classList.remove("selected-answer");
    }

    button.classList.add("selected-answer");

    let currentItem = 

    filteredItems[currentWord];

    if (

        selectedOption.trim() ==

        currentItem.correctAnswer.trim()

    ) {

        currentItem.status = "mastered";
    }

    else {

        currentItem.status = "revision";
    }

    answered = true;

    if (

        currentWord ==

        filteredItems.length -1
    ) {
        setTimeout(function() {

            alert("Assessment Submitted!");
        }, 300);
    }

    saveProgress();

    console.log(currentItem);
}


function nextAssessmentQuestion() {

    if (answered == false) {

    alert("Please select an answer.");

    return;
}

    if (

        currentWord <

        filteredItems.length -1
    ) {

        currentWord++;

        displayAssessmentQuestion();
    }

    else {

    document.getElementById("questionWord").innerHTML =

    "Assessment Complete!";

    document.getElementById("optionsContainer").innerHTML =

    '<button class="nav-button" onclick="goToListPage()">' +

    'Back to Lists' +

    '</button>';
}
}

function previousAssessmentQuestion() {

    if (currentWord > 0) {

        currentWord--;

        displayAssessmentQuestion();
    }
}

function saveProgress() {

    localStorage.setItem(

        "vocabularyApp",

        JSON.stringify(content)
    );
}

function loadProgress() {

    let savedData = 

    localStorage.getItem("vocabularyApp");

    if (savedData) {

        content = JSON.parse(savedData);
    }
}

loadProgress();


function toggleWordBank() {

    let currentItem =

    filteredItems[currentWord];

    currentItem.saved = 

    !currentItem.saved;

    saveProgress();

    displayWord();
}

function openHomePage() {


    document.getElementById("homePage").style.display =
    "block";
}
