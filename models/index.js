const User = require('./User');
const Tag = require('./Tag');
const Pet = require('./Pet');

User.hasMany(Pet, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//can pet belong to two models
Pet.belongsTo(User, {
    foreignKey: 'user_id'
});

Pet.hasMany(Tag, {
    foreignKey: 'tag_id',
    onDelete: 'CASCADE'
})

Tag.belongsTo(Pet, {
    foreignKey: 'tag_id'
})

module.exports = { User, Tag, Pet};