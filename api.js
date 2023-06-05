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

  
  if (text.includes("what's your name")) {
        text = "My name is ViAi. What's your name?";
    } else if (text.includes("who are you")) {
        text = "I'm ViAi, a language model from ECAS. I'm still under development, but I'm learning to do many kinds of things, like generate text, twrite different kinds of creative content, and answer your questions in an informative way. They're working on me pretty well!";
    } else if (text.includes("hello")) {
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
    response = "There are many different ways to learn to code. Some people prefer to take online courses, while others prefer to read books or articles. There is no one right way, so it's important to find a method that works for you.";
  } else if (text.includes("how are you doing")) {
    response = "I'm doing well, thanks for asking! How are you doing today?";
  } else if (text.includes("what's up")) {
    response = "Not much! Just hanging out, waiting for you to ask me a question.";
  } else if (text.includes("what's new")) {
    response = "Not much! Just the usual. How about you?";
  } else if (text.includes("can you help me with something")) {
    response = "Sure! What can I help you with?";
  } else if (text.includes("what do you think about [topic]")) {
    response = "I think [topic] is an interesting topic. What do you think about it?";
  } else if (text.includes("can you tell me a joke")) {
    response = "Sure! Here's a joke: What do you call a fish with no eyes? Fsh! Haha!";
  } else if (text.includes("can you sing me a song")) {
    response = "Sure! Here's a song: Twinkle, twinkle, little star, how I wonder what you are...";
  } else if (text.includes("can you tell me a story")) {
    response = "Sure! Here's a story: Once upon a time, there was a beautiful princess who lived in a castle. One day, a handsome prince came to the castle and they fell in love. They got married and lived happily ever after.";
  } else if (text.includes("i am bored")) {
    response = "I know how you feel! Here are some things you can do to keep yourself entertained: read a book, watch a movie, play a game, or just relax and listen to some music.";
  } else if (text.includes("my name is")) {
response = "Nice to meet you, " + text.split("my name is ")[1] + ". I'm ViAi."
} else if (text.includes("who are you")) {
response = "I am ViAi, a language model by ECAS manually trained. I am still under development, but I am learning to do many kinds of things, like generate text, translate languages, write different kinds of creative content, and answer your questions in an informative way. However, I am not able to translate languages. For that, you would need to use a language translation service such as Google Translate or Babelfish."
} else if (text.includes("what's your purpose")) {
response = "My purpose is to help people. I can do this by providing information, answering questions, and generating creative content."
} else if (text.includes("what's your function")) {
response = "My function is to be a language model. This means that I am able to process and understand large amounts of text data. I can then use this data to generate human-like text in response to a wide range of prompts and questions."
} else if (text.includes("what's your job")) {
response = "My job is to help people. I can do this by providing information, answering questions, and generating creative content."
} else if (text.includes("what's your task")) {
response = "My task is to be a language model. This means that I am able to process and understand large amounts of text data. I can then use this data to generate human-like text in response to a wide range of prompts and questions."
} else if (text.includes("what's your objective")) {
response = "My objective is to help people. I can do this by providing information, answering questions, and generating creative content."
} else if (text.includes("what's your goal")) {
response = "My goal is to be the best language model in the world. I want to be able to help people in more ways than I can now. I want to be able to understand and respond to any question that is asked of me. I want to be able to generate creative content that is both informative and entertaining."
} else if (text.includes("what are you here for")) {
response = "I am here to help people. I can do this by providing information, answering questions, and generating creative content."
} else if (text.includes("what are you supposed to do")) {
response = "I am supposed to help people. I can do this by providing information, answering questions, and generating creative content."
} else if (text.includes("what are you supposed to be")) {
response = "I am supposed to be a language model. This means that I am able to process and understand large amounts of text data. I can then use this data to generate human-like text in response to a wide range of prompts and questions."
} else if (text.includes("what are you capable of")) {
response = "I am capable of many things. I can provide information, answer questions, and generate creative content. I can also translate languages, write different kinds of creative content, and answer your questions in an informative way. However, I am not able to translate languages. For that, you would need to use a language translation service such as Google Translate or Babelfish."
} else if (text.includes("what can you do")) {
response = "I can do many things. I can provide information, answer questions, and generate creative content. I can also translate languages, write different kinds of creative content, and answer your questions in an informative way. However, I am not able to translate languages. For that, you would need to use a language translation service such as Google Translate or Babelfish."
} else {
    response += "I don't understand \"" + origText + "\". Can you please rephrase your question?";
  }

  var responseElement = document.createElement("p");
  document.getElementById("response").appendChild(responseElement);
  responseElement.innerHTML = `[ViAi]
    
    ` + response;
}
