const animateCode = () => {
    const codeBubble = document.querySelector(".code-animation");
    const highlight = document.querySelector(".select-all");
    const linesGroup = document.querySelector(".lines");
    const lines = [...document.querySelectorAll(".lines path")];
  
    lines.forEach((line, i) => {
      line.style.animationDelay = `${i * 35}ms`;
    });
  
    const deleteCode = () => {
      highlight.style.display = "none";
      linesGroup.style.display = "none";
      codeBubble.classList.remove("animating");
      setTimeout(startTyping, 700);
    };
  
    const selectAll = () => {
      highlight.style.display = "block";
  
      setTimeout(deleteCode, 350);
    };
  
    const startTyping = () => {
      linesGroup.style.display = "block";
  
      lines[lines.length - 1].addEventListener("animationend", selectAll);
      codeBubble.classList.add("animating");
    };

    const downloadButton = document.getElementById("cv-download");
    downloadButton.addEventListener("click", () => {
        const cvFilePath = 'Images/Santana-Bradbury-CV.pdf'; 
        const link = document.createElement("a");
        link.href = cvFilePath;
        link.download = "Santana-Bradbury-CV.pdf";
        link.click();
    });
  
    startTyping();
};
  
animateCode();