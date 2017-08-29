const round = (n) =>
  Math.round(n * 100) / 100;

const SECONDS = {
  earth: 31557600,
  mercury: 31557600 * 0.2408467,
  venus: 31557600 * 0.61519726,
  mars: 31557600 * 1.8808158,
  jupiter: 31557600 * 11.862615,
  saturn: 31557600 * 29.447498,
  uranus: 31557600 * 84.016846,
  neptune: 31557600 * 164.79132,
};

const years = (secs, planet) => {
  return round(secs / SECONDS[planet]);
};


class SpaceAge {
  constructor(time) {
    this.seconds = time;
    this.onMercury = () => years(time, 'mercury');
    this.onEarth = () => years(time, 'earth');
    this.onVenus = () => years(time, 'venus');
    this.onMars = () => years(time, 'mars');
    this.onJupiter = () => years(time, 'jupiter');
    this.onSaturn = () => years(time, 'saturn');
    this.onUranus = () => years(time, 'uranus');
    this.onNeptune = () => years(time, 'neptune');
  }
}

module.exports = SpaceAge;