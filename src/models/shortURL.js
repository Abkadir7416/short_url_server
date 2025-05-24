import mongoose from 'mongoose'
const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
    // trim: true
  },
  shortCode: {
    type: String,
    required: true,
    unique: true,
    // trim: true
  },
  clicks: {
    type: Number,
    // required: true,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  expiresAt: {
    type: Date,
    default: () => new Date(+new Date() + 90*24*60*60*1000) // 90 days from creation
  },
  createdBy: {
    type: String,
    default: 'anonymous'
  },

  //add user fields along with shortURL
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true
  }
});

// Index for faster queries
// urlSchema.index({ shortCode: 1 });
// urlSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Method to check if URL is expired
// urlSchema.methods.isExpired = function() {
//   return this.expiresAt < new Date();
// };

// Method to increment clicks
// urlSchema.methods.incrementClicks = async function() {
//   this.clicks += 1;
//   return this.save();
// };

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;