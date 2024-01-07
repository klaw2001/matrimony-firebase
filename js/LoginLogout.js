const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCEaBQ0PnSZDBNv8i9yfQtQJkmQWwyhz4E",
  authDomain: "matrimony-e4e06.firebaseapp.com",
  projectId: "matrimony-e4e06",
  storageBucket: "matrimony-e4e06.appspot.com",
  messagingSenderId: "704961593046",
  appId: "1:704961593046:web:afab2ff10fc33898a39377",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const signUp = async (event) => {
    event.preventDefault();

    const name = document.querySelector("[name='name']").value;
    const email = document.querySelector("[name='email']").value;
    const phone = document.querySelector("[name='phone']").value;
    const password = document.querySelector("[name='pswd']").value;

    // Additional validation logic can be added here

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);

        // Signed in
        console.log("You are Signed Up");
        console.log(userCredential);

        // You can store additional user information in the database (Firestore) here
        await db.collection("users").doc(userCredential.user.uid).set({
            name,
            email,
            phone,
        });

    } catch (error) {
        console.error(error.code, error.message);
        // Handle errors and provide feedback to the user
    }
};
const login = async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      // Redirect to a dashboard or another page if needed
      window.location.href = '/';

    } catch (error) {
      console.error('Login Error:', error.message);
      // Handle and display the error as needed
      alert('Login failed. Check your credentials and try again.');
    }
  };
