import Card from "../Models/card.js";

const createCard = async (req, res) => {
    const {
        title,
        year,
        imdb,
        type,
        poster
    } = req.body;

    const newCard = await Card.create({
        title,
        year,
        imdb,
        type,
        poster
    });
 
    return res.status(200).json(newCard);
}

const getAllCards = async (req, res) => {
    try {
        const cards = await Card.find();

        return res.status(200).json(cards);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getCardByID = async (req, res) => {
    try {
        const { id } = req.params;

        const card = await Card.findById(id);

        if (!card) {
            return res.status(404).json({ message: "File with given ID not found!!" });
        }
        return res.status(200).json(card);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const detleteCard = async (req, res) => {
    try {
        const { id } = req.params;

        const card = await Card.findById(id);
        if (!card) {
            return res.status(404).json({ message: "File with given ID not found!!" });
        } else {
            await Card.findByIdAndDelete(id);
            return res.status(200).json({ message: "Card deleted Successfully!!" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateCard = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            title,
            year,
            imdb,
            type,
            poster
        } = req.body;

        const card = await Card.findById(id);
        if (!card) {
            return res
            .status(404)
            .json({ message: "File with given ID not found!!" });
        } else {
            await Card.findByIdAndUpdate({ _id: id }, {
                title,
                year,
                imdb,
                type,
                poster
            });
            return res.status(200).json({ message: "Card updated Successfully!!" });
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export {
    createCard,
    getAllCards,
    getCardByID,
    detleteCard,
    updateCard
}