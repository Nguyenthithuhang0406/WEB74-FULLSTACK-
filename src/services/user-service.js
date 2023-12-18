const {User} = require("../models/user-model");
const {ObjectId} = require("mongodb");

const createUserService = async (username, password) => {
    const newUser = new User({username, password});

    await newUser.save();

    return newUser;
};

const findOneService = async (username) => {
    const filter = {
        username,
    };
    const user = await User.findOne(filter).exec();

    return user;
};

const findAllService = async () => {
    const result = await User.find();
    const total = await User.countDocuments();
    return {total, result};
};


const findOneByID = async (ID) => {
    const user = await User.findById(ID).projection({username: 1}).exec();

    return user;
};

const uploadAvatarService = (ID, fileName) => {
    User.findOneAndUpdate({_id: new ObjectId(ID)}, {avatar: fileName});
};

const getTotalAgeService = async () => {
    //match
    const match = {
        $match: {
            age: {
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

    const result = await User.aggregate(pipeline);

    return result;
};

module.exports = {
    createUserService,
    findAllService,
    getTotalAgeService,
    findOneService,
    findOneByID,
    uploadAvatarService,
};