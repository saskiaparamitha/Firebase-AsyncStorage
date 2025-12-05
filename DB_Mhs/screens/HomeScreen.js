import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getMahasiswa = async () => {
      // Ambil UID user yang login dari AsyncStorage
      const user = await AsyncStorage.getItem("user");
      const userData = JSON.parse(user);

      // Firestore reference
      const ref = doc(db, "mahasiswa", "users");  // DocumentID = users

      const snap = await getDoc(ref);

      if (snap.exists()) {
        setData(snap.data());
      }
    };

    getMahasiswa();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Mahasiswa</Text>

      {data ? (
        <View>
          <Text>Nama : {data.Nama}</Text>
          <Text>NIM : {data.NIM}</Text>
          <Text>Kelas : {data.Kelas}</Text>
          <Text>Angkatan : {data.Angkatan}</Text>
          <Text>Prodi : {data.Prodi}</Text>
        </View>
      ) : (
        <Text>Loading data...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
