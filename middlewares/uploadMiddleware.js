const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/profilePics')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
  }
})

const upload = multer({
  storage,
  limits: {
    fileSize: 1024*50
  },
  fileFilter: (req, file, cb) => {
    const imgType = /jpeg|jpg|png/
    const extName = imgType.test(path.extname(file.originalname).toLowerCase())
    const mimeType = imgType.test(file.mimetype)

    if(extName && mimeType) {
      cb(null, true)
    } else {
      cb(new Error('Only accept images & types: jpeg, jpg or png'))
    }
  }
})

module.exports = upload;