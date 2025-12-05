import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      
      await setDoc(doc(db, "mahasiswa", uid), {
        Nama: "Saskia",
        NIM: "24060123140144",
        Kelas: "E",
        Angkatan: "2023",
        Prodi: "Informatika",
        email: email,
      });
      
      alert("Registrasi berhasil!");
      navigation.replace("Login");
    } catch (error) {
      console.log("REGISTER ERROR:", error);
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>DAFTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 26, textAlign: "center" },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
  button: { backgroundColor: "#ff69b4", padding: 15, marginTop: 10, borderRadius: 5 },
  buttonText: { color: "#fff", textAlign: "center" },
  link: { marginTop: 10, textAlign: "center", color: "#ff69b4" },
});
