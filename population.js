let roles = require('roles');

let population = {
    run: function() {
        for(let i in roles.list) {
            let role = roles.list[i];
            let count = _.sum(Game.creeps, (creep) => role.isMember(creep));
            console.log(role.name + ': ' + count);
            
            if(count < role.requiredCount) {
                role.spawn()
            }
        }
    }
};

module.exports = population;