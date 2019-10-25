module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gympoint',
  define: {
    timestampst: true,
    underscored: true,
    underscoredAll: true,
  },
};
