/**
 * ანდრია ციციშვილი — პირადი პორტფოლიო
 * Navigation (Burger Menu) & JSONPlaceholder REST API Handler
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileNavigation();
    initEmployeesAPI();
    initEmployeesHomePreview();
});

/* ==========================================================================
   1. მობილური ნავიგაცია (Burger Menu) — JavaScript
   ========================================================================== */
function initMobileNavigation() {
    const burgerBtn = document.getElementById('burger-menu-btn') || document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerIcon = document.getElementById('burger-icon') || (burgerBtn ? burgerBtn.querySelector('i') : null);

    if (!burgerBtn || !mobileMenu) return;

    burgerBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');

        if (isHidden) {
            // მენიუს გახსნა
            mobileMenu.classList.remove('hidden');
            burgerBtn.setAttribute('aria-expanded', 'true');
            burgerBtn.setAttribute('aria-label', 'მენიუს დახურვა');
            if (burgerIcon) {
                burgerIcon.className = 'fa-solid fa-xmark text-xl';
            }
        } else {
            // მენიუს დახურვა
            mobileMenu.classList.add('hidden');
            burgerBtn.setAttribute('aria-expanded', 'false');
            burgerBtn.setAttribute('aria-label', 'მენიუს გახსნა');
            if (burgerIcon) {
                burgerIcon.className = 'fa-solid fa-bars text-xl';
            }
        }
    });

    // ბმულზე დაჭერისას მენიუს ავტომატური დახურვა
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            burgerBtn.setAttribute('aria-expanded', 'false');
            burgerBtn.setAttribute('aria-label', 'მენიუს გახსნა');
            if (burgerIcon) {
                burgerIcon.className = 'fa-solid fa-bars text-xl';
            }
        });
    });
}

/* ==========================================================================
   2. JSONPlaceholder REST API — თანამშრომლების გვერდი (employees.html)
   ========================================================================== */
let allEmployees = [];

