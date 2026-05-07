const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });
const envFile =
  process.env.NODE_ENV === "production"
    ? "config/config.prod.env"
    : "config/config.dev.env";
dotenv.config({ path: envFile });

/* ============================================================
 * Server Config
 * ============================================================
 */
const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

/* ============================================================
 * Database Credentials
 * ============================================================
 */
const DB_LOCAL_URI = process.env.DB_LOCAL_URI;
const DB_NAME = process.env.DB_NAME;

/* ============================================================
 * Base URLs
 * ============================================================
 */
const SERVER_URL = process.env.SERVER_URL;
const CLIENT_URL = process.env.CLIENT_URL;

/* ============================================================
 * Service URLs
 * ============================================================
 */
const SERVICE_URL = process.env.SERVICE_URL;



/* ============================================================
 * App Name
 * ============================================================
 */
const APP_NAME = process.env.APP_NAME;

/* ============================================================
 * JWT Config
 * ============================================================
 */
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_TIME = process.env.JWT_EXPIRES_TIME;
const COOKIES_EXPIRES_TIME = process.env.COOKIES_EXPIRES_TIME;

/* ============================================================
 * Verification Token for Headers
 * ============================================================
 */
const X_VERIFY_TOKEN = process.env.X_VERIFY_TOKEN;

module.exports = {
  NODE_ENV,
  PORT,
  DB_LOCAL_URI,
  DB_NAME,
  SERVER_URL,
  CLIENT_URL,
  SERVICE_URL,
  APP_NAME,
  JWT_SECRET,
  JWT_EXPIRES_TIME,
  COOKIES_EXPIRES_TIME,
  X_VERIFY_TOKEN,
};
