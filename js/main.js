// PCB Consulting & Solar Solutions — site scripts

document.addEventListener('DOMContentLoaded', function () {
  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Footer year ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ---- Pre-fill service dropdown from ?service= or ?package= in the URL ---- */
  var serviceSelect = document.getElementById('service');
  if (serviceSelect) {
    var params = new URLSearchParams(window.location.search);
    var requested = params.get('service') || params.get('package');
    if (requested) {
      var normalized = requested.replace(/-/g, ' ').trim().toLowerCase();
      var matched = false;
      Array.prototype.forEach.call(serviceSelect.options, function (opt) {
        if (opt.value.toLowerCase() === normalized || opt.text.toLowerCase() === normalized) {
          opt.selected = true;
          matched = true;
        }
      });
      if (!matched) {
        var extraOpt = document.createElement('option');
        extraOpt.value = requested;
        extraOpt.textContent = requested;
        extraOpt.selected = true;
        serviceSelect.appendChild(extraOpt);
      }
    }
  }

  /* ---- Quote form: builds a pre-filled email via mailto ----
     This is a static site with no backend, so the form composes a
     mailto: draft addressed to PCB Consulting rather than silently
     "submitting" anywhere. Swap this out for a real form backend
     (Formspree, Netlify Forms, etc.) before going live — see README. */
  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var phone = form.phone.value.trim();
      var service = form.service.value;
      var message = form.message.value.trim();

      var subject = encodeURIComponent('Quote Request: ' + (service || 'Solar / Electrical') + ' — ' + name);
      var bodyLines = [
        'Name: ' + name,
        'Email: ' + email,
        'Phone: ' + phone,
        'Service required: ' + service,
        '',
        'Project details:',
        message
      ];
      var body = encodeURIComponent(bodyLines.join('\n'));
      var mailto = 'mailto:info@pcbconsulting.co.za?subject=' + subject + '&body=' + body;

      var status = document.getElementById('form-status');
      if (status) {
        status.textContent = 'Opening your email app with the details filled in — just hit send. Prefer WhatsApp? Use the button below instead.';
        status.classList.add('visible', 'success');
      }
      window.location.href = mailto;
    });
  }
});
