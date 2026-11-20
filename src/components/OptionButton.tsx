import { Pressable, StyleSheet, Text, View, type ImageSourcePropType, Image } from 'react-native';

type OptionProps = {
  label: string;
  source: ImageSourcePropType;
  onPress: () => void;
};

export function OptionButton({ label, source, onPress }: OptionProps) {
  return (
    <Pressable
     onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
    >
      <Image
          source={source}
          style={styles.illustration}
          resizeMode="contain"
        />

      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5ECE0',
    borderWidth: 1.2,
    borderColor: '#B89B7E', 
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 22,
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  illustration: {
    width: 48,
    height: 48,
    marginRight: 20,
  },
  label: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    color: '#8B5E34',
  },
});