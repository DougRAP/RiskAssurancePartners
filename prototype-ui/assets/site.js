/* Risk Assurance Partners — shared behaviour: mobile menu, calculator, contact form. */
(function () {
  'use strict';

  /* Mobile menu: close on Esc and after a link is chosen. */
  var toggle = document.getElementById('navtoggle');
  if (toggle) {
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { toggle.checked = false; } });
    Array.prototype.forEach.call(document.querySelectorAll('.nav a'), function (a) {
      a.addEventListener('click', function () { toggle.checked = false; });
    });
  }

  /* Multi-Year vs Subscription over the same four years. Owner-supplied
     illustration: $300 retail, dealer keeps 75% ($225) and remits $75;
     70% of customers decline Multi-Year; Subscription pays the dealer $8
     per monthly payment for 48 payments, all starting on day one. */
  var calc = document.getElementById('calc');
  if (calc) {
    var MY_KEEP = 225, MY_REMIT = 75, ATTACH = 0.30, SUB_PAY = 8, SUB_PAYMENTS = 48;
    var plansEl = document.getElementById('c-plans');
    var shareEl = document.getElementById('c-share');
    var num = function (n) { return Math.round(n).toLocaleString('en-US'); };
    var usd = function (n) { return '$' + num(n); };
    var set = function (id, v) { document.getElementById(id).textContent = v; };
    var render = function () {
      var plans = +plansEl.value, share = +shareEl.value;
      var nos = Math.round(plans / ATTACH - plans);
      var subs = Math.round(nos * share / 100);
      var my = plans * MY_KEEP, sb = subs * SUB_PAY * SUB_PAYMENTS;
      set('c-plans-o', num(plans));
      set('c-share-o', share + '%');
      set('c-nos', num(nos));
      set('c-subs', num(subs));
      set('c-my', usd(my));
      set('c-remit', usd(plans * MY_REMIT));
      set('c-sb', usd(sb));
      set('c-total', usd(my + sb));
      set('c-lift', '+' + Math.round(sb / my * 100) + '% from customers who said no');
    };
    [plansEl, shareEl].forEach(function (el) { el.addEventListener('input', render); });
    render();
  }

  /* Contact form -> Netlify Forms. */
  var form = document.getElementById('contact-form');
  if (form) {
    var done = document.getElementById('contact-done');
    var phone = form.querySelector('[name="phone"]');
    phone.addEventListener('input', function () { phone.setCustomValidity(''); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var digits = phone.value.replace(/[^0-9]/g, '');
      if (digits.length < 10 || digits.length > 15) {
        phone.setCustomValidity('Enter a valid phone number (10–15 digits).');
        phone.reportValidity();
        return;
      }
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      }).then(function (r) {
        if (!r.ok) { throw new Error('send failed'); }
        form.hidden = true;
        done.textContent = 'Thank you — we received your message. The RAP team will follow up.';
        done.hidden = false;
      }).catch(function () {
        btn.disabled = false;
        done.textContent = 'Sorry — your message did not send. Please call 1.800.732.5856 or email sales@raptns.com.';
        done.hidden = false;
      });
    });
  }
})();
