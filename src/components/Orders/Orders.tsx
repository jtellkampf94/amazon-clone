import { useState, useEffect } from "react";
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";

import Order from "../Order/Order";
import { useStateValue } from "../../context/stateProvider";
import { db } from "../../firebase";

import "./Orders.scss";

export interface DBOrder {
  id: string;
  data: (
    options?: firebase.firestore.SnapshotOptions | undefined
  ) => firebase.firestore.DocumentData;
}

const Orders: React.FC = () => {
  const {
    state: { user }
  } = useStateValue();
  const [orders, setOrders] = useState<DBOrder[]>([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot(snapshot =>
          setOrders(
            snapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map(order => (
          <Order key={uuidv4()} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
