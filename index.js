let affirmations = {
    1 : "Your flaws are adorable. If you're into that.",
    2 : "You can’t save yourself. But you tried.",
    3 : "This too shall pass. And then some other bullshit will come and take its place. It never fucking ends.",
    4 : "It's okay to not be okay. Everything is fucked.",
    5 : "Everything is going to be okay. You're just going to have to change your definition of ‘okay’.",
    6 : "Things didn’t work out for a reason. The reason is you make terrible decisions.",
    7 : "Just be yourself. But not your real self. No one wants to see that shit",
    8 : "Don’t let anyone tell you what you can’t do. That’s what you have insecurities for.",
    9 : "Stop romanticizing the past. You’ve always been miserable",
    10 : "Be kind to yourself, asshole",
    11 : "The only person you can truly rely on is you. What a fucking nightmare",
    11 : "You’re doing the best that you can. Which is pretty sad",
    12 : "It’s okay to have feelings. But do you need to have so many?",
    13 : "Stop overthinking. You are the only one who cares.",
    14 : "Unfollow your dreams",
    15 : "You can do it! But you probably won’t",
    16 : "You are not alone; everyone else is sick of your shit too.",
    17 : "You are exactly where you’re supposed to be because you make terrible decisions",
    18 : "Everything will be okay, just not for you. Sorry",
    19 : "Have a panic attack. You’ve earned it.",
    20 : "Being you is the hardest job you’ll ever do.",
    21 : "Some days, not dying is a win.",
    22 : "You’re flawed. And original. Sometimes that matters.",
    23 : "Your patience is thin. That’s progress.",
    24 : "Finish the race—whatever race that was.",
    25 : "The grass is greener because it's dying too.",
    26 : "Some things never improve. You’re one of them.",
    27 : "You’ll get there. Probably later than planned.",
    28 : "Keep going. Or stop. I’m not your boss.",
    29 : "You’re not behind. You’re simply well within your comfort zone.",
    30 : "Life isn’t fair—and you’re evidence."
}

function getRandomInt(min,max){
    min = Math.ceil(min); // ensure an int
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(affirmations[getRandomInt(1,30)]);