import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Button } from 'heroui-native';
import { useRouter } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Tipado de la navegación (ajusta 'RootStackParamList' según tu proyecto)
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface WelcomeScreenProps {
  navigation: WelcomeScreenNavigationProp;
}

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  const router = useRouter();
  // URL del video (puedes usar require para local)
  const videoSource = require('../assets/videos/welcome-2.mp4');
  // O local: const videoSource = require('./assets/video.mp4');

  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  const logoUrl = require('../assets/images/welcome-icon.png'); // O { uri: 'https://...' }

  return (
    <View className="flex-1 relative">

      {/* Video de fondo */}
      <VideoView
        player={player}
        style={StyleSheet.absoluteFill}
        contentFit="cover"
        allowsFullscreen={false}
        nativeControls={false} // Oculta controles por defecto
      />

      {/* Overlay oscuro */}
      <View className="absolute inset-0 bg-linear-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500/50 to-90%" />

      {/* Contenido principal */}
      <View className="flex-1 justify-between items-center px-8 py-16">
        {/* Logo y texto */}
        <View className="items-center mt-64">
          <Image
            source={logoUrl}
            className="w-80 h-42"
            resizeMode="contain"
          />
          <Text className="text-white text-3xl font-bold mt-4">
            Bienvenido
          </Text>
          <Text className="text-white/80 text-lg mt-2 text-center">
            Tu app increíble comienza aquí
          </Text>
        </View>

        {/* Botones */}
        <View className="w-full gap-4">
          <Button
            size="lg"
            variant="primary"
            className="w-full"
            onPress={() => router.push('/login')}
          >
            <Button.Label>Iniciar sesión</Button.Label>
          </Button>

          <Button
            size="lg"
            variant="tertiary"
            className="w-full"
            onPress={() => router.push('/register')}
          >
            <Button.Label>Registrarse</Button.Label>
          </Button>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}