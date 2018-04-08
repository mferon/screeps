let roles = {
    list: [
        require('role.harvester'),
        require('role.upgrader'),
        require('role.builder'),
    ],
    run: function() {
        for(let creepName in Game.creeps) {
            let creep = Game.creeps[creepName];
            for(let i in roles.list) {
                let role = roles.list[i];
                if (role.isMember(creep)) {
                    role.run(creep);
                }
            }
        }
    }
};

module.exports = roles;