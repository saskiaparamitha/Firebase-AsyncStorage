import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { db } from "../firebaseConfig"; 
import { doc, setDoc } from "firebase/firestore";

export default function DataMhs() {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [kelas, setKelas] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [prodi, setProdi] = useState("");

  const saveData = async () => {
    try {
      await setDoc(doc(db, "mahasiswa", "users"), {
        Nama: nama,
        NIM: nim,
        Kelas: kelas,
        Angkatan: angkatan,
        Prodi: prodi,
      });
      alert("Data berhasil disimpan!");
    } catch (error) {
      console.log(error);
      alert("Gagal menyimpan data!");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Nama" onChangeText={setNama} />
      <TextInput placeholder="NIM" onChangeText={setNim} />
      <TextInput placeholder="Kelas" onChangeText={setKelas} />
      <TextInput placeholder="Angkatan" onChangeText={setAngkatan} />
      <TextInput placeholder="Prodi" onChangeText={setProdi} />

      <Button title="Simpan" onPress={saveData} />
    </View>
  );
}
