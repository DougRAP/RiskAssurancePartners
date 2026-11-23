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

  /* Dealer income estimate. Illustrative constants from the approved program
     figures: Multi-Year $180 gross margin per plan; Subscription $8 per
     monthly payment over 60 payments ($480 per subscriber). */
  var calc = document.getElementById('calc');
  if (calc) {
    var MY_GM = 180, SUB_GM = 480;
    var tickets = document.getElementById('c-tickets');
    var attach = document.getElementById('c-attach');
    var sub = document.getElementById('c-sub');
    var usd = function (n) { return '$' + Math.round(n).toLocaleString('en-US'); };
    var set = function (id, v) { document.getElementById(id).textContent = v; };
    var render = function () {
      var t = +tickets.value, a = +attach.value / 100, s = +sub.value / 100;
      var plans = t * 12 * a;
      var subs = t * 12 * (1 - a) * s;
      var my = plans * MY_GM, sb = subs * SUB_GM;
      set('c-tickets-o', (+tickets.value).toLocaleString('en-US'));
      set('c-attach-o', attach.value + '%');
      set('c-sub-o', sub.value + '%');
      set('c-my', usd(my));
      set('c-my-n', Math.round(plans).toLocaleString('en-US') + ' plans a year × $' + MY_GM);
      set('c-sb', usd(sb));
      set('c-sb-n', Math.round(subs).toLocaleString('en-US') + ' subscribers a year × $' + SUB_GM);
      set('c-total', usd(my + sb));
    };
    [tickets, attach, sub].forEach(function (el) { el.addEventListener('input', render); });
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
