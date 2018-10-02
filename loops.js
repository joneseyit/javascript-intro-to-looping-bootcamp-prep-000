function forLoop(xRay){
  for(i = 1; i <= 25; i++){
      if(i === 1) {
        xRay.push("I am 1 strange loop.")
    } else {
      xRay.push("i am ${i} strange loops.")
    }
  }
}
