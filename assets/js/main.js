document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

primaryNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Outbound / download click tracking (GA4).
// Auto-classifies every link by destination + which section it lives in,
// so new cards/links get tracked without needing extra markup.
function classifyDestination(href) {
  if (href.startsWith('downloads/')) return 'download';
  if (href.startsWith('#')) return null; // in-page anchor, not worth tracking
  try {
    const host = new URL(href, window.location.href).hostname;
    if (host.includes('medium.com')) return 'medium';
    if (host.includes('note.com')) return 'note';
    if (host.includes('ko-fi.com')) return 'kofi';
    if (host.includes('gumroad.com')) return 'gumroad';
    if (host.includes('x.com') || host.includes('twitter.com')) return 'x';
    if (host === window.location.hostname) return null; // internal link
    return 'other';
  } catch (e) {
    return null;
  }
}

document.querySelectorAll('a[href]').forEach((link) => {
  const destination = classifyDestination(link.getAttribute('href'));
  if (!destination) return;

  link.addEventListener('click', () => {
    if (typeof gtag !== 'function') return;
    const section = link.closest('section[id]');
    const heading = link.querySelector('h3');
    const label = (heading ? heading.textContent : link.textContent).trim().slice(0, 80);
    gtag('event', destination === 'download' ? 'file_download' : 'outbound_click', {
      link_url: link.href,
      destination,
      section: section ? section.id : 'unknown',
      link_text: label,
    });
  });
});
