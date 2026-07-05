import db from '../models/index';
import bcrypt from 'bcryptjs';

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            
            let isExist = await checkUserEmail(email);
            if (isExist) {
                let user = await db.User.findOne({
                    where: { email: email },
                    attributes: ['email', 'roleId', 'passWord', 'firstName', 'lastName'],
                    raw: true,
                });
                if (user) {
                    // console.log("user: ", user);
                    
                    let check = await bcrypt.compareSync(password, user.passWord);
                    if (check) {
                        userData.errCode = 0;
                        userData.message = "Login successful";

                        delete user.passWord;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.message = "Incorrect password";
                    }
                } else {
                    userData.errCode = 2;
                    userData.message = "User not found";
                }

                // bcrypt.compareSync("not_bacon", hash); // true
               
            } else {
                userData.errCode = 1;
                userData.message = "User not found or incorrect password";
                
            }
            resolve(userData);
        } catch (e) {
            reject(e);
        }
    });
};


let checkUserEmail = (email) => {
    // Add logic to check if the email exists in the database
    // This is a placeholder - replace with actual database query
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: email }
            });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    });
}

module.exports = {
    handleUserLogin: handleUserLogin,
};