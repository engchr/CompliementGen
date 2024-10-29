const compliments = [
    "You're an amazing person!",
    "You have a great sense of humor!",
    "You're incredibly thoughtful!",
    "Your creativity is inspiring!",
    "You make a difference in people's lives!",
    "You have a heart of gold!",
    "You're a ray of sunshine!",
    "You bring out the best in everyone around you.",
    "You’re always thinking of new ways to be kind.",
    "You’re one in a million!",
    "You're brave and resilient.",
    "Everyday I wonder when the next time I get to hear you again",
    "You see beauty in the simplest things.",
    "You make others feel valued and important.",
    "You have a beautiful soul.",
    "You’re a true original!",
    "You somehow always take the show.",
    "You always find a way to make me smile.",
    "You're an incredible problem-solver.",
    "You handle challenges with such grace.",
    "You bring out the best in others.",
    "You are a treasure to everyone who knows you.",
    "Your passion is so inspiring!",
    "You're incredibly thoughtful and considerate.",
    "You are wise and insightful.",
    "You make a difference with your positive attitude.",
    "You have a heart of gold.",
    "You inspire everyone around you.",
    "Your creativity is boundless!",
    "You give the best advice.",
    "You have a beautiful spirit.",
    "Your energy is magnetic!",
    "You're always so generous with your time.",
    "You bring so much happiness to those around you.",
    "You see the world in a unique way.",
    "You are a true gift to those in your life.",
    "Your confidence is inspiring!",
    "You make people feel seen and heard.",
    "You're a ray of light in a dark world.",
    "You radiate warmth and friendliness.",
    "You're always full of great ideas.",
    "You make things better just by showing up.",
    "You’re incredibly talented!",
    "You always find the silver lining.",
    "You’re a joy to be around.",
    "You're strong like a bull and kinder than an angel.",
    "You have a wonderful sense of humor.",
    "You bring out the best in people.",
    "You’re always striving to be the best you can be.",
    "Your smile is truly special.",
    "You're someone people can always rely on.",
    "You have such a kind heart.",
    "You inspire others to be their best selves.",
    "You're a bright spot in everyone's day.",
    "You are wise beyond your years.",
    "You handle everything with such grace.",
    "You are so generous with your time and energy.",
    "You’re a breath of fresh air!",
    "You have a heart full of love.",
    "You bring positivity to every room.",
    "You're thoughtful and caring.",
    "You make the world a better place.",
    "You’re wonderfully unique.",
    "You give people so much joy.",
    "You’re a beautiful person inside and out.",
    "You have such an adventurous spirit!",
    "You make everything feel like an adventure.",
    "You always know how to make people laugh.",
    "You’re truly unforgettable.",
    "You’re incredibly thoughtful.",
    "You're wonderfully authentic.",
    "You’re a one-of-a-kind.",
    "You’re endlessly supportive.",
    "Your enthusiasm is inspiring.",
    "You make people feel valued.",
    "You light up the room.",
    "You radiate positivity.",
    "You're genuinely caring.",
    "You have a sharp and curious mind.",
    "You are deeply compassionate.",
    "You're truly remarkable!",
    "You have a generous spirit.",
    "You always see the good in others.",
    "You make every day brighter.",
    "You’re an inspiration to everyone around you.",
    "You have a heart full of compassion.",
    "You're incredibly thoughtful and caring.",
    "You have a beautiful heart.",

    "You have a contagious smile.",
    "You make life so much more enjoyable.",
    "You have an incredible mind! 🤯",
    "You're the best peach.",
    "You make everyone smile no matter where you go.",
    "You are all that and a bag of chips.",
    "If I could ask you a question. It would be how did I get so lucky to have you in my life?",
    "OI OI OI BAKA.",
    "Everyday I wonder when the next time I get to hear you again",
    "Your smile lights up the room!",
    "You got hella rizz, more than any ohio gyatt.",
    "You make life more fun just by being yourself.",

];

const recentIndexes = []; // Stores the last 10 indexes used
const memorySize = 12;    // Limit for recentIndexes to track last 10 choices

function generateCompliment() {
    // Filter out recent indexes from the full range of compliments
    const availableIndexes = compliments
        .map((_, index) => index)
        .filter(index => !recentIndexes.includes(index));

    // If no available index left, reset the recentIndexes list
    if (availableIndexes.length === 0) {
        recentIndexes.shift(); // Remove oldest index to free up space
    }

    // Select a random index from the remaining choices
    const randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];

    // Add the selected index to recent history and maintain memory limit
    recentIndexes.push(randomIndex);
    if (recentIndexes.length > memorySize) {
        recentIndexes.shift();
    }

    // Display the compliment
    const complimentText = compliments[randomIndex];
    document.getElementById("compliment").innerText = compliments[randomIndex];
    const img = document.getElementById("complimentImage");

    if (complimentText === complimentText) {
        img.src = "https://static-00.iconduck.com/assets.00/peach-emoji-2044x2048-4w90ze9r.png"; // Replace with your peach image URL
        img.style.display = "block";
    } else {
        // Hide the image if the compliment does not require it
        img.style.display = "none";
    }

}