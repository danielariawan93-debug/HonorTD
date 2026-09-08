export class Slime{
 constructor(x,y){this.x=x;this.y=y;this.hp=80;this.maxHp=80;this.speed=18;this.radius=17;this.dead=false}
 update(dt){this.y+=this.speed*dt;if(this.y>610)this.dead=true}
 hit(damage){this.hp-=damage;if(this.hp<=0)this.dead=true}
}
export class EnemyManager{
 constructor(){this.enemies=[];this.spawnTimer=0}
 update(dt){this.spawnTimer-=dt;if(this.spawnTimer<=0&&this.enemies.length<12){this.spawn();this.spawnTimer=1.4}this.enemies.forEach(e=>e.update(dt));this.enemies=this.enemies.filter(e=>!e.dead)}
 spawn(){this.enemies.push(new Slime((Math.random()-.5)*170,-30))}
}
