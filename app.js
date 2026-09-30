const projects = {
  alleto: {
    title: 'Alleto Ice Cream', category: 'SOCIAL CONTENT · FOOD & LIFESTYLE', image: './assets/alleto.jpg',
    description: 'A published selection of social visuals for Alleto Ice Cream, pairing playful graphics and product imagery with a bright, expressive look.',
    scope: ['Product-led social graphics', 'Playful color and visual storytelling', 'A coordinated set of content designs'],
    source: 'https://dribbble.com/shots/24941554-Alleto-Ice-Cream-Brand'
  },
  studio: {
    title: 'IT Studio', category: 'STRATEGY · SOCIAL MEDIA MANAGEMENT', image: './assets/it-studio.webp',
    description: 'Content creation and social media management for IT Studio’s clients across technology, education, and trade. The work combined brand-specific visuals, planned publishing, and audience engagement.',
    scope: ['Visual content tailored to each brand', 'Content planning, scheduling, and community engagement', 'Using insights to refine the content approach'],
    source: 'https://dribbble.com/shots/24941464-Social-Media-Management-Content-Creation-for-IT-Studio'
  },
  turk: {
    title: 'Turk Kapi', category: 'BRAND STORYTELLING · SOCIAL DESIGN', image: './assets/turk-kapi.jpg',
    description: 'A collection of social posts communicating Turk Kapi’s technology, trade, and educational opportunities through bold typography and purposeful imagery.',
    scope: ['Visual communication of core services', 'Social posts for entrepreneurs and students', 'A consistent professional brand presentation'],
    source: 'https://dribbble.com/shots/24941420-Turk-Kapi-Pvt-Ltd-Social-Media-Project'
  }
};
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); mobileNav.hidden = true; }
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width: 641px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => {
    item.classList.toggle('active', item === button);
    item.setAttribute('aria-pressed', String(item === button));
  });
  document.querySelectorAll('.project-card').forEach(card => { card.hidden = button.dataset.filter !== 'all' && !card.dataset.category.split(' ').includes(button.dataset.filter); });
}));
let lastFocusedElement;
function openDialog(dialog) { lastFocusedElement = document.activeElement; dialog.showModal(); document.body.classList.add('dialog-open'); }
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  document.querySelector('#project-dialog-title').textContent = project.title;
  document.querySelector('#project-dialog-category').textContent = project.category;
  const img = document.querySelector('#project-dialog-image'); img.src = project.image; img.alt = `${project.title} — published social media content by Noor E Saher`;
  document.querySelector('#project-dialog-description').textContent = project.description;
  const scope = document.querySelector('#project-dialog-scope'); scope.replaceChildren();
  project.scope.forEach(text => { const li = document.createElement('li'); li.textContent = text; scope.append(li); });
  document.querySelector('#project-dialog-source').href = project.source;
  openDialog(document.querySelector('#project-dialog'));
}));
document.querySelector('#brief-open').addEventListener('click', () => openDialog(document.querySelector('#brief-dialog')));
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => document.getElementById(button.dataset.close).close()));
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); lastFocusedElement?.focus(); });
  dialog.addEventListener('click', event => { const rect = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close(); });
});
document.querySelector('#brief-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Let’s create: ${data.get('service')}`;
  const body = `Hi Noor,\n\nI’m ${String(data.get('name')).trim()}, and I’m interested in ${data.get('service').toLowerCase()}.\n\n${String(data.get('message')).trim()}\n\nLooking forward to connecting!\n${String(data.get('name')).trim()}`;
  window.location.href = `mailto:nooresaher83@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#brief-status').textContent = 'Your email draft is ready to open. If your email app did not launch, email nooresaher83@gmail.com or use the Upwork link below.';
});
document.querySelector('#year').textContent = new Date().getFullYear();
