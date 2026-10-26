/**
 * SVB INFOTECH - MAIN INTERACTIVE LOGIC
 * Navigation, Filtering, Carousels, Modals & Toast Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCounters();
  initHeroAiAnimation();
  initPlacementCarousel();
  initCoursesModule();
  initModals();
  initForms();
  initBackToTop();
  initChatbot();
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

  // Mobile Dropdown Accordion Toggle
  const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
  mobileDropdownToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const group = btn.closest('.mobile-dropdown-group');
      if (group) {
        const isOpen = group.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }
    });
  });

  // Desktop Dropdown Support (touch screens & keyboard)
  const dropdownContainers = document.querySelectorAll('.nav-item-dropdown');
  dropdownContainers.forEach(container => {
    const toggle = container.querySelector('.dropdown-toggle');
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        // If clicking on a touch device without hover
        if (window.innerWidth >= 992) {
          const isOpen = container.classList.toggle('open');
          toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
      });
    }
  });

  // Close desktop dropdown when clicking outside
  document.addEventListener('click', (e) => {
    dropdownContainers.forEach(container => {
      if (!container.contains(e.target)) {
        container.classList.remove('open');
        const toggle = container.querySelector('.dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

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
      const matchesQuery = !query ||
                           c.title.toLowerCase().includes(query) ||
                           c.description.toLowerCase().includes(query) ||
                           c.badgeText.toLowerCase().includes(query) ||
                           (c.overview && c.overview.toLowerCase().includes(query)) ||
                           c.tools.some(t => t.toLowerCase().includes(query)) ||
                           c.syllabus.some(s => s.toLowerCase().includes(query));
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
    let matched = false;
    for (let i = 0; i < courseSelect.options.length; i++) {
      if (courseSelect.options[i].value.toLowerCase() === preselectedCourse.toLowerCase() ||
          courseSelect.options[i].text.toLowerCase() === preselectedCourse.toLowerCase()) {
        courseSelect.selectedIndex = i;
        matched = true;
        break;
      }
    }
    if (!matched) {
      const opt = new Option(preselectedCourse, preselectedCourse, true, true);
      courseSelect.add(opt);
      courseSelect.value = preselectedCourse;
    }
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
   FORM SUBMISSION & GOOGLE SHEETS INTEGRATION
   ========================================================================== */

// Google Sheets configuration
const GOOGLE_SHEET_INTERNSHIP_ID = '1xm6ZoVX2ljvm9iRX6g3qMNGzdqxnSyLMDF57pEOoRCE';
const GOOGLE_SHEET_ENQUIRY_ID = '1geA2_oq2hc6XT1RTOQGTLWTxIS8aVVcgZtyF0w_aHC8';

// Optional Google Apps Script Web App URL (deployed from google-apps-script.js)
let GOOGLE_SHEETS_WEBAPP_URL = window.SVB_GOOGLE_APPS_SCRIPT_URL || localStorage.getItem('svb_sheets_url') || '';

// Global helper to allow user/admin to connect deployed Web App URL
window.setGoogleSheetsWebhook = function(url) {
  if (url && typeof url === 'string') {
    localStorage.setItem('svb_sheets_url', url.trim());
    GOOGLE_SHEETS_WEBAPP_URL = url.trim();
    console.log('✅ SVB Google Sheets Webhook configured:', GOOGLE_SHEETS_WEBAPP_URL);
    showToast('Google Sheets Webhook URL successfully saved!');
  }
};

/**
 * Dispatch lead data to Google Sheet via Google Apps Script Web App
 */
async function postToGoogleSheets(payload) {
  console.log('📊 Dispatching lead data to Google Sheets:', payload);

  if (GOOGLE_SHEETS_WEBAPP_URL) {
    try {
      await fetch(GOOGLE_SHEETS_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors', // standard for Google Apps Script Web App webhooks
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      });
      console.log('✅ Form data posted to Google Sheets Web App successfully.');
    } catch (err) {
      console.warn('⚠️ Google Sheets Web App dispatch error:', err);
    }
  } else {
    console.info(
      'ℹ️ Note: Form data safely stored in browser localStorage. To connect live Google Sheets directly:\n' +
      '1. Open google-apps-script.js in the project folder.\n' +
      '2. Follow the 1-minute deployment instructions in Google Sheets (Extensions > Apps Script).\n' +
      '3. Run: setGoogleSheetsWebhook("https://script.google.com/macros/s/.../exec")'
    );
  }
}

