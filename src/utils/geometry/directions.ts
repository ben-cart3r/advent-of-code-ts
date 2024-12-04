import Vector from './vector'

const north = new Vector(0, -1)
const east = new Vector(1, 0)
const south = new Vector(0, 1)
const west = new Vector(-1, 0)

const northEast = new Vector(1, -1)
const southEast = new Vector(1, 1)
const southWest = new Vector(-1, 1)
const northWest = new Vector(-1, -1)

const cardinal = {
  north,
  east,
  south,
  west,
}

const ordinal = {
  northEast,
  southEast,
  southWest,
  northWest,
}

const cardinalDirections = [north, east, south, west]

const ordinalDirections = [northEast, southEast, southWest, northWest]

const compassDirections = [...cardinalDirections, ...ordinalDirections]

export { cardinal, cardinalDirections, compassDirections, ordinal, ordinalDirections }
