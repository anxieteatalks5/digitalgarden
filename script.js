//Survey var
const surveyQuestions = [
{
    question: "Placeholder Question",
    options : [
    "Yes",
    "Yes",
    "No",
    "No"
    ]
},
{
    question: "How familiar are you with social anxiety disorder (SAD)?",
    options: [
    "Very familiar",
    "Somewhat familiar",
    "Not very familiar",
    "Not at all familiar"
    ]
},
{
    question: "Do you believe social anxiety disorder is a real medical condition?",
    options: [
    "Yes, absolutely",
    "Yes, but I’m not sure how severe it is",
    "Not really",
    "No"
    ]
},
{
    question: "Where have you learned most about social anxiety disorder?",
    options: [
    "Personal experience",
    "Social media campaigns",
    "Friends/family",
    "Media (TV, books, movies)"
    ]
},
{
    question: "How often does social anxiety prevent you from participating in social events?",
    options: [
    "Very often",
    "Sometimes",
    "Rarely",
    "Never"
    ]
},
{
    question: "What situation makes you the most nervous?",
    options: [
    "Eating in public",
    "Giving a speech",
    "Meeting new people",
    "Entering a room where people are already seated"
    ]
},
{
    question: "How do you feel about being the center of attention in a social situation?",
    options: [
    "I avoid it at all costs",
    "I try to manage it",
    "I can handle it if necessary",
    "I enjoy it"
    ]
},
{
    question: "On a scale of 1 to 10, how much do you worry about being judged by others?",
    options: [
    "1–3: Not much at all",
    "4–6: A moderate amount",
    "7–9: A lot",
    "10: Extremely"
    ]
},
{
    question: "Does social media increase or decrease your social anxiety?",
    options: [
    "It decreases my anxiety by helping me connect.",
    "It’s neutral—I don’t feel much different.",
    "It increases my anxiety due to fear of judgment.",
    "It depends on the situation or my mood."
    ]
},
{
    question: "What’s your go-to coping strategy when you feel socially anxious?",
    options: [
    "Deep breathing or mindfulness",
    "Avoiding the situation",
    "Talking to someone I trust",
    "I don’t have a strategy yet"
    ]
},
{
    question: "What management strategy works best for your social anxiety?",
    options: [
    "Breathing techniques",
    "Cognitive Behavioral Therapy (CBT)",
    "Journaling",
    "Medication (e.g., beta blockers)"
    ]
},
{
    question: "How do you usually respond to a socially anxious situation?",
    options: [
    "Avoid it entirely",
    "Face it gradually",
    "Seek support from someone I trust",
    "Try a mental distraction (e.g., counting, reciting)"
    ]
},
{
    question: "What item would you stock in your anxiety toolkit?",
    options: [
    "Fidget toy",
    "Stress ball",
    "Essential oils",
    "Sweet or sour candy"
    ]
},
{
    question: "What type of support is most helpful for you?",
    options: [
    "Talking to a friend",
    "Therapy or counseling",
    "Online support groups",
    "Self-help resources"
    ]
},
{
    question: "What emotion do you associate most with social anxiety?",
    options: [
    "Fear",
    "Shame",
    "Embarrassment",
    "Other (please specify)"
    ]
},
{
    question: "How do you feel when you have to speak in front of a group?",
    options: [
    "I’m fine, no worries.",
    "A bit nervous, but I manage.",
    "Very anxious, I avoid it if possible.",
    "I freeze up completely."
    ]
},
{
    question: "What role does self-esteem play in your social anxiety?",
    options: [
    "It has a major impact", 
    "It has some impact", 
    "It has little impact", 
    "It has no impact"
    ]
},
{
    question: "How do you prepare for social events to manage your anxiety?",
    options: [
    "I don't prepare", 
    "I mentally rehearse", 
    "I talk to someone beforehand", 
    "I avoid events altogether"
    ]
},
{
    question: "How often do you seek professional help for your social anxiety?",
    options: [
    "Regularly", 
    "Occasionally", 
    "Rarely", 
    "Never"
    ]
},
{
    question: "What would you like to learn more about regarding social anxiety?",
    options: [
    "Coping strategies", 
    "Treatment options", 
    "Understanding symptoms", 
    "Support resources"
    ]
},
{
    question: "How do you feel about attending social events?",
    options: [
    "I enjoy them.",
    "I feel neutral about them.",
    "I feel nervous but try to attend.",
    "I avoid them altogether."
    ]
}
];
let surveyCompleted=0;
let survey=0;
let questionText = surveyQuestions[survey].question;
let option1 = surveyQuestions[survey].options[0];
let option2 = surveyQuestions[survey].options[1];
let option3 = surveyQuestions[survey].options[2];
let option4 = surveyQuestions[survey].options[3];
//Flower var
let flowerType = ["orangeFlower.jpg", "blueFlower.jpg", "magentaFlower.jpg", "pinkFlower.jpg", "purpleFlower.jpg", "redFlower.jpg"];
let stages = ["seedling.jpg", "sproutOne.jpg", "sproutTwo.jpg", "flower.jpg"]; 
let canvas = document.getElementById("gardenCanvas");
let ctx = canvas.getContext('2d');
let flowerText = "";
let flowerPath = "flowers/";
let myFlower = "";
// Funcs and Flower Change
// Get flower type
document.getElementById("orange").addEventListener("click", function() {
    flowerText = this.innerText;
    console.log(flowerText);
});
document.getElementById("magenta").addEventListener("click", function() {
    flowerText = this.innerText;
});
document.getElementById("blue").addEventListener("click", function() {
    flowerText = this.innerText;
});
document.getElementById("red").addEventListener("click", function() {
    flowerText = this.innerText;
});
document.getElementById("pink").addEventListener("click", function() {
    flowerText = this.innerText;
});

// draw flowers
function stageUp(){
    
}
function path(){
    
    return flowerPath;
}
function drawFlower(){
    // Stage num
    let x=0;
    if (surveyCompleted <=5){
        x=0;
    } else if  (surveyCompleted <=10){
        x=1;
    } else if (surveyCompleted <=15){
        x=2;
    } else if (surveyCompleted <=20){
        x=3;
    }
    flowerText == stage[x];
    if (flowerText == "flower"){
        flowerPath += flowerText;
    } else {
        flowerPath += flowerText;
    }
    const img = new Image();
    img.src = path();
    img.onload = function () {
    ctx.drawImage(img, 50, 50);
    };
}
// Function for next form
function nextForm(){
    surveyCompleted++;
    survey++;
    questionText = surveyQuestions[survey].question;
    option1 = surveyQuestions[survey].options[0];
    option2 = surveyQuestions[survey].options[1];
    option3 = surveyQuestions[survey].options[2];
    option4 = surveyQuestions[survey].options[3];
}
function setSurvey(){
    document.getElementById("question-text").innerText = questionText;
    document.getElementById("option1").innerText = option1;
    document.getElementById("option2").innerText = option2;
    document.getElementById("option3").innerText = option3;
    document.getElementById("option4").innerText = option4;
}

function clickDis(){
    nextForm();
    setSurvey();
    document.getElementById('correct').style.display = "none";
    document.getElementById('next').style.display = "none";
    document.getElementById("question-text-1").style.display = "none";
    document.getElementById("question-text-2").style.display = "none";
    document.getElementById("option1").style.display = "block";
    document.getElementById("option2").style.display = "block";
    document.getElementById("option3").style.display = "block";
    document.getElementById("option4").style.display = "block";
    document.getElementById("choose-container").style.display = "none";
    drawFlower();
}




