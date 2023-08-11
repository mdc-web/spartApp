const mongoose = require('mongoose');

const ExoSchema = new mongoose.Schema(
    {
        posterId: {
            type: String,
            required: true
        },
        nom: {
            type: String,
            required: true,
            maxlength: 50
        },
        serie: {
            type: String,
            maxlength: 5
        },
        rep: {
            type: String,
            maxlength: 5
        },
        recup: {
            type: String,
            maxlength: 10
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('exo', ExoSchema )