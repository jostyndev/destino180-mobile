import { Ionicons } from "@expo/vector-icons";
import { Button, Card, TextField, useThemeColor } from "heroui-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Lock, Mail } from "lucide-react-native";
import React from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function LoginScreen() {
  const themeColorMuted = useThemeColor("muted");
  const [email, setEmail] = React.useState("");
  const isInvalidEmail =
    email !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const headerHeight = useHeaderHeight();

  return (
        <View
          style={{ flex: 1, paddingTop: 100 }}
        >
          <View style={styles.centerContainer}>
            <View className=" flex flex-col px-4 w-full">
              {/* <Card> */}
              <Text
                className="text-xl font-bold text-center text-gray-900 dark:text-white"
                selectionColorClassName="accent-blue-500"
              >
                Bienvenido de nuevo
              </Text>
              <Text className="text-lg font-medium text-center text-gray-900 dark:text-white">
                Ingrese sus datos
              </Text>
              <View className="gap-6 mt-6">
                <TextField isRequired isInvalid={isInvalidEmail}>
                  <TextField.Label>Correo</TextField.Label>
                  <TextField.Input
                    placeholder="Ingrese su correo electrónico"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                  >
                    <TextField.InputStartContent>
                      <Mail size={18} color={themeColorMuted} />
                    </TextField.InputStartContent>
                  </TextField.Input>
                  <TextField.Description>
                    We ll send a confirmation to this email
                  </TextField.Description>
                  <TextField.ErrorMessage>
                    Please enter a valid email address
                  </TextField.ErrorMessage>
                </TextField>

                <TextField isRequired>
                  <TextField.Label>Contraseña</TextField.Label>
                  <TextField.Input
                    placeholder="Ingrese su contraseña"
                    secureTextEntry
                  >
                    <TextField.InputStartContent>
                      <Lock size={18} color={themeColorMuted} />
                    </TextField.InputStartContent>
                    <TextField.InputEndContent>
                      <Ionicons
                        name="eye-outline"
                        size={16}
                        color={themeColorMuted}
                      />
                    </TextField.InputEndContent>
                  </TextField.Input>
                </TextField>

                <Button variant="primary">Iniciar Session</Button>
              </View>
              {/* </Card> */}
            </View>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1, // Importante: permite que el contenido crezca y centre bien
    justifyContent: "center",
  },
  centerContainer: {
    width: "100%",
    // paddingHorizontal: 16,
  },
});
