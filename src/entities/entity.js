import { Record } from 'immutable';

const Entity = defaultValues => class extends Record({
    id: undefined,
    attackStrength: 10,
    health: 100,
    ...defaultValues
}) {

}

export default Entity;
