export const games=[
 {id:'trivia',name:'Trivia Clash',cat:'Casual',players:'2-10',desc:'Fast campus trivia with voting and score.'},
 {id:'snake',name:'Snake & Ladders Rush',cat:'Casual',players:'2-6',desc:'Classic race board, party-sized.'},
 {id:'never',name:'Never Have I Ever',cat:'College Party',players:'3-10',desc:'Safe party prompts, no explicit generation.'},
 {id:'legends',name:'Legends of Campus',cat:'Best Game',players:'4-10',desc:'Hidden roles, quests, voting, mini-games.'},
 {id:'mafia',name:'Mafia',cat:'Strategy',players:'5-10',desc:'Coming next: social deduction.'},
 {id:'dnd',name:'D&D Lite',cat:'RPG Lite',players:'2-6',desc:'Coming next: lightweight quests.'}
] as const;
export const trivia=[
 {q:'Which data structure works like first-in first-out?',a:['Stack','Queue','Tree','Set'],c:1},
 {q:'What is the usual name for a room join identifier?',a:['Hash','Room code','Cookie','Token bucket'],c:1},
 {q:'Cloudflare Durable Objects are great for...',a:['Room state','Image editing','CSS only','Emails'],c:0}
];
export const neverPrompts=['Never have I ever skipped a class and regretted it.','Never have I ever joined a club just for free food.','Never have I ever forgotten a roommate’s name.','Never have I ever pulled an all-nighter before an exam.'];
export const campusRoles=['RA Guardian','Mascot Rebel','Library Ghost','Frat Diplomat','Lab Genius','Cafeteria Spy','Dorm Healer','Quad Trickster'];
