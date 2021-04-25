function toTime(time) {
  var jam = Math.floor(time / 3600);
  var menit = Math.floor(time % 3600 / 60);
  return jam + " hour(s) and " + menit + " minute(s)";
}
