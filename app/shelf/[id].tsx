import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
const shelfData: Record<string, string> = {};

export default function ShelfDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [name, setName] = useState(shelfData[id] || "");

  const saveName = () => {
    shelfData[id] = name;
  };

  return (
    <View>
      <Text>Shelf {id}</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
        style={{ borderWidth: 1, margin: 10, padding: 5 }}
      />
      <Button title="Save" onPress={saveName} />
    </View>
  );
}
