let userArray = [];
let nextId = 1;

const getAll = () => {
   return userArray;
};

const addOne = (
   name,
   email,
   password,
   phone_number,
   gender,
   date_of_birth,
   membership_status
) => {
   if (!name || !email || !password || !phone_number || !gender || !date_of_birth || !membership_status) {
      return false;
   }

   const newUser = {
      id: nextId++,
      name,
      email,
      password,
      phone_number,
      gender,
      date_of_birth,
      membership_status,
   };

   userArray.push(newUser);
   return newUser;
};

module.exports = { getAll };