import { auth } from "boot/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { Loading, Notify } from "quasar";

const login = (data, router) => {
  return new Promise((resolve, reject) => {
    Loading.show();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;

        Notify.create({
          type: "positive",
          message: `Welcome, ${user.displayName || user.email}!`,
        });

        Loading.hide();

        if (router) {
          router.push({ name: "home" });
          resolve(user);
        } else {
          console.error("Router is undefined, cannot navigate to 'home'");
          reject("Routing failed. Please try again.");
        }
      })
      .catch((err) => {
        Loading.hide();
        Notify.create({
          type: "negative",
          message: err.message,
        });
        reject(err.message);
      });
  });
};

const googleSignIn = async (router) => {
  try {
    Loading.show();
    const googleProvider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    Notify.create({
      type: "positive",
      message: `Welcome, ${user.displayName || user.email}!`,
    });

    Loading.hide();

    if (router) {
      router.push({ name: "home" });
    }

    return user;
  } catch (error) {
    Loading.hide();
    Notify.create({
      type: "negative",
      message: error.message,
    });
    console.error("Google Login failed:", error);
    throw error;
  }
};

export { googleSignIn };
export default login;
