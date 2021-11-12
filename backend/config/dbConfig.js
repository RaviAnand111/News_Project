module.exports = {
  HOST: "localhost",
  USER: "harbor",
  PASSWORD: "harbor",
  DB: "newsApiBackend",
  dialects: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
