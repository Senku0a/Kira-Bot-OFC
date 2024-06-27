const fs = require('fs');

//Cargar base de datos
let registeredUsers = [];
const loadRegisteredUsers = () => {
if (fs.existsSync('./Database/dataBase.json')) {
registeredUsers = JSON.parse(fs.readFileSync('./Database/dataBase.json', 'utf-8'));
}
};

//Guardar usuarios
const saveRegisteredUsers = () => {
fs.writeFileSync('./Database/dataBase.json', JSON.stringify(registeredUsers, null, 2));
};

//Verificar si esta registrado un usuario
const isUserRegistered = (number) => {
return registeredUsers.some(user => user.number === number);
};

//Generar id
const generateSerialNumber = () => {
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let serial = '';
for (let i = 0; i < 16; i++) {
serial += chars.charAt(Math.floor(Math.random() * chars.length));
}
return serial;
}; 

//Registrar usuario
const registerUser = (number, name, age, genero, country) => {
const serialNumber = generateSerialNumber();
registeredUsers.push({ number, name, age, genero, country, serialNumber, diamonds: 5, coins: 1, warnings: 0, lastDiammondsTime: 0, lastSlotTime: 0, purchases: [] });
saveRegisteredUsers();
return serialNumber;
};


// Eliminar un usuario registrado
const deleteUser = (number, serialNumber) => {
const index = registeredUsers.findIndex(user => user.number === number && user.serialNumber === serialNumber);
if (index !== -1) {
registeredUsers.splice(index, 1);
saveRegisteredUsers();
return true;
}
return false;
};

module.exports = { loadRegisteredUsers, saveRegisteredUsers, isUserRegistered, registerUser, deleteUser, registeredUsers };

loadRegisteredUsers()