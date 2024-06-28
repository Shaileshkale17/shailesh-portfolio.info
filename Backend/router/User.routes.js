import { Router } from "express";
import {
  Usercreated,
  getUsers,
  getUsersone,
  userUpDate,
  userdeleted,
} from "../Controllers/User/User.js";

const router = Router();

router.route("/").get(getUsers);
router.route("/create").post(Usercreated);
router.route("/delete/:id").post(userdeleted);
router.route("/update/:id").post(userUpDate);
router.route("/userone/:id").post(getUsersone);

export default router;
