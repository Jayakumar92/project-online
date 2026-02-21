import { View } from 'react-native';
import { Text } from '@repo/ui-rnr/components/text';
import { brand } from '@repo/brand/loader';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background p-8">
      <Text className="text-4xl font-bold text-foreground">{brand.meta.displayName}</Text>
      <Text className="mt-4 text-muted-foreground">
        Migrate content from apps/native to this app.
      </Text>
    </View>
  );
}
