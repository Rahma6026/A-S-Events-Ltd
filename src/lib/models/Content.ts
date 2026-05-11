import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
  brandName: String,
  hero: {
    titlePart1: String,
    titlePart2: String,
    description: String,
    image: String,
  },
  welcome: {
    subtitle: String,
    titlePart1: String,
    titlePart2: String,
    quote: String,
    description1: String,
    description2: String,
    image: String,
  },
  about: {
    subtitle: String,
    titlePart1: String,
    titlePart2: String,
    quote: String,
    description1: String,
    description2: String,
    image: String,
  },
  contact: {
    email: String,
    phone: String,
    address: String,
  },
  services: [
    {
      id: String,
      title: String,
      img: String,
      desc: String,
      url: String,
    },
  ],
  features: [
    {
      id: String,
      title: String,
      desc: String,
      icon: String,
    },
  ],
}, { timestamps: true });

export const ContentModel = mongoose.models.Content || mongoose.model("Content", ContentSchema);
