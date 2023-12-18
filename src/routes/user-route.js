const {
    findAll,
    findOne,
    uploadAvatar, 
} = require("../controllers/user_controller");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const filePath = path.join(__dirname, "..", "..", "public");

        cb(null, filePath);
    },
    filename: function (req, file, cb){
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "-" + file.originalname);
    },
});

const upload = multer({
    storage: storage
});

const userRoutes = require("express").Router();

userRoutes.get("", findAll);
userRoutes.get("/:id", findOne);
userRoutes.post("/upload-avatar/:id", upload.single("avatar"), uploadAvatar);

module.exports = {userRoutes};