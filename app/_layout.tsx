import "./global.css";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

// 1. IMPORTACIONES NUEVAS DE HERO UI Y GESTURE HANDLER
import { HeroUINativeProvider } from "heroui-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  // Definimos el color de fondo según el tema para evitar hardcoding
  const bgColor = colorScheme === "dark" ? "#000000" : "#ffffff";

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* 1. Aplicamos el fondo aquí para que no se vea blanco detrás de las vistas */}
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: bgColor }}>
        <HeroUINativeProvider>
          <Stack
            screenOptions={{
              // 2. Esto elimina el flash blanco entre transiciones de pantalla
              contentStyle: { backgroundColor: bgColor }
            }}
          >
            <Stack.Screen name="welcome" options={{ headerShown: false }} />
            <Stack.Screen
              name="(auth)/login"
              options={{
                headerShown: true,
                title: "",
                headerShadowVisible: false,
                headerTransparent: true,
                // 3. Aseguramos que la flecha de "atrás" cambie de color
                headerTintColor: colorScheme === "dark" ? "white" : "black",
              }}
            />
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="modal"
              options={{ presentation: "modal", title: "Modal" }}
            />
          </Stack>
          <StatusBar style="auto" />
        </HeroUINativeProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
