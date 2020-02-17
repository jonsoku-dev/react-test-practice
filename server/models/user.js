const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 모델 정의
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// 모델 클래스 생성
const model = mongoose.model("user", userSchema);

// 모델 export
module.exports = model;
