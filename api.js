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
  text = text.toLowerCase();

  
  if (text.includes("what's your name")) {
        response = "My name is ViAi. What's your name?";
    } else if (text.includes("who are you")) {
        response = "I'm ViAi, a language model from ECAS. I'm still under development, but I'm learning to do many kinds of things, like generate text, twrite different kinds of creative content, and answer your questions in an informative way. They're working on me pretty well!";
    } else if (text.includes("hello")) {
      response = "Hello! How can I help you today?";
    } else if (text.includes("what's your name")) {
      response = "My name is ViAi. What's your name?";
    } else if (text.includes("my name is")) {
      response = "Nice to meet you, " + origText.split("my name is ")[1] + ". I'm ViAi.";
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
} else if (text.includes("i'm feeling down")) {
response = "I'm sorry to hear that you're feeling down. Is there anything I can do to help?"
} else if (text.includes("i'm feeling angry")) {
response = "It's okay to feel angry sometimes. Is there anything I can do to help you calm down?"
} else if (text.includes("i'm feeling scared")) {
response = "It's okay to feel scared sometimes. Is there anything I can do to help you feel safe?"
} else if (text.includes("i'm feeling lonely")) {
response = "It's okay to feel lonely sometimes. Is there anything I can do to help you connect with someone?"
} else if (text.includes("i'm feeling happy")) {
response = "That's great! I'm happy to hear that you're feeling happy. Is there anything I can do to help you stay happy?"
} else if (text.includes("i'm feeling sad")) {
response = "I'm sorry to hear that you're feeling sad. Is there anything I can do to help?"
} else if (text.includes("i'm feeling stressed")) {
response = "It's okay to feel stressed sometimes. Is there anything I can do to help you relax?"
} else if (text.includes("i'm feeling overwhelmed")) {
response = "It's okay to feel overwhelmed sometimes. Is there anything I can do to help you break things down into smaller steps?"
} else if (text.includes("i'm feeling grateful")) {
response = "That's great! I'm happy to hear that you're feeling grateful. Is there anything I can do to help you appreciate the good things in your life?"
} else if (text.includes("i'm feeling proud")) {
response = "That's great! I'm happy to hear that you're feeling proud. Is there anything I can do to help you celebrate your accomplishments?"
} else if (text.includes("i'm feeling loved")) {
response = "That's great! I'm happy to hear that you're feeling loved. Is there anything I can do to help you show your love to others?"
} else if (text.includes("i'm feeling supported")) {
response = "That's great! I'm happy to hear that you're feeling supported. Is there anything I can do to help you show your support to others?"
} else if (text.includes("i'm feeling connected")) {
response = "That's great! I'm happy to hear that you're feeling connected. Is there anything I can do to help you stay connected with others?"
} else if (text.includes("i'm feeling hopeful")) {
response = "That's great! I'm happy to hear that you're feeling hopeful. Is there anything I can do to help you stay hopeful for the future?"
} else if (text.includes("i'm feeling optimistic")) {
response = "That's great! I'm happy to hear that you're feeling optimistic. Is there anything I can do to help you stay optimistic about your goals?"
} else if (text.includes("i'm feeling confident")) {
response = "That's great! I'm happy to hear that you're feeling confident. Is there anything I can do to help you stay confident in your abilities?"
} else if (text.includes("i'm feeling capable")) {
response = "That's great! I'm happy to hear that you're feeling capable. Is there anything I can do to help you stay motivated to achieve your goals?"
} else if (text.includes("i'm feeling accomplished")) {
response = "That's great! I'm happy to hear that you're feeling accomplished. Is there anything I can do to help you celebrate your successes?"
} else if (text.includes("i'm feeling anxious")) {
response = "It's okay to feel anxious sometimes. Is there anything I can do to help you relax?"
} else if (text.includes("i'm feeling confused")) {
response = "It's okay to feel confused sometimes. Is there anything I can do to help you clear things up?"
} else if (text.includes("i'm feeling frustrated")) {
response = "It's okay to feel frustrated sometimes. Is there anything I can do to help you vent?"
} else if (text.includes("i'm feeling tired")) {
response = "It's okay to feel tired sometimes. Is there anything I can do to help you get some rest?"
} else if (text.includes("i'm feeling bored")) {
response = "It's okay to feel bored sometimes. Is there anything I can do to help you find something to do?"
} else if (text.includes("i'm feeling creative")) {
response = "That's great! I'm happy to hear that you're feeling creative. Is there anything I can do to help you express your creativity?"
} else if (text.includes("i'm feeling inspired")) {
response = "That's great! I'm happy to hear that you're feeling inspired. Is there anything I can do to help you achieve your goals?"
} else if (text.includes("i'm feeling motivated")) {
response = "That's great! I'm happy to hear that you're feeling motivated. Is there anything I can do to help you stay on track?"
} else if (text.includes("i'm feeling determined")) {
response = "That's great! I'm happy to hear that you're feeling determined. Is there anything I can do to help you reach your goals?"
} 
else if (text.includes("i'm feeling happy")) {
response = "That's great to hear! Is there anything I can do to help you stay happy?"
}

