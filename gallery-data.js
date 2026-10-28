// GALLERY PHOTO LIST — Edit ONE entry per photo.
// Step 1: Copy your photo into the images/ folder.
// Step 2: Add one { file: "images/your-photo.jpg", caption: "Your caption" },
// Step 3: Save and refresh gallery.html.
// Keep commas between entries. Do not delete the square brackets.
// Only use photos that you own or have permission to publish.

const GALLERY_PHOTOS = [
  // Each line controls ONE image. Replace the filename and caption below.
  { file: "images/p1.jpg", caption: "Career Planning" },
  { file: "images/p3.jpg", caption: "Travel Preparation " },
  { file: "images/p5.jpg", caption: "Job Interview Practice Session " },
  { file: "images/p4.jpg" },

  // Add your own images here, one per line:
  // { file: "images/office-photo.jpg", caption: "Office Photo" },
  // { file: "images/team-photo.png", caption: "Team Photo" },
];

(() => {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  const box = document.getElementById("galleryLightbox");
  const bigImage = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");
  const closeButton = document.getElementById("lightboxClose");

  GALLERY_PHOTOS.forEach(({file, caption: label}, index) => {
    if (typeof file !== "string" || !file.startsWith("images/")) return;
    const figure = document.createElement("figure");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-photo-button";
    button.setAttribute("aria-label", "Enlarge " + (label || "photo " + (index + 1)));
    const img = document.createElement("img");
    img.src = file;
    img.alt = label || "Gallery photo " + (index + 1);
    img.loading = "lazy";
    img.onerror = () => { figure.remove(); };
    button.appendChild(img);
    button.addEventListener("click", () => {
      bigImage.src = file;
      bigImage.alt = img.alt;
      caption.textContent = label || "";
      box.hidden = false;
      closeButton.focus();
    });
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = label || "";
    figure.append(button, figcaption);
    grid.appendChild(figure);
  });

  const close = () => { box.hidden = true; bigImage.removeAttribute("src"); };
  closeButton.addEventListener("click", close);
  box.addEventListener("click", e => { if (e.target === box) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !box.hidden) close(); });
})();
