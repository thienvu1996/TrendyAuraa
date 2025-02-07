import express from "express";

import {
  addProduct,
  listProducts,
  deleteProduct,
  singleProduct,
  updateProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();
productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
productRouter.delete("/delete/:id", adminAuth, deleteProduct);
productRouter.get("/single/:id", singleProduct);
productRouter.get("/list", listProducts);
productRouter.put("/update/:id", adminAuth, updateProduct);

export default productRouter;
