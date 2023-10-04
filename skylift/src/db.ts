import rawDb from "sqlite3";

const DBSOURCE = "skylift.db";

const sqlite3 = rawDb.verbose();
export const db = new sqlite3.Database(
  DBSOURCE,
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
      return;
    }

    console.log("Connected to the SQLite database.");

    db.run(
      `CREATE TABLE logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      event text,
      count integer
      )`,
      (err) => {
        if (!err) {
          const sql = "INSERT INTO logs (event, count) VALUES (?,?)";
          db.run(sql, ["chat", 1]);

          console.log("Inserted dummy data to skylift.");
        }
      }
    );
  }
);
