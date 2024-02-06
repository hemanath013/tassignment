
const keyValues = [
    {
        name : "_john",
        value : "John"
      }  ,
      {
        name : "_kar",
        value : "karthik"
      }  
    ];
    const car = {
      type : "Fait"
    };
    
    
    for(let i = 0; i < keyValues.length; i++){
      const keyValue = keyValues[i];
      console.log(keyValue);
      car[keyValue.name] = keyValue.value;
    }

    console.log(car);
    console.log(car._john);