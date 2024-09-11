import express from "express";
import auth from "../middleware/auth.js";
import {
  listCreate,
  listDisplayGuideList,
  listRegister,
  listStatusClose,
  listDisplayGuideDetail,
  listDisplayTouristList,
  listDisplayTouristDetail,
  listDelete,
  listRemove,
  listIsTouristRegistered
} from "../controllers/listActions.js";

const router = express.Router();

router.post("/listcreate", auth, listCreate);
router.post("/listregister/:listid", auth, listRegister);
router.post("/liststatusclose/:listid", auth, listStatusClose);
router.get("/listdiplayguidelist", auth, listDisplayGuideList);
router.get("/listdiplayguidedetail/:listid", auth, listDisplayGuideDetail);
router.get("/listdiplaytouristlist", auth, listDisplayTouristList);
router.get("/listdiplaytouristdetail/:listid", auth, listDisplayTouristDetail);
router.post("/listdelete/:listid", auth, listDelete);
router.post("/listremove/:listid", auth, listRemove)
router.get("/lististouristregistered/:listid", auth, listIsTouristRegistered);
export default router;
