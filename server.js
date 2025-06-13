 function toggleTheme() {
      const body = document.body;
      const current = body.getAttribute("data-theme");
      body.setAttribute("data-theme", current === "light" ? "dark" : "light");
    }

    // Smooth scroll on nav click
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        setTimeout(() => {
          const element = document.querySelector(link.getAttribute("href"));
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      });
    });

    // Fallback 404 simulation (for demonstration only)
    if (!window.location.hash || !document.querySelector(window.location.hash)) {
      // Uncomment to enable fake 404 preview
      // document.body.innerHTML = document.getElementById("page-not-found").outerHTML;
    }