import 'react-native-gesture-handler';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider } from '@/theme';
import ApplicationNavigator from '@/navigation/Application';

import '@/translations';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { store } from './stores';

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
    },
  },
});

export const storage = new MMKV();

function App() {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider storage={storage}>
            <PaperProvider>
              <ApplicationNavigator />
            </PaperProvider>
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default App;
