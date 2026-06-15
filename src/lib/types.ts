export type Player={id:string;name:string;host?:boolean;score:number;avatar:string};
export type GameId='lobby'|'trivia'|'never'|'snake'|'legends';
export type RoomState={code:string;players:Player[];game:GameId;phase:string;adultUnlocked:boolean;round:number;log:string[];data:any};
export type ClientMsg={type:string;[key:string]:any};
