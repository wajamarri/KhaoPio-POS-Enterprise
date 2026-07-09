import Button from "../../components/ui/Button";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-bold">
        KhaoPio POS Enterprise
      </h1>

      <div className="flex gap-4">

        <Button>
          New Order
        </Button>

        <Button variant="secondary">
          Reports
        </Button>

        <Button variant="danger">
          Delete
        </Button>

      </div>

    </div>
  );
}