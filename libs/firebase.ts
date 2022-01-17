import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/functions";
import "firebase/compat/analytics";
import "firebase/compat/performance";
import "firebase/messaging";

import { configuration } from "../utils/configuration";

export class Firebase {
  settings() {
    return {
      apiKey: configuration.firebase.apiKey,
      authDomain: configuration.firebase.authDomain,
      projectId: configuration.firebase.projectId,
      storageBucket: configuration.firebase.storageBucket,
      messagingSenderId: configuration.firebase.messagingSenderId,
      appId: configuration.firebase.appId,
      measurementId: configuration.firebase.measurementId,
    };
  }
  constructor() {
    firebase.initializeApp(this.settings());
  }

  user() {
    return firebase.auth().currentUser;
  }

  isUser() {
    return this.user() ? true : false;
  }

  userName() {
    return this.user()?.displayName;
  }

  photoUrl() {
    return this.user()?.photoURL;
  }

  defaultPhotoUrl() {
    return "/static/images/default.svg";
  }

  email() {
    return this.user()?.email;
  }

  tokenId() {
    return this.user()?.getIdToken();
  }

  userData() {
    return this.getFireStore().collection("users").doc(this.user()?.uid);
  }

  getStorage() {
    return firebase.storage();
  }

  getFireStore() {
    return firebase.firestore();
  }

  messaging() {
    return firebase.messaging();
  }

  firebase() {
    return firebase;
  }

  database() {
    return firebase.database();
  }

  analytics() {
    return firebase.analytics();
  }

  functions() {
    return firebase.functions();
  }

  collection(collection: string) {
    return firebase.firestore().collection(collection);
  }
  collectionId(collection: string) {
    return this.collection(collection).doc().id;
  }

  reference(ref: string, child: string) {
    return this.database().ref(ref).child(child);
  }
  documentPath(collection: string, documentPath: string) {
    return this.collection(collection).doc(documentPath);
  }

  id() {
    return this.user()?.uid;
  }

  performance() {
    return firebase.performance();
  }

  import(url: string) {
    return this.functions().httpsCallable(url);
  }

  currentPassword(currentPassword: string) {
    const credential = firebase.auth.EmailAuthProvider.credential(
      this.email() as string,
      currentPassword
    );
    return this.user()?.reauthenticateWithCredential(credential);
  }

  updatePassword(currentPassword: string, newPassword: string) {
    this.currentPassword(currentPassword)?.then(() => {
      return this.user()?.updatePassword(newPassword);
    });
  }

  async snapshot(collection: string, documentPath: string) {
    return await this.collection(collection)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id === documentPath) {
            return doc.data();
          }
        });
      })
      .then((data) => data)
      .catch((error) => console.log("Error getting documents: ", error));
  }

  async update(collection: string, documentPath: string, data: any) {
    const collectionRef = this.collection(collection);
    const documentRef = collectionRef.doc(documentPath);
    await documentRef.update(data);
  }

  async create(collection: string, data: any) {
    const collectionRef = this.collection(collection);
    await collectionRef.add(data);
  }

  async delete(collection: string, documentPath: string) {
    const collectionRef = this.collection(collection);

    const documentRef = collectionRef.doc(documentPath);
    await documentRef.delete();
  }

  async get(collection: string, documentPath: string) {
    const collectionRef = this.collection(collection);
    const documentRef = collectionRef.doc(documentPath);
    return await documentRef.get();
  }

  async getAll(collection: string) {
    const collectionRef = this.collection(collection);
    return await collectionRef.get();
  }

  async getAllByField(collection: string, field: string, value: any) {
    const collectionRef = this.collection(collection);
    return await collectionRef.where(field, "==", value).get();
  }

  async updateUser(collection: string, documentPath: string, data: any) {
    const user = this.user();
    const userData = this.userData();

    if (userData) {
      await this.collection(collection).doc(documentPath).update(data);
    } else {
      await this.collection(collection).doc(documentPath).set(data);
    }
    if (user) {
      await user.updateProfile({
        displayName: data.name,
        photoURL: data.photoURL,
      });
    }

    return await userData.update(data).then(async () => {
      await this.collection(collection).doc(documentPath).set({
        name: this.userName(),
        email: this.email(),
      });
    });
  }
}
