import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { SnackbarPo } from "../pages/snackBarPo";

let snackBarPo = new SnackbarPo()

Then(/J'ai un message indiquant (.*)/, (msg) => {
    snackBarPo.verifMsgSnackBar(msg)
})