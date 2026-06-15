export type GameCategory='Casual'|'Strategy'|'RPG Lite'|'College Party'|'Adult 18+'|'Best Game';
export type GameId='lobby'|'trivia'|'snake'|'pictionary'|'charades'|'bingo'|'mafia'|'werewolf'|'secret'|'resistance'|'dnd'|'dungeon'|'fantasy'|'zombie'|'never'|'mostlikely'|'vote'|'hotseat'|'truthdare'|'partyadult'|'legends';
export const games:{id:GameId;name:string;cat:GameCategory;players:string;desc:string;adult?:boolean}[]=[
 {id:'trivia',name:'Trivia Clash',cat:'Casual',players:'2-10',desc:'Multiple-choice trivia with host-controlled questions.'},
 {id:'snake',name:'Snake & Ladders Rush',cat:'Casual',players:'2-6',desc:'Dice, ladders, snakes, turns, and winner.'},
 {id:'pictionary',name:'Pictionary',cat:'Casual',players:'3-10',desc:'Drawer gets a word, others guess aloud.'},
 {id:'charades',name:'Charades',cat:'Casual',players:'3-10',desc:'Acting prompts, timer, pass/correct scoring.'},
 {id:'bingo',name:'Campus Bingo',cat:'Casual',players:'2-10',desc:'Randomized campus bingo boards.'},
 {id:'mafia',name:'Mafia',cat:'Strategy',players:'5-10',desc:'Hidden roles, night action, day vote.'},
 {id:'werewolf',name:'Werewolf',cat:'Strategy',players:'5-10',desc:'Villagers vs werewolves with seer and doctor.'},
 {id:'secret',name:'Secret Chancellor',cat:'Strategy',players:'5-10',desc:'Safe original Secret-Hitler-style policy game.'},
 {id:'resistance',name:'Resistance Missions',cat:'Strategy',players:'5-10',desc:'Team missions with hidden saboteurs.'},
 {id:'dnd',name:'D&D Lite',cat:'RPG Lite',players:'2-6',desc:'Simple RPG checks, HP, loot, boss fight.'},
 {id:'dungeon',name:'Dungeon Crawl',cat:'RPG Lite',players:'2-6',desc:'Room-by-room combat and treasure.'},
 {id:'fantasy',name:'Fantasy Quest',cat:'RPG Lite',players:'2-8',desc:'Branching cooperative quest scenes.'},
 {id:'zombie',name:'Zombie Survival',cat:'RPG Lite',players:'2-8',desc:'Resource choices, risk rolls, survival score.'},
 {id:'never',name:'Never Have I Ever',cat:'College Party',players:'3-10',desc:'Safe campus prompts.'},
 {id:'mostlikely',name:'Most Likely To',cat:'College Party',players:'3-10',desc:'Vote who fits the prompt.'},
 {id:'vote',name:'Vote Game',cat:'College Party',players:'3-10',desc:'Anonymous-style group vote prompts.'},
 {id:'hotseat',name:'Hot Seat',cat:'College Party',players:'3-10',desc:'One player answers rotating questions.'},
 {id:'truthdare',name:'Truth or Dare',cat:'College Party',players:'2-10',desc:'Safe truths and dares.'},
 {id:'partyadult',name:'18+ Party Pack',cat:'Adult 18+',players:'3-10',desc:'Age-gated, non-explicit relationship/drinking challenges.',adult:true},
 {id:'legends',name:'Legends of Campus',cat:'Best Game',players:'4-10',desc:'Flagship hidden-role RPG: quests, voting, traitors, items.'}
];
export const trivia=[
 {q:'Which campus place is usually best for quiet studying?',a:['Library','Gym','Cafeteria rush hour','Football stand'],c:0},
 {q:'What does MVP mean in product building?',a:['Most Viral Post','Minimum Viable Product','Maximum Visual Page','Monthly Value Plan'],c:1},
 {q:'Which game mechanic creates suspense in Mafia?',a:['Hidden roles','Open score only','No voting','Single player mode'],c:0},
 {q:'Cloudflare Durable Objects are useful for...',a:['Shared room state','Photoshop editing','Charging phones','Making CSS'],c:0},
 {q:'In Snake & Ladders, ladders usually...',a:['Move you up','Skip your turn','Reset the game','Hide your role'],c:0},
 {q:'A good party game should be...',a:['Easy to join','Hard to install','Only desktop','Silent only'],c:0}
];
export const prompts={
 never:['Skipped a class and regretted it','Joined a club for free food','Pulled an all-nighter','Forgot a roommate’s name','Used the wrong classroom','Said “I’ll study tomorrow” and did not'],
 pictionary:['Pizza at midnight','Dorm room chaos','Campus squirrel','Lost backpack','Professor with coffee','Laundry disaster','Library ghost','Finals week'],
 charades:['Late to class','Trying to find parking','Group project panic','Silent library laugh','Ordering too much food','Winning a tiny prize'],
 mostlikely:['become campus famous','forget the room code','start a random road trip','survive finals with no sleep','become a professor','win a dance battle'],
 vote:['Best storyteller?','Most chaotic good?','Best team leader?','Most likely to betray in Mafia?','Funniest under pressure?','Best at convincing others?'],
 hotseat:['What is your safest unpopular opinion?','What campus food is overrated?','What is your funniest class story?','Who would you pick for a zombie team?','What is your hidden talent?'],
 truth:['What is a harmless secret habit?','What was your funniest mistake this semester?','Who here gives the best advice?','What is your comfort snack?'],
 dare:['Do your best mascot pose','Give a dramatic movie trailer voice','Compliment two players','Talk like a professor for 20 seconds'],
 adult:['Take a sip if you have ever texted the wrong person','Vote: best date planner','Share a green flag you like','Choose someone to make a toast','Relationship red flag lightning round'],
 quests:['Recover the stolen mascot head','Investigate the haunted lecture hall','Win supplies from the cafeteria boss','Decode graffiti near the quad','Escort the rival RA safely'],
 items:['Coffee of Courage','Library Pass','Fake ID Badge','Lucky Hoodie','Dining Hall Coupon','Noise-Canceling Charm']
};
export const roles=['Guardian RA','Mascot Rebel','Cafeteria Spy','Library Ghost','Lab Genius','Quad Trickster','Dorm Healer','Frat Diplomat','Transfer Oracle','Campus Traitor'];
export const bingo=['Has a lab today','Owns campus merch','Has missed a bus','Knows a shortcut','Has pulled all-nighter','Loves coffee','Has roommate story','Went to office hours','Has parking complaint','Changed major','Ate instant noodles','Lost student ID','Uses two monitors','Has club sticker','Knows professor meme','Late assignment story','Gym this week','Lives off campus','Has group project','Knows school song','Library after midnight','Uses dark mode','Has favorite TA','Brought snacks','Has umbrella'];
