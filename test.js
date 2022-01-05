// const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue&experiments.theme=dark"

const queryObjectify = (str) => {
  let obj = {};
  str = str.split('=')
  str[0] = str[0].split(".");
//    [ [ 'user', 'name', 'firstname' ], 'Bob' ]
        for(let j=0; j<str[0].length; j++){
            if(obj[str[j]]){
                obj[str[0][j]] = {}
            } else {
                obj[str[0][j]] =  str[1]
            }
        }

    

//   console.log(obj[str[1]]= str[2])
  return obj;
};

// {
//   'user': {
//     'name': {
//       'firstname': 'Bob',
//       'lastname': 'Smith'
//     },
//     'favoritecolor': 'Light Blue'
//   },
//   experiments: {
//     theme: 'dark'
//   }
// }

console.log(queryObjectify("user.name.firstname=Bob"));
