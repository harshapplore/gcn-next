export function isEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function isPhone(phone) {
  return phone.split(" ").join("").length > 9
}

export function isPostalCode(code) {
  if (isNaN(code)) return false;

  if (code.length < 4 || code.length > 6) return false;

  return true;
}
