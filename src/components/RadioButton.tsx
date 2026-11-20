import { Pressable, StyleSheet, Text, View } from 'react-native';

type RadioProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export function RadioButton({ label, selected, onPress }: RadioProps) {
  return (
    <Pressable
     onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
    >
      <View style={[styles.radioOuter, selected && styles.radioOuterSelected]}>
        {selected && <View style={styles.radioInnerDot} />}
      </View>

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
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.8,
    borderColor: '#DFD0BC',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  radioOuterSelected: {
    borderWidth: 6,
    borderColor: '#63B3FF',
    backgroundColor: '#FFFFFF',
  },
  radioInnerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  label: {
    flex: 1, 
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
    color: '#8B5E34',
  },
});