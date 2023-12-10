const { user } = require("../models/user_model");

const createUserService = async(username, password, age) => {
    const newUse = new user(username,password, age);
   await newUse.save();
   return newUse;
};
const findAllService = async({age}) => {
    const filter = {
        age:{
            $gt: age || 0,
        },
    };
    const result = await user.find(filter);
    const total = await user.countDocuments(filter);

    return {total, result};
};

const getTotalAgeService = async () => {
    //match
    const match = {
        $match : {
            age : {
                $gt: 10,
            },
        },
    };

    const group = {
        $group: {
            _id: null,
            totalAge: {
                $sum: "$age",
            },
        },
    };

    //pipeline
    const pipeline = [match, group];

    const result = await user.aggregate(pipeline);

    return result;
};

module.exports = {createUserService, findAllService, getTotalAgeService};