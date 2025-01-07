export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      meals: undefined
      summary: undefined
      'create-meal': undefined
      feedback: {
        isWithinDiet: boolean
      }
      'meal-details': {
        id: string
      }
      'edit-meal': {
        id: string
      }
    }
  }
}