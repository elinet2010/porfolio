import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column } from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";
import { baseURL } from "@/app/resources";
import { home, about, person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Column fillWidth paddingY="l" gap="m" horizontal="center" align="center">
      <RevealFx translateY="4" horizontal="center" paddingBottom="m">
          <Column
            className={styles.avatar}
            minWidth="160"
            paddingX="l"
            paddingBottom="l"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
          </Column>
        </RevealFx>
        <Column maxWidth="s" horizontal="center" align="center" paddingX="l" flex={3} gap="m">
          <RevealFx translateY="4" horizontal="center" paddingBottom="m">
            <Heading variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="m">
            <Text onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="center">
            <Flex gap="16">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
              </Button>
              <Button
              id="document"
              data-border="rounded"
              href="/documents/mi-cv.pdf"
              target="_blank"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                Descargar CV
              </Flex>
              </Button>
            </Flex>
            
            
          </RevealFx>
        </Column>
      </Column>
      </Column>
  );
}
