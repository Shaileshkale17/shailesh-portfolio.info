import { User } from "../../Models/User/User.js";
import { ApiError } from "../../utils/AppError.js";
import { asyncHandler } from "../../utils/asycHandler.js";

export const Usercreated = asyncHandler(async (req, res) => {
  const { name, email, phone, companyName, message } = req.body;

  if ([name, email, phone, message].some((value) => value.trim() === "")) {
    throw new ApiError("404", "Invalid Data");
  }

  const user = await User.create({ name, email, phone, companyName, message });

  if (!user) {
    throw new ApiError("500", "connot been created");
  }

  res.status(201).json(user);
});

export const getUsers = asyncHandler(async (req, res) => {
  const user = await User.find({});
  if (!user) {
    throw new Error(500, "User not found");
  }
  res.status(200).json(user);
});

export const getUsersone = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userone = await User.findById(id);
  if (!userone) {
    throw new Error(500, "User not found");
  }
  res.status(200).json(userone);
});

export const userdeleted = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new ApiError(404, "User not found");
  }

  const deleted = await User.findByIdAndDelete(id);
  if (!deleted) {
    throw new ApiError(500, "User connot been deleted");
  }

  res.status(200).json("User deleted successfully");
});

export const userUpDate = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, companyName, message } = req.body;

  if (!id) {
    throw new ApiError(404, "User not found");
  }

  const Updeated = await User.findByIdAndUpdate(id, {
    name,
    email,
    phone,
    companyName,
    message,
  });
  if (!Updeated) {
    throw new ApiError(500, "User connot been Updeated");
  }

  res.status(200).json(Updeated);
});
