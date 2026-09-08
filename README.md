# HonorTD

First-person tower defense prototype.

## Prototype scope
- Landscape-first 16:9 battlefield view with uniform scaling on PC, phone, and tablet.
- Logical render resolution: 1280×720; no non-uniform stretching.
- Home menu: Play, Setting, Support.
- Setting: Sound and Vibration toggles.
- First-person POV from a tower battlement with a 180° horizontal view.
- Modular weapon system: Bow, Crossbow, Dual Crossbow, Throwing Rock.
- Modular enemy system: Slime.
- Basic wave spawning, tower HP, weapon range, cooldown and ammo.

## Structure
```text
js/
├─ main.js          # screen/menu wiring
├─ gameplay.js      # gameplay loop and renderer integration
├─ weapons.js       # weapon data and weapon manager
└─ enemies.js       # enemy classes and spawn manager
css/
└─ style.css        # responsive 16:9 presentation
```

The project is intentionally split by responsibility so later multiplayer, inventory, upgrades, additional enemies, and additional weapons can be added without putting all gameplay into one file.
