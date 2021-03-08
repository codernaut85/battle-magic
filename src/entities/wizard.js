import Entity from './entity';

class Wizard extends Entity({
    firstName: "Unnamed wizard",
    spell: 'No spell'
}) {
    castSpell() {
        alert(this.spell);
    }
}

export default Wizard;
