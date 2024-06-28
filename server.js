const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;
const corsOptions = {
    origin: 'http://localhost:5173',  // Ersetze 'http://example.com' mit der tatsächlichen Herkunft (Origin) deiner Anfrage
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

app.use(express.json());

app.get('/heatingoil/:zip/:amount/:up', async (req, res) => {
   const data = {
    "products": [
      {
        "id": 1,
        "name": "Bestpreis",
        "description": [
          "unser günstigstes Angebot",
          "bewährte Standard-Qualität"
        ],
        "basePrice": 86.11,
        "prices": {
          "priceNet": "86,07",
          "priceGross": "102,42",
          "taxes": "16,35",
          "priceTotalNet": "1.291,05",
          "priceTotalGross": "1.536,30",
          "taxesTotal": "245,25",
          "withAction": null,
          "totalWithAction": null,
          "priceActionDifference": 0
        },
        "isPremium": false,
        "isClimateNeutral": false,
        "days": 35,
        "deliveryTimeType": "standard"
      },
      {
        "id": 4,
        "name": "Eco-Heizöl",
        "description": [
          "unser Premium-Heizöl",
          "mehr Effizienz und Haltbarkeit"
        ],
        "basePrice": 86.11,
        "prices": {
          "priceNet": "88,07",
          "priceGross": "104,80",
          "taxes": "16,73",
          "priceTotalNet": "1.321,05",
          "priceTotalGross": "1.572,00",
          "taxesTotal": "250,95",
          "withAction": null,
          "totalWithAction": null,
          "priceActionDifference": 0
        },
        "isPremium": true,
        "isClimateNeutral": false,
        "days": 35,
        "deliveryTimeType": "standard"
      },
      {
        "id": 6,
        "name": "Express",
        "description": [
          "Lieferung innerhalb von 2 Werktagen",
          "bewährte Standard-Qualität"
        ],
        "basePrice": 86.11,
        "prices": {
          "priceNet": "119,40",
          "priceGross": "142,09",
          "taxes": "22,69",
          "priceTotalNet": "1.791,00",
          "priceTotalGross": "2.131,35",
          "taxesTotal": "340,35",
          "withAction": null,
          "totalWithAction": null,
          "priceActionDifference": 0
        },
        "isPremium": false,
        "isClimateNeutral": false,
        "days": 2,
        "deliveryTimeType": "express48"
      }
    ],
    "settings": {
      "delivery_times": {
        "standard": {
          "name": "Standard (innerh. 35 Werktage)",
          "add": "0,00"
        },
        "short": {
          "name": "verk. Lieferzeit (innerh. 10 Werktage)",
          "add": "416,50"
        },
        "express48": {
          "name": "Express 48h",
          "add": "595,00"
        }
      },
      "wish_date_forerun_days": 10,
      "delivery_time_days": "35",
      "delivery_time_short_days": "10",
      "min_wish_date": "2024-07-11",
      "max_wish_date": "2024-08-29",
      "feast_days": [],
      "payment_types": {
        "payment_cash_add": {
          "id": 1,
          "name": "Barzahlung",
          "add": "0,00"
        },
        "payment_ec_add": {
          "id": 2,
          "name": "EC-Karte",
          "add": "0,00"
        }
      },
      "hoses": {
        "1": {
          "name": "40m",
          "add": "0,00"
        },
        "2": {
          "name": "60m",
          "add": "35,70"
        },
        "3": {
          "name": "80m",
          "add": "71,40"
        }
      },
      "time_frames": [],
      "anti_freeze_add": "23,21",
      "delivery_time_add": "0,00",
      "premium_add": "2,38",
      "ggvs_add": "49,50",
      "unloading_points_add": "35,70",
      "climate_neutral_add": null,
      "show_message": "0"
    }
  };

  res.status(200).json(data)

    
});
app.get('/info', async (req, res) => {console.log("hello world")});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});