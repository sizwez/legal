// Legal Platform Application
// Complete functionality implementation

// ============================================
// DATA STORAGE & STATE MANAGEMENT
// ============================================

class DataStore {
    constructor() {
        this.init();
    }

    init() {
        // Initialize localStorage with default data if empty
        if (!localStorage.getItem('legalHub_initialized')) {
            this.resetToDefaults();
            localStorage.setItem('legalHub_initialized', 'true');
        }
    }

    resetToDefaults() {
        // Sample documents
        const documents = [
            {
                id: 'doc_001',
                title: 'Employment Contract',
                category: 'employment',
                status: 'signed',
                date: '2025-12-15',
                icon: '📄'
            },
            {
                id: 'doc_002',
                title: 'Non-Disclosure Agreement',
                category: 'contract',
                status: 'pending',
                date: '2025-12-20',
                icon: '🔒'
            },
            {
                id: 'doc_003',
                title: 'Partnership Agreement',
                category: 'corporate',
                status: 'draft',
                date: '2025-12-18',
                icon: '🤝'
            },
            {
                id: 'doc_004',
                title: 'Will and Testament',
                category: 'will',
                status: 'signed',
                date: '2025-11-10',
                icon: '📜'
            },
            {
                id: 'doc_005',
                title: 'Real Estate Purchase Agreement',
                category: 'real-estate',
                status: 'pending',
                date: '2025-12-22',
                icon: '🏠'
            }
        ];

        // Sample lawyers
        const lawyers = [
            {
                id: 'law_001',
                name: 'Sarah Mitchell',
                specialty: 'corporate',
                rating: 4.9,
                reviews: 156,
                cases: 234,
                experience: 15,
                hourlyRate: 350,
                avatar: 'https://ui-avatars.com/api/?name=Sarah+Mitchell&background=1e3a8a&color=fff'
            },
            {
                id: 'law_002',
                name: 'David Chen',
                specialty: 'criminal',
                rating: 4.8,
                reviews: 198,
                cases: 312,
                experience: 12,
                hourlyRate: 300,
                avatar: 'https://ui-avatars.com/api/?name=David+Chen&background=10b981&color=fff'
            },
            {
                id: 'law_003',
                name: 'Emily Rodriguez',
                specialty: 'family',
                rating: 5.0,
                reviews: 203,
                cases: 289,
                experience: 18,
                hourlyRate: 375,
                avatar: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=f59e0b&color=fff'
            },
            {
                id: 'law_004',
                name: 'Michael Johnson',
                specialty: 'real-estate',
                rating: 4.7,
                reviews: 142,
                cases: 178,
                experience: 10,
                hourlyRate: 275,
                avatar: 'https://ui-avatars.com/api/?name=Michael+Johnson&background=ef4444&color=fff'
            },
            {
                id: 'law_005',
                name: 'Lisa Wang',
                specialty: 'ip',
                rating: 4.9,
                reviews: 176,
                cases: 267,
                experience: 14,
                hourlyRate: 400,
                avatar: 'https://ui-avatars.com/api/?name=Lisa+Wang&background=8b5cf6&color=fff'
            },
            {
                id: 'law_006',
                name: 'James Thompson',
                specialty: 'immigration',
                rating: 4.8,
                reviews: 189,
                cases: 245,
                experience: 16,
                hourlyRate: 325,
                avatar: 'https://ui-avatars.com/api/?name=James+Thompson&background=ec4899&color=fff'
            }
        ];

        // Sample consultations
        const consultations = [
            {
                id: 'cons_001',
                lawyerId: 'law_001',
                lawyerName: 'Sarah Mitchell',
                date: '2025-12-28',
                time: '10:00 AM',
                duration: 60,
                topic: 'Business incorporation consultation',
                status: 'upcoming',
                type: 'video'
            },
            {
                id: 'cons_002',
                lawyerId: 'law_003',
                lawyerName: 'Emily Rodriguez',
                date: '2025-12-30',
                time: '2:00 PM',
                duration: 30,
                topic: 'Divorce proceedings initial consultation',
                status: 'upcoming',
                type: 'video'
            }
        ];

        // Sample cases
        const cases = [
            {
                id: 'case_001',
                title: 'Smith vs. Acme Corp Contract Dispute',
                type: 'corporate',
                status: 'active',
                priority: 'high',
                description: 'Contract breach claim regarding software licensing agreement',
                lawyerId: 'law_001',
                lawyerName: 'Sarah Mitchell',
                created: '2025-11-15',
                deadline: '2026-03-15',
                progress: 45
            },
            {
                id: 'case_002',
                title: 'Estate Planning - Johnson Family',
                type: 'family',
                status: 'active',
                priority: 'medium',
                description: 'Comprehensive estate planning including trusts and wills',
                lawyerId: 'law_003',
                lawyerName: 'Emily Rodriguez',
                created: '2025-12-01',
                deadline: '2026-02-01',
                progress: 30
            },
            {
                id: 'case_003',
                title: 'Real Estate Purchase - 123 Main St',
                type: 'real-estate',
                status: 'pending',
                priority: 'high',
                description: 'Commercial property acquisition and due diligence',
                lawyerId: 'law_004',
                lawyerName: 'Michael Johnson',
                created: '2025-12-10',
                deadline: '2026-01-10',
                progress: 60
            },
            {
                id: 'case_004',
                title: 'Trademark Registration - TechStart Inc',
                type: 'ip',
                status: 'active',
                priority: 'medium',
                description: 'Trademark application and intellectual property protection',
                lawyerId: 'law_005',
                lawyerName: 'Lisa Wang',
                created: '2025-11-20',
                deadline: '2026-05-20',
                progress: 25
            }
        ];

        // Sample notifications
        const notifications = [
            {
                id: 'notif_001',
                title: 'Consultation Reminder',
                message: 'Your consultation with Sarah Mitchell is tomorrow at 10:00 AM',
                time: '2 hours ago',
                read: false,
                type: 'reminder'
            },
            {
                id: 'notif_002',
                title: 'Document Ready',
                message: 'Your NDA has been prepared and is ready for signature',
                time: '5 hours ago',
                read: false,
                type: 'document'
            },
            {
                id: 'notif_003',
                title: 'Case Update',
                message: 'New filing submitted in Smith vs. Acme Corp case',
                time: '1 day ago',
                read: true,
                type: 'case'
            }
        ];

        // Document templates
        const templates = [
            { id: 'tmpl_001', name: 'Non-Disclosure Agreement', category: 'contract', icon: '🔒', popular: true },
            { id: 'tmpl_002', name: 'Employment Contract', category: 'employment', icon: '💼', popular: true },
            { id: 'tmpl_003', name: 'Partnership Agreement', category: 'corporate', icon: '🤝', popular: false },
            { id: 'tmpl_004', name: 'Will and Testament', category: 'will', icon: '📜', popular: true },
            { id: 'tmpl_005', name: 'Power of Attorney', category: 'family', icon: '⚖️', popular: false },
            { id: 'tmpl_006', name: 'Lease Agreement', category: 'real-estate', icon: '🏢', popular: true },
            { id: 'tmpl_007', name: 'Purchase Agreement', category: 'real-estate', icon: '🏠', popular: false },
            { id: 'tmpl_008', name: 'Service Contract', category: 'contract', icon: '📋', popular: true }
        ];

        // Save to localStorage
        localStorage.setItem('documents', JSON.stringify(documents));
        localStorage.setItem('lawyers', JSON.stringify(lawyers));
        localStorage.setItem('consultations', JSON.stringify(consultations));
        localStorage.setItem('cases', JSON.stringify(cases));
        localStorage.setItem('notifications', JSON.stringify(notifications));
        localStorage.setItem('templates', JSON.stringify(templates));
    }

