/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const itemId = params.get("id");

  if (!itemId) {
    document.body.innerHTML = "<h1>Error: Item ID not found in URL.</h1>";
    return;
  }

  // Check if this is a portfolio (certificate) page
  if (document.getElementById("cert-title")) {
    loadPortfolioItem(itemId);
  }
  // Check if this is a project page
  else if (document.getElementById("project-title")) {
    loadProjectItem(itemId);
  }
});

function loadPortfolioItem(id) {
  const itemData = portfolioData.find((item) => item.id === id);
  if (!itemData) {
    document.body.innerHTML = `<h1>Error: Portfolio item with ID "${id}" not found.</h1>`;
    return;
  }

  document.title = `${itemData.title} - Certificate Details`;
  document.getElementById("cert-category").innerHTML = `<i class="fas fa-certificate"></i> Certified Portfolio`;
  document.getElementById("cert-title").textContent = itemData.title;
  document.getElementById("cert-hero-description").textContent = itemData.shortDescription;
  document.getElementById("cert-image").src = itemData.image;
  document.getElementById("cert-image").alt = `Sertifikat ${itemData.title}`;
  document.getElementById("cert-main-icon").innerHTML = `<i class="fas fa-medal"></i>`;
  document.getElementById("cert-card-title").textContent = itemData.title;
  document.getElementById("cert-issuer").textContent = itemData.issuer;
  document.getElementById("cert-date").textContent = `Issued: ${itemData.date}`;
  document.getElementById("cert-long-description").textContent = itemData.longDescription;

  const infoContent = document.getElementById("portfolio-info-content");
  infoContent.innerHTML = `
    <p><strong>Category:</strong> ${itemData.info_category || "N/A"}</p>
    <p><strong>Duration:</strong> ${itemData.duration || "N/A"}</p>
    <p><strong>Provider:</strong> ${itemData.provider || "N/A"}</p>
    <p><strong>Completion Date:</strong> ${itemData.completion_date || "N/A"}</p>
  `;

  const skillsList = document.getElementById("cert-skills-list");
  skillsList.innerHTML = "";
  itemData.keySkills.forEach((skill) => {
    skillsList.innerHTML += `<li><i class="fas fa-check-circle"></i> ${skill}</li>`;
  });

  const toolsGrid = document.getElementById("cert-tools-grid");
  toolsGrid.innerHTML = "";
  itemData.tools.forEach((tool) => {
    toolsGrid.innerHTML += `
      <div class="tool-card">
        <div class="tool-icon"><i class="${tool.logo}"></i></div>
        <div class="tool-name">${tool.name}</div>
      </div>
    `;
  });
}

