import firebase from "firebase/compat/app";
import router from "next/router";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/functions";
import "firebase/compat/analytics";
import "firebase/compat/performance";
import "firebase/messaging";
import { Firebase } from "./firebase";
export class Authentification {
  constructor() {}
  auth() {
    return firebase.auth();
  }
  user() {
    return firebase.auth().currentUser;
  }
  login = {
    withPopup: async () => {
      const auth = this.auth();
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().getRedirectResult();
      return await auth.signInWithPopup(provider);
    },
    redirect: async () => {
      const auth = this.auth();
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithRedirect(provider);
      await firebase.auth().getRedirectResult();
    },
    withGoogle: async () => {
      const auth = this.auth();
      const provider = new firebase.auth.GoogleAuthProvider();
      return await auth.signInWithPopup(provider);
    },
    withGithub: async () => {
      return await this.signWithGithub();
    },
  };
  async signWithGithub() {
    const auth = this.auth();
    const provider = new firebase.auth.GithubAuthProvider();
    return await auth.signInWithPopup(provider);
  }

  async phoneSignIn(
    phoneNumber: string,
    verificationCode: firebase.auth.ApplicationVerifier
  ) {
    const auth = this.auth();
    await auth.signInWithPhoneNumber(phoneNumber, verificationCode);
  }

  async signUp(email: string, password: string) {
    const auth = this.auth();
    await auth.createUserWithEmailAndPassword(email, password);
  }

  stateChanged(callback: (user: firebase.User | null) => void) {
    const auth = this.auth();
    auth.onAuthStateChanged(callback);
  }

  async signOut() {
    const auth = this.auth();
    await auth.signOut();
  }

  async signIn(
    email: string,
    password: string,
    collection: string,
    url: string,
    documentPath?: string | undefined
  ) {
    return await this.sign(email, password).then(async () => {
      const fire = new Firebase();
      await router.push(url);
      await fire.collection(collection).doc(documentPath).set({
        name: fire.userName(),
        email: fire.email(),
      });
    });
  }

  async sign(email: string, password: string) {
    const auth = this.auth();
    return await auth.signInWithEmailAndPassword(email, password);
  }

  async emailVerification() {
    const user = this.user();
    await user?.sendEmailVerification();
  }

  async passwordResetEmail(email: string) {
    const auth = this.auth();
    await auth.sendPasswordResetEmail(email);
  }

  isConnected() {
    return this.auth().currentUser !== null;
  }
}
