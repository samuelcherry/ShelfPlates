import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
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
          <Pressable
            style={styles.shelfBtn}
            onPress={() => router.push(`/shelf/${item}`)}
          >
            <Text style={styles.shelfBtnText}>{item}</Text>
          </Pressable>
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
    marginBottom: 10
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 12
  },
  shelfContainer: {
    paddingVertical: 8
  },
  shelfBtn: {
    backgroundColor: "#4A6572",
    width: 55,
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3
  },
  shelfBtnText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center"
  }
});
