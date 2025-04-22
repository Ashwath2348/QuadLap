document.addEventListener("DOMContentLoaded", () => {
  // Simulate dynamic user data for demo purposes
  const userProgress = {
    quizzesCompleted: 3,
    totalQuizzes: 5,
    lessonsWatched: 4,
    totalLessons: 10,
    badgesUnlocked: 5,
    maxBadges: 5
  };

  const progressElements = document.querySelectorAll(".progress");

  progressElements.forEach((bar, index) => {
    let percent = 0;

    switch (index) {
      case 0:
        percent = (userProgress.quizzesCompleted / userProgress.totalQuizzes) * 100;
        break;
      case 1:
        percent = (userProgress.lessonsWatched / userProgress.totalLessons) * 100;
        break;
      case 2:
        percent = (userProgress.badgesUnlocked / userProgress.maxBadges) * 100;
        break;
    }

    bar.style.width = `${percent}%`;
  });

  // Optional: Add interactive button or XP effect
  const welcome = () => {
    setTimeout(() => {
      alert("🎉 Welcome back, Learner! Ready to level up?");
    }, 1000);
  };

  welcome();
});
