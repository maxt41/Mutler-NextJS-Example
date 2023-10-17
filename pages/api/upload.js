import multer from 'multer';
import { createRouter } from "next-connect";

// Multer setup
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage, limits: { fileSize: 10 * 1024 * 1024 } }); // Set maximum file size to 10MB

// Next-Connect setup
const router = createRouter()

router
.post(upload.single('file'), (req, res) => {

    // Req file from multer
    const file = req.file

    console.log(file)

    // Optional Convert to file buffer 
    const fileBuffer = Buffer.from(file.buffer);
})

export default router.handler({ // Handle errors
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({result: err.message});
  },
});

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  }
}
