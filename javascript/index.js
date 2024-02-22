
// import {getInstruction} from './getInstruction.js' esto es para importar la funcion exportada.

// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks

getInstruction('mashedPotatoes', 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error))
    }, (error) => console.log(error))
  }, (error) => console.log(error))
}, (error) => console.log(error))


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
    return obtainInstruction('steak', 1)
  })
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
    return obtainInstruction('steak', 2)
  })
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
    return obtainInstruction('steak', 3)
  })
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
    return obtainInstruction('steak', 4)
  })
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
    return obtainInstruction('steak', 5)
  })
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
    return obtainInstruction('steak', 6)
  })
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
    return obtainInstruction('steak', 7)
  })
  .then((res) => {
    document.querySelector("#steak").innerHTML += `<li>${res}</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");

  })
  .catch((error) => {
    return console.log(error) // esta es la forma completa de una arrow function
  } ) 


// Iteration 3 using async/await

const mostrarReceta = async () => {
  try {
    const paso1 = await obtainInstruction('broccoli', 0)
    document.querySelector("#broccoli").innerHTML += `<li>${paso1}</li>`;

    const paso2 = await obtainInstruction('broccoli', 1)
    document.querySelector("#broccoli").innerHTML += `<li>${paso2}</li>`;

    const paso3 = await obtainInstruction('broccoli', 2)
    document.querySelector("#broccoli").innerHTML += `<li>${paso3}</li>`;

    const paso4 = await obtainInstruction('broccoli', 3)
    document.querySelector("#broccoli").innerHTML += `<li>${paso4}</li>`;

    const paso5 = await obtainInstruction('broccoli', 4)
    document.querySelector("#broccoli").innerHTML += `<li>${paso5}</li>`;

    const paso6 = await obtainInstruction('broccoli', 5)
    document.querySelector("#broccoli").innerHTML += `<li>${paso6}</li>`;

    const paso7 = await obtainInstruction('broccoli', 6)
    document.querySelector("#broccoli").innerHTML += `<li>${paso7}</li>`;

    document.querySelector("#broccoliImg").removeAttribute("hidden");
    
  }
  catch (error) {
    console.log('Ha ocurrido un error:', error)
  }
}

mostrarReceta()

// Bonus 2 - Promise all
// ...