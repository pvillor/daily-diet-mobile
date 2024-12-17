import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';

import theme from '@theme/index';
import { Loading } from '@components/loading';
import { Meals } from '@screens/meals';
import { Summary } from '@screens/summary';
import { CreateMeal } from '@screens/create-meal';
import { Feedback } from '@screens/feedback';
import { MealDetails } from '@screens/meal-details';

export function App() {
  const [isFontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {isFontsLoaded ? <MealDetails isWithinDiet={false} /> : <Loading />}
    </ThemeProvider>
  );
}
