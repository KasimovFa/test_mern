const User = require("../models/User");

class UserController {

    async createUser(req, res) {
        try {
          const {email, login, password, first_name, last_name} = req.body;
          if (!email || !password) {
            return res.json({message:"Некорректный email или password"})
          } 
           const candidate = await User.findOne({email: email});

          if (candidate) {
            return res.json({message:"Пользователь с таким email уже существует"})
          }
           const user = await User.create({email, login, password, first_name, last_name});

          return res.json(user)   
        } catch (e) {
            console.log(e);
        } 
    }

    async getUser(req, res) {
        try {
           let {limit, page} = req.query;
           page = page || 1;
           limit = limit || 2;
           let offset = page * limit - limit;
           const users = await User.find().skip(Number(offset)).limit(Number(limit));
           const count = await User.find().count();
           return res.json({users, count})   
        } catch (e) {
            console.log(e);
        }
    }

    async editUser(req, res) {
        try {
            const {id, newData}  = req.body;
            let user = await User.findById(id);
            for (let key in newData) {
            if (newData[key]) {
                user[key] = newData[key]
            }
        }
           await user.save();
           return res.json(user)
        } catch (e) {
            console.log(e);
        }
        
    }

    async sort(req, res) {
        try {
           let users;
           let {limit, page} = req.query;
           page = page || 1;
           limit = limit || 2;
           let offset = page * limit - limit;
           users = await User.find().skip(Number(offset)).limit(Number(limit)).sort({login:1});
           return res.json(users)
        } catch (e) {
            console.log(e);
        }
    }

    async search(req, res) {
        try {
            let {limit, page} = req.query;
            page = page || 1;
            limit = limit || 2;
            let offset = page * limit - limit;
            const users = await User.find({
                login: {$regex: new RegExp(req.query.login, 'i')}
            }).skip(Number(offset)).limit(Number(limit))
            return res.json(users)
         } catch (e) {
             console.log(e);
         }
    }
}


module.exports = new UserController()