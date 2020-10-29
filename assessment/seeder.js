const { MongoClient } = require("mongodb");
const fs = require("fs").promises;
const path = require("path");
const loading = require("loading-cli");

/**
 * constants
 */
const uri = "mongodb://localhost:27017/languages";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    const db = client.db();
    const results = await db.collection("languages").find({}).count();

    /**
     * If existing records then delete the current collections
     */
    //if (results) {
    //  console.info("deleting collection");
    //  await db.collection("langs").drop();
    //  await db.collection("years").drop();
    //}

    /**
     * This is just a fun little loader module that displays a spinner
     * to the command line
     */
    const load = loading("importing your languages!!").start();

    /**
     * Import the JSON data into the database
     */

    //const data = await fs.readFile(path.join(__dirname, "assessmentDatabase.csv"), "utf8");
    //await db.collection("tastings").insertMany(CSV.parse(data));

    /**
     * This perhaps appears a little more complex than it is. Below, we are
     * grouping the wine tasters and summing their total tastings. Finally,
     * we tidy up the output so it represents the format we need for our new collection
     */

    const languagesRef = await db.collection("Dates").aggregate([
      { $match: { Date: { $ne: null } } },
      {
        $group: {
          _id: "$Date",
          //social: { $push: "$taster_twitter_handle" },
          total_langs: { $sum: 1 },
        },
      },
      {
        //$project: {
        //  twitter: { $first: "$social" },
        //  tastings: "$total_tastings",
        //},
      },
      { $set: { name: "$_id", _id: "total_langs" } },
    ]);
    /**
     * Below, we output the results of our aggregate into a
     * new collection
     */
    const testedLangs = await languagesRef.toArray();
    await db.collection("langs").insertMany(Dates);

    /** Our final data manipulation is to reference each document in the
     * tastings collection to a taster id
     */

    const updatedlanguagesRef = db.collection("Dates").find({});
    const updatedDates = await updatedlanguagesRef.toArray();
    updatedDates.forEach(async ({ _id, Dates }) => {
      await db
        .collection("dates")
        .updateMany({ dates: Dates }, [
          { $set: { date_id : _id, regions: ["$region_1", "$region_2"] } },
        ]);
      /**
       * we can get rid of region_1/2 off our root document, since we've
       * placed them in an array
       */
      await db
        .collection("dates")
        .updateMany({}, { $unset: { region_1: "", region_2: " " } });

      /**
       * Finally, we remove nulls regions from our collection of arrays
       *  */
      await db
        .collection("dates")
        .updateMany({ regions: { $all: [null] } }, [
          { $set: { regions: [{ $arrayElemAt: ["$regions", 0] }] } },
        ]);
      load.stop();
      console.info(
        `Dates collection set up! \n I've also created a Dates Collection'`
      );
      process.exit();
    });
  } catch (error) {
    console.error("error:", error);
    process.exit();
  }
}

main();