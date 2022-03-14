import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];
  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }
  sumMass(items: Payload[]): number {
    let sum: number = 0;
    for (let item of items) {
      sum += item.massKg;
    }
    return sum;
  }
  currentMassKg(): number {
    let sum: number;
    sum = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    return sum;
  }
  canAdd(item: Payload): boolean {
    if (this.totalCapacityKg >= this.currentMassKg() + item.massKg) {
      return true;
    }
    return false;
  }
  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo) === true) {
      this.cargoItems.push(cargo);
      return true;
    } else {
      return false;
    }
  }
  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut) === true) {
      this.astronauts.push(astronaut);
      return true;
    } else {
      return false;
    }
  }
}
