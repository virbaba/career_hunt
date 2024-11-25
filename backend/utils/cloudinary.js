import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:"dlbaei9ds",
    api_key:"818251314481795",
    api_secret:"wMAiRA8k6BQtMO38525Smlu_23c"
});
export default cloudinary;