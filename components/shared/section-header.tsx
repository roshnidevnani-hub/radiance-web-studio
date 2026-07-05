import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        {eyebrow}
      </p>

      <Heading as="h2" className="mt-4">
        {title}
      </Heading>

      <Text className="mt-6">
        {description}
      </Text>
    </div>
  );
}