function initEmployeesAPI() {
    const grid = document.getElementById('employees-grid');
    if (!grid) return;

    const loading = document.getElementById('employees-loading');
    const searchInput = document.getElementById('employee-search');
    const countBadge = document.getElementById('employee-count');

    // GET /users — თანამშრომლების წამოღება API-დან
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP შეცდომა! სტატუსი: ${response.status}`);
            }
            updateApiStatusBadge(response.status, 'OK (GET /users)');
            return response.json();
        })
        .then(users => {
            if (loading) loading.remove();
            allEmployees = users;
            renderEmployees(allEmployees);
            if (countBadge) countBadge.textContent = allEmployees.length;
        })
        .catch(error => {
            console.error('შეცდომა მონაცემების წამოღებისას:', error);
            if (loading) loading.remove();
            grid.innerHTML = `
                <div class="col-span-full p-8 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-center space-y-3">
                    <i class="fa-solid fa-triangle-exclamation text-rose-400 text-3xl"></i>
                    <p class="text-white font-bold text-lg">შეცდომა მონაცემების ჩატვირთვისას</p>
                    <p class="text-xs sm:text-sm text-slate-400 font-mono">${error.message}</p>
                    <button onclick="location.reload()" class="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold transition-colors">
                        ხელახლა ცდა
                    </button>
                </div>
            `;
            updateApiStatusBadge(500, 'Error');
        });

    // ძებნის / ფილტრაციის ფუნქციონალი
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const filtered = allEmployees.filter(user => {
                const name = (user.name || '').toLowerCase();
                const email = (user.email || '').toLowerCase();
                const company = (user.company?.name || '').toLowerCase();
                const city = (user.address?.city || '').toLowerCase();
                return name.includes(query) || email.includes(query) || company.includes(query) || city.includes(query);
            });
            renderEmployees(filtered);
            if (countBadge) countBadge.textContent = filtered.length;
        });
    }

    // Modal & Form: POST /users — ახალი თანამშრომლის დამატება
    initAddEmployeeModal();

    // Modal: GET /posts?userId=... — თანამშრომლის პოსტების ნახვა
    initPostsModal();
}

/**
 * თანამშრომლების ბარათების რენდერი Grid-ში
 */
function renderEmployees(users) {
    const grid = document.getElementById('employees-grid');
    if (!grid) return;

    if (users.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full p-12 text-center text-slate-400 font-mono text-sm space-y-2">
                <i class="fa-solid fa-user-slash text-2xl text-slate-500"></i>
                <p>თანამშრომელი ვერ მოიძებნა</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = '';

    users.forEach(user => {
        const card = createEmployeeCard(user);
        grid.appendChild(card);
    });
}

/**
 * ცალკეული თანამშრომლის ბარათის ელემენტის გენერაცია
 */
function createEmployeeCard(user) {
    const card = document.createElement('article');
    card.id = `employee-card-${user.id}`;
    card.className = 'group relative flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-xl';

    const initial = (user.name || 'U').charAt(0).toUpperCase();
    const companyName = user.company?.name || 'დამოუკიდებელი';
    const city = user.address?.city || 'უცნობი';
    const website = user.website ? `https://${user.website}` : '#';

    card.innerHTML = `
        <div class="space-y-4">
            <!-- Header: Avatar, Name, Company -->
            <div class="flex items-start justify-between gap-3">
                <div class="flex items-center gap-3 min-w-0">
                    <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-white text-lg shadow-md shadow-indigo-600/30 flex-shrink-0 group-hover:scale-105 transition-transform">
                        ${initial}
                    </div>
                    <div class="min-w-0">
                        <h3 class="text-base font-bold text-white group-hover:text-indigo-400 transition-colors truncate">
                            ${escapeHtml(user.name)}
                        </h3>
                        <p class="text-xs text-indigo-400 font-mono truncate">@${escapeHtml(user.username || 'user')}</p>
                    </div>
                </div>

                <span class="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60 flex-shrink-0">
                    ID: ${user.id}
                </span>
            </div>

            <!-- Details: Company, Email, Phone, City -->
            <div class="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800/60">
                <div class="flex items-center gap-2 text-slate-400">
                    <i class="fa-solid fa-briefcase w-3.5 text-center text-cyan-400"></i>
                    <span class="truncate font-medium text-slate-200">${escapeHtml(companyName)}</span>
                </div>
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-envelope w-3.5 text-center text-indigo-400"></i>
                    <a href="mailto:${escapeHtml(user.email)}" class="hover:text-indigo-300 transition-colors truncate font-mono">
                        ${escapeHtml(user.email)}
                    </a>
                </div>
                ${user.phone ? `
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-phone w-3.5 text-center text-emerald-400"></i>
                    <a href="tel:${escapeHtml(user.phone)}" class="hover:text-emerald-300 transition-colors truncate font-mono">
                        ${escapeHtml(user.phone)}
                    </a>
                </div>` : ''}
                <div class="flex items-center gap-2 text-slate-400">
                    <i class="fa-solid fa-location-dot w-3.5 text-center text-purple-400"></i>
                    <span class="truncate">${escapeHtml(city)}</span>
                </div>
            </div>
        </div>

        <!-- Actions: GET Posts & DELETE -->
        <div class="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between gap-2">
            <button type="button" class="view-posts-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-950/60 text-cyan-300 hover:text-white hover:bg-cyan-600/30 border border-cyan-800/50 transition-colors" data-id="${user.id}" data-name="${escapeHtml(user.name)}">
                <i class="fa-solid fa-newspaper text-[11px]"></i>
                <span>პოსტები (GET)</span>
            </button>

            <button type="button" class="delete-employee-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-950/40 text-rose-300 hover:text-white hover:bg-rose-600/40 border border-rose-800/40 transition-colors" data-id="${user.id}" data-name="${escapeHtml(user.name)}">
                <i class="fa-solid fa-trash text-[11px]"></i>
                <span>წაშლა (DELETE)</span>
            </button>
        </div>
    `;

    // Event Listener: GET Posts
    const postsBtn = card.querySelector('.view-posts-btn');
    if (postsBtn) {
        postsBtn.addEventListener('click', () => {
            openPostsModal(user.id, user.name);
        });
    }

    // Event Listener: DELETE /users/:id
    const deleteBtn = card.querySelector('.delete-employee-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            deleteEmployee(user.id, user.name, card);
        });
    }

    return card;
}

/* ==========================================================================
   3. POST /users — ახალი თანამშრომლის დამატება (Modal & Form)
   ========================================================================== */
