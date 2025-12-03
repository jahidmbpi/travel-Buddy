import { v2 as cloudenary } from "cloudinary";
import { envVars } from "./env";
cloudenary.config({
  cloud_name: envVars.CLOUDENARY_NAME,
  api_key: envVars.CLOUDENARY_API_KEY,
  api_secret: envVars.CLOUDENARY_API_SECRET,
});

export const cloudinaryUpload = cloudenary;
