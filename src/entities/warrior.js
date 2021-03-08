import Entity from './entity';

class Warrior extends Entity({
    firstName: "Unnamed warrior",
    blockStrength: 25
}) {
    block() {
        alert(`Blocked ${this.blockStrength} points of damage`);
    }
}

export default Warrior;
