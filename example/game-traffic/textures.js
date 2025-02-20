import Stage from '../../src/';

import bgPng from "./bg.png";
import map1Png from "./map-1.png";
import mainPng from "./main.png";

Stage({
  name : "bg",
  image : { src : bgPng, ratio : 2 }
});

Stage({
  name : "map-1",
  image : { src : map1Png, ratio : 2 }
});

Stage({
  image : { src : mainPng, ratio : 4 },
  ppu : 16,
  textures : {
    plane : { x : 0, y : 0, width : 1, height : 1 },
    explode : { x : 1, y : 0, width : 3, height : 3 }
  }
});
