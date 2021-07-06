import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2020-08-27"
});
const app = express();

app.use(cors({ origin: true }));
app.use(express.json);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = Number(req.query.total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd"
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

exports.api = functions.https.onRequest(app);
