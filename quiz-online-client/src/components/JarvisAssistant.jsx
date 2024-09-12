import React, { useEffect, useRef } from "react";
import "./style.css";
import giphy from '../assets/giphy.gif';


const JarvisAssistant = () => {
  const btnRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const speak = (text) => {
      const textSpeak = new SpeechSynthesisUtterance(text);
      textSpeak.rate = 1;
      textSpeak.volume = 1;
      textSpeak.pitch = 1;
      window.speechSynthesis.speak(textSpeak);
    };

    const wishMe = () => {
      const hour = new Date().getHours();
      if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
      } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
      } else {
        speak("Good Evening Sir...");
      }
    };

    const takeCommand = (message) => {
      if (message.includes("hey") || message.includes("hello")) {
        speak("Hello Sir, How May I Help You?");
      } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
      } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
      } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
      } else if (message.includes("what is") || message.includes("who is") || message.includes("what are")) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
      } else if (message.includes("wikipedia")) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
      } else if (message.includes("time")) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak("The current time is " + time);
      } else if (message.includes("date")) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        speak("Today's date is " + date);
      } else if (message.includes("calculator")) {
        window.open("Calculator:///");
        speak("Opening Calculator");
      } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speak("I found some information for " + message + " on Google");
      }
    };

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onresult = (event) => {
      const currentIndex = event.resultIndex;
      const transcript = event.results[currentIndex][0].transcript;
      contentRef.current.textContent = transcript;
      takeCommand(transcript.toLowerCase());
    };

    const handleButtonClick = () => {
      contentRef.current.textContent = "Listening...";
      recognition.start();
    };

    const btn = btnRef.current;
    btn.addEventListener("click", handleButtonClick);

    speak("Initializing JARVIS...");
    wishMe();

    return () => {
      btn.removeEventListener("click", handleButtonClick);
    };
  }, []);

  return (
    <section className="main">
      <div className="image-container">
        <div className="image">
        <img src={giphy} alt="JARVIS" />
        </div>
        <h1>J A R V I S</h1>
        <p>I am a Virtual Assistant JARVIS, How may I help you?</p>
      </div>
      <div className="input">
        <button className="talk" ref={btnRef}>
          <i className="fas fa-microphone-alt"></i>
        </button>
        <h1 className="content" ref={contentRef}>Click here to speak</h1>
      </div>
    </section>
  );
};

export default JarvisAssistant;
