import { Record } from 'immutable';

// Abstract class, do not instantiate!
const Entity = defaultValues => class extends Record({
    id: undefined,
    attackStrength: 10,
    health: 100,
    ...defaultValues
}) {
    getName() {
        return this.firstName
    }
}

export default Entity;
