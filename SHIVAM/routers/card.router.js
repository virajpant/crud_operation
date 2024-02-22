import express from "express";

import { createCard, getAllCards, getCardByID, detleteCard, updateCard } from "../Controllers/card.controller.js";

const router = express.Router();

router.route('/').post(createCard);
router.route("/").get(getAllCards);
router.route("/:id").get(getCardByID);
router.route("/:id").delete(detleteCard);
router.route("/:id").put(updateCard);

export default router; 