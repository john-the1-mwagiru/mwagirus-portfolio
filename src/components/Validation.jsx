import Contact from "./Contact";
const Validation = (firstname,email,message) => {
    let errors={}
   if(!firstname){
       errors.firstname="Field cannot be empty!"
   }
   if(!email){
       errors.email="Field cannot be empty!"
   }else if(!/\S+@\S+\.\S+/.test(email)){
       errors.email="Email is Invalid!"
   }
   if(!message){
       errors.message="Field cannot be empty!"
   }
  return (
errors
  )
}

export default Validation