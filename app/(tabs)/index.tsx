import { FlatList, StyleSheet, Text, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  const shelfArray = Array.from({ length: 36 }, (_, i) => i + 1);

  return (
    <View style={styles.shelfViewContainer}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Select A Shelf</ThemedText>
      </ThemedView>
      <FlatList
        style={styles.shelfContainer}
        data={shelfArray}
        keyExtractor={(item) => item.toString()}
        numColumns={6}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.shelfBtn}>
            <Text style={styles.shelfBtnText}>{item}</Text>
          </View>
        )}
        contentContainerStyle={styles.shelfContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  shelfViewContainer: {
    marginTop: 50,
    padding: 15
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
    backgroundColor: "none"
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 12
  },
  shelfContainer: {
    paddingVertical: 8
  },
  shelfBtn: {
    backgroundColor: "#4A6572", // modern blue-grey tone
    width: 55,
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    // subtle shadow for modern look
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3 // Android shadow
  },
  shelfBtnText: {
    color: "#fff",
    fontSize: 25, // larger text
    fontWeight: "700", // bold
    textAlign: "center"
  }
});
