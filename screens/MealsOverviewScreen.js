import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen () {
    return (
        <View style={styles.container}>
            <Text>Meals Overview</Text>
        </View>
    )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
})