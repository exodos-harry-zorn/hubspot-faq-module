document.addEventListener("DOMContentLoaded", () => {
  const faqModules = document.querySelectorAll(".hs-faq-module");

  faqModules.forEach((moduleEl) => {
    const buttons = moduleEl.querySelectorAll(".faq-button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const isExpanded = button.getAttribute("aria-expanded") === "true";
        const contentId = button.getAttribute("aria-controls");
        const content = document.getElementById(contentId);

        if (!content) return;

        // Toggle state
        if (isExpanded) {
          button.setAttribute("aria-expanded", "false");
          content.setAttribute("aria-hidden", "true");
          content.style.maxHeight = "0px";
        } else {
          // Open
          button.setAttribute("aria-expanded", "true");
          content.setAttribute("aria-hidden", "false");
          content.style.maxHeight = content.scrollHeight + "px";

          // Optional: If you want only one open at a time, uncomment below:
          /*
          buttons.forEach((btn) => {
            if (btn !== button && btn.getAttribute("aria-expanded") === "true") {
              btn.setAttribute("aria-expanded", "false");
              const otherContent = moduleEl.querySelector(`#${btn.getAttribute("aria-controls")}`);
              otherContent.setAttribute("aria-hidden", "true");
              otherContent.style.maxHeight = "0px";
            }
          });
          */
        }
      });
    });

    // Resize observer to handle dynamic content height changes
    const resizer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.style.maxHeight !== "0px" && entry.target.style.maxHeight) {
          entry.target.style.maxHeight = entry.target.scrollHeight + "px";
        }
      });
    });

    moduleEl.querySelectorAll(".faq-content").forEach((content) => {
      resizer.observe(content);
    });
  });
});