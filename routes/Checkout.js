import express from 'express';
import { addData , GetUsers} from '../controllers/Checkout.js';


const router = express.Router();



router.post("/",addData);
router.get("/", GetUsers);





export default router;