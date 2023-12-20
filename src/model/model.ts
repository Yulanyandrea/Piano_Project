import mongoose from 'mongoose'

export interface PianoKeys extends mongoose.Document {
  note: string
  frequency: number
  
}

const PianoKeysSchema = new mongoose.Schema<PianoKeys>({
  note: {
    type: String,
    required: [true, 'Please provide a name for the note.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  frequency: {
    type: Number,
    required: [true, "Please provide the frequency"],
    maxlength: [60, "It cannot be more than 60 characters"],
  },

  
})

export default mongoose.models.PianoKeys || mongoose.model<PianoKeys>('PianoKeys', PianoKeysSchema)