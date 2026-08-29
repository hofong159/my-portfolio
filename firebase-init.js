// Firebase 初始化設定
// 這裡的 apiKey 等資訊是「公開的用戶端設定值」，不是密碼，
// Firebase 的安全性是靠 Firestore 的規則(rules)控制，不是靠隱藏這組設定。
const firebaseConfig = {
  apiKey: "AIzaSyDQYxxFHc8iXa7MKBgyXfzNE8EgxjZqJdk",
  authDomain: "hofong-portfolio.firebaseapp.com",
  projectId: "hofong-portfolio",
  storageBucket: "hofong-portfolio.firebasestorage.app",
  messagingSenderId: "254096787618",
  appId: "1:254096787618:web:a90e48def9dbe696a7affb",
  measurementId: "G-GHH3G5YRWP"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