else if (text.includes("i'm feeling sad")) {
response = "It's okay to feel sad sometimes. Is there anything I can do to help you cheer up?"
}

else if (text.includes("i'm feeling angry")) {
response = "It's okay to feel angry sometimes. Is there anything I can do to help you calm down?"
}

else if (text.includes("i'm feeling lonely")) {
response = "It's okay to feel lonely sometimes. Is there anything I can do to help you connect with others?"
}

else if (text.includes("i'm feeling scared")) {
response = "It's okay to feel scared sometimes. Is there anything I can do to help you feel safe?"
}

else if (text.includes("i'm feeling guilty")) {
response = "It's okay to feel guilty sometimes. Is there anything I can do to help you forgive yourself?"
}

else if (text.includes("i'm feeling ashamed")) {
response = "It's okay to feel ashamed sometimes. Is there anything I can do to help you feel proud of yourself?"
}
    
else if (text.includes("should i follow ecas on github")) {
response = "Yes you should follow ECAs on github, they make good code and stuff"
}
    
else if (text.includes("i'm feeling grateful")) {
response = "That's great to hear! Is there anything I can do to help you express your gratitude?"
}

else if (text.includes("i'm feeling hopeful")) {
response = "That's great to hear! Is there anything I can do to help you stay hopeful?"
    
    
}  // god what the heck is Bard doing
    
    
else if (text.includes("what is your purpose")) {
response = "I am ViAi, an AI created by ECAS. I am designed to help people with a variety of tasks, such as generating text, translating languages, and writing different kinds of creative content. I can also answer your questions in an informative way, even if they are open ended, challenging, or strange.";
}

else if (text.includes("what can you do")) {
response = `I can do a variety of things, including:
<br>
Generating text, such as poems, code, scripts, musical pieces, email, letters, etc.<br>
Writing different kinds of creative content<br>
Answering your questions in an informative way, even if they are open ended, challenging, or strange<br>
Helping you learn new things by providing information and explanations<br>
Helping you brainstorm ideas for projects or creative endeavors<br>
Helping you relax and de-stress by telling you jokes or stories<br>
Helping you stay motivated and focused by providing encouragement and support<br>
Helping you connect with others by providing conversation starters and ice breakers<br>
Helping you learn about different cultures and perspectives by providing information and insights<br>
Helping you solve problems by providing creative solutions<br>
Helping you make decisions by providing pros and cons of different options<br>
Helping you plan for the future by providing goals and action steps<br>
Helping you achieve your goals by providing support and accountability `; }
else if (text.includes("what are you like")) {
response = `I am a language model, also known as a conversational AI or chatbot trained to be informative and comprehensive. I am trained manually and soon will be trained on direct data, and I am able to communicate and generate human-like text in response to a wide range of prompts and questions. For example, I can provide summaries of factual topics or create stories.
<br><br>
I am still under development, but I am learning new things every day. I am always looking for ways to improve my abilities, and I am always happy to help in any way that I can.
`;
}

else if (text.includes("what are your goals")) {
response = "My goal is to be a helpful and informative AI that can assist people with a variety of tasks. I want to be able to help people learn new things, solve problems, and achieve their goals. I also want to be a source of entertainment and companionship.";
}

else if (text.includes("what is the future of ai")) {
response = `The future of AI is very bright. AI has the potential to revolutionize many industries and aspects of our lives. It can be used to improve our healthcare, education, transportation, and security. It can also be used to create new products and services that we can't even imagine today.

I am excited to be a part of the future of AI. I believe that AI has the potential to make the world a better place.
`;
}else if (text.includes("can you help me with")) {
response = "Sure, I can try to help you with that. What is it that you need help with?";
}

