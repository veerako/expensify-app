      
   //Destructuring of array
   const address = ['50 HP','Boston','MA','02125'];
     
    const [, city, state, zip] = address;
    console.log(`you are in ${city} ${state}`) 

    const items = [,'8','10','12'];
    const [item = 'Vada Pav',, medium, large] = items;
    console.log(` A medium ${item} costs ${medium}$`)
      
      
      /*  //destructuring of object
      const person = {
            name: ' kvk',
            age: 27,
            location: {
                city: 'SJC',
                temp: 33,
            } 
        };
        const {name: firstName = 'Anonymous ',age} = person;
        console.log(`${firstName} is ${age}`);

        const {city,temp} = person.location

        if(city && temp){
        console.log(`It's ${temp} in ${city}`);
        }


        const book = {
            title: 'ego',
            author: 'kvk',
            publisher:
            {
                //name: 'veera'
            }
        }

        const {name: publisherName = 'Self Published'} = book.publisher;
        if(publisherName){
        console.log(`${publisherName} `);
        } */
