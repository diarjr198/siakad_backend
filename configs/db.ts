import mongoose from "mongoose";

class Database {
    constructor() {}

    public static connect = async () => {
        try {
            const dbName = "siakad";
            const dbPathUri = `mongodb://siakad:siakad123@siakad-shard-00-00.yu4xs.mongodb.net:27017,siakad-shard-00-01.yu4xs.mongodb.net:27017,siakad-shard-00-02.yu4xs.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-pqm3g2-shard-0&authSource=admin&retryWrites=true&w=majority`;
            await mongoose.connect(`${dbPathUri}`);
            console.log("DB Established");
        } catch (error) {
            console.log((error as Error).message);
        }
    };
}

export default Database;
