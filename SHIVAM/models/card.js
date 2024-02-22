import mongoose from "mongoose"; 

const CardSchema = new mongoose.Schema({
    title: { type: String, required: true, default: " " },
    year: { type: String, required: true, default: " " },
    imdb: { type: String, required: true, default: " " },
    type: { type: String, required: true, default: " " },
    poster: { type: String, required: true, default: " " },
});

const CardModel = mongoose.model('Card', CardSchema);

export default CardModel;