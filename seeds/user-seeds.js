const { User } = require('../models');

const userdata = [
    {
        username: 'bestryan',
        email: 'bryan@aol.com',
        password: 'password123'
    },
    {
        username: 'linzobinzo',
        email: 'linz0binz0@aol.com',
        password: 'password123'
    },
    {
        username: 'Fmikey3',
        email: 'wardens4win@aol.com',
        password: 'password123'
    },
    {
        username: 'basematt',
        email: 'homerunHero@yahoo.com',
        password: 'password123'
    },
    {
        username: 'FernDAWG',
        email: 'dirtydawg@yahoo.com',
        password: 'password123'
    },
    {
        username: 'steven1',
        email: 'steven@gmail.com',
        password: 'password123'
    },
    {
        username: 'babybird97',
        email: 'pupnkit@gmail.com',
        password: 'password123'
    },
    {
        username: 'lawyerboy',
        email: 'saulgoodman7@gmail.com',
        password: 'password123'
    },
    {
        username: 'msabbins8',
        email: 'lmongain8@google.ru',
        password: 'password123'
    },
    {
        username: 'jmacarthur9',
        email: 'bsteen9@epa.gov',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
