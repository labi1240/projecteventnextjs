import { Document, Schema, model, models } from "mongoose";

export interface IProject extends Document {
  _id: string;
  name: string;
  status: string;
  price: string;
  incentives?: string;
  address: string;
  developer: string;
  buildingType: string;
  unitsStories: string;
  streetName: string;
  city: string;
  province: string;
  bedrooms: string;
  sizeSqFt?: string;
  estimatedCompletion?: string;
  summary?: string;
  units: Array<{
    status?: string;
    unitName?: string;
    br?: number;
    ba?: number;
    sqft?: number;
    price?: number | null;
    unitStyle?: string;
    url?: string;
    image?: string;
  }>;
  images: Array<{
    ImageName: string;
    ImageDescription?: string;
    ImagePath: string;
  }>;
}

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  price: { type: String, required: true },
  incentives: { type: String },
  address: { type: String, required: true },
  developer: { type: String, required: true },
  buildingType: { type: String, required: true },
  unitsStories: { type: String, required: true },
  bedrooms: { type: String, required: true },
  sizeSqFt: { type: String },
  estimatedCompletion: { type: String },
  city: { type: String },
  province: { type: String },
  streetName: { type: String },
  summary: { type: String },
  units: [{
    status: { type: String },
    unitName: { type: String },
    br: { type: Number },
    ba: { type: Number },
    sqft: { type: Number },
    price: { type: Number },
    unitStyle: { type: String },
    url: { type: String },
    image: { type: String },
  }],
  images: [{
    ImageName: { type: String, required: true },
    ImageDescription: { type: String },
    ImagePath: { type: String, required: true },
  }]
}, { timestamps: true });

const Project = models.Project || model('Project', ProjectSchema);

export default Project;