function initAddEmployeeModal() {
    const openBtn = document.getElementById('open-add-modal-btn');
    const closeBtn = document.getElementById('close-add-modal-btn');
    const cancelBtn = document.getElementById('cancel-add-btn');
    const modal = document.getElementById('add-modal');
    const form = document.getElementById('add-employee-form');
    const submitBtn = document.getElementById('submit-add-btn');

    if (!modal) return;

    const openModal = () => modal.classList.remove('hidden');
    const closeModal = () => {
        modal.classList.add('hidden');
        if (form) form.reset();
    };

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Form Submit: POST მოთხოვნა
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('emp-name')?.value.trim();
            const username = document.getElementById('emp-username')?.value.trim();
            const email = document.getElementById('emp-email')?.value.trim();
            const phone = document.getElementById('emp-phone')?.value.trim();
            const companyName = document.getElementById('emp-company')?.value.trim();
            const city = document.getElementById('emp-city')?.value.trim();

            if (!name || !email) {
                showToast('გთხოვთ შეავსოთ სავალდებულო ველები', 'error');
                return;
            }

            const payload = {
                name,
                username: username || name.toLowerCase().replace(/\s+/g, ''),
                email,
                phone: phone || '+995 599 00-00-00',
                website: 'example.com',
                company: { name: companyName || 'GeoLab Partner' },
                address: { city: city || 'თბილისი' }
            };

            // ღილაკის loading მდგომარეობა
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-spinner animate-spin text-xs"></i><span>იგზავნება...</span>';
            }

            // HTTP POST მოთხოვნა
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => {
                const status = response.status;
                updateApiStatusBadge(status, `Created (POST /users)`);
                return response.json().then(data => ({ status, data }));
            })
            .then(({ status, data }) => {
                closeModal();

                // ახალი თანამშრომელი დავამატოთ ლოკალურ მასივში და Grid-ის სათავეში
                const newEmployee = { ...payload, id: data.id || (allEmployees.length + 1) };
                allEmployees.unshift(newEmployee);

                const grid = document.getElementById('employees-grid');
                if (grid) {
                    const newCard = createEmployeeCard(newEmployee);
                    newCard.classList.add('ring-2', 'ring-emerald-500/50');
                    grid.prepend(newCard);
                }

                const countBadge = document.getElementById('employee-count');
                if (countBadge) countBadge.textContent = allEmployees.length;

                showToast(`თანამშრომელი წარმატებით დაემატა! (Status: ${status} Created)`, 'success');
            })
            .catch(error => {
                console.error('POST შეცდომა:', error);
                showToast('ვერ მოხერხდა თანამშრომლის დამატება', 'error');
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane text-xs"></i><span>გაგზავნა (POST)</span>';
                }
            });
        });
    }
}

/* ==========================================================================
   4. DELETE /users/:id — თანამშრომლის წაშლა
   ========================================================================== */
function deleteEmployee(userId, userName, cardElement) {
    const confirmed = confirm(`დარწმუნებული ხართ, რომ გსურთ "${userName}"-ს წაშლა? (გაიგზავნება DELETE მოთხოვნა)`);
    if (!confirmed) return;

    // HTTP DELETE მოთხოვნა
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'DELETE',
    })
    .then(response => {
        updateApiStatusBadge(response.status, `Deleted (DELETE /users/${userId})`);

        // DOM-იდან წაშლა
        if (cardElement) {
            cardElement.style.opacity = '0.3';
            cardElement.style.transform = 'scale(0.95)';
            setTimeout(() => {
                cardElement.remove();
            }, 300);
        }

        // ლოკალური სიიდან ამოღება
        allEmployees = allEmployees.filter(u => u.id !== userId);
        const countBadge = document.getElementById('employee-count');
        if (countBadge) countBadge.textContent = allEmployees.length;

        showToast(`თანამშრომელი "${userName}" წაიშალა (Status: ${response.status} OK)`, 'info');
    })
    .catch(error => {
        console.error('DELETE შეცდომა:', error);
        showToast('წაშლის მოთხოვნა ვერ შესრულდა', 'error');
    });
}

/* ==========================================================================
   5. GET /posts?userId=... — თანამშრომლის პოსტების ნახვა (Modal)
   ========================================================================== */
function initPostsModal() {
    const modal = document.getElementById('posts-modal');
    const closeBtn = document.getElementById('close-posts-modal-btn');
    const closeBottomBtn = document.getElementById('close-posts-bottom-btn');

    if (!modal) return;

    const closeModal = () => modal.classList.remove('flex'), hide = () => modal.classList.add('hidden');
    const close = () => {
        modal.classList.add('hidden');
    };

    if (closeBtn) closeBtn.addEventListener('click', close);
    if (closeBottomBtn) closeBottomBtn.addEventListener('click', close);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) close();
    });
}

