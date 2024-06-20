function numGrid(num) {
  for (let i = 1; i <= num; i++) {
      let result = "";
      for (let j = 1; j <= num; j++) {
          let val = j*i;
          result += +val + " ";
      }
      console.log(result);
      result = "";
  }
}

numGrid(4);