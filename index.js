const messages = {
    message1: ["However, for this reason I obtained mercy, that in me first Jesus Christ might show all longsuffering, as a pattern to those who are going to believe on Him for everlasting life.","This is a faithful saying and worthy of all acceptance, that Christ Jesus came into the world to save sinners, of whom I am chief.","Do not be confomed to this world, but be transformed by the renewing of your mind that you may approve what is that good and acceptable and perfect will of God.","And with all unrighteous deception among those who perish bceause they did not receive the love of the truth that they might be saved."],
    message2: ["1 Timothy","1 Timothy","Romans","II Thessalonians"],
    message3: ["1:16 NKJV","1:15 NKJV","12:2 NKJV","2:10 NKJV"]
};

function generateMessage(){
    randNum = Math.floor(Math.random() * 4)
    console.log(messages.message1[randNum])
    console.log(messages.message2[randNum])
    console.log(messages.message3[randNum])
}

generateMessage()