function initForms() {
  const contactForm = document.getElementById('contactForm');
  const enquiryForm = document.getElementById('enquiryModalForm');
  const quickEnquiryForm = document.getElementById('homeQuickEnquiryForm');
  const internshipForm = document.getElementById('internshipApplicationForm');

  // Handle Enquiry & Contact Forms -> Store to Enquiry Sheet (1geA2_oq2hc6XT1RTOQGTLWTxIS8aVVcgZtyF0w_aHC8)
  function handleEnquirySubmit(form, sourceName) {
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('[name="name"]')?.value || 'Prospective Student';
      const phone = form.querySelector('[name="phone"]')?.value || '';
      const email = form.querySelector('[name="email"]')?.value || '';
      const course = form.querySelector('[name="course"]')?.value || 'General Technical Counseling';
      const batch = form.querySelector('[name="batch"]')?.value || 'Regular Weekday';
      const message = form.querySelector('[name="message"]')?.value || `Enquiry from ${sourceName}`;

      const leadPayload = {
        formType: 'enquiry',
        targetSheetId: GOOGLE_SHEET_ENQUIRY_ID,
        sheetUrl: `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ENQUIRY_ID}/edit`,
        timestamp: new Date().toISOString(),
        name,
        phone,
        email,
        course,
        mode: batch,
        message,
        sourcePage: window.location.pathname || sourceName
      };

      // 1. Dispatch to Google Sheets
      postToGoogleSheets(leadPayload);

      // 2. Local backup
      try {
        const existingLeads = JSON.parse(localStorage.getItem('svb_enquiry_leads') || '[]');
        existingLeads.push(leadPayload);
        localStorage.setItem('svb_enquiry_leads', JSON.stringify(existingLeads));
      } catch (err) {
        console.warn('Storage quota issue:', err);
      }

      form.reset();
      closeAllModals();
      showToast(`Thank you ${name}! Your enquiry has been received and saved. Our counselor will contact you shortly.`);
    });
  }

  handleEnquirySubmit(contactForm, 'Contact Page');
  handleEnquirySubmit(enquiryForm, 'Header Enquiry Modal');
  handleEnquirySubmit(quickEnquiryForm, 'Home Quick Enquiry Form');

  // Handle Internship Application Form -> Store to Internship Sheet (1xm6ZoVX2ljvm9iRX6g3qMNGzdqxnSyLMDF57pEOoRCE)
  if (internshipForm) {
    const resumeInput = document.getElementById('internshipResumeInput');
    const resumeBrowseArea = document.getElementById('resumeBrowseArea');
    const resumeSelectedText = document.getElementById('resumeSelectedText');
    const autofillZone = document.getElementById('autofillZone');
    const autofillFileName = document.getElementById('autofillFileName');
    const clearBtn = document.getElementById('internshipClearBtn');
    const cancelBtn = document.getElementById('internshipCancelBtn');

    let currentAttachedFileName = 'Not uploaded (optional)';

    // Trigger file chooser
    if (resumeBrowseArea && resumeInput) {
      resumeBrowseArea.addEventListener('click', (e) => {
        if (e.target.tagName !== 'INPUT') {
          resumeInput.click();
        }
      });
    }

    if (autofillZone && resumeInput) {
      autofillZone.addEventListener('click', (e) => {
        if (e.target.tagName !== 'INPUT') {
          resumeInput.click();
        }
      });

      // Drag & drop support on autofill zone
      ['dragenter', 'dragover'].forEach(eventName => {
        autofillZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          autofillZone.style.borderColor = '#00a896';
          autofillZone.style.background = '#f0fdfa';
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        autofillZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          autofillZone.style.borderColor = '#94a3b8';
          autofillZone.style.background = '#f8fafc';
        });
      });

      autofillZone.addEventListener('drop', (e) => {
        const files = e.dataTransfer?.files;
        if (files && files.length > 0) {
          handleFileAttached(files[0].name);
        }
      });
    }

    if (resumeInput) {
      resumeInput.addEventListener('change', () => {
        if (resumeInput.files && resumeInput.files.length > 0) {
          handleFileAttached(resumeInput.files[0].name);
        }
      });
    }

    function handleFileAttached(fileName) {
      currentAttachedFileName = fileName;
      if (resumeSelectedText) {
        resumeSelectedText.textContent = `Attached: ${fileName}`;
        resumeSelectedText.style.color = '#00a896';
        resumeSelectedText.style.fontWeight = '700';
      }
      if (autofillFileName) {
        autofillFileName.style.display = 'block';
        autofillFileName.textContent = `Attached Resume: ${fileName}`;
      }
      showToast(`Resume attached: ${fileName}`);
    }

    // Clear Button
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        internshipForm.reset();
        currentAttachedFileName = 'Not uploaded (optional)';
        if (resumeSelectedText) {
          resumeSelectedText.textContent = 'Attach resume document (.pdf, .doc, .docx)';
          resumeSelectedText.style.color = '';
          resumeSelectedText.style.fontWeight = '';
        }
        if (autofillFileName) {
          autofillFileName.style.display = 'none';
          autofillFileName.textContent = '';
        }
        showToast('Form fields cleared.');
      });
    }

    // Cancel Button
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        internshipForm.reset();
        currentAttachedFileName = 'Not uploaded (optional)';
        if (resumeSelectedText) {
          resumeSelectedText.textContent = 'Attach resume document (.pdf, .doc, .docx)';
          resumeSelectedText.style.color = '';
          resumeSelectedText.style.fontWeight = '';
        }
        if (autofillFileName) {
          autofillFileName.style.display = 'none';
          autofillFileName.textContent = '';
        }
        window.scrollTo({ top: 300, behavior: 'smooth' });
      });
    }

    // Submit Application
    internshipForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const prefix = internshipForm.querySelector('[name="prefix"]')?.value || '';
      const firstName = internshipForm.querySelector('[name="firstName"]')?.value?.trim() || '';
      const lastName = internshipForm.querySelector('[name="lastName"]')?.value?.trim() || '';
      const email = internshipForm.querySelector('[name="email"]')?.value?.trim() || '';
      const phone = internshipForm.querySelector('[name="phone"]')?.value?.trim() || '';
      const currentLocation = internshipForm.querySelector('[name="currentLocation"]')?.value?.trim() || '';
      const preferredLocation = internshipForm.querySelector('[name="preferredLocation"]')?.value || '';
      const domain = internshipForm.querySelector('[name="domain"]')?.value || '';

      if (!firstName || !lastName || !email || !phone) {
        showToast('Please fill in all required fields marked with *');
        return;
      }

      const fullName = (prefix && prefix !== '-None-' ? prefix + ' ' : '') + firstName + ' ' + lastName;

      const internshipPayload = {
        formType: 'internship',
        targetSheetId: GOOGLE_SHEET_INTERNSHIP_ID,
        sheetUrl: `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_INTERNSHIP_ID}/edit`,
        timestamp: new Date().toISOString(),
        prefix,
        firstName,
        lastName,
        fullName,
        email,
        phone: `+91 ${phone}`,
        currentLocation,
        preferredLocation,
        domain,
        resumeFileName: currentAttachedFileName,
        status: 'New Application'
      };

      // 1. Dispatch to Google Sheets
      postToGoogleSheets(internshipPayload);

      // 2. Save in localStorage
      try {
        const apps = JSON.parse(localStorage.getItem('svb_internship_leads') || '[]');
        apps.push(internshipPayload);
        localStorage.setItem('svb_internship_leads', JSON.stringify(apps));
      } catch (err) {
        console.warn('Storage quota issue:', err);
      }

      // Reset form
      internshipForm.reset();
      currentAttachedFileName = 'Not uploaded (optional)';
      if (resumeSelectedText) {
        resumeSelectedText.textContent = 'Attach resume document (.pdf, .doc, .docx)';
        resumeSelectedText.style.color = '';
        resumeSelectedText.style.fontWeight = '';
      }
      if (autofillFileName) {
        autofillFileName.style.display = 'none';
        autofillFileName.textContent = '';
      }

      showToast(`Thank you ${fullName}! Your internship application has been submitted and stored successfully.`);
    });
  }
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

