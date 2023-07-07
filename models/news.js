import mongoose from "mongoose";
const { Schema } = mongoose;

const newsSchema = new Schema({
  news: String,
  date: Date,
});

const News = mongoose.model("News", newsSchema);

export default News;
