import { useState, useEffect } from "react";

const checkKeysForValues = (data, keys, value) => {
  let exists = true;

  keys.map(key => {
    exists = data[key] === value ? true : false
  })
}