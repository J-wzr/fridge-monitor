import { auth } from "boot/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Loading, Notify } from "quasar";

const register = (data, router) => {
  console.log("Received router in register:", router); // Debugging router instance

  return new Promise((resolve, reject) => {
    Loading.show();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Update profile with display name
        updateProfile(user, {
          displayName: `${data.first_name} ${data.last_name}`,
        })
          .then(() => {
            Loading.hide();
            if (router && typeof router.push === "function") {
              console.log("Routing to login..."); // Routing debug
              router.push({ name: "login" });
              resolve(user);
            } else {
              console.error("Router is undefined, cannot navigate to 'login'");
              reject("Routing failed. Please try again.");
            }
          })
          .catch((profileError) => {
            Loading.hide();
            Notify.create({
              type: "negative",
              message: `Profile update failed: ${profileError.message}`,
            });
            reject(profileError.message);
          });
      })
      .catch((err) => {
        Loading.hide();
        Notify.create({
          type: "negative",
          message: `Registration failed: ${err.message}`,
        });
        reject(err.message);
      });
  });
};

export default register;
