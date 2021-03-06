import Entity from './entity';

class Warrior extends Entity({
    firstName: "Unnamed warrior",
    blockStrength: 25
}) {
    fullName() {
        return this.firstName
    }

    block() {
        alert(`Blocked ${this.blockStrength} points of damage`);
    }
}

export default Warrior;
