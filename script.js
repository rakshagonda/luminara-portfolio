
"use strict";

// Enter the kingdom
const enterBtn = document.getElementById("enterBtn");
const storySection = document.getElementById("story");

if (enterBtn && storySection) {
  enterBtn.addEventListener("click", () => {
    storySection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

// Say hello to Luminara
const greetBtn = document.getElementById("greetBtn");
const greetingMessage = document.getElementById("greetingMessage");

const greetings = [
  "Luminara smiles softly. “I'm glad you found your way here.”",
  "A tiny star lights up. “Do you believe forgotten things can shine again?”",
  "Luminara waves. “Will you help me find the missing memories?”",
  "She looks up at the moon. “I think the stars are happier now that you're here.”"
];

if (greetBtn && greetingMessage) {
  greetBtn.addEventListener("click", () => {
    const previousGreeting = greetingMessage.textContent;

    let availableGreetings = greetings.filter(
      (greeting) => greeting !== previousGreeting
    );

    if (availableGreetings.length === 0) {
      availableGreetings = greetings;
    }

    const index = Math.floor(
      Math.random() * availableGreetings.length
    );

    greetingMessage.textContent = availableGreetings[index];
    greetingMessage.hidden = false;
  });
}

// Discover her secret
const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

if (secretBtn && secretMessage) {
  secretBtn.addEventListener("click", () => {
    const shouldShow = secretMessage.hidden;

    secretMessage.hidden = !shouldShow;

    secretBtn.textContent = shouldShow
      ? "Hide her secret ✧"
      : "Discover her secret ✧";

    secretBtn.setAttribute(
      "aria-expanded",
      String(shouldShow)
    );
  });
}

// The hidden doll Easter egg
const clipSecret = document.getElementById("clipSecret");
const easterEggMessage = document.getElementById("easterEggMessage");

if (clipSecret && easterEggMessage) {
  clipSecret.addEventListener("click", () => {
    const shouldShow = easterEggMessage.hidden;

    easterEggMessage.hidden = !shouldShow;

    clipSecret.setAttribute(
      "aria-expanded",
      String(shouldShow)
    );

    clipSecret.textContent = shouldShow
      ? "✧ Keep the secret ✧"
      : "✧ Touch the little doll ✧";
  });
}

// Forgotten Library memories
const memoryMessage = document.getElementById("memoryMessage");
const memoryTitle = document.getElementById("memoryTitle");
const memoryCards = document.querySelectorAll(".memory-card");

const memories = {
  dream: {
    title: "A Lost Dream ✧",
    message:
      "A little star whispers: “You once dreamed of making something beautiful. That dream is still alive, waiting for you to believe in it again.”"
  },

  promise: {
    title: "An Old Promise ♡",
    message:
      "A tiny voice remembers: “Someone promised they would never forget me. Even when the world grew dark, that promise became my light.”"
  },

  friend: {
    title: "A Forgotten Friend ☾",
    message:
      "A dusty doll smiles: “I was waiting for someone to remember my name. I knew that one day, a kind heart would find me.”"
  }
};

memoryCards.forEach((card) => {
  card.setAttribute("aria-pressed", "false");

  card.addEventListener("click", () => {
    const memory = card.dataset.memory;

    if (!memories[memory] || !memoryMessage || !memoryTitle) {
      return;
    }

    memoryTitle.textContent = memories[memory].title;
    memoryMessage.textContent = memories[memory].message;

    memoryCards.forEach((otherCard) => {
      otherCard.setAttribute(
        "aria-pressed",
        String(otherCard === card)
      );
    });
  });
});

// Background music toggle
const soundToggle = document.getElementById("soundToggle");
const backgroundMusic = document.getElementById("backgroundMusic");

if (soundToggle && backgroundMusic) {
  soundToggle.addEventListener("click", async () => {
    if (backgroundMusic.paused) {
      soundToggle.disabled = true;

      try {
        await backgroundMusic.play();

        soundToggle.textContent = "♫ Sound: On";
        soundToggle.setAttribute("aria-pressed", "true");
        soundToggle.setAttribute("aria-label", "Turn background music off");
      } catch (error) {
        soundToggle.textContent = "♫ Music unavailable";
        soundToggle.setAttribute("aria-pressed", "false");
        soundToggle.setAttribute(
          "aria-label",
          "Music could not play. Check the audio file and try again."
        );
      } finally {
        soundToggle.disabled = false;
      }
    } else {
      backgroundMusic.pause();

      soundToggle.textContent = "♫ Sound: Off";
      soundToggle.setAttribute("aria-pressed", "false");
      soundToggle.setAttribute("aria-label", "Turn background music on");
    }
  });
}

// Return to the beginning
const restartBtn = document.getElementById("restartBtn");

if (restartBtn) {
  restartBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
