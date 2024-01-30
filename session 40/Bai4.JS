for (var i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
  console.log("Key: " + key + ", Value: " + value);
}
