import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    comment: { type: String, required: false },
    rating: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);


const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetToken: { type: String },
    isAdmin: { type: Boolean, default: false, required: true },
    slug: { type: String, required: true},
    accounttype: { type: String, required: true},

    businesslogo: { type: String, required: false },
    businessbanner: { type: String, required: false },
    businessname: { type: String, required: false },

    businessprovince: { type: String, required: false },
    businesscity: { type: String, required: false },
    businesslocation: { type: String, required: false },

    product1: { type: String, required: false },
    product2: { type: String, required: false },
    product3: { type: String, required: false },

    rating: { type: Number, required: false },
    numReviews: { type: Number, required: false },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
