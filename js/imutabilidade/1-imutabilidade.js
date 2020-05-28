const user = {
    name: 'João Erick',
    lastName: 'Barbosa'
};

function getUserWithFullName(user){
    return{
    user,
    fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);