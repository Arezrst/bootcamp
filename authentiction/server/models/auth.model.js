const db=require("../utils/databse")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const secret = "secret";
class AuthModel{

  async login(data) {
    let { username, password } = data;
    const searchQuery = "select password from users where username = ?";
    const [user] = await db.connection.execute(searchQuery, [username]);
    if (user.length === 0) {
      throw new Error("user not found")
    }
    const isPasswordValid = await bcrypt.compareSync(password, user[0].password);
    if (isPasswordValid) {
      const token = jwt.sign({ username }, secret , { expiresIn: "1h" });
      return token;
    } else {
      throw new Error("Invalid credentials")

    }
  }
  async register(user){

    try{
      let {username,password,fullname}=user
      let querySelect="select * from users where username=?"
      let [dataSelect]= await db.connection.execute(querySelect,[username])

      if (dataSelect.length>0) {
        throw new Error("user is exist")
      }
      const salt = await bcrypt.genSaltSync(saltRounds);
      const hashedPassword = await bcrypt.hashSync(password, salt);
      let query="insert into users (username,password,fullname) values( ?,?,?)"
      await db.connection.execute(query,[username,hashedPassword,fullname])

      return true
    }catch(error){
      console.log(error.message);
      throw new Error(error)
    }
  }

}

module.exports=new AuthModel()
