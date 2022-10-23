function printTime() {
    setTimeout(()=>{
      let d = new Date();
      let time = d.toLocaleTimeString();
      console.log(time);
      printTime();
    }, 1000);
  }