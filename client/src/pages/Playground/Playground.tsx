import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Stack,
  Grid,
  GridItem,
  Section,
  Divider,
} from "@/design-system";

export default function Playground() {
  return (
    <main className="min-h-screen bg-slate-100 py-16">
      <Container>

        <Section spacing="lg">

          <Stack spacing="lg">

            <div className="text-center">
              <h1 className="text-4xl font-bold text-slate-900">
                KhaoPio Design System
              </h1>

              <p className="mt-2 text-slate-500">
                Enterprise Layout Components
              </p>
            </div>

            <Divider />

            <Grid cols={2} gap="lg">

              <GridItem>
                <Card variant="elevated" interactive>
                  <CardHeader>
                    Today's Sales
                  </CardHeader>

                  <CardBody>
                    <p className="text-5xl font-bold">
                      Rs. 24,500
                    </p>

                    <p className="mt-4 text-emerald-600 font-medium">
                      ▲ +14%
                    </p>
                  </CardBody>

                  <CardFooter>
                    Updated 2 minutes ago
                  </CardFooter>
                </Card>
              </GridItem>

              <GridItem>
                <Card variant="outlined" interactive>
                  <CardHeader>
                    Orders Today
                  </CardHeader>

                  <CardBody>
                    <p className="text-5xl font-bold">
                      128
                    </p>

                    <p className="mt-4 text-sky-600 font-medium">
                      18 Pending
                    </p>
                  </CardBody>

                  <CardFooter>
                    Live Queue
                  </CardFooter>
                </Card>
              </GridItem>

            </Grid>

          </Stack>

        </Section>

      </Container>
    </main>
  );
}