    get(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    add(key, item) {
        const items = this.get(key) || [];
        items.push(item);
        this.set(key, items);
        return item;
    }

    update(key, id, updates) {
        const items = this.get(key) || [];
        const index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            items[index] = { ...items[index], ...updates };
            this.set(key, items);
            return items[index];
        }
        return null;
    }

    delete(key, id) {
        const items = this.get(key) || [];
        const filtered = items.filter(item => item.id !== id);
        this.set(key, filtered);
    }
}

const dataStore = new DataStore();

// ============================================
// AUTH SYSTEM
// ============================================

class AuthSystem {
    constructor() {
        this.currentUser = this.getUser();
        this.updateUI();
    }

    getUser() {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    }

    setUser(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUser = user;
        this.updateUI();
    }

    signIn(email, password) {
        // Simulate authentication
        if (email && password) {
            const user = {
                id: 'user_' + Date.now(),
                name: email.split('@')[0],
                email: email,
                avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=1e3a8a&color=fff`
            };
            this.setUser(user);
            return { success: true, user };
        }
        return { success: false, error: 'Invalid credentials' };
    }

    signUp(name, email, password) {
        // Simulate registration
        if (name && email && password) {
            const user = {
                id: 'user_' + Date.now(),
                name: name,
                email: email,
                avatar: `https://ui-avatars.com/api/?name=${name}&background=1e3a8a&color=fff`
            };
            this.setUser(user);
            return { success: true, user };
        }
        return { success: false, error: 'Invalid data' };
    }

