
/* CALL THIS FUNCTION FROM OTHER FILES */
/****** DO NOT TOUCH vvv *****/

// Callback based function
// export, esto sirve para usar la funcion en otro archivo. tiene que estar en la misma linea de la funcion.
function getInstruction(food, step, callback, errorCallback) {
    setTimeout(() => {
      // Get the instruction string
      let instruction;

      if (food === "mashedPotatoes") {
        instruction = mashedPotatoes[step];
      }
      else if (food === "steak") {
        instruction = steak[step];
      }
      else if (food === "brusselsSprouts") {
        instruction = brusselsSprouts[step];
      }
      else if (food === "broccoli") {
        instruction = broccoli[step];
      };

      // Invoke the provided callback or errorCallback
      if (!instruction) {
        errorCallback("Instruction step does not exist!");
      } else {
        callback(instruction);
      }

    }, Math.floor(Math.random() * 1000));
}

/***** ^^^ DO NOT TOUCH *****/
