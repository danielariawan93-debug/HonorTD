export const WEAPONS=[
 {id:'bow',name:'Bow',damage:22,range:430,cooldown:420,projectileSpeed:700,ammo:Infinity},
 {id:'crossbow',name:'Crossbow',damage:42,range:520,cooldown:850,projectileSpeed:900,ammo:10},
 {id:'dual-crossbow',name:'Dual Crossbow',damage:30,range:470,cooldown:520,projectileSpeed:820,ammo:20},
 {id:'rock',name:'Throwing Rock',damage:55,range:250,cooldown:1100,projectileSpeed:500,ammo:5}
];
export class WeaponManager{
 constructor(){this.index=0;this.lastShot=0;this.ammo=WEAPONS.map(w=>w.ammo)}
 get current(){return WEAPONS[this.index]}
 select(i){if(i>=0&&i<WEAPONS.length)this.index=i}
 canShoot(now){return now-this.lastShot>=this.current.cooldown&&(this.ammo[this.index]===Infinity||this.ammo[this.index]>0)}
 shoot(now){if(!this.canShoot(now))return false;this.lastShot=now;if(this.ammo[this.index]!==Infinity)this.ammo[this.index]--;return true}
}