    signOut() {
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        this.updateUI();
    }

    isAuthenticated() {
        return this.currentUser !== null;
    }

    updateUI() {
        const authBtn = document.getElementById('auth-btn');
        const userMenu = document.getElementById('user-menu');

        if (this.isAuthenticated()) {
            authBtn.style.display = 'none';
            userMenu.style.display = 'flex';
            document.getElementById('user-name').textContent = this.currentUser.name;
            if (userMenu.querySelector('.user-avatar')) {
                userMenu.querySelector('.user-avatar').src = this.currentUser.avatar;
            }
        } else {
            authBtn.style.display = 'block';
            userMenu.style.display = 'none';
        }
    }

    requireAuth(callback) {
        if (this.isAuthenticated()) {
            callback();
        } else {
            showToast('Please sign in to continue', 'warning');
            openModal('authModal');
        }
    }
}

const auth = new AuthSystem();

// ============================================
// NAVIGATION
// ============================================

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
        }
    });

    // Load section data
    loadSectionData(sectionId);
}

function loadSectionData(sectionId) {
    switch(sectionId) {
        case 'documents':
            loadDocuments();
            break;
        case 'consultations':
            loadConsultations();
            loadLawyers();
            break;
        case 'cases':
            loadCases();
            break;
    }
}

// ============================================
// DOCUMENTS
// ============================================

function loadDocuments() {
    const documents = dataStore.get('documents') || [];
    const grid = document.getElementById('documents-grid');

    if (documents.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--gray-500); padding: 3rem;">No documents found. Create your first document!</p>';
        return;
    }

    grid.innerHTML = documents.map(doc => `
        <div class="document-card" onclick="openDocument('${doc.id}')">
            <div class="doc-icon">${doc.icon}</div>
            <div class="doc-title">${doc.title}</div>
            <div class="doc-meta">
                <span>${doc.date}</span>
                <span class="doc-status ${doc.status}">${doc.status}</span>
            </div>
        </div>
    `).join('');
}

function filterDocuments() {
    const searchTerm = document.getElementById('doc-search').value.toLowerCase();
    const category = document.getElementById('doc-category').value;
    const status = document.getElementById('doc-status').value;

    let documents = dataStore.get('documents') || [];

    // Apply filters
    documents = documents.filter(doc => {
        const matchesSearch = doc.title.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || doc.category === category;
        const matchesStatus = status === 'all' || doc.status === status;
        return matchesSearch && matchesCategory && matchesStatus;
    });

    const grid = document.getElementById('documents-grid');
    if (documents.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--gray-500); padding: 3rem;">No documents match your filters</p>';
        return;
    }

    grid.innerHTML = documents.map(doc => `
        <div class="document-card" onclick="openDocument('${doc.id}')">
            <div class="doc-icon">${doc.icon}</div>
            <div class="doc-title">${doc.title}</div>
            <div class="doc-meta">
                <span>${doc.date}</span>
                <span class="doc-status ${doc.status}">${doc.status}</span>
            </div>
        </div>
    `).join('');
}

function openDocument(docId) {
    auth.requireAuth(() => {
        const documents = dataStore.get('documents') || [];
        const doc = documents.find(d => d.id === docId);

        if (doc) {
            showToast(`Opening ${doc.title}...`, 'info');
            // Simulate document editor
            setTimeout(() => {
                const editor = `
                    <div style="padding: 2rem;">
                        <h2>${doc.title}</h2>
                        <div style="margin: 2rem 0; padding: 2rem; background: var(--gray-50); border-radius: 10px;">
                            <p><strong>Document Type:</strong> ${doc.category}</p>
                            <p><strong>Status:</strong> <span class="doc-status ${doc.status}">${doc.status}</span></p>
                            <p><strong>Created:</strong> ${doc.date}</p>
                            <hr style="margin: 1.5rem 0;">
                            <div style="min-height: 300px; background: white; padding: 2rem; border: 1px solid var(--gray-200); border-radius: 8px;">
                                <p>Document content would appear here...</p>
                                <p style="color: var(--gray-500); margin-top: 2rem;">This is a demo. In production, this would show the actual document editor with rich text capabilities.</p>
                            </div>
                        </div>
                        <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                            <button class="btn-secondary" onclick="closeModal('docEditorModal')">Close</button>
                            <button class="btn-primary" onclick="downloadDocument('${doc.id}')"><i class="fas fa-download"></i> Download</button>
                            <button class="btn-primary" onclick="signDocument('${doc.id}')"><i class="fas fa-pen"></i> E-Sign</button>
                        </div>
                    </div>
                `;
                document.getElementById('doc-editor-content').innerHTML = editor;
                openModal('docEditorModal');
            }, 500);
        }
    });
}


