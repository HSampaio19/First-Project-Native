import reactotron from "reactotron-react-native";

if(__DEV__){
  const tron = reactotron.configure().useReactNative().connect()

  console.tron = tron;

  tron.clear()
}
