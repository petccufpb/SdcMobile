import { Alert } from "react-native";

export const createAlert = (title, subtitle, success, cancel) => {
  Alert.alert(
    title,
    subtitle,
    [      
      {text: 'Cancelar', onPress: cancel, style: 'cancel'},
      {text: 'OK', onPress: success},
    ],
    { cancelable: false }
  )
}