let population = require('population');
let roles = require('roles');

module.exports.loop = function () {
    population.run();
    roles.run();
}