/* ==========================================================================
   HERO TECH & AI NETWORK ANIMATION
   ========================================================================== */
function initHeroAiAnimation() {
  const canvas = document.getElementById('heroAiCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let animationId = null;
  let isRunning = false;

  const particles = [];
  const particleCount = 38;
  const maxDistance = 95;

  const colors = [
    'rgba(0, 229, 255, ',   // Electric Cyan
    'rgba(0, 168, 150, ',   // Primary Teal
    'rgba(16, 185, 129, ',  // Emerald
    'rgba(56, 189, 248, '   // Sky Blue
  ];

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width || canvas.offsetWidth || 500;
    height = rect.height || canvas.offsetHeight || 440;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    if (particles.length === 0) {
      initParticles();
    }
  }

  function initParticles() {
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1.2,
        baseColor: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.03 + Math.random() * 0.03
      });
    }
  }

  // Data packets traveling between nodes
  const packets = [];
  function spawnPacket(p1, p2) {
    if (packets.length > 8) return;
    packets.push({
      x1: p1.x, y1: p1.y,
      x2: p2.x, y2: p2.y,
      progress: 0,
      speed: 0.02 + Math.random() * 0.02
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += p.pulseSpeed;

      // Bounce at borders
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Pulse size
      const currentRadius = p.radius + Math.sin(p.pulse) * 0.6;
      const alpha = 0.6 + Math.sin(p.pulse) * 0.3;

      // Outer glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, currentRadius * 2, 0, Math.PI * 2);
      ctx.fillStyle = p.baseColor + (alpha * 0.25) + ')';
      ctx.fill();

      // Core node
      ctx.beginPath();
      ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = p.baseColor + alpha + ')';
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const lineAlpha = (1 - dist / maxDistance) * 0.45;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 229, 255, ${lineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Occasionally spawn a moving data packet
          if (Math.random() < 0.002) {
            spawnPacket(p, p2);
          }
        }
      }
    }

    // Draw data packets traveling on connections
    for (let i = packets.length - 1; i >= 0; i--) {
      const pkt = packets[i];
      pkt.progress += pkt.speed;
      if (pkt.progress >= 1) {
        packets.splice(i, 1);
        continue;
      }

      const currX = pkt.x1 + (pkt.x2 - pkt.x1) * pkt.progress;
      const currY = pkt.y1 + (pkt.y2 - pkt.y1) * pkt.progress;

      ctx.beginPath();
      ctx.arc(currX, currY, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#00e5ff';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    if (isRunning) {
      animationId = requestAnimationFrame(render);
    }
  }

  function startAnimation() {
    if (!isRunning) {
      isRunning = true;
      animationId = requestAnimationFrame(render);
    }
  }

  function stopAnimation() {
    isRunning = false;
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }

  // Optimize performance: pause when offscreen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAnimation();
      } else {
        stopAnimation();
      }
    });
  }, { threshold: 0.1 });

  observer.observe(canvas);

  window.addEventListener('resize', () => {
    resize();
  });

  // Initial setup
  resize();
  startAnimation();
}

