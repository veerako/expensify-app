import * as firebase from 'firebase';
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase , database as default };

  /*child_removed 

  database.ref('expenses').on('child_removed',(snapshot)=>{
      console.log(snapshot.key, snapshot.val());
  });

  child_changed

  database.ref('expenses').on('child_changed',(snapshot)=>{
    console.log(snapshot.key, snapshot.val());
});

child_added
database.ref('expenses').on('child_added',(snapshot)=>{
    console.log(snapshot.key, snapshot.val());
});


  database.ref('expenses').on('value',(snapshot)=>{
    const expenses=[];
    snapshot.forEach((childSnapshot)=>{
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);

  });
  
 
 
  database.ref('expenses')
  .once('value')
  .then((snapshot)=>{
    const expenses=[];
    snapshot.forEach((childSnapshot)=>{
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
  });

  

  database.ref('expenses').push({
      description: 'int bill',
      note: 'WiFi',
      amount: 200 ,
      createdAt: 2
  });



    database.ref('notes').push({
      title:'check 3',
      body: 'test data'
  });

  const firebaseNotes = {
      notes:{ 
          ex: {
            id: '5',
            title: 'check',
            body:'none'
          }

      }
  };


  description: 'water bill',
      note: '',
      amount: 100 ,
      createdAt: 1 

  const notes = [{
      id: '5',
      title: 'check',
      body:'none'
    },{
      id: '6' ,
      title: 'check 1',
      body:'test'


    }];



 database.ref('notes').set(notes);



  database.ref().on('value',(snapshot)=>{
      const val = snapshot.val();
      console.log(`${val.name} is a ${val.job.title} at ${val.job.company} `);

  });

   
    const onValueChange = database.ref().on('value',(snapshot)=>{
      console.log(snapshot.val());
     },(e)=>{
         console.log('Error with data fetching',e);
     }

);

  setTimeout(()=>{
    database.ref('age').set(33);
  },3500);
 
  setTimeout(()=>{
    database.ref().off('value',onValueChange);
  },7000);

  setTimeout(()=>{
    database.ref('age').set(35);
  },10500);



   database.ref('location')
  .once('value')
  .then((snapshot)=>{
      const val = snapshot.val();
      console.log(val);

  }).catch((e)=>{
    console.log('Error fetching data',e);
  });
  
  database.ref().set({
    name: 'kvk',
    age: 27,
    stressLevel: 5,
    job: {
         title:'CS',
         company: 'AV'
    },
    location: { //object
        city: 'boston', //children
        country: 'USA'
    }

  }).then(()=>{
      console.log('Data is saved');
  }).catch((e)=>{
      console.log('This failed',e);

  });

  database.ref().update({
      stressLevel:9,
      'job/company': 'Veera',
      'location/city':'Seattle'
   
  });
  
  //database.ref('isSingle').set(null);

    database.ref('isSingle')
  .remove()
  .then(()=>{
    console.log('Data was removed ');
  }).catch((e)=>{
    console.log('Did not remove data',e)
  });
*/
