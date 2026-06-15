import type {GameId} from '../games/catalog';
export type Player={id:string;name:string;host?:boolean;score:number;avatar:string};
export type RoomState={code:string;players:Player[];game:GameId;phase:string;adultUnlocked:boolean;round:number;turn:number;log:string[];data:any};
export type ClientMsg={type:string;[key:string]:any};
