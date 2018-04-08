let BaseRole = function (name, requiredCount, body) {
    this.name = name;
    this.requiredCount = requiredCount;
    this.body = body;
};
    
BaseRole.prototype.isMember = function(creep) {
	return creep.name.indexOf(this.name + '-') === 0;
};
	
BaseRole.prototype.spawn = function() {
	let creepName = this.name + '-' + Math.random().toString(36).substring(7);
    Game.spawns['Spawn1'].spawnCreep( this.body, creepName );
};
    
BaseRole.prototype.run = function(creep) {
    console.log('Function run needs to be overwrited')
};

module.exports = BaseRole;