const User = require('./User');
const Tag = require('./Tag');
const Adoption = require('./Adoption');
const Pet = require('./Pet');

User.hasMany(Pet, {
});