function loadProjectItem(id) {
  const project = projectData.find((p) => p.id === id);
  if (!project) {
    document.body.innerHTML = `<h1>Error: Project with ID "${id}" not found.</h1>`;
    return;
  }

  document.title = `${project.title} - Project Detail`;

  const categoryBadge = document.getElementById("project-category-badge");
  if (categoryBadge) {
    categoryBadge.innerHTML = `<i class="${project.categoryIcon || "fas fa-project-diagram"}"></i> <span>${project.category}</span>`;
  }

  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-long-description").textContent = project.longDescription;

  const linksContainer = document.getElementById("project-links");
  // FIX: Changed gameplay button to a more universal "Demo" button
  linksContainer.innerHTML = `
    ${project.githubUrl !== "#" ? `<a href="${project.githubUrl}" class="btn" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Source Code</a>` : ""}
    ${project.demoUrl !== "#" ? `<a href="${project.demoUrl}" class="btn" target="_blank" rel="noopener noreferrer"><i class="fas fa-eye"></i> Lihat Demo</a>` : ""}
    ${project.downloadUrl !== "#" ? `<a href="${project.downloadUrl}" class="btn" target="_blank" rel="noopener noreferrer"><i class="fas fa-download"></i> Download</a>` : ""}
  `;

  document.getElementById("project-video").src = project.mainVideo;

  const overviewContainer = document.getElementById("project-overview");
  overviewContainer.innerHTML = project.overview.map((p_text) => `<p>${p_text}</p>`).join("");

  const galleryContainer = document.getElementById("gallery-container");
  galleryContainer.innerHTML = project.galleryImages
    .map(
      (img) => `
    <div class="slide">
      <img src="${img.src}" alt="${img.caption}">
      <div class="slide-caption">${img.caption}</div>
    </div>
  `
    )
    .join("");
  document.body.dispatchEvent(new Event("galleryLoaded"));

  const techStackGrid = document.getElementById("tech-stack-grid");
  techStackGrid.innerHTML = project.techStack
    .map(
      (tech) => `
    <div class="tech-card">
      <div class="tech-icon"><i class="${tech.icon}"></i></div>
      <div class="tech-name">${tech.name}</div>
    </div>
  `
    )
    .join("");

  const keyFeaturesList = document.getElementById("key-features-list");
  keyFeaturesList.innerHTML = project.keyFeatures
    .map(
      (feature) => `
    <li class="feature-item">
      <div class="feature-icon"><i class="${feature.icon}"></i></div>
      <div><h4>${feature.title}</h4><p>${feature.description}</p></div>
    </li>
  `
    )
    .join("");

  const info = project.projectInfo;
  const projectInfoList = document.getElementById("project-info-list");
  projectInfoList.innerHTML = `
    <li><i class="fas fa-check-circle icon-muted"></i><div><strong>Status:</strong> <span class="status-badge status-completed">${info.status}</span></div></li>
    <li><i class="fas fa-gamepad icon-muted"></i><div><strong>Kategori:</strong> ${info.category}</div></li>
    <li><i class="fas fa-user icon-muted"></i><div><strong>Team Size:</strong> ${info.teamSize}</div></li>
    <li><i class="fas fa-briefcase icon-muted"></i><div><strong>Client:</strong> ${info.client}</div></li>
  `;

  if (project.codeSnippet && project.codeSnippet.code) {
    const snippetContainer = document.getElementById("code-snippet-container");
    const codeBlock = document.getElementById("code-snippet-block");
    if (snippetContainer && codeBlock) {
      snippetContainer.style.display = "block";
      codeBlock.textContent = project.codeSnippet.code;
      codeBlock.className = `language-${project.codeSnippet.language}`;
      Prism.highlightElement(codeBlock);
    }
  }

  setupActionButtons(project);

  let slideIndex = 0;
  showSlides();
  function showSlides() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;
    slides.forEach((slide, index) => {
      slide.style.display = "none";
      slide.classList.remove("fade");
    });
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade");
    setTimeout(showSlides, 4000);
  }
}

function setupActionButtons(project) {
  const pageUrl = window.location.href;
  const shareText = `Lihat proyek keren ini: ${project.title}`;
  const twitterBtn = document.getElementById("share-twitter-btn");
  const linkedinBtn = document.getElementById("share-linkedin-btn");

  if (twitterBtn) twitterBtn.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`;
  if (linkedinBtn) linkedinBtn.href = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(project.title)}&summary=${encodeURIComponent(project.shortDescription)}`;

  const copyLinkBtn = document.getElementById("copy-link-btn");
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        copyLinkBtn.innerHTML = '<i class="fas fa-check"></i> Tersalin!';
        setTimeout(() => {
          copyLinkBtn.innerHTML = '<i class="fas fa-link"></i> Salin Tautan';
        }, 2000);
      });
    });
  }

  const copyCodeBtn = document.querySelector(".copy-code-btn");
  if (copyCodeBtn) {
    copyCodeBtn.addEventListener("click", () => {
      const code = document.getElementById("code-snippet-block").textContent;
      navigator.clipboard.writeText(code).then(() => {
        const originalIcon = copyCodeBtn.innerHTML;
        copyCodeBtn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
          copyCodeBtn.innerHTML = originalIcon;
        }, 2000);
      });
    });
  }
}