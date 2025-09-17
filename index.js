document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({ offset: 0 });

  const dropdown = document.querySelector(".dropdown");
  const mobileLinks = document.querySelectorAll('.dropdown a[view-transition-name]');
  const desktopLinks = document.querySelectorAll('.nav-container a[view-transition-name]');

  // Show mobile dropdown
  window.hamburg = () => {
    dropdown.classList.add("show");
  };

  // Hide mobile dropdown
  window.cancel = () => {
    dropdown.classList.remove("show");
  };

  // Attach View Transition to all links
  [...mobileLinks, ...desktopLinks].forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const url = link.getAttribute("href");

      // Auto-close dropdown on mobile
      dropdown.classList.remove("show");

      if (document.startViewTransition) {
        document.startViewTransition(() => {
          window.location.href = url;
        });
      } else {
        window.location.href = url;
      }
    });
  });

  // Responsive behavior: hide dropdown and show desktop links on resize
  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if (width > 884) {
      dropdown.classList.remove("show");
    }
  });
});
