//function for add product

import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
//function for add product

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
      stock,
    } = req.body;

    if (!req.files) {
      return res.status(400).send({ message: "No files were uploaded." });
    }

    // Xử lý ảnh tải lên
    const image1 = req.files.image1 ? req.files.image1[0] : null;
    const image2 = req.files.image2 ? req.files.image2[0] : null;
    const image3 = req.files.image3 ? req.files.image3[0] : null;
    const image4 = req.files.image4 ? req.files.image4[0] : null;

    const images = [image1, image2, image3, image4].filter(
      (item) => item && item.path
    );

    if (images.length === 0) {
      return res
        .status(400)
        .send({ message: "No valid image files were uploaded." });
    }

    // Upload hình ảnh lên Cloudinary
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    // Chuẩn bị dữ liệu sản phẩm
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true",
      sizes: JSON.parse(sizes), // Chuyển đổi chuỗi JSON thành mảng
      stock: JSON.parse(stock), // Chuyển đổi chuỗi JSON thành object { "M": 10, "L": 5 }
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    res.status(200).send({ message: "Product added successfully", product });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//function for list products

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//function for delete product

const deleteProduct = async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

// function for sget product by id

const singleProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: error.message });
  }
};
//function for update product
const updateProduct = async (req, res) => {
  console.log("Request Body:", req.body);
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
      stock,
    } = req.body;

    const updateFields = {};

    if (name) updateFields.name = name;
    if (description) updateFields.description = description;
    if (category) updateFields.category = category;
    if (subCategory) updateFields.subCategory = subCategory;
    if (bestseller !== undefined)
      updateFields.bestseller = bestseller === "true";

    // Check if price is a valid number
    if (price !== undefined) {
      const parsedPrice = Number(price);
      if (isNaN(parsedPrice)) {
        return res.status(400).send({
          success: false,
          message: `"${price}" is not a valid number`,
        });
      }
      updateFields.price = parsedPrice;
    }

    //  Check and parse sizes
    if (sizes) {
      updateFields.sizes = sizes;
    }

    // Check if stock is a valid object
    if (stock !== undefined) {
      try {
        const parsedStock = JSON.parse(stock);
        if (typeof parsedStock === "object" && parsedStock !== null) {
          updateFields.stock = parsedStock;
        } else {
          return res.status(400).send({
            success: false,
            message: `"${stock}" is not a valid JSON object`,
          });
        }
      } catch (error) {
        return res
          .status(400)
          .send({ success: false, message: `"${stock}" is not a valid JSON` });
      }
    }

    // Handle image uploads
    if (req.files) {
      const image1 = req.files.image1 ? req.files.image1[0] : null;
      const image2 = req.files.image2 ? req.files.image2[0] : null;
      const image3 = req.files.image3 ? req.files.image3[0] : null;
      const image4 = req.files.image4 ? req.files.image4[0] : null;

      const images = [image1, image2, image3, image4].filter(
        (item) => item && item.path
      );

      if (images.length > 0) {
        let imagesUrl = await Promise.all(
          images.map(async (item) => {
            let result = await cloudinary.uploader.upload(item.path, {
              resource_type: "image",
            });
            return result.secure_url;
          })
        );

        updateFields.images = imagesUrl;
      }
    }

    console.log("Update Fields:", updateFields);

    // Update product with the provided fields
    const product = await productModel.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true }
    );

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send({ success: false, message: error.message });
  }
};
export {
  addProduct,
  deleteProduct,
  listProducts,
  singleProduct,
  updateProduct,
};
