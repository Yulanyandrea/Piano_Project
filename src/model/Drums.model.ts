import mongoose from "mongoose";

export interface DrumsKeys extends mongoose.Document {
  sound: string;
}

const DrumsKeysSchema = new mongoose.Schema<DrumsKeys>({
  sound: {
    type: String,
    required: [true, "Please provide a link for the note."],
  },
});

export default mongoose.models.DrumsKeys ||
  mongoose.model<DrumsKeys>("DrumsKeys", DrumsKeysSchema);
