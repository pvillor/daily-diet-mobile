import { ActivityIndicator, Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans'

import theme from '@theme/index';

export function App() {
  const [isFontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {!isFontsLoaded ? <Text>Link Start</Text> : <ActivityIndicator />}
    </ThemeProvider>
  );
}