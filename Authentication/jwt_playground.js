const jwt=require("jsonwebtoken");
const zod=require("zod");
const JWT_SECRET="12345678";

const emailSchema=zod.string().email();
const passwordSchema=zod.string().password();

function signJwt(username,password){
    const validusername=emailSchema.safeParse(username);
    const validpassword=passwordSchema.safeParse(password);

    if(!validusername.success || validpassword.success){
        return null;
    }
    const signature =jwt.sign({
        username
    },JWT_SECRET);
    return signature;
}

function decodeJwt(token){
    const decoded=jwt.decode(token);
    if(decoded){
        return true;
    }
    return false;
}

function verifyJwt(token){
    let ans=true;
    try{
        jwt.verify(token,JWT_SECRET);
    }
    catch(err){
        ans=false;
    }
    return ans;
}