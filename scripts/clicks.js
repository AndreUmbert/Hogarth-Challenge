const learnMore = document.getElementById("learnMore");
const background = document.getElementById("background");
const header = document.getElementById("header");
const middleSection = document.getElementById("middleSection");
const isiSection = document.getElementById("isiSection");
const recommendationSection = document.getElementById("recommendationSection");
const prescribing = document.getElementById("prescribing");
const isiHyperLink = document.getElementById("isiHyperLink");


//ShowRecommendations
function showRecommendations(params) {
    console.log('clickTag1 OK');
    background.style.display = "none";
    header.style.display = "none";
    middleSection.style.display = "none";
    isiSection.style.display = "none";
    recommendationSection.style.display = "block";
}

//Recommendations Link
learnMore.addEventListener('click', () => {
    showRecommendations();
});

//Prescribing Link 
prescribing.addEventListener("click", () => {
    console.log('clickTag2 OK');
});

//Legales Link 
isiHyperLink.addEventListener("click", () => {
    console.log('clickTag3 OK');
})