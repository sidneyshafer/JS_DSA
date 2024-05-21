function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
  }
}

logAtMost10(5);