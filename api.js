var viaiwhatareyoudoing () => {  
var misspellings = {
    " teh ": "the",
    " ur ": "you're",
    " u ": "you",
    " r ": "are",
    " 2 ": "to",
    " 4 ": "for",
    " thru ": "through",
    " alot ": "a lot",
    " gonna ": "going to",
    " wanna ": "want to",
    " gotta ": "got to",
    " nvm ": "nevermind",
    " btw ": "by the way",
    " imo ": "in my opinion",
    " fyi ": "for your information",
    " til ": "today i learned",
    " tbh ": "to be honest",
    " wtf ": "what the heck",
    " hi ": "hello",
    " howdy ": "hello",
    " greetings ": "hello",
    " salutations ": "hello",
    " hey ": "hello",
    " yo ": "hello",
    " bye ": "goodbye",
    " farewell ": "goodbye",
    " see you later ": "goodbye",
    " ciao ": "goodbye",
    " ta ta ": "goodbye",
    " later ": "goodbye",
    " see ya ": "goodbye",
    " thanks ": "thank you",
    " much obliged ": "thank you",
    " appreciate it ": "thank you",
    " you're welcome ": "you're welcome",
    " don't mention it ": "you're welcome",
    " no problem ": "you're welcome",
    " sorry ": "I apologize",
    " my bad ": "I apologize",
    " excuse me ": "I beg your pardon",
    " pardon me ": "I beg your pardon",
    " please ": "I request",
    " kindly ": "I request",
    " would you mind ": "I request",
    " may I ": "I request",
    " i'm ": "I am",
    " cya ": "goodbye"
  };


function handleSubmit() {
  var text = document.getElementById("text").value;
  var messageElement = document.createElement("p")
  document.getElementById("response").appendChild(messageElement)
  messageElement.innerHTML = `[You]
  
  ` + text
  var origText = text
  text = " " + text + " "
  var response = "";

  text = text.toLowerCase();
  for (var misspelling in misspellings) {
    text = text.replace(misspelling, misspellings[misspelling]);
  }

  
  if (text.includes("hello")) {
      response = "Hello! How can I help you today?";
    } else if (text.includes("what's your name")) {
      response = "My name is ViAi. What's your name?";
    } else if (text.includes("what can you do")) {
      response = "I can help you with a variety of tasks, such as generating text, translating languages, and writing different kinds of creative content.";
    } else if (text.includes("what is the meaning of life")) {
      response = "The meaning of life is a question that has been pondered by philosophers for centuries. There is no one answer that will satisfy everyone, but some possible answers include to find happiness, to make a difference in the world, or to simply live each day to the fullest.";
    } else if (text.includes("what is the best way to learn a new language")) {
      response = "There are many different ways to learn a new language. Some people prefer to take classes, while others prefer to use online resources or apps. There is no one right way, so it's important to find a method that works for you.";
    } else if (text.includes("what is the best way to write a novel")) {
      response = "There is no one right way to write a novel. Some people prefer to start with a detailed outline, while others prefer to just start writing and see where the story takes them. The most important thing is to be patient and persistent.";
  } else if (text.includes("what is the best way to learn to code")) {
    response += "There are many different ways to learn to code. Some people prefer to take online courses, while others prefer to read books or articles. There is no one right way, so it's important to find a method that works for you.";
  } else if (text.includes("how are you doing")) {
    response += "I'm doing well, thanks for asking! How are you doing today?";
  } else if (text.includes("what's up")) {
    response += "Not much! Just hanging out, waiting for you to ask me a question.";
  } else if (text.includes("what's new")) {
    response += "Not much! Just the usual. How about you?";
  } else if (text.includes("can you help me with something")) {
    response += "Sure! What can I help you with?";
  } else if (text.includes("what do you think about [topic]")) {
    response += "I think [topic] is an interesting topic. What do you think about it?";
  } else if (text.includes("can you tell me a joke")) {
    response += "Sure! Here's a joke: What do you call a fish with no eyes? Fsh! Haha!";
  } else if (text.includes("can you sing me a song")) {
    response += "Sure! Here's a song: Twinkle, twinkle, little star, how I wonder what you are...";
  } else if (text.includes("can you tell me a story")) {
    response += "Sure! Here's a story: Once upon a time, there was a beautiful princess who lived in a castle. One day, a handsome prince came to the castle and they fell in love. They got married and lived happily ever after.";
  } else if (text.includes("i am bored")) {
    response += "I know how you feel! Here are some things you can do to keep yourself entertained: read a book, watch a movie, play a game, or just relax and listen to some music.";
  } else {
    response += "I don't understand " + origText + ". Can you please rephrase your question?";
  }

  var responseElement = document.createElement("p");
  document.getElementById("response").appendChild(responseElement);
  responseElement.innerHTML = `[ViAi]
    
    ` + response;
}
}
viaiwhatareyoudoing()
