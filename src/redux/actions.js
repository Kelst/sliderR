import { CHANGE_SWITCH, REQUEST_GALLERY } from "./types";

export function fetchImage() {
    return {
      type: REQUEST_GALLERY
    }
  }
  export function changeSwitch(){
      return {
          type:CHANGE_SWITCH
      }
  }