function loadDocumentTemplates() {
    const templates = dataStore.get('templates') || [];
    const grid = document.querySelector('.doc-templates-grid');

    grid.innerHTML = templates.map(tmpl => `
        <div class="document-card" onclick="createFromTemplate('${tmpl.id}')">
            <div class="doc-icon">${tmpl.icon}</div>
            <div class="doc-title">${tmpl.name}</div>
            ${tmpl.popular ? '<span class="badge">Popular</span>' : ''}
        </div>
    `).join('');
}

function createFromTemplate(templateId) {
    showToast('Creating document from template...', 'info');
    setTimeout(() => {
        const newDoc = {
            id: 'doc_' + Date.now(),
            title: 'New Document',
            category: 'contract',
            status: 'draft',
            date: new Date().toISOString().split('T')[0],
            icon: '📄'
        };
        dataStore.add('documents', newDoc);
        closeModal('newDocModal');
        showToast('Document created successfully!', 'success');
        loadDocuments();
    }, 1000);
}

function downloadDocument(docId) {
    showToast('Downloading document...', 'success');
}

function signDocument(docId) {
    showToast('Opening e-signature interface...', 'info');
    setTimeout(() => {
        dataStore.update('documents', docId, { status: 'signed' });
        showToast('Document signed successfully!', 'success');
        closeModal('docEditorModal');
        loadDocuments();
    }, 1500);
}

// ============================================
// CONSULTATIONS
// ============================================

