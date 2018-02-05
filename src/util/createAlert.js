import { Alert } from "react-native";

export const createAlert = (title, subtitle, success, cancel, successTitle = "Ok") => {
  Alert.alert(
    title,
    subtitle,
    [      
      {text: 'Cancelar', onPress: cancel, style: 'cancel'},
      {text: successTitle, onPress: success},
    ],
    { cancelable: false }
  )
}

export const createOkAlert = (title, subtitle, handle) => {
  Alert.alert(
    title,
    subtitle,
    [            
      {text: 'Ok', onPress: handle},
    ],
    { cancelable: false }
  )
}

export const createNOptionsAlert = (title, subtitle, options) => {
  Alert.alert(
    title,
    subtitle,
    options,
    { cancelable: false }
  )
}