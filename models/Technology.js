import mongoose from 'mongoose';

const technologySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Frontend', 'Backend', 'Database', 'Linux'],
    },
    icon: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#6366f1',
    },
    link: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Technology', technologySchema);
