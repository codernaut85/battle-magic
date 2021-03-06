import Entity from './entity';

class Wizard extends Entity({
    firstName: "Unnamed wizard",
    spell: 'No spell'
}) {
    fullName() {
        return this.firstName
    }

    castSpell() {
        alert(this.spell);
    }
}

export default Wizard;