/* ==========================================================================
   SVB AI CHATBOT VIRTUAL ASSISTANT
   Automated Knowledge Engine & Interactive Dialog
   ========================================================================== */
function initChatbot() {
  ensureChatbotDom();

  const toggleBtn = document.getElementById('chatbotToggleBtn');
  const chatWindow = document.getElementById('svbChatbotWindow');
  const closeBtn = document.getElementById('chatbotCloseBtn');
  const clearBtn = document.getElementById('chatbotClearBtn');
  const messagesBody = document.getElementById('chatbotMessagesBody');
  const inputForm = document.getElementById('chatbotInputForm');
  const inputField = document.getElementById('chatbotInputField');
  const chipsWrap = document.getElementById('chatbotChipsWrap');

  let hasInitializedConversation = false;

  function ensureChatbotDom() {
    if (document.getElementById('svbChatbotWindow')) return;

    const chatbotHtml = `
      <div class="svb-chatbot-window" id="svbChatbotWindow" role="dialog" aria-label="SVB AI Assistant Chatbot">
        <!-- Header -->
        <div class="chatbot-header">
          <div class="chatbot-header-info">
            <div class="chatbot-avatar">
              SVB
              <span class="online-status-dot"></span>
            </div>
            <div class="chatbot-title-box">
              <h4>SVB AI Assistant</h4>
              <span><span style="font-size: 8px;">●</span> Online • Instant Answers</span>
            </div>
          </div>
          <div class="chatbot-header-actions">
            <button type="button" class="chatbot-icon-btn" id="chatbotClearBtn" title="Reset chat" aria-label="Reset chat">↺</button>
            <button type="button" class="chatbot-icon-btn" id="chatbotCloseBtn" title="Close chat" aria-label="Close chat">&times;</button>
          </div>
        </div>

        <!-- Messages Area -->
        <div class="chatbot-body" id="chatbotMessagesBody"></div>

        <!-- Quick Question Chips -->
        <div class="chatbot-chips-section">
          <div class="chatbot-chips-label">Quick Questions:</div>
          <div class="chatbot-chips-wrap" id="chatbotChipsWrap">
            <button type="button" class="chatbot-chip" data-query="Top certified courses">🎓 Top Courses</button>
            <button type="button" class="chatbot-chip" data-query="Course fees and installments">💰 Course Fees</button>
            <button type="button" class="chatbot-chip" data-query="Placement assistance and hiring partners">💼 100% Placement</button>
            <button type="button" class="chatbot-chip" data-query="Real-time software internship">💻 Internship</button>
            <button type="button" class="chatbot-chip" data-query="How to verify certificate">📜 Verify Certificate</button>
            <button type="button" class="chatbot-chip" data-query="Campus location and contact number">📍 Locations & Call</button>
          </div>
        </div>

        <!-- Input Bar -->
        <form class="chatbot-input-bar" id="chatbotInputForm">
          <input type="text" class="chatbot-input" id="chatbotInputField" placeholder="Ask about courses, fees, placements..." autocomplete="off" required>
          <button type="submit" class="chatbot-send-btn" id="chatbotSendBtn" aria-label="Send message">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
        <div class="chatbot-footer-caption">
          ⚡ Powered by SVB Infotech AI Knowledge Engine
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHtml);
  }

  // Toggle open / close
  function toggleChatbot(forceState) {
    if (!chatWindow) return;
    const shouldOpen = typeof forceState === 'boolean' ? forceState : !chatWindow.classList.contains('open');

    if (shouldOpen) {
      chatWindow.classList.add('open');
      toggleBtn?.classList.add('chat-active');
      if (!hasInitializedConversation) {
        initWelcomeMessage();
        hasInitializedConversation = true;
      }
      setTimeout(() => {
        inputField?.focus();
        scrollToBottom();
      }, 250);
    } else {
      chatWindow.classList.remove('open');
      toggleBtn?.classList.remove('chat-active');
    }
  }

  // Expose toggleChatbot globally
  window.toggleSvbChatbot = toggleChatbot;

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleChatbot();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      toggleChatbot(false);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (messagesBody) messagesBody.innerHTML = '';
      initWelcomeMessage();
      showToast('Chat history reset.');
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chatWindow && chatWindow.classList.contains('open')) {
      toggleChatbot(false);
    }
  });

  // Welcome message
  function initWelcomeMessage() {
    if (!messagesBody) return;
    const timeStr = getCurrentTime();
    const welcomeHtml = `
      <div class="chat-row bot">
        <div class="chat-bot-avatar-mini">SVB</div>
        <div>
          <div class="chat-bubble">
            👋 <strong>Vanakkam & Welcome to SVB Infotech!</strong><br><br>
            I am your 24/7 AI Career Counselor. I can instantly assist you with:
            <ul style="margin: 6px 0 6px 18px; padding: 0; list-style: disc; font-size: 0.825rem; line-height: 1.6;">
              <li>Certified IT Courses & Curriculum</li>
              <li>Course Fees, 0% EMI & Scholarships</li>
              <li>100% Placement Assurance & Partner Companies</li>
              <li>Real-time Software Internship Applications</li>
              <li>ISO Certificate Online Verification</li>
              <li>Chennai & Tuticorin Campus Locations</li>
            </ul>
            What would you like to know today? You can choose a quick question below or type your query!
            <div class="chat-action-links">
              <a href="courses.html" class="chat-action-btn">🎓 View All Courses</a>
              <button type="button" class="chat-action-btn primary open-enquiry-modal-btn">📝 Free Demo Batch</button>
            </div>
          </div>
          <span class="chat-timestamp">${timeStr}</span>
        </div>
      </div>
    `;
    messagesBody.innerHTML = welcomeHtml;
    attachDynamicActionEvents();
    scrollToBottom();
  }

  function getCurrentTime() {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function scrollToBottom() {
    if (messagesBody) {
      messagesBody.scrollTop = messagesBody.scrollHeight;
    }
  }

  // Quick Chips Click Event
  if (chipsWrap) {
    chipsWrap.addEventListener('click', (e) => {
      const chip = e.target.closest('.chatbot-chip');
      if (chip) {
        const query = chip.getAttribute('data-query') || chip.textContent.trim();
        handleUserMessage(query);
      }
    });
  }

  // Form Submit
  if (inputForm && inputField) {
    inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = inputField.value.trim();
      if (!text) return;
      inputField.value = '';
      handleUserMessage(text);
    });
  }

  function handleUserMessage(userText) {
    if (!messagesBody) return;

    // Append User Message
    const userTime = getCurrentTime();
    const userMsgHtml = `
      <div class="chat-row user">
        <div>
          <div class="chat-bubble">${escapeHtml(userText)}</div>
          <span class="chat-timestamp">${userTime}</span>
        </div>
      </div>
    `;
    messagesBody.insertAdjacentHTML('beforeend', userMsgHtml);
    scrollToBottom();

    // Check if phone number was entered directly
    const phoneMatch = userText.match(/(?:(?:\+|0{0,2})91[\s-]?)?[6789]\d{9}/);
    if (phoneMatch) {
      handleLeadCaptureFromChat(phoneMatch[0], userText);
    }

    // Show Typing Indicator
    showTypingIndicator();

    // Generate intelligent bot reply after realistic delay
    setTimeout(() => {
      removeTypingIndicator();
      const replyData = generateBotKnowledgeReply(userText);
      const botTime = getCurrentTime();

      const botMsgHtml = `
        <div class="chat-row bot">
          <div class="chat-bot-avatar-mini">SVB</div>
          <div>
            <div class="chat-bubble">
              ${replyData.text}
              ${replyData.actionsHtml ? `<div class="chat-action-links">${replyData.actionsHtml}</div>` : ''}
            </div>
            <span class="chat-timestamp">${botTime}</span>
          </div>
        </div>
      `;

      messagesBody.insertAdjacentHTML('beforeend', botMsgHtml);
      attachDynamicActionEvents();
      scrollToBottom();
    }, 450);
  }

  function showTypingIndicator() {
    if (!messagesBody) return;
    const typingHtml = `
      <div class="chat-row bot" id="chatTypingRow">
        <div class="chat-bot-avatar-mini">SVB</div>
        <div class="typing-bubble">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      </div>
    `;
    messagesBody.insertAdjacentHTML('beforeend', typingHtml);
    scrollToBottom();
  }

  function removeTypingIndicator() {
    const row = document.getElementById('chatTypingRow');
    if (row) row.remove();
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function attachDynamicActionEvents() {
    if (!messagesBody) return;
    const modalButtons = messagesBody.querySelectorAll('.open-enquiry-modal-btn');
    modalButtons.forEach(btn => {
      btn.removeEventListener('click', handleModalBtnClick);
      btn.addEventListener('click', handleModalBtnClick);
    });
  }

  function handleModalBtnClick(e) {
    e.preventDefault();
    openEnquiryModal();
  }

  function handleLeadCaptureFromChat(phoneNumber, originalQuery) {
    console.log('📱 Phone number captured in chat:', phoneNumber);
    const chatLead = {
      formType: 'enquiry',
      targetSheetId: GOOGLE_SHEET_ENQUIRY_ID,
      sheetUrl: `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ENQUIRY_ID}/edit`,
      timestamp: new Date().toISOString(),
      name: 'Chatbot Visitor',
      phone: phoneNumber,
      email: 'chatbot-lead@svbinfotech.com',
      course: 'Chatbot Career Enquiry',
      mode: 'Phone Callback',
      message: `User asked in chatbot: "${originalQuery}"`,
      sourcePage: window.location.pathname || 'Chatbot Assistant'
    };

    postToGoogleSheets(chatLead);

    try {
      const existing = JSON.parse(localStorage.getItem('svb_enquiry_leads') || '[]');
      existing.push(chatLead);
      localStorage.setItem('svb_enquiry_leads', JSON.stringify(existing));
    } catch (err) {}
  }

  /* ========================================================================
     AUTOMATIC KNOWLEDGE BASE & PATTERN MATCHING
     ======================================================================== */
  function generateBotKnowledgeReply(query) {
    const q = query.toLowerCase();

    // 1. Greetings
    if (
      q.includes('hi') ||
      q.includes('hello') ||
      q.includes('hey') ||
      q.includes('vanakkam') ||
      q.includes('வணக்கம்') ||
      q.includes('namaste') ||
      q.includes('good morning') ||
      q.includes('good evening') ||
      q.includes('good afternoon')
    ) {
      return {
        text: `Vanakkam! 🙏 How can I assist you today? You can ask about our <strong>courses, syllabus, fees, 100% placement assurance, software internships, or campus locations</strong>.`,
        actionsHtml: `
          <a href="courses.html" class="chat-action-btn">🎓 Explore Courses</a>
          <button type="button" class="chat-action-btn primary open-enquiry-modal-btn">📝 Book Free Demo</button>
          <a href="tel:+917871000927" class="chat-action-btn">📞 Call +91 78710 00927</a>
        `
      };
    }

    // 2. Fees & Cost
    if (
      q.includes('fee') ||
      q.includes('cost') ||
      q.includes('price') ||
      q.includes('how much') ||
      q.includes('installment') ||
      q.includes('emi') ||
      q.includes('discount') ||
      q.includes('scholarship') ||
      q.includes('evalo') ||
      q.includes('evlo') ||
      q.includes('kattanam')
    ) {
      return {
        text: `💰 <strong>Affordable & Transparent Fee Structure</strong>:<br><br>
          • Certified programs range from <strong>₹15,000 to ₹35,000</strong> depending on specialization (1 to 4 months).<br>
          • <strong>0% Interest EMI / Installments</strong> available in 2 to 3 flexible parts.<br>
          • Merit scholarships available for college students and women in tech.<br>
          • Includes complete study materials, software setups, mock interviews, and 100% placement support.`,
        actionsHtml: `
          <button type="button" class="chat-action-btn primary open-enquiry-modal-btn">📝 Request Fee Breakdown & Syllabus</button>
          <a href="tel:+917871000927" class="chat-action-btn">📞 Speak with Counselor</a>
        `
      };
    }

    // 3. Courses & Syllabus
    if (
      q.includes('course') ||
      q.includes('syllabus') ||
      q.includes('subject') ||
      q.includes('mern') ||
      q.includes('python') ||
      q.includes('java') ||
      q.includes('spring') ||
      q.includes('data') ||
      q.includes('analytics') ||
      q.includes('power bi') ||
      q.includes('devops') ||
      q.includes('cloud') ||
      q.includes('aws') ||
      q.includes('full stack') ||
      q.includes('ui') ||
      q.includes('ux') ||
      q.includes('c++') ||
      q.includes('c program') ||
      q.includes('react')
    ) {
      return {
        text: `🎓 <strong>Popular Certified Software Tracks at SVB Infotech</strong>:<br><br>
          1. <strong>Full Stack Web Dev (MERN)</strong>: React.js, Node.js, Express, MongoDB, REST APIs.<br>
          2. <strong>Python & AI / Machine Learning</strong>: Python 3, Pandas, NumPy, Scikit-learn, GenAI.<br>
          3. <strong>Java Enterprise & Spring Boot</strong>: Core Java, Spring Boot, Microservices, Hibernate.<br>
          4. <strong>Data Analytics & Power BI</strong>: Advanced SQL, DAX, Excel, Dashboard Storytelling.<br>
          5. <strong>Cloud & DevOps</strong>: AWS, Azure, Docker, Linux, CI/CD Pipelines.<br>
          6. <strong>UI/UX Design</strong>: Figma, Wireframing, Interactive Prototypes.<br><br>
          All courses include <strong>3+ live deployed projects</strong> and mentor code reviews!`,
        actionsHtml: `
          <a href="courses.html" class="chat-action-btn">📚 View All 10+ Courses</a>
          <button type="button" class="chat-action-btn primary open-enquiry-modal-btn">📝 Register for Free Demo</button>
        `
      };
    }

    // 4. Placements & Companies / Jobs
    if (
      q.includes('placement') ||
      q.includes('job') ||
      q.includes('salary') ||
      q.includes('package') ||
      q.includes('ctc') ||
      q.includes('recruiter') ||
      q.includes('tcs') ||
      q.includes('infosys') ||
      q.includes('cognizant') ||
      q.includes('zoho') ||
      q.includes('accenture') ||
      q.includes('velai') ||
      q.includes('assurance') ||
      q.includes('assistance') ||
      q.includes('guarantee')
    ) {
      return {
        text: `🚀 <strong>100% Dedicated Placement Assistance</strong>:<br><br>
          • <strong>1,200+</strong> successful placements across top IT firms.<br>
          • <strong>12+ Active Recruiters</strong>: Cognizant, TCS, Infosys, HCL Tech, Accenture, Tech Mahindra, Zoho, Capgemini, Wipro, IBM, Amazon, Hexaware.<br>
          • <strong>Salary Packages</strong>: Average ₹4.5 LPA, with top offers up to ₹12.5 LPA.<br>
          • <strong>Dedicated Preparation</strong>: Professional resume revamp, GitHub portfolio polish, aptitude prep, and 1-on-1 mock technical interviews until you get placed!`,
        actionsHtml: `
          <a href="placement.html" class="chat-action-btn">💼 View Placement Track Record</a>
          <button type="button" class="chat-action-btn primary open-enquiry-modal-btn">📝 Enroll for Placement Batch</button>
        `
      };
    }

    // 5. Internship Program
    if (
      q.includes('internship') ||
      q.includes('intern') ||
      q.includes('live project') ||
      q.includes('lor') ||
      q.includes('recommendation') ||
      q.includes('apply') ||
      q.includes('resume')
    ) {
      return {
        text: `💻 <strong>Real-Time Software Internship Program</strong>:<br><br>
          • <strong>Duration</strong>: 1 to 3 Months (Flexible timings / Online & In-person).<br>
          • <strong>Key Tracks</strong>: MERN Stack, Python AI/ML, Java Cloud, Data Analytics.<br>
          • <strong>Deliverables</strong>: Experience Letter (LOR), verifiable ISO completion certificate, and code commits on GitHub.<br>
          • <strong>Direct Form</strong>: You can submit your application and upload your resume directly on our internship portal.`,
        actionsHtml: `
          <a href="internship.html#internshipApplyCard" class="chat-action-btn primary">📄 Apply for Internship Now</a>
          <a href="courses.html" class="chat-action-btn">📚 Check Tracks</a>
        `
      };
    }

    // 6. Certificate Verification
    if (
      q.includes('certificate') ||
      q.includes('verify') ||
      q.includes('verification') ||
      q.includes('genuine') ||
      q.includes('iso') ||
      q.includes('reg no') ||
      q.includes('student id')
    ) {
      return {
        text: `📜 <strong>Official Certificate Verification</strong>:<br><br>
          All SVB Infotech certificates are <strong>ISO 9001:2015 certified</strong> and employer recognized.<br>
          Each certificate has a unique ID (e.g., <em>SVB-2025-FS108</em>). You or any HR manager can verify it instantly on our online portal.`,
        actionsHtml: `
          <a href="verify-certificate.html" class="chat-action-btn primary">🔍 Open Certificate Verification</a>
        `
      };
    }

    // 7. Location & Timing / Branches
    if (
      q.includes('location') ||
      q.includes('address') ||
      q.includes('where') ||
      q.includes('chennai') ||
      q.includes('tuticorin') ||
      q.includes('urapakkam') ||
      q.includes('branch') ||
      q.includes('office') ||
      q.includes('center') ||
      q.includes('timing') ||
      q.includes('time') ||
      q.includes('open') ||
      q.includes('hours') ||
      q.includes('enga')
    ) {
      return {
        text: `📍 <strong>SVB Infotech Campus Locations</strong>:<br><br>
          <strong>Chennai Campus</strong>:<br>
          145, GST Road, Urapakkam, Chennai - 603210 (Opposite Railway Station).<br><br>
          <strong>Tuticorin Campus</strong>:<br>
          No 16, Pudukottai Road, Tuticorin - 628103.<br><br>
          🕒 <strong>Working Hours</strong>:<br>
          • Monday to Saturday: 8:00 AM – 8:30 PM<br>
          • Sunday: 9:00 AM – 5:00 PM<br>
          <em>Both in-person classroom and live online batches available!</em>`,
        actionsHtml: `
          <a href="contact.html" class="chat-action-btn">🗺️ View Map & Directions</a>
          <a href="tel:+917871000927" class="chat-action-btn primary">📞 Call +91 78710 00927</a>
        `
      };
    }

    // 8. Contact & Phone
    if (
      q.includes('contact') ||
      q.includes('phone') ||
      q.includes('number') ||
      q.includes('call') ||
      q.includes('email') ||
      q.includes('whatsapp') ||
      q.includes('speak') ||
      q.includes('counselor')
    ) {
      return {
        text: `📞 <strong>Get in Touch with SVB Infotech</strong>:<br><br>
          • <strong>Phone / WhatsApp</strong>: <a href="tel:+917871000927" style="color: #00a896; font-weight: 800;">+91 78710 00927</a><br>
          • <strong>Email</strong>: <a href="mailto:svbinfotech@gmail.com" style="color: #00a896; font-weight: 800;">svbinfotech@gmail.com</a><br><br>
          Or click below to have our senior technical counselor call you with free career advice!`,
        actionsHtml: `
          <a href="tel:+917871000927" class="chat-action-btn primary">📞 Call +91 78710 00927</a>
          <button type="button" class="chat-action-btn open-enquiry-modal-btn">📝 Request Free Callback</button>
        `
      };
    }

    // 9. Batches & Timings
    if (
      q.includes('batch') ||
      q.includes('weekend') ||
      q.includes('weekday') ||
      q.includes('online') ||
      q.includes('offline') ||
      q.includes('classroom') ||
      q.includes('duration')
    ) {
      return {
        text: `🗓️ <strong>Flexible Batch Schedules</strong>:<br><br>
          1. <strong>Regular Weekday Batches</strong>: Mon to Fri (Morning, Afternoon & Evening slots).<br>
          2. <strong>Weekend Batches</strong>: Sat & Sun (tailored for working professionals & college students).<br>
          3. <strong>Fast-Track Bootcamp</strong>: 4-6 weeks accelerated learning.<br>
          4. <strong>Live Online Interactive</strong>: Live Zoom/Teams lectures with real-time screen sharing and mentor assistance.`,
        actionsHtml: `
          <button type="button" class="chat-action-btn primary open-enquiry-modal-btn">📝 Reserve Next Batch Seat</button>
          <a href="courses.html" class="chat-action-btn">📚 Check Courses</a>
        `
      };
    }

    // 10. Fallback / Default
    return {
      text: `Thank you for asking! I'm here to help you choose the best tech career path.<br><br>
        Would you like to explore our certified courses, check fees, learn about our 100% placement assurance, or speak directly with an academic mentor?`,
      actionsHtml: `
        <a href="courses.html" class="chat-action-btn">🎓 Popular Courses</a>
        <a href="placement.html" class="chat-action-btn">💼 Placement Details</a>
        <a href="internship.html#internshipApplyCard" class="chat-action-btn">💻 Apply Internship</a>
        <button type="button" class="chat-action-btn primary open-enquiry-modal-btn">📝 Free Callback Request</button>
        <a href="tel:+917871000927" class="chat-action-btn">📞 Call +91 78710 00927</a>
      `
    };
  }
}


