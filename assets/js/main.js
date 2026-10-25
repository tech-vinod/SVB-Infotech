/**
 * SVB INFOTECH - MAIN INTERACTIVE LOGIC
 * Navigation, Filtering, Carousels, Modals & Toast Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCounters();
  initPlacementCarousel();
  initCoursesModule();
  initModals();
  initForms();
  initBackToTop();
});

/* ==========================================================================
   NAVIGATION & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');
  const navLinks = document.querySelectorAll('.mobile-nav-links a');

  if (toggleBtn && drawer && overlay) {
    function toggleMenu() {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        toggleBtn.classList.remove('open');
        document.body.style.overflow = '';
      } else {
        drawer.classList.add('open');
        overlay.classList.add('open');
        toggleBtn.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }

    toggleBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (drawer.classList.contains('open')) {
          toggleMenu();
        }
      });
    });
  }

  // Header scroll shadow
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   STAT COUNTER ANIMATION
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.counter-value');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target') || '0', 10);
        const suffix = counter.getAttribute('data-suffix') || '';
        let start = 0;
        const duration = 1600;
        const stepTime = 20;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            counter.textContent = target.toLocaleString() + suffix;
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(start).toLocaleString() + suffix;
          }
        }, stepTime);

        obs.unobserve(counter);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

/* ==========================================================================
   PLACEMENT STORIES CAROUSEL
   ========================================================================== */
let carouselCurrentIndex = 0;
let carouselTimer = null;

function initPlacementCarousel() {
  const container = document.getElementById('placementCardsContainer');
  const prevBtn = document.getElementById('placementPrevBtn');
  const nextBtn = document.getElementById('placementNextBtn');
  const dotsContainer = document.getElementById('placementDotsContainer');

  if (!container || typeof PLACEMENT_STORIES === 'undefined') return;

  function renderCarousel() {
    container.innerHTML = '';
    
    // Calculate visible count based on window width
    const width = window.innerWidth;
    let visibleCount = 3;
    if (width <= 768) visibleCount = 1;
    else if (width <= 1024) visibleCount = 2;

    const total = PLACEMENT_STORIES.length;
    
    for (let i = 0; i < visibleCount; i++) {
      const idx = (carouselCurrentIndex + i) % total;
      const story = PLACEMENT_STORIES[idx];

      const card = document.createElement('div');
      card.className = 'student-card';
      card.innerHTML = `
        <div class="student-card-header">
          <div class="student-info-group">
            <img src="${story.avatar}" alt="${story.name}" class="student-avatar" onerror="this.src='assets/images/student_karthik.jpg'">
            <div class="student-meta">
              <h4>${story.name}</h4>
              <p>${story.education}</p>
            </div>
          </div>
          <span class="verified-pill">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ${story.statusBadge}
          </span>
        </div>
        <div class="placed-at-box">
          <div class="placed-at-label">Placed At</div>
          <div class="company-name">${story.company}</div>
          <div class="job-role">${story.role}</div>
        </div>
        <div class="salary-package-pill">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          <span>${story.package}</span>
        </div>
        <div class="card-footer-meta">
          <span class="badge-status">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            ${story.offerStatus}
          </span>
          <span class="batch-num">${story.batch}</span>
        </div>
      `;
      container.appendChild(card);
    }

    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === carouselCurrentIndex ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => {
          carouselCurrentIndex = i;
          renderCarousel();
          resetTimer();
        });
        dotsContainer.appendChild(dot);
      }
    }
  }

  function nextSlide() {
    carouselCurrentIndex = (carouselCurrentIndex + 1) % PLACEMENT_STORIES.length;
    renderCarousel();
  }

  function prevSlide() {
    carouselCurrentIndex = (carouselCurrentIndex - 1 + PLACEMENT_STORIES.length) % PLACEMENT_STORIES.length;
    renderCarousel();
  }

  function resetTimer() {
    if (carouselTimer) clearInterval(carouselTimer);
    carouselTimer = setInterval(nextSlide, 5000);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetTimer();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetTimer();
    });
  }

  window.addEventListener('resize', renderCarousel);
  renderCarousel();
  resetTimer();
}

