const {encrytedPassword} = require("../helpers/bcrypt.helper");
const UserModel = require("../models/user.model");

async function dbInsertUser( newUser ) {
    const dbUser = new UserModel(newUser);
    console.log('dbUser ', dbUser);

    dbUser.password = encrytedPassword(dbUser.password)

    await dbUser.save();

    const objsUser = dbUser.toObject(); 

    delete objsUser.password;
    delete objsUser.createdAt;
    delete objsUser.updatedAt;

    return objsUser;
}

async function dbGetUsers() {
    return await UserModel.find(
        {},
        { password: 0, createdAt: 0, updatedAt: 0 }
    );
}

async function dbGetUserById( id ) {
    return await UserModel.findById( 
        id, 
        { password: 0, createdAt: 0, updatedAt: 0 } 
    );           
}

async function dbDeleteUserById( id ) {
    return await UserModel.findByIdAndDelete( 
        id,
        { password: 0 }
    );            
}

async function dbUpdateUserById( id, newUser ) {
    return await UserModel.findByIdAndUpdate(
        id,newUser,{
            new: true, select: '-password'
        }
    );
}

const dbGetUserByUsername = async ( email ) => {
    return await UserModel.findOne({ username: email });
}


module.exports = {
    dbInsertUser,
    dbGetUsers,
    dbGetUserById,
    dbDeleteUserById,
    dbUpdateUserById,
    dbGetUserByUsername
}