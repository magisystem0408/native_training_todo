import {Provider} from "react-redux";
import {store} from "./store";
import {RootNavigator} from "./navigations/RootNavigator";
import {LogBox} from "react-native";

// 以下のログを無視する
LogBox.ignoreLogs([
    'Setting a timer',
    'AsyncStorage has been extracted from react-native core and will be removed in a future release'
])

export default function App() {
    return (
        //reduxの有効化
        <Provider store={store}>
            <RootNavigator />
        </Provider>
    );
}
