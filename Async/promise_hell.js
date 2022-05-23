function gotoCodestates() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('1. go to codestates') }, 500)
    })
    }
    function sitAndCode() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('2. sit and code') }, 400)
    })
    }
    function eatLunch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('3. eat lunch') }, 300)
    })
    }
    function gotoBed() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('4. go to bed') }, 200)
    })
}

gotoCodestates()
.then(data => {
  console.log(data);

  sitAndCode()
  .then(data => {
    console.log(data);

    eatLunch()
    .then(data => {
      console.log(data);
  
      gotoBed()
      .then(data => {
        console.log(data);
      })
    })
  })
})