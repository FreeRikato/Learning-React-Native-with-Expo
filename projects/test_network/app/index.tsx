import * as Network from "expo-network";
import { Text, View } from "react-native";
import { useState } from "react";

export default function Index() {
  const [IP, setIP] = useState("");
  const [netState, setNetState] = useState("");
  const networkState = Network.useNetworkState();
  const ipAddress = async () => {
    const ipDetails = await Network.getIpAddressAsync();
    const asyncNetworkState = await Network.getNetworkStateAsync();
    setIP(ipDetails);
    setNetState(JSON.stringify(asyncNetworkState, null, 2));
  };
  ipAddress();
  console.log(`Current network type: ${networkState.type}`);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        Network State Details: {JSON.stringify(networkState, null, 2)}
      </Text>
      <Text>IP address: {IP}</Text>
      <Text>Async Net state: {netState}</Text>
    </View>
  );
}
