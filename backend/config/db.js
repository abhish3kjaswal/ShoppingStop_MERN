import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log(`MongoDB connected.. at ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error:${error.message}`.red.underline.bold)
    process.exit(1)
    // process.exit will exit with failure as 1 is passed here
  }
}

export default connectDB
