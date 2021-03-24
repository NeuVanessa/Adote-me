import Mongoose from 'mongoose';
import crypto from 'crypto';

const schema = new Mongoose.Schema({
    username: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 99
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true
    }, 
    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false,
        set: value => crypto
          .createHash('md5')
          .update(value)
          .digest('hex')
    },     
},   {
    timestamps: { createdAt: true, updatedAt: true },
    toJSON: { virtuals: true, getters: true,
        transform(document, returns) {
            returns.id = returns._id
            delete returns._id
        }
    },
    toObject: { virtuals: true, getters: true },
    versionKey: false 
})

const UserModel = Mongoose.model('Users', schema);

export default UserModel;