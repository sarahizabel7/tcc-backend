export default {
  PORT: process.env.PORT || 3000,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb+srv://sartheus:lofibeats%232019@cluster0-pjbct.mongodb.net/test?retryWrites=true",
  JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || "sartheus",
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || "24h",
  SALT_ROUNDS: process.env.SALT_ROUNDS || 10
};
