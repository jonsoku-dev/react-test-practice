const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 모델 정의
const userSchema = new Schema({
  email: { type: string, unique: true, lowercase: true s},
  password: string
});

// 모델 클래스 생성
const model = mongoose.model('user', userSchema)

// 모델 export
module.exports = model