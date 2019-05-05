const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');


const s3 = new AWS.S3();

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'video/mp4') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

let upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "kizpass",
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata : function (req, file, cb) {
            cb(null, {
                fieldName: file.fieldname
            });
        },
        key: function (req, file, cb) {
            console.log(file)
            cb(null, Date.now() + file.originalname)
        },
        fileFilter: fileFilter
    })
});

exports.upload = (field_name, max_files) => {
    return upload.array(field_name, max_files);
};