function loadConsultations() {
    const consultations = dataStore.get('consultations') || [];
    const upcomingList = document.getElementById('consultations-list');
    const pastList = document.getElementById('past-consultations-list');

    const now = new Date();
    const upcoming = consultations.filter(c => new Date(c.date) >= now);
    const past = consultations.filter(c => new Date(c.date) < now);

    if (upcoming.length === 0) {
        upcomingList.innerHTML = '<p style="text-align: center; color: var(--gray-500); padding: 3rem;">No upcoming consultations. Book one now!</p>';
    } else {
        upcomingList.innerHTML = upcoming.map(cons => {
            const date = new Date(cons.date);
            return `
                <div class="consultation-card">
                    <div class="consultation-date">
                        <div class="day">${date.getDate()}</div>
                        <div class="month">${date.toLocaleString('default', { month: 'short' })}</div>
                    </div>
                    <div class="consultation-info">
                        <h3>${cons.lawyerName}</h3>
                        <p><i class="fas fa-clock"></i> ${cons.time} (${cons.duration} min)</p>
                        <p><i class="fas fa-comment"></i> ${cons.topic}</p>
                    </div>
                    <div class="consultation-actions">
                        <button class="btn-primary" onclick="joinConsultation('${cons.id}')">
                            <i class="fas fa-video"></i> Join
                        </button>
                        <button class="btn-secondary" onclick="rescheduleConsultation('${cons.id}')">
                            <i class="fas fa-calendar"></i> Reschedule
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    if (past.length === 0) {
        pastList.innerHTML = '<p style="text-align: center; color: var(--gray-500); padding: 3rem;">No past consultations</p>';
    } else {
        pastList.innerHTML = past.map(cons => {
            const date = new Date(cons.date);
            return `
                <div class="consultation-card">
                    <div class="consultation-date">
                        <div class="day">${date.getDate()}</div>
                        <div class="month">${date.toLocaleString('default', { month: 'short' })}</div>
                    </div>
                    <div class="consultation-info">
                        <h3>${cons.lawyerName}</h3>
                        <p><i class="fas fa-clock"></i> ${cons.time} (${cons.duration} min)</p>
                        <p><i class="fas fa-comment"></i> ${cons.topic}</p>
                    </div>
                    <div class="consultation-actions">
                        <button class="btn-secondary" onclick="viewNotes('${cons.id}')">
                            <i class="fas fa-file-alt"></i> Notes
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function joinConsultation(consId) {
    auth.requireAuth(() => {
        showToast('Launching video consultation...', 'info');
        setTimeout(() => {
            alert('Video consultation would launch here. In production, this would integrate with Zoom, Google Meet, or a custom video solution.');
        }, 1000);
    });
}

function rescheduleConsultation(consId) {
    auth.requireAuth(() => {
        showToast('Opening rescheduling options...', 'info');
    });
}

function viewNotes(consId) {
    showToast('Loading consultation notes...', 'info');
}

function loadLawyers() {
    const lawyers = dataStore.get('lawyers') || [];
    const grid = document.getElementById('lawyers-grid');

    grid.innerHTML = lawyers.map(lawyer => `
        <div class="lawyer-card">
            <div class="lawyer-header">
                <img src="${lawyer.avatar}" alt="${lawyer.name}" class="lawyer-avatar">
                <div class="lawyer-info">
                    <h3>${lawyer.name}</h3>
                    <div class="lawyer-specialty">${formatSpecialty(lawyer.specialty)}</div>
                    <div class="lawyer-rating">
                        <span class="stars">${'⭐'.repeat(Math.floor(lawyer.rating))}</span>
                        <span>${lawyer.rating} (${lawyer.reviews})</span>
                    </div>
                </div>
            </div>
            <div class="lawyer-stats">
                <div class="stat">
                    <div class="stat-value">${lawyer.experience}</div>
                    <div class="stat-label">Years</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${lawyer.cases}</div>
                    <div class="stat-label">Cases</div>
                </div>
                <div class="stat">
                    <div class="stat-value">$${lawyer.hourlyRate}</div>
                    <div class="stat-label">/hour</div>
                </div>
            </div>
            <button class="btn-primary" style="width: 100%;" onclick="bookLawyer('${lawyer.id}')">
                <i class="fas fa-calendar-plus"></i> Book Consultation
            </button>
        </div>
    `).join('');
}

function filterLawyers() {
    const searchTerm = document.getElementById('lawyer-search').value.toLowerCase();
    const specialty = document.getElementById('lawyer-specialty').value;
    const rating = document.getElementById('lawyer-rating').value;

    let lawyers = dataStore.get('lawyers') || [];

    lawyers = lawyers.filter(lawyer => {
        const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm);
        const matchesSpecialty = specialty === 'all' || lawyer.specialty === specialty;
        const matchesRating = rating === 'all' || lawyer.rating >= parseInt(rating);
        return matchesSearch && matchesSpecialty && matchesRating;
    });

    const grid = document.getElementById('lawyers-grid');
    grid.innerHTML = lawyers.map(lawyer => `
        <div class="lawyer-card">
            <div class="lawyer-header">
                <img src="${lawyer.avatar}" alt="${lawyer.name}" class="lawyer-avatar">
                <div class="lawyer-info">
                    <h3>${lawyer.name}</h3>
                    <div class="lawyer-specialty">${formatSpecialty(lawyer.specialty)}</div>
                    <div class="lawyer-rating">
                        <span class="stars">${'⭐'.repeat(Math.floor(lawyer.rating))}</span>
                        <span>${lawyer.rating} (${lawyer.reviews})</span>
                    </div>
                </div>
            </div>
            <div class="lawyer-stats">
                <div class="stat">
                    <div class="stat-value">${lawyer.experience}</div>
                    <div class="stat-label">Years</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${lawyer.cases}</div>
                    <div class="stat-label">Cases</div>
                </div>
                <div class="stat">
                    <div class="stat-value">$${lawyer.hourlyRate}</div>
                    <div class="stat-label">/hour</div>
                </div>
            </div>
            <button class="btn-primary" style="width: 100%;" onclick="bookLawyer('${lawyer.id}')">
                <i class="fas fa-calendar-plus"></i> Book Consultation
            </button>
        </div>
    `).join('');
}

function bookLawyer(lawyerId) {
    auth.requireAuth(() => {
        const lawyers = dataStore.get('lawyers') || [];
        const lawyer = lawyers.find(l => l.id === lawyerId);
        if (lawyer) {
            document.getElementById('consult-lawyer').value = lawyerId;
            openModal('bookConsultModal');
        }
    });
}

function formatSpecialty(specialty) {
    const specialties = {
        'corporate': 'Corporate Law',
        'criminal': 'Criminal Law',
        'family': 'Family Law',
        'real-estate': 'Real Estate Law',
        'immigration': 'Immigration Law',
        'ip': 'Intellectual Property'
    };
    return specialties[specialty] || specialty;
}

// ============================================
// CASES
// ============================================

function loadCases() {
    const cases = dataStore.get('cases') || [];
    const grid = document.getElementById('cases-grid');

    if (cases.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--gray-500); padding: 3rem;">No cases found. Create your first case!</p>';
        return;
    }

    grid.innerHTML = cases.map(caseItem => `
        <div class="case-card ${caseItem.priority}" onclick="openCase('${caseItem.id}')">
            <div class="case-header">
                <div>
                    <div class="case-title">${caseItem.title}</div>
                    <div class="case-id">Case #${caseItem.id}</div>
                </div>
                <div class="case-badges">
                    <span class="badge ${caseItem.status}">${caseItem.status}</span>
                    <span class="badge">${caseItem.priority}</span>
                </div>
            </div>
            <div class="case-description">${caseItem.description}</div>
            <div class="case-footer">
                <div class="case-progress">
                    <small>Progress: ${caseItem.progress}%</small>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${caseItem.progress}%"></div>
                    </div>
                </div>
                <div>
                    <small><i class="fas fa-user"></i> ${caseItem.lawyerName}</small>
                </div>
            </div>
        </div>
    `).join('');
}

function filterCases() {
    const searchTerm = document.getElementById('case-search').value.toLowerCase();
    const status = document.getElementById('case-status').value;
    const priority = document.getElementById('case-priority').value;

    let cases = dataStore.get('cases') || [];

    cases = cases.filter(caseItem => {
        const matchesSearch = caseItem.title.toLowerCase().includes(searchTerm) || 
                            caseItem.description.toLowerCase().includes(searchTerm);
        const matchesStatus = status === 'all' || caseItem.status === status;
        const matchesPriority = priority === 'all' || caseItem.priority === priority;
        return matchesSearch && matchesStatus && matchesPriority;
    });

    const grid = document.getElementById('cases-grid');
    if (cases.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--gray-500); padding: 3rem;">No cases match your filters</p>';
        return;
    }

    grid.innerHTML = cases.map(caseItem => `
        <div class="case-card ${caseItem.priority}" onclick="openCase('${caseItem.id}')">
            <div class="case-header">
                <div>
                    <div class="case-title">${caseItem.title}</div>
                    <div class="case-id">Case #${caseItem.id}</div>
                </div>
                <div class="case-badges">
                    <span class="badge ${caseItem.status}">${caseItem.status}</span>
                    <span class="badge">${caseItem.priority}</span>
                </div>
            </div>
            <div class="case-description">${caseItem.description}</div>
            <div class="case-footer">
                <div class="case-progress">
                    <small>Progress: ${caseItem.progress}%</small>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${caseItem.progress}%"></div>
                    </div>
                </div>
                <div>
                    <small><i class="fas fa-user"></i> ${caseItem.lawyerName}</small>
                </div>
            </div>
        </div>
    `).join('');
}

function openCase(caseId) {
    auth.requireAuth(() => {
        const cases = dataStore.get('cases') || [];
        const caseItem = cases.find(c => c.id === caseId);

        if (caseItem) {
            const caseDetails = `
                <div style="padding: 2rem;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 2rem;">
                        <div>
                            <h2>${caseItem.title}</h2>
                            <p style="color: var(--gray-600);">Case #${caseItem.id}</p>
                        </div>
                        <div style="display: flex; gap: 0.5rem;">
                            <span class="badge ${caseItem.status}">${caseItem.status}</span>
                            <span class="badge">${caseItem.priority} priority</span>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                        <div style="background: var(--gray-50); padding: 1rem; border-radius: 8px;">
                            <strong>Case Type</strong>
                            <p>${formatSpecialty(caseItem.type)}</p>
                        </div>
                        <div style="background: var(--gray-50); padding: 1rem; border-radius: 8px;">
                            <strong>Assigned Lawyer</strong>
                            <p>${caseItem.lawyerName}</p>
                        </div>
                        <div style="background: var(--gray-50); padding: 1rem; border-radius: 8px;">
                            <strong>Created</strong>
                            <p>${caseItem.created}</p>
                        </div>
                        <div style="background: var(--gray-50); padding: 1rem; border-radius: 8px;">
                            <strong>Deadline</strong>
                            <p>${caseItem.deadline}</p>
                        </div>
                    </div>

                    <div style="margin-bottom: 2rem;">
                        <h3>Description</h3>
                        <p>${caseItem.description}</p>
                    </div>

                    <div style="margin-bottom: 2rem;">
                        <h3>Progress</h3>
                        <div class="progress-bar" style="height: 20px;">
                            <div class="progress-fill" style="width: ${caseItem.progress}%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">${caseItem.progress}%</div>
                        </div>
                    </div>

                    <div style="margin-bottom: 2rem;">
                        <h3>Documents</h3>
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                            <div style="border: 2px dashed var(--gray-300); padding: 2rem; border-radius: 8px; text-align: center; cursor: pointer;" onclick="uploadCaseDocument('${caseItem.id}')">
                                <i class="fas fa-upload" style="font-size: 2rem; color: var(--gray-400);"></i>
                                <p>Upload Document</p>
                            </div>
                        </div>
                    </div>

                    <div style="margin-bottom: 2rem;">
                        <h3>Timeline</h3>
                        <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 8px;">
                            <p style="color: var(--gray-600);">Case timeline and activity log would appear here...</p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                        <button class="btn-secondary" onclick="closeModal('caseDetailModal')">Close</button>
                        <button class="btn-primary" onclick="updateCaseStatus('${caseItem.id}')"><i class="fas fa-edit"></i> Update Status</button>
                        <button class="btn-primary" onclick="messageLawyer('${caseItem.lawyerId}')"><i class="fas fa-comment"></i> Message Lawyer</button>
                    </div>
                </div>
            `;
            document.getElementById('case-detail-content').innerHTML = caseDetails;
            openModal('caseDetailModal');
        }
    });
}

function uploadCaseDocument(caseId) {
    showToast('Document upload interface would open here', 'info');
}

function updateCaseStatus(caseId) {
    showToast('Status update interface would open here', 'info');
}

function messageLawyer(lawyerId) {
    showToast('Opening secure messaging...', 'info');
}

// ============================================
// PRICING
// ============================================

function selectPlan(plan) {
    auth.requireAuth(() => {
        showToast(`Proceeding to payment for ${plan} plan...`, 'info');
        setTimeout(() => {
            alert(`Payment processing would happen here.\n\nIn production, this would integrate with:\n- Stripe for payments\n- Subscription management\n- Invoice generation\n\nSelected Plan: ${plan.toUpperCase()}`);
        }, 1000);
    });
}

// ============================================
// MODALS
// ============================================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');

        // Load specific modal content
        if (modalId === 'newDocModal') {
            loadDocumentTemplates();
        }
        if (modalId === 'bookConsultModal') {
            populateLawyerSelect();
        }
        if (modalId === 'newCaseModal') {
            populateCaseLawyerSelect();
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

function populateLawyerSelect() {
    const lawyers = dataStore.get('lawyers') || [];
    const select = document.getElementById('consult-lawyer');
    select.innerHTML = '<option value="">Choose a lawyer...</option>' +
        lawyers.map(l => `<option value="${l.id}">${l.name} - ${formatSpecialty(l.specialty)}</option>`).join('');
}

function populateCaseLawyerSelect() {
    const lawyers = dataStore.get('lawyers') || [];
    const select = document.getElementById('case-lawyer');
    select.innerHTML = '<option value="">Assign later...</option>' +
        lawyers.map(l => `<option value="${l.id}">${l.name} - ${formatSpecialty(l.specialty)}</option>`).join('');
}

// ============================================
// TABS
// ============================================

function switchTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected tab content
    const tabContent = document.getElementById(tabName + '-consultations') || document.getElementById(tabName);
    if (tabContent) {
        tabContent.classList.add('active');
    }

    // Add active class to clicked tab
    event.target.classList.add('active');
}

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.remove('active');
    });
    document.querySelectorAll('.auth-tab').forEach(t => {
        t.classList.remove('active');
    });

    if (tab === 'signin') {
        document.getElementById('signin-form').classList.add('active');
        document.querySelectorAll('.auth-tab')[0].classList.add('active');
    } else {
        document.getElementById('signup-form').classList.add('active');
        document.querySelectorAll('.auth-tab')[1].classList.add('active');
    }
}

