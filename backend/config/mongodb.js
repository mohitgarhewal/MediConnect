import mongoose from 'mongoose';

const connectDB = async () => {
  mongoose.connection.on('connected', () => 
    console.log("✅ Database Connected")
  );

  try {
   await mongoose.connect(`${process.env.MONGODB_URI}/MediConnect`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
