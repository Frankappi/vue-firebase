import firebase from "../firebaseConfig"
const db = firebase.firestore();
const productRef = db.collection("/products");

class ProductDataServeice {
    getAll() {
        return productRef;
    }
    create(data) {
        return productRef.add(data);
    }
    update(id, value) {
        return productRef.doc(id).update(value);
    }
    delete(id) {
        return productRef.doc(id).delete();
    }
}

export default new ProductDataServeice();