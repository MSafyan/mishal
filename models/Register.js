import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const registerStructure =mongoose.Schema({
    Name: String,
    LastName: String,
    UserName: String,
    Email: String,
    Password: String,
    ConfirmPassword: String,
})

registerStructure.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.Password = await bcrypt.hash(this.Password, salt);
    next();
  });

registerStructure.methods.correctPassword = async function (
	candidatePassword,
	userPassword
) {
	return await bcrypt.compare(candidatePassword, userPassword);
};
const registerModel = mongoose.model('registeredClient',registerStructure );
export default registerModel;