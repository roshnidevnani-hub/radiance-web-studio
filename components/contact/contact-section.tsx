import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/sections";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <Section className="py-24">
      <Container>
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <div>
            <p className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Contact Us
            </p>

            <Heading as="h1">
              Let's build your next website.
            </Heading>

            <Text className="mt-6">
              Whether you're launching a new business or upgrading an
              existing website, we'd love to hear about your project.
            </Text>

            <div className="mt-10 space-y-6 text-slate-700">

              <div>
                <h3 className="font-semibold">Email</h3>
                <p>hello@radiancewebstudio.com</p>
              </div>

              <div>
                <h3 className="font-semibold">Location</h3>
                <p>Mumbai, India</p>
              </div>

              <div>
                <h3 className="font-semibold">Response Time</h3>
                <p>Usually within 24 hours.</p>
              </div>

            </div>
          </div>

          {/* Right */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                type="text"
                placeholder="Business Name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <Button className="w-full">
                Send Enquiry
              </Button>

            </form>

          </div>

        </div>
      </Container>
    </Section>
  );
}