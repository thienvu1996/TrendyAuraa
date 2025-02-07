import productModel from "../models/productModel.js";

export const purchaseProduct = async (req, res) => {
  try {
    const { productId, size, quantity } = req.body;

    // Tìm sản phẩm theo ID
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    // Kiểm tra size tồn tại
    if (!product.stock[size]) {
      return res.status(400).send({ message: `Size ${size} is not available` });
    }

    // Kiểm tra số lượng có đủ không
    if (product.stock[size] < quantity) {
      return res.status(400).send({ message: `Size ${size} is out of stock` });
    }

    // Cập nhật số lượng hàng tồn kho
    product.stock[size] -= quantity;
    await product.save();

    res
      .status(200)
      .send({ message: "Purchase successful", remainingStock: product.stock });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