function openPostsModal(userId, userName) {
    const modal = document.getElementById('posts-modal');
    const title = document.getElementById('posts-modal-title');
    const subtitle = document.getElementById('posts-modal-subtitle');
    const container = document.getElementById('posts-container');

    if (!modal || !container) return;

    if (title) title.textContent = `${userName} — პოსტები`;
    if (subtitle) subtitle.textContent = `HTTP Method: GET https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    container.innerHTML = `
        <div class="py-12 text-center text-slate-400 space-y-2">
            <i class="fa-solid fa-spinner animate-spin text-2xl text-cyan-400"></i>
            <p class="font-mono text-xs">პოსტები იტვირთება...</p>
        </div>
    `;

    modal.classList.remove('hidden');

    // HTTP GET მოთხოვნა
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => {
            updateApiStatusBadge(response.status, `OK (GET /posts?userId=${userId})`);
            return response.json();
        })
        .then(posts => {
            if (!posts || posts.length === 0) {
                container.innerHTML = `
                    <div class="p-8 text-center text-slate-400 font-mono text-xs">
                        პოსტები ვერ მოიძებნა
                    </div>
                `;
                return;
            }

            container.innerHTML = posts.map((post, idx) => `
                <article class="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2 hover:border-cyan-500/30 transition-colors">
                    <div class="flex items-start justify-between gap-2">
                        <h4 class="text-sm font-bold text-white capitalize leading-snug">
                            ${idx + 1}. ${escapeHtml(post.title)}
                        </h4>
                        <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/40 flex-shrink-0">
                            Post #${post.id}
                        </span>
                    </div>
                    <p class="text-xs text-slate-400 leading-relaxed">
                        ${escapeHtml(post.body)}
                    </p>
                </article>
            `).join('');
        })
        .catch(error => {
            console.error('პოსტების ჩატვირთვის შეცდომა:', error);
            container.innerHTML = `
                <div class="p-6 text-center text-rose-400 font-mono text-xs">
                    შეცდომა პოსტების ჩატვირთვისას: ${error.message}
                </div>
            `;
        });
}

/* ==========================================================================
   6. მთავარ გვერდზე (index.html) თანამშრომლების მოკლე სექციის შევსება
   ========================================================================== */
function initEmployeesHomePreview() {
    const homeGrid = document.getElementById('employees-grid-home');
    if (!homeGrid) return;

    const loadingHome = document.getElementById('employees-loading-home');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            if (loadingHome) loadingHome.remove();

            // პირველი 6 თანამშრომლის ჩვენება მთავარ გვერდზე
            const previewUsers = users.slice(0, 6);

            previewUsers.forEach(user => {
                const initial = (user.name || 'U').charAt(0).toUpperCase();
                const card = document.createElement('div');
                card.className = 'flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all duration-200 shadow-md group';
                card.innerHTML = `
                    <div class="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-base shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-transform">
                        ${initial}
                    </div>
                    <div class="min-w-0 flex-1">
                        <p class="text-white font-bold text-sm truncate group-hover:text-indigo-300 transition-colors">${escapeHtml(user.name)}</p>
                        <p class="text-xs text-slate-400 truncate font-mono">${escapeHtml(user.company?.name || 'Developer')}</p>
                        <a href="mailto:${escapeHtml(user.email)}" class="text-xs text-indigo-400 hover:underline truncate block font-mono mt-0.5">
                            ${escapeHtml(user.email)}
                        </a>
                    </div>
                `;
                homeGrid.appendChild(card);
            });
        })
        .catch(err => {
            if (loadingHome) {
                loadingHome.innerHTML = '<span class="text-rose-400 text-xs">ვერ ჩაიტვირთა თანამშრომლები</span>';
            }
        });
}

/* ==========================================================================
   7. დამხმარე ფუნქციები: Toast & Status Badges
   ========================================================================== */
function updateApiStatusBadge(code, text) {
    const badge = document.getElementById('api-status-badge');
    const badgeText = document.getElementById('api-status-text');
    if (!badge || !badgeText) return;

    badgeText.textContent = `Status: ${code} ${text}`;

    if (code >= 200 && code < 300) {
        badge.className = 'px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5';
    } else {
        badge.className = 'px-3 py-1.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center gap-1.5';
    }
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');

    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;

    if (type === 'success') {
        if (toastIcon) toastIcon.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-400"></i>';
        toast.className = 'fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-slate-900 border border-emerald-500/40 shadow-2xl flex items-center gap-3 text-sm transition-all transform duration-300';
    } else if (type === 'error') {
        if (toastIcon) toastIcon.innerHTML = '<i class="fa-solid fa-triangle-exclamation text-rose-400"></i>';
        toast.className = 'fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-slate-900 border border-rose-500/40 shadow-2xl flex items-center gap-3 text-sm transition-all transform duration-300';
    } else {
        if (toastIcon) toastIcon.innerHTML = '<i class="fa-solid fa-circle-info text-cyan-400"></i>';
        toast.className = 'fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-slate-900 border border-cyan-500/40 shadow-2xl flex items-center gap-3 text-sm transition-all transform duration-300';
    }

    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 4000);
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
