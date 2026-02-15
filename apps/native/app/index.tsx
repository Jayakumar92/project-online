import { ReactNode, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from '@repo/ui-rnr/components/text';
import { Button } from '@repo/ui-rnr/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui-rnr/components/card';
import { Badge } from '@repo/ui-rnr/components/badge';
import { Separator } from '@repo/ui-rnr/components/separator';
import { Input } from '@repo/ui-rnr/components/input';
import { Label } from '@repo/ui-rnr/components/label';
import { Switch } from '@repo/ui-rnr/components/switch';
import { Progress } from '@repo/ui-rnr/components/progress';
import { Checkbox } from '@repo/ui-rnr/components/checkbox';
import { Skeleton } from '@repo/ui-rnr/components/skeleton';
import { Textarea } from '@repo/ui-rnr/components/textarea';

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View className="gap-3">
      <Text variant="h3">{title}</Text>
      {children}
      <Separator />
    </View>
  );
}

export default function Index() {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [progress, setProgress] = useState(45);

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-6 py-8 gap-8">
        <Text variant="h1">{'RNR Components'}</Text>

        {/* Buttons */}
        <Section title="Button">
          <View className="flex-row flex-wrap gap-3">
            <Button variant="default">
              <Text>{'Default'}</Text>
            </Button>
            <Button variant="destructive">
              <Text>{'Destructive'}</Text>
            </Button>
            <Button variant="outline">
              <Text>{'Outline'}</Text>
            </Button>
            <Button variant="secondary">
              <Text>{'Secondary'}</Text>
            </Button>
            <Button variant="ghost">
              <Text>{'Ghost'}</Text>
            </Button>
            <Button variant="link">
              <Text>{'Link'}</Text>
            </Button>
          </View>
          <View className="flex-row gap-3">
            <Button size="sm">
              <Text>{'Small'}</Text>
            </Button>
            <Button size="default">
              <Text>{'Default'}</Text>
            </Button>
            <Button size="lg">
              <Text>{'Large'}</Text>
            </Button>
          </View>
        </Section>

        {/* Badge */}
        <Section title="Badge">
          <View className="flex-row flex-wrap gap-3">
            <Badge variant="default">
              <Text>{'Default'}</Text>
            </Badge>
            <Badge variant="secondary">
              <Text>{'Secondary'}</Text>
            </Badge>
            <Badge variant="destructive">
              <Text>{'Destructive'}</Text>
            </Badge>
            <Badge variant="outline">
              <Text>{'Outline'}</Text>
            </Badge>
          </View>
        </Section>

        {/* Card */}
        <Section title="Card">
          <Card>
            <CardHeader>
              <CardTitle>
                <Text className="text-lg font-semibold">{'Card Title'}</Text>
              </CardTitle>
              <CardDescription>
                <Text className="text-sm text-muted-foreground">
                  {'Card description goes here.'}
                </Text>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text>{'This is the card content area.'}</Text>
            </CardContent>
            <CardFooter>
              <Button variant="default" size="sm">
                <Text>{'Action'}</Text>
              </Button>
            </CardFooter>
          </Card>
        </Section>

        {/* Typography */}
        <Section title="Typography">
          <Text variant="h1">{'Heading 1'}</Text>
          <Text variant="h2">{'Heading 2'}</Text>
          <Text variant="h3">{'Heading 3'}</Text>
          <Text variant="h4">{'Heading 4'}</Text>
          <Text variant="p">{'Paragraph text with some content to show styling.'}</Text>
          <Text variant="lead">{'Lead text'}</Text>
          <Text variant="large">{'Large text'}</Text>
          <Text variant="small">{'Small text'}</Text>
          <Text variant="muted">{'Muted text'}</Text>
          <Text variant="code">{'Code text'}</Text>
        </Section>

        {/* Input & Label */}
        <Section title="Input">
          <View className="gap-2">
            <Label>
              <Text>{'Email'}</Text>
            </Label>
            <Input placeholder="Enter your email" />
          </View>
          <View className="gap-2">
            <Label>
              <Text>{'Message'}</Text>
            </Label>
            <Textarea placeholder="Type your message..." />
          </View>
        </Section>

        {/* Switch */}
        <Section title="Switch">
          <View className="flex-row items-center gap-3">
            <Switch checked={switchChecked} onCheckedChange={setSwitchChecked} />
            <Text>{switchChecked ? 'On' : 'Off'}</Text>
          </View>
        </Section>

        {/* Checkbox */}
        <Section title="Checkbox">
          <View className="flex-row items-center gap-3">
            <Checkbox checked={checkboxChecked} onCheckedChange={setCheckboxChecked} />
            <Text>{checkboxChecked ? 'Checked' : 'Unchecked'}</Text>
          </View>
        </Section>

        {/* Progress */}
        <Section title="Progress">
          <Progress value={progress} />
          <View className="flex-row gap-3">
            <Button
              variant="outline"
              size="sm"
              onPress={() => setProgress(Math.max(0, progress - 10))}
            >
              <Text>{'-10'}</Text>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onPress={() => setProgress(Math.min(100, progress + 10))}
            >
              <Text>{'+10'}</Text>
            </Button>
          </View>
        </Section>

        {/* Skeleton */}
        <Section title="Skeleton">
          <View className="gap-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </View>
        </Section>

        <View className="h-10" />
      </View>
    </ScrollView>
  );
}
