const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/zabyDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Połączono z MongoDB');

        const Zaba = mongoose.model('Zaba', new mongoose.Schema({
            nazwa: String,
            rodzina: String,
            kolory: [String],
            plamki: String,
            opis: String
        }));

        const zabLista = [
            { nazwa: "Żaba jeziorkowa", rodzina: "Żabowate", kolory: ["zielony"], plamki: "tak", opis: "Pospolita na cały obszarze kraju..." },
            { nazwa: "Żaba śmieszka", rodzina: "Żabowate", kolory: ["zielony", "brunatny"], plamki: "tak" },
            { nazwa: "Żaba wodna", rodzina: "Żabowate", kolory: ["zielony"], plamki: "tak" },
            { nazwa: "Żaba zwinka", rodzina: "Żabowate", kolory: ["brunatny"], plamki: "tak" },
            { nazwa: "Żaba moczarowa", rodzina: "Żabowate", kolory: ["brunatny"], plamki: "tak" },
            { nazwa: "Ropucha szara", rodzina: "Ropuchowate", kolory: ["szary"], plamki: "tak" },
            { nazwa: "Kumak nizinny", rodzina: "Ropuszkowate", kolory: ["szary", "brunatny", "żółty"], plamki: "tak" }
        ];

        await Zaba.insertMany(zabLista);
        console.log('Dane dodane do bazy');
        mongoose.connection.close();
    })
    .catch(err => console.error('Błąd:', err));