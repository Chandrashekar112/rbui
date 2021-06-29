const SigninValidation = {
    userId: {
        required:{
          value: true,
          message: " User Id is required.",
        },
        pattern: {
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "Invalid Email Id",
        },
        
    },
    password:{
        required:{
          value: true,
          message: "password is required.",
        },
        pattern:{
          value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
          message: "Enter valid password",
        },
    },
}

export default SigninValidation;