// ============================================
// NOTIFICATIONS
// ============================================

function loadNotifications() {
    const notifications = dataStore.get('notifications') || [];
    const list = document.getElementById('notifications-list');
    const count = document.getElementById('notif-count');

    const unreadCount = notifications.filter(n => !n.read).length;
    count.textContent = unreadCount;
    count.style.display = unreadCount > 0 ? 'block' : 'none';

    if (notifications.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: var(--gray-500); padding: 2rem;">No notifications</p>';
        return;
    }

    list.innerHTML = notifications.map(notif => `
        <div class="notification-item ${notif.read ? '' : 'unread'}" onclick="markNotificationRead('${notif.id}')">
            <h4>${notif.title}</h4>
            <p>${notif.message}</p>
            <time>${notif.time}</time>
        </div>
    `).join('');
}

function markNotificationRead(notifId) {
    dataStore.update('notifications', notifId, { read: true });
    loadNotifications();
}

function markAllRead() {
    const notifications = dataStore.get('notifications') || [];
    notifications.forEach(n => {
        dataStore.update('notifications', n.id, { read: true });
    });
    loadNotifications();
}

function toggleNotificationPanel() {
    const panel = document.getElementById('notificationPanel');
    panel.classList.toggle('active');
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };

    toast.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    // Auth button
    document.getElementById('auth-btn').addEventListener('click', () => {
        openModal('authModal');
    });

    // Notifications button
    document.getElementById('notifications-btn').addEventListener('click', () => {
        toggleNotificationPanel();
    });

    // Sign in form
    document.getElementById('signin-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;

        const result = auth.signIn(email, password);
        if (result.success) {
            closeModal('authModal');
            showToast('Welcome back!', 'success');
        } else {
            showToast(result.error, 'error');
        }
    });

    // Sign up form
    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirm = document.getElementById('signup-confirm').value;

        if (password !== confirm) {
            showToast('Passwords do not match', 'error');
            return;
        }

        const result = auth.signUp(name, email, password);
        if (result.success) {
            closeModal('authModal');
            showToast('Account created successfully!', 'success');
        } else {
            showToast(result.error, 'error');
        }
    });

    // Book consultation form
    document.getElementById('book-consult-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const lawyerId = document.getElementById('consult-lawyer').value;
        const datetime = document.getElementById('consult-datetime').value;
        const duration = document.getElementById('consult-duration').value;
        const topic = document.getElementById('consult-topic').value;

        if (!lawyerId || !datetime || !topic) {
            showToast('Please fill all required fields', 'error');
            return;
        }

        const lawyers = dataStore.get('lawyers') || [];
        const lawyer = lawyers.find(l => l.id === lawyerId);

        const newConsultation = {
            id: 'cons_' + Date.now(),
            lawyerId: lawyerId,
            lawyerName: lawyer.name,
            date: datetime.split('T')[0],
            time: datetime.split('T')[1],
            duration: parseInt(duration),
            topic: topic,
            status: 'upcoming',
            type: 'video'
        };

        dataStore.add('consultations', newConsultation);
        closeModal('bookConsultModal');
        showToast('Consultation booked successfully!', 'success');
        loadConsultations();
    });

    // New case form
    document.getElementById('new-case-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('case-title').value;
        const type = document.getElementById('case-type').value;
        const priority = document.getElementById('case-priority').value;
        const lawyerId = document.getElementById('case-lawyer').value;
        const description = document.getElementById('case-description').value;

        if (!title || !type || !description) {
            showToast('Please fill all required fields', 'error');
            return;
        }

        const lawyers = dataStore.get('lawyers') || [];
        const lawyer = lawyerId ? lawyers.find(l => l.id === lawyerId) : null;

        const newCase = {
            id: 'case_' + Date.now(),
            title: title,
            type: type,
            status: 'active',
            priority: priority,
            description: description,
            lawyerId: lawyerId || null,
            lawyerName: lawyer ? lawyer.name : 'Unassigned',
            created: new Date().toISOString().split('T')[0],
            deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            progress: 0
        };

        dataStore.add('cases', newCase);
        closeModal('newCaseModal');
        showToast('Case created successfully!', 'success');
        loadCases();
    });

    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });

    // User menu
    document.getElementById('user-menu').addEventListener('click', function() {
        if (confirm('Sign out?')) {
            auth.signOut();
            showToast('Signed out successfully', 'info');
            showSection('home');
        }
    });

    // Search button
    document.getElementById('search-btn').addEventListener('click', function() {
        showToast('Global search coming soon!', 'info');
    });

    // Initialize
    loadNotifications();
    showSection('home');
});
