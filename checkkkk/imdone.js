
    var studentData = {
      firstName:  'Messied',
      lastName:   'Trauma',
      initials:   'MT',
      matricule:  '2025INFO0101',
      dob:        '01/01/1900',
      nationalId: '3 ************',
      email:      'm.trauma@gmail.com',
      phone:      '+213 X XX XX XX XX',
      wilaya:     'Blida (09)',
      university:    'Saad Dahleb University',
      faculty:       'Science & Technology',
      department:    'Computer Science',
      specialty:     'Computer Science',
      year:          'First Year Engineering',
      registrationYear: '1st Year Engineering — 2025/2026',
      section:       'Section A',
      groupTD:       'Group 2',
      semester:      'Semester 2 — 2025/2026',
      deptChief:     'Prof. Ouled Aissa',
      campus:        'Blida University Campus',
      totalCredits:  60,
      earnedCredits: 22,
      nextExam: { date: 'Mar 12', module: 'Algorithms & Data Structures', room: 'Room B-204 · 08:30' },

      modules: [
        { name: 'Algorithms & Data Structures', type: 'Lecture + Tutorial + Lab', coeff: 4, credit: 6,  cc: 1,   exam: 1.25 },
        { name: 'Operating Systems',            type: 'Lecture + Lab',            coeff: 4, credit: 5,  cc: 14,   exam: 12.5  },
        { name: 'Computer Architecture',        type: 'Lecture + Tutorial',       coeff: 3, credit: 4,  cc: 16,   exam: 15.5  },
        { name: 'Analysis',                     type: 'Lecture + Tutorial',       coeff: 3, credit: 4,  cc: 12,   exam: 11.25 },
        { name: 'Algebra',                      type: 'Lecture + Tutorial',       coeff: 2, credit: 3,  cc: 10,   exam: 8.75  },
        { name: 'Mathematical Logic',           type: 'Lecture + Tutorial',       coeff: 3, credit: 4,  cc: 13,   exam: 14.5  },
        { name: 'Probability',                  type: 'Lecture + Tutorial',       coeff: 2, credit: 3,  cc: 15,   exam: 15  }
      ],

      schedule: [
        { day: 'Sunday', sessions: [
          { time: '08:30 – 10:00', name: 'Algorithms & DS',       type: 'cours', room: 'Amphi 184',     teacher: 'Prof. muna'},
          { time: '10:15 – 11:45', name: 'Algorithms — Tutorial', type: 'td',    room: 'pav 1',  teacher: 'prof. muna'},
          { time: '13:00 – 14:30', name: 'Computer Architecture', type: 'cours', room: 'Amphi 212',     teacher: 'Prof. nsitha2'}
        ]},
        { day: 'Monday', sessions: [
          { time: '08:30 – 10:00', name: 'OS — Lab',              type: 'tp',    room: 'Lab 3',       teacher: 'prf. nsitha'},
          { time: '10:15 – 11:45', name: 'Analysis — Lecture',    type: 'cours', room: 'Amphi 184',     teacher: 'Prof. lemessied'}
        ]},
        { day: 'Tuesday', sessions: [
          { time: '08:30 – 10:00', name: 'Mathematical Logic',    type: 'cours', room: 'amphi 212',     teacher: 'Prof. Benali'},
          { time: '10:15 – 11:45', name: 'Algebra — Tutorial',    type: 'td',    room: 'pav1 170',  teacher: 'prof. lemessied'   },
          { time: '13:00 – 14:30', name: 'Probability — TD',      type: 'td',    room: 'pav 9',  teacher: 'prof. lemessied'}
        ]},
        { day: 'Wednesday', sessions: [
          { time: '08:30 – 10:00', name: 'Analysis — Lab',        type: 'tp',    room: 'Lab 5', teacher: 'prof. lemessied'   },
          { time: '10:15 – 11:45', name: 'Algebra — Lecture',     type: 'cours', room: 'Amphi 212',  teacher: 'Prof. lemessied' }
        ]}
      ],  

      todayClasses: [
        { time: '08:30 – 10:00', name: 'Algorithms', room: 'Amphi 184', teacher: 'Prof. muna', type: 'cours' },
        { time: '13:00 – 14:30', name: 'OS — Lab',   room: 'Lab 3',   teacher: 'prof. nsitha',   type: 'tp'    }
      ],

      bourse: {
        currentStatus: 'Paid',
        amount:        '2000 DA / month',
        lastPayment:   'February 2026',
        academicYear:  '2025/2026'
      },

      dettes: [
        { module: 'Algebra',    semester: 'S1 2025/26', credits: 3, cleared: false },
        { module: 'Analysis',   semester: 'S1 2025/26', credits: 4, cleared: true  },
        { module: 'Probability',semester: 'S1 2025/26', credits: 2, cleared: true  }
      ],

      holidays: [
        { name: 'Winter Break', start: '21 Dec 2025', end: '02 Jan 2026', month: 'DEC', day: '21' },
        { name: 'Spring Break', start: '20 Mar 2026', end: '30 Mar 2026', month: 'MAR', day: '20' },
        { name: 'Summer Break', start: '15 Jun 2026', end: '01 Sep 2026', month: 'JUN', day: '15' }
      ],
      
      news: [
        { title: ' Semester 1 exam schedule published', body: 'The official exam schedule for Semester 1 is now available. Exams begin March 12 and end March 28.', source: 'Administration', date: '27 Feb 2026', unread: true  },
        { title: '️ Resit registration — deadline March 20', body: 'Students who failed one or more modules must register for the resit session before March 20.', source: 'Registrar', date: '26 Feb 2026', unread: true  },
        { title: ' schedule updated', body: '', source: 'Administration', date: '24 Feb 2026', unread: false }
      ]
    };

    function calculateGrades() {
      var totalWeighted = 0;
      var totalCoeff = 0;
      for (var i = 0; i < studentData.modules.length; i++) {
        var mod = studentData.modules[i];
        mod.moyenne = mod.exam === null ? mod.cc : (mod.cc * 0.4) + (mod.exam * 0.6);
        mod.moyenne = Math.round(mod.moyenne * 100) / 100;
        mod.validated = mod.moyenne >= 10;
        totalWeighted += mod.moyenne * mod.coeff;
        totalCoeff += mod.coeff;
      }
      return Math.round((totalWeighted / totalCoeff) * 100) / 100;
    }

    function getPillColor(score) {
      if (score >= 14) return 'pill-green';
      if (score >= 10) return 'pill-gold';
      return 'pill-red';
    }

    function makeInfoRow(label, value) {
      return '<div class="info-row"><span class="key">' + label + '</span><span class="val">' + value + '</span></div>';
    }

    function makeSlotHTML(s) {
      var typePill = s.type === 'td'   ? '<span class="pill pill-blue"   style="font-size:10px">TD</span>'
                   : s.type === 'tp'   ? '<span class="pill pill-purple" style="font-size:10px">TP</span>'
                   :                     '<span class="pill pill-gold"   style="font-size:10px">Cours</span>';
      var typeClass = s.type !== 'cours' ? s.type : '';
      return '<div class="slot ' + typeClass + '"><div class="slot-time">' + s.time + '</div><div style="flex:1"><div class="slot-name">' + s.name + ' ' + typePill + '</div><div class="slot-detail">' + s.room + ' · ' + s.teacher + '</div></div></div>';
    }

    function fillPage() {
      var gpa = calculateGrades();

      document.getElementById('dash-firstname').textContent   = studentData.firstName;
      document.getElementById('dash-subtitle').textContent    = studentData.semester + ' · ' + studentData.university;
      document.getElementById('dash-gpa').textContent         = gpa;
      document.getElementById('dash-modules').textContent     = studentData.modules.length;
      document.getElementById('dash-modules-sub').textContent = studentData.modules.filter(function(m){ return m.exam !== null; }).length + ' graded';
      document.getElementById('dash-modules-status').textContent = studentData.modules.filter(function(m){ return m.validated; }).length + ' passed / ' + studentData.modules.filter(function(m){ return !m.validated; }).length + ' resit';
      document.getElementById('dash-exam-date').textContent   = studentData.nextExam.date;
      document.getElementById('dash-exam-name').textContent   = studentData.nextExam.module;
      document.getElementById('dash-exam-room').textContent   = studentData.nextExam.room;
      document.getElementById('dash-credits').textContent     = studentData.earnedCredits;
      document.getElementById('dash-credits-sub').textContent = '/ ' + studentData.totalCredits + ' total';
      document.getElementById('dash-credits-bar').style.width = Math.round((studentData.earnedCredits / studentData.totalCredits) * 100) + '%';

      var dashGrades = '';
      for (var i = 0; i < 5 && i < studentData.modules.length; i++) {
        var m = studentData.modules[i];
        dashGrades += '<tr><td><div class="subject-name">' + m.name + '</div><div class="subject-type">' + m.type + '</div></td><td><span class="pill ' + getPillColor(m.moyenne) + '">' + m.moyenne + '</span></td><td style="color:var(--muted)">' + m.credit + '</td><td>' + (m.validated ? '<span style="color:var(--green)"></span>' : '<span style="color:var(--red)"></span>') + '</td></tr>';
      }
      document.getElementById('dash-grades-body').innerHTML = dashGrades;

      var todayHTML = '';
      for (var i = 0; i < studentData.todayClasses.length; i++) todayHTML += makeSlotHTML(studentData.todayClasses[i]);
      document.getElementById('today-classes').innerHTML = todayHTML;

      var dashNews = '';
      for (var i = 0; i < 3 && i < studentData.news.length; i++) {
        var n = studentData.news[i];
        dashNews += '<div class="news-item"><div class="news-dot" style="background:' + (n.unread ? 'var(--gold)' : 'var(--muted)') + '"></div><div><div class="news-title">' + n.title + '</div><div class="news-meta">' + n.source + ' · ' + n.date + '</div></div></div>';
      }
      document.getElementById('dash-news').innerHTML = dashNews;

      document.getElementById('grades-subtitle').textContent = studentData.semester;
      document.getElementById('g-avg').textContent = gpa;
      document.getElementById('g-count').textContent = studentData.modules.length + ' modules';
      var totalCr = 0;
      for (var i = 0; i < studentData.modules.length; i++) totalCr += studentData.modules[i].credit;
      document.getElementById('g-credits').textContent = totalCr;
      
      var fullGrades = '';
      for (var i = 0; i < studentData.modules.length; i++) {
        var m = studentData.modules[i];
        fullGrades += '<tr><td><div class="subject-name">' + m.name + '</div><div class="subject-type">' + m.type + '</div></td><td style="color:var(--muted)">' + m.coeff + '</td><td style="color:var(--muted)">' + m.credit + '</td><td>' + m.cc + '</td><td>' + (m.exam !== null ? m.exam : '—') + '</td><td><span class="pill ' + getPillColor(m.moyenne) + '">' + m.moyenne + '</span></td><td style="text-align:right">' + (m.validated ? '<span class="pill pill-green">Passed </span>' : '<span class="pill pill-red">Resit </span>') + '</td></tr>';
      }
      document.getElementById('full-grades-body').innerHTML = fullGrades;

      document.getElementById('schedule-subtitle').textContent = studentData.semester + ' · ' + studentData.section + ' — ' + studentData.groupTD;
      renderSchedule('all');


      var steps = ['Submitted', 'Validated', 'Paid'];
      var currentStep = steps.indexOf(studentData.bourse.currentStatus);
      if (currentStep < 0) currentStep = 2;
      var stepsHTML = '';
      for (var i = 0; i < steps.length; i++) {
        var cls  = i < currentStep ? 'done' : i === currentStep ? 'current' : '';
        var icon = i < currentStep ? ''   : i === currentStep ? '●'       : '○';
        stepsHTML += '<div class="step"><div class="step-dot ' + cls + '">' + icon + '</div><div class="step-label ' + cls + '">' + steps[i] + '</div></div>';
      }
      document.getElementById('bourse-steps').innerHTML = stepsHTML;
      document.getElementById('bourse-year').textContent = studentData.bourse.academicYear;

      document.getElementById('bourse-details').innerHTML =
        makeInfoRow('Status', '<span style="color:var(--green)">' + studentData.bourse.currentStatus + '</span>') +
        makeInfoRow('Amount', studentData.bourse.amount) +
        makeInfoRow('Last payment', studentData.bourse.lastPayment) +
        makeInfoRow('Housing', studentData.bourse.residency);

      document.getElementById('registration-details').innerHTML =
        makeInfoRow('Registration year', studentData.registrationYear) +
        makeInfoRow('Specialty', studentData.specialty) +
        makeInfoRow('Department', studentData.department) +
        makeInfoRow('Section', studentData.section) +
        makeInfoRow('Tutorial group', studentData.groupTD);

      document.getElementById('holidays-count').textContent = studentData.holidays.length + ' periods';
      var holidaysHTML = '';
      for (var i = 0; i < studentData.holidays.length; i++) {
        var h = studentData.holidays[i];
        holidaysHTML += '<div class="holiday-item"><div class="holiday-date-box"><div class="holiday-month">' + h.month + '</div><div class="holiday-day">' + h.day + '</div></div><div><div class="holiday-name">' + h.name + '</div><div class="holiday-range">' + h.start + ' → ' + h.end + '</div></div></div>';
      }
      document.getElementById('holidays-list').innerHTML = holidaysHTML;

      document.getElementById('groups-section').innerHTML =
        makeInfoRow('Department', studentData.department) +
        makeInfoRow('Specialty', studentData.specialty) +
        makeInfoRow('Year', studentData.year) +
        makeInfoRow('Section', studentData.section) +
        makeInfoRow('Tutorial group', studentData.groupTD);

      document.getElementById('groups-dept').innerHTML =
        makeInfoRow('University', studentData.university) +
        makeInfoRow('Faculty', studentData.faculty) +
        makeInfoRow('Department', studentData.department) +
        makeInfoRow('Dept. Chief', studentData.deptChief) +
        makeInfoRow('Semester', studentData.semester) +
        makeInfoRow('Campus', studentData.campus);

      var unreadCount = studentData.news.filter(function(n){ return n.unread; }).length;
      document.getElementById('news-count').textContent = unreadCount + ' unread';
      document.getElementById('news-badge').textContent = unreadCount;
      var newsHTML = '';
      for (var i = 0; i < studentData.news.length; i++) {
        var n = studentData.news[i];
        newsHTML += '<div class="news-item"><div class="news-dot" style="background:' + (n.unread ? 'var(--gold)' : 'var(--muted)') + '"></div><div><div class="news-title">' + n.title + '</div><div class="news-body">' + n.body + '</div><div class="news-meta">' + n.source + ' · ' + n.date + '</div></div></div>';
      }
      document.getElementById('news-list').innerHTML = newsHTML;

      document.getElementById('profile-avatar').textContent = studentData.initials;
      document.getElementById('profile-name').textContent   = studentData.firstName + ' ' + studentData.lastName;
      document.getElementById('profile-id').textContent     = 'Student ID: ' + studentData.matricule;

      document.getElementById('profile-personal').innerHTML =
        makeInfoRow('Full name', studentData.firstName + ' ' + studentData.lastName) +
        makeInfoRow('Date of birth', studentData.dob) +
        makeInfoRow('National ID', studentData.nationalId) +
        makeInfoRow('Email', studentData.email) +
        makeInfoRow('Phone', studentData.phone) +
        makeInfoRow('Wilaya', studentData.wilaya);

      document.getElementById('profile-academic').innerHTML =
        makeInfoRow('Year', studentData.year) +
        makeInfoRow('Specialty', studentData.specialty) +
        makeInfoRow('Department', studentData.department) +
        makeInfoRow('Average', gpa + ' / 20') +
        makeInfoRow('Credits', studentData.earnedCredits + ' / ' + studentData.totalCredits);

      document.getElementById('profile-bourse').innerHTML =
        makeInfoRow('Status', '<span style="color:var(--green)">' + studentData.bourse.currentStatus + '</span>') +
        makeInfoRow('Amount', studentData.bourse.amount) +
        makeInfoRow('Last payment', studentData.bourse.lastPayment) +
        makeInfoRow('Housing', studentData.bourse.residency);
    }

    function renderSchedule(filter) {
      var html = '';
      for (var i = 0; i < studentData.schedule.length; i++) {
        var day = studentData.schedule[i];
        var sessions = day.sessions.filter(function(s) {
          if (filter === 'all')    return true;
          if (filter === 'cours')  return s.type === 'cours';
          if (filter === 'td')     return s.type === 'td';
          if (filter === 'tp')     return s.type === 'tp';
          if (filter === 'group1') return s.group === 'all' || s.group === 'group1';
          if (filter === 'group2') return s.group === 'all' || s.group === 'group2';
          return true;
        });
        if (sessions.length === 0) continue;
        html += '<div class="card"><div class="card-header"><div class="card-title">' + day.day + '</div><span class="pill pill-muted">' + sessions.length + ' session(s)</span></div>';
        for (var j = 0; j < sessions.length; j++) html += makeSlotHTML(sessions[j]);
        html += '</div>';
      }
      if (!html) html = '<div class="card" style="grid-column:1/-1"><p style="color:var(--muted);text-align:center">No sessions for this filter.</p></div>';
      document.getElementById('schedule-grid').innerHTML = html;
    }

    function goToPage(el) {
      document.querySelectorAll('.nav-item').forEach(function(i){ i.classList.remove('active'); });
      document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('active'); });
      el.classList.add('active');
      var page = document.getElementById('page-' + el.dataset.page);
      if (page) page.classList.add('active');
    }

    function switchTab(el) {
      el.closest('.tabs').querySelectorAll('.tab').forEach(function(t){ t.classList.remove('active'); });
      el.classList.add('active');
    }

    function openModal()  { document.getElementById('id-modal').classList.add('open'); }
    function closeModal() { document.getElementById('id-modal').classList.remove('open'); }
    function handleModalClick(e) { if (e.target === document.getElementById('id-modal')) closeModal(); }

    fillPage();
