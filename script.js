document.addEventListener("DOMContentLoaded", () => {
  const lessonNodes = document.querySelectorAll(".lesson-node");
  const progressBar = document.querySelector(".progress");
  const createBtn = document.querySelector(".create-btn");
  const signInBtn = document.querySelector(".signin-btn");

  let currentLesson = 0;
  let xp = 0;
  const xpPerLesson = 10;
  const maxXP = 100;

  // Unlock next lesson on click
  lessonNodes.forEach((node, index) => {
    node.addEventListener("click", () => {
      if (index <= currentLesson) {
        alert(`Lesson ${index + 1} started!`);
        xp += xpPerLesson;
        currentLesson++;
        updateProgress();
        unlockLessons();
      } else {
        alert("Complete the previous lessons first!");
      }
    });
  });

  // Update XP progress bar
  function updateProgress() {
    const percent = Math.min((xp / maxXP) * 100, 100);
    progressBar.style.width = `${percent}%`;
  }

  // Unlock lessons visually
  function unlockLessons() {
    lessonNodes.forEach((node, i) => {
      if (i <= currentLesson) {
        node.style.opacity = "1";
        node.style.cursor = "pointer";
      }
    });
  }

  // Button actions
  createBtn.addEventListener("click", () => {
    alert("Redirecting to profile creation...");
  });

  signInBtn.addEventListener("click", () => {
    alert("Redirecting to sign-in page...");
  });

  // Initial state
  updateProgress();
  unlockLessons();
});
