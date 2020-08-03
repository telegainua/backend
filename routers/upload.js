const express = require('express');
const router = express.Router();
const querymen = require('querymen');
const bodymen = require('bodymen');
const multer = require('multer');

const Upload = require('../models/Upload');

const {success, notFound} = require('../services/response');

const imageFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are alowed'), false)
    }
    cb(null, true);
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        let originalname = file.originalname;
        let extension = originalname.split(".");
        let filename = Date.now() + '.' + extension[extension.length - 1];
        cb(null, filename);
    }
});

const upload = multer({
    storage,
    fileFilter: imageFilter

});

router.post('/', upload.single('file'),
    (req, res, next) => {
        console.log(Upload);
        Upload.create({...req.file}).
             then((upload)=> upload.view()).
             then(success(res, 201)).
             catch(next);
    }
);

module.exports = router;






