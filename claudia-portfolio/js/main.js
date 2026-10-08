// Renders content from /data/*.json into the Services and Work pages.
// This indirection is what will let the future CMS edit these JSON files
// without anyone touching the page markup.

async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error('Could not load ' + path);
  return res.json();
}

// ---------- Services page ----------
async function renderServices() {
  const list = document.getElementById('service-list');
  if (!list) return;
  try {
    const data = await loadJSON('data/services.json');
    const services = data.items;
    list.innerHTML = services.map((s, i) => `
      <div class="service-item">
        <div class="num">${String(i + 1).padStart(2, '0')}</div>
        <div>
          <h3>${s.title}</h3>
          <p>${s.description}</p>
        </div>
      </div>
    `).join('');
  } catch (e) {
    list.innerHTML = '<p>Services are being updated — please check back soon.</p>';
    console.error(e);
  }
}

// ---------- Work page ----------
let allWork = [];

function renderWorkGrid(items) {
  const grid = document.getElementById('work-grid');
  grid.innerHTML = items.map(item => `
    <div class="work-item" data-cat="${item.category}">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <span class="tag">${item.category}</span>
      <div class="caption">${item.title}</div>
    </div>
  `).join('');
}

async function renderWork() {
  const grid = document.getElementById('work-grid');
  const filters = document.getElementById('filters');
  if (!grid) return;

  try {
    const data = await loadJSON('data/work.json');
    allWork = data.items;
    renderWorkGrid(allWork);
  } catch (e) {
    grid.innerHTML = '<p>Portfolio is being updated — please check back soon.</p>';
    console.error(e);
    return;
  }

  filters.addEventListener('click', (evt) => {
    const btn = evt.target.closest('button[data-filter]');
    if (!btn) return;
    filters.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.dataset.filter;
    const filtered = cat === 'All' ? allWork : allWork.filter(w => w.category === cat);
    renderWorkGrid(filtered);
  });
}

renderServices();
renderWork();
