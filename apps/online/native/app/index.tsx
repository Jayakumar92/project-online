import { ScrollView, View } from 'react-native';
import { Text } from '@repo/ui-rnr/components/text';
import { Button } from '@repo/ui-rnr/components/button';
import { Badge } from '@repo/ui-rnr/components/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui-rnr/components/card';
import { Input } from '@repo/ui-rnr/components/input';
import { Separator } from '@repo/ui-rnr/components/separator';
import { brand } from '@repo/brand/loader';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="flex-1 items-center gap-6 p-8">
        <Text className="text-3xl font-bold text-foreground">{brand.meta.displayName}</Text>

        {/* Badges */}
        <View className="flex-row flex-wrap gap-2">
          <Badge>
            <Text>Default</Text>
          </Badge>
          <Badge variant="secondary">
            <Text>Secondary</Text>
          </Badge>
          <Badge variant="destructive">
            <Text>Destructive</Text>
          </Badge>
          <Badge variant="outline">
            <Text>Outline</Text>
          </Badge>
        </View>

        <Separator />

        {/* Buttons */}
        <View className="w-full gap-3">
          <Button>
            <Text>Primary</Text>
          </Button>
          <Button variant="secondary">
            <Text>Secondary</Text>
          </Button>
          <Button variant="outline">
            <Text>Outline</Text>
          </Button>
          <Button variant="destructive">
            <Text>Destructive</Text>
          </Button>
          <Button variant="ghost">
            <Text>Ghost</Text>
          </Button>
        </View>

        <Separator />

        {/* Card with input */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Test Card</CardTitle>
          </CardHeader>
          <CardContent className="gap-3">
            <Input placeholder="Type something..." />
            <Button>
              <Text>Submit</Text>
            </Button>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}
