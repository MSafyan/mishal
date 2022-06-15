
import registerModel from "../models/Register.js";
import jwt from "jsonwebtoken"


const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, "secret key", {
      expiresIn: maxAge,
    });
  };
  

export const createRegister  = async(req,res)=>{
    const Name = req.body.Name;
    const NameInStringFormat = Name.toString();

    const LastName = req.body.LastName;
    const LastNameInStringFormat = LastName.toString();

    const UserName = req.body.UserName;
    const UserNameInStringFormat = UserName.toString();

    const Email = req.body.Email;
    const EmailInStringFormat = Email.toString();


    const Password = req.body.Password;
    const PasswordInStringFormat  = Password.toString();


    const newApplicant = new registerModel({
        Name: NameInStringFormat,
        LastName: LastNameInStringFormat,
       UserName: UserNameInStringFormat,
       Email: EmailInStringFormat,
       Password: PasswordInStringFormat
    
    });

    try {
         await newApplicant.save();
          
          const token = createToken(newApplicant._id);
          console.log(token);
          res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: false,
            maxAge: maxAge * 1000,
          });
      
          res.status(201).json({newApplicant: newApplicant, 'token':token, created: true });
    
    
    }  //till
    catch (error) {
        console.log("Not saved...");
        
    }
};

export const Login  = async(req,res)=>{
    const UserName = req.body.UserName;
    const UserNameInStringFormat = UserName.toString();

    const Password = req.body.Password;
    const PasswordInStringFormat  = Password.toString();

    try {
      
      const user = await registerModel.findOne({ UserName:UserNameInStringFormat });
      console.log(user);
      
      if (!user || !(await user.correctPassword(PasswordInStringFormat, user.Password))) {
        return {msg:'error'};
      }

      const token = createToken(user._id);
  
      res.status(201).json({ 'token':token });
    }  //till
    catch (error) {
        console.log(error);
        
    }
};