/* ==========================================================================
   COURSES MODULE (SEARCH, FILTER & DYNAMIC RENDERING)
   ========================================================================== */
function initCoursesModule() {
  const coursesContainer = document.getElementById('coursesGridContainer');
  const searchInput = document.getElementById('courseSearchInput');
  const deptSelect = document.getElementById('departmentFilterSelect');
  const countBadge = document.getElementById('courseCountBadge');
  const summaryCount = document.getElementById('coursesSummaryCount');
  const clearBtn = document.getElementById('clearCourseFilterBtn');

  if (!coursesContainer || typeof COURSES_DATA === 'undefined') return;

  function renderCourses(list) {
    coursesContainer.innerHTML = '';

    if (list.length === 0) {
      coursesContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #ffffff; border-radius: 16px; border: 1px dashed #cbd5e1;">
          <h3 style="font-size: 1.5rem; margin-bottom: 10px; color: #334155;">No courses found</h3>
          <p style="color: #64748b; margin-bottom: 20px;">Try adjusting your keyword or selecting "All Departments".</p>
          <button class="btn-primary" onclick="resetCourseFilters()">Show All Courses</button>
        </div>
      `;
      if (countBadge) countBadge.textContent = '0 COURSES FOUND';
      if (summaryCount) summaryCount.textContent = '0 Found';
      return;
    }

    list.forEach(course => {
      const card = document.createElement('article');
      card.className = 'course-card-item';
      card.innerHTML = `
        <div class="course-thumbnail-box">
          <img src="${course.image}" alt="${course.title}" loading="lazy" onerror="this.src='assets/images/course_fullstack.jpg'">
          <span class="course-category-tag">${course.badgeText}</span>
        </div>
        <div class="course-card-body">
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <div class="course-card-meta">
            <span class="course-duration">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              ${course.duration}
            </span>
            <span class="course-rating">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              ${course.rating}
            </span>
          </div>
          <button type="button" class="course-cta-link" onclick="openCourseDetails('${course.id}')">
            View Course &rarr;
          </button>
        </div>
      `;
      coursesContainer.appendChild(card);
    });

    if (countBadge) countBadge.textContent = `${list.length} COURSES FOUND`;
    if (summaryCount) summaryCount.textContent = `${list.length} Found`;
  }

  function filterCourses() {
    const query = (searchInput?.value || '').toLowerCase().trim();
    const department = deptSelect?.value || 'all';

    const filtered = COURSES_DATA.filter(c => {
      const matchesQuery = c.title.toLowerCase().includes(query) ||
                           c.description.toLowerCase().includes(query) ||
                           c.tools.some(t => t.toLowerCase().includes(query));
      const matchesDept = department === 'all' || c.category === department;
      return matchesQuery && matchesDept;
    });

    renderCourses(filtered);
  }

  window.resetCourseFilters = function() {
    if (searchInput) searchInput.value = '';
    if (deptSelect) deptSelect.value = 'all';
    filterCourses();
  };

  if (searchInput) searchInput.addEventListener('input', filterCourses);
  if (deptSelect) deptSelect.addEventListener('change', filterCourses);
  if (clearBtn) clearBtn.addEventListener('click', window.resetCourseFilters);

  // Initial render
  renderCourses(COURSES_DATA);
}

/* ==========================================================================
   MODAL DIALOGS (ENQUIRY & COURSE DETAILS)
   ========================================================================== */
function initModals() {
  const enquiryModal = document.getElementById('enquiryModal');
  const courseModal = document.getElementById('courseDetailModal');
  const enquiryTriggers = document.querySelectorAll('.open-enquiry-modal-btn');
  const closeButtons = document.querySelectorAll('.modal-close-btn');
  const overlays = document.querySelectorAll('.modal-overlay');

  enquiryTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const courseName = btn.getAttribute('data-course-name') || '';
      openEnquiryModal(courseName);
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

function openEnquiryModal(preselectedCourse = '') {
  const modal = document.getElementById('enquiryModal');
  if (!modal) return;

  const courseSelect = document.getElementById('enquiryCourseSelect');
  if (courseSelect && preselectedCourse) {
    courseSelect.value = preselectedCourse;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openCourseDetails(courseId) {
  if (typeof COURSES_DATA === 'undefined') return;
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  const modal = document.getElementById('courseDetailModal');
  const body = document.getElementById('courseDetailModalBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="margin-bottom: 24px;">
      <span class="section-tag">${course.badgeText} CERTIFIED</span>
      <h2 style="font-size: 1.85rem; margin-top: 8px; margin-bottom: 8px;">${course.title}</h2>
      <div style="display: flex; gap: 20px; font-size: 0.875rem; color: #64748b; font-weight: 600; margin-bottom: 16px;">
        <span>⏳ Duration: <strong>${course.duration}</strong></span>
        <span>⭐ Rating: <strong>${course.rating} / 5.0 (${course.reviewsCount})</strong></span>
      </div>
      <p style="font-size: 0.95rem; line-height: 1.6; color: #475569;">${course.overview}</p>
    </div>

    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 12px; color: #0f172a;">Course Syllabus & Modules</h4>
      <ul style="display: flex; flex-direction: column; gap: 10px;">
        ${course.syllabus.map((s, idx) => `
          <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: #334155; line-height: 1.5;">
            <span style="color: #00a896; font-weight: 800;">✓</span>
            <span>${s}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="margin-bottom: 24px;">
      <h4 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 12px; color: #0f172a;">Technologies & Tools Covered</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        ${course.tools.map(t => `
          <span style="padding: 6px 14px; background: #f0fdfa; border: 1px solid rgba(0,168,150,0.2); color: #00a896; font-size: 0.8125rem; font-weight: 700; border-radius: 9999px;">${t}</span>
        `).join('')}
      </div>
    </div>

    <div style="display: flex; gap: 14px; flex-wrap: wrap; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
      <button class="btn-primary" onclick="closeAllModals(); openEnquiryModal('${course.title}')" style="flex: 1;">
        Enquire & Enroll Now
      </button>
      <button class="btn-secondary" onclick="closeAllModals()" style="flex: 1;">
        Close Preview
      </button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAllModals() {
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(m => m.classList.remove('open'));
  document.body.style.overflow = '';
}

/* ==========================================================================
   FORM SUBMISSION & TOAST NOTIFICATION
   ========================================================================== */
function initForms() {
  const contactForm = document.getElementById('contactForm');
  const enquiryForm = document.getElementById('enquiryModalForm');
  const quickEnquiryForm = document.getElementById('homeQuickEnquiryForm');

  function handleFormSubmit(form, formType) {
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('[name="name"]')?.value || 'Student';
      const phone = form.querySelector('[name="phone"]')?.value || '';
      const email = form.querySelector('[name="email"]')?.value || '';
      const course = form.querySelector('[name="course"]')?.value || 'General Enquiry';

      // Save to localStorage as a demonstration of lead capture
      const lead = {
        name,
        phone,
        email,
        course,
        date: new Date().toISOString(),
        formType
      };

      try {
        const existingLeads = JSON.parse(localStorage.getItem('svb_leads') || '[]');
        existingLeads.push(lead);
        localStorage.setItem('svb_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.warn('Storage quota or local issue:', err);
      }

      form.reset();
      closeAllModals();
      showToast(`Thank you ${name}! Your enquiry has been received. Our counselor will contact you shortly.`);
    });
  }

  handleFormSubmit(contactForm, 'Contact Page Form');
  handleFormSubmit(enquiryForm, 'Modal Enquiry');
  handleFormSubmit(quickEnquiryForm, 'Home Quick Enquiry');
}

function showToast(message) {
  let toast = document.getElementById('liveToastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'liveToastNotification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/* ==========================================================================
   BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
