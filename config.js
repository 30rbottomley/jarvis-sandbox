/* JARVIS settings. Fill these in from YOUR Supabase project:
   Supabase > Project Settings > API  (Project URL, and the "anon public" key).
   NEVER paste the service_role key here. */
window.JARVIS_CONFIG = {
  url: 'https://bwphnecyvqtsmcpqjqga.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3cGhuZWN5dnF0c21jcHFqcWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMwMTgxNjgsImV4cCI6MjEwODU5NDE2OH0.0z8zd9duLpvrGkcLjPShA7yLqc5fYACoZP9Rf08mp_c',
  teacherPin: '2468',            // change this to your own number

  brand: {
    appName:   'JARVIS',
    teacher:   'your teacher',   // what students see, e.g. 'Mr. Smith' or 'Ms. Lee'
    className: '',               // shown in the browser tab, e.g. 'Room 12'
    school:    '',
    tvName:    'School TV',      // only used if the tv module is on
    colors: { main: '#2E6FD0', dark: '#1F3A5F', light: '#A9C7F2' }
  },

  /* Grade levels your class uses. Leave empty [] to offer every level, kindergarten through college.
     Ids: 'K','1'..'8' (grades), '9','10','11','12' (freshman to senior), 'C1','C2','C3','C4' (college years).
     Examples:  ['7','8']   ['K','1','2']   ['9','10','11','12']   ['C1','C2','C3','C4'] */
  grades: [],

  /* Optional modules. true = on, false = off. */
  features: {
    weeklyReport: true,   // auto-assigned weekly report (needs checkins style prompts)
    checkins:     true,   // daily / midweek check-in prompts
    tv:           true,   // TV rundowns, announcements, segment library
    schoology:    true,   // Schoology sync log page
    abDays:       true,   // A/B day tags
    inspiration:  true,   // weekly Inspiration post
    startSlide:   true,   // full-screen start-of-class slide
    aiHelper:     true,    // the Ask button talks to an AI helper first (see AI-HELPER.txt before turning on)
  }
};