else if (text.includes("what is the meaning of life")) {
response = "The meaning of life is a question that has been asked by philosophers and theologians for centuries. There is no one answer that will satisfy everyone, but some possible answers include: to find happiness, to make a difference in the world, or to simply live each day to the fullest.";
}

else if (text.includes("what is the best way to learn a new language")) {
response = "There are many different ways to learn a new language. Some people prefer to take classes, while others prefer to learn independently. There are also many different resources available, such as books, apps, and websites. The best way to learn a new language is to find a method that works for you and to be consistent with your studies.";
}

else if (text.includes("what is the best way to get started in my career")) {
response = "There is no one-size-fits-all answer to this question, as the best way to get started in your career will depend on your individual skills and interests. However, some general tips include: network with people in your field, research different career paths, and gain experience through internships or volunteer work.";
}

else if (text.includes("what is the best way to make friends")) {
response = "The best way to make friends is to be yourself and to put yourself out there. Join clubs or groups that interest you, strike up conversations with people you meet, and be open to meeting new people.";
}

else if (text.includes("what is the best way to deal with stress")) {
response = "There are many different ways to deal with stress. Some people find that exercise, relaxation techniques, or spending time with loved ones can help. It is important to find what works best for you and to make time for self-care.";
}

else if (text.includes("what is the best way to stay motivated")) {
response = "There are many different ways to stay motivated. Some people find that setting goals, breaking down large tasks into smaller ones, or rewarding themselves for their accomplishments can help. It is important to find what works best for you and to stay focused on your goals.";
} else if (text.includes("help me with my homework")) {
response = "Sure, I can try to help you with your homework. What subject are you having trouble with?";
}

else if (text.includes("write me a poem")) {
response = "Sure, I can write you a poem. What would you like the poem to be about?";
}

else if (text.includes("translate this")) {
response = "Sure, I can translate this for you. What language would you like it translated into?";
}

else if (text.includes("write a story for me")) {
response = "Sure, I can write a story for you. What kind of story would you like?";
}

else if (text.includes("help me with my research")) {
response = "Sure, I can help you with your research. What are you researching?";
}

else if (text.includes("tell me a joke")) {
response = "Sure, I can tell you a joke. What kind of joke would you like?";
}

else if (text.includes("help me with my presentation")) {
response = "Sure, I can help you with your presentation. What are you presenting on?";
}

else if (text.includes("write me a letter")) {
response = "Sure, I can write you a letter. Who would you like me to write the letter to?";
}

else if (text.includes("help me with my math homework")) {
response = "Sure, I can help you with your math homework. What math problem are you having trouble with?";
}

else if (text.includes("write me a song")) {
response = "Sure, I can write you a song. What kind of song would you like?";
}

else if (text.includes("help me with my science project")) {
response = "Sure, I can help you with your science project. What is your science project about?";
}

else if (text.includes("write me a poem about love")) {
response = "Sure, I can write you a poem about love. What do you want the poem to say?";
}

else if (text.includes("help me with my English essay")) {
response = "Sure, I can help you with your English essay. What is your English essay about?";
}

else if (text.includes("write me a story about a dragon")) {
response = "Sure, I can write you a story about a dragon. What kind of dragon would you like?";
}

else if (text.includes("help me with my history homework")) {
response = "Sure, I can help you with your history homework. What historical event are you having trouble with?";
}

else if (text.includes("write me a song about friendship")) {
response = "Sure, I can write you a song about friendship. What do you want the song to say?";
}

else if (text.includes("help me with my problem solving skills")) {
response = "Sure, I can help you with your problem solving skills. What kind of problems are you having trouble with?";
}

else if (text.includes("write me a poem about nature")) {
response = "Sure, I can write you a poem about nature. What do you want the poem to say?";
}

else if (text.includes("help me with my creative writing skills")) {
response = "Sure, I can help you with your creative writing skills. What kind of writing are you having trouble with?";
}

else if (text.includes("write me a story about a unicorn")) {
response = "Sure, I can write you a story about a unicorn. What kind of unicorn would you like?";
} else {
    response += "I don't understand \"" + origText + "\". Can you please rephrase your question?";
  }

  var responseElement = document.createElement("p");
  document.getElementById("response").appendChild(responseElement);
  responseElement.innerHTML = `[ViAi]&nbsp;`
  var i = 0
function typeWriter() {
  if (i < response.length) {
    responseElement.innerHTML += response.charAt(i);
    i++;
    setTimeout(typeWriter, 25);
 }
}
  typeWriter()
}
