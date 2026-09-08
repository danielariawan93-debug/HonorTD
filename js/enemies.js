export class Slime{
 constructor(x,z){this.x=x;this.z=z;this.hp=80;this.maxHp=80;this.speed=4.2;this.radius=.75;this.dead=false}
 update(dt){this.z+=this.speed*dt;if(this.z>7)this.dead=true}
 hit(damage){this.hp-=damage;if(this.hp<=0)this.dead=true}
}

export class EnemyManager{
 constructor(){this.enemies=[];this.spawnTimer=0}
 update(dt){this.spawnTimer-=dt;if(this.spawnTimer<=0&&this.enemies.length<12){this.spawn();this.spawnTimer=1.4}this.enemies.forEach(e=>e.update(dt));this.enemies=this.enemies.filter(e=>!e.dead)}
 spawn(){this.enemies.push(new Slime((Math.random()-.5)*16,-80))}
}
