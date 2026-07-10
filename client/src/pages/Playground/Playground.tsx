import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Stack,
} from "@/design-system";

export default function Playground() {
  return (
    <main className="min-h-screen bg-slate-100 py-16">
      <Container size="lg">

        <Stack spacing="lg">

          <div className="text-center">

            <h1 className="text-4xl font-bold text-slate-900">
              KhaoPio Design System
            </h1>

            <p className="mt-3 text-slate-500">
              Enterprise Component Playground
            </p>

          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            <Card variant="elevated" interactive>

              <CardHeader>
                <h2 className="text-lg font-semibold text-slate-800">
                  Today's Sales
                </h2>
              </CardHeader>

              <CardBody>
                <p className="text-5xl font-bold tracking-tight leading-none text-slate-900">
                  Rs. 24,500
                </p>

                <p className="mt-5 text-sm font-medium text-emerald-600">
                  ▲ +14% from yesterday
                </p>
              </CardBody>

              <CardFooter>
                Updated 2 minutes ago
              </CardFooter>

            </Card>

            <Card variant="outlined" interactive>

              <CardHeader>
                <h2 className="text-lg font-semibold text-slate-800">
                  Orders Today
                </h2>
              </CardHeader>

              <CardBody>
                <p className="text-5xl font-bold tracking-tight leading-none text-slate-900">
                  128
                </p>

                <p className="mt-5 text-sm font-medium text-blue-600">
                  ▲ +8 orders today
                </p>
              </CardBody>

              <CardFooter>
                Updated just now
              </CardFooter>

            </Card>

          </div>

        </Stack>

      </Container>
    </main>
  );
}