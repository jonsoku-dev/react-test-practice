const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

// 모델 정의
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

//! On Save Hook, encrypt password (패스워드 암호화 훅)
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

// 모델 클래스 생성
const model = mongoose.model("user", userSchema);

// 모델 export
module.exports = model;
