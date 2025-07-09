import Card from "../components/common/Card";
import Button from "../components/common/Button";

const sampleListings = [
  {
    title: "Cozy Apartment",
    description: "A beautiful apartment in the city center.",
    imageUrl: "/assets/images/Detail images(1).jpg",
  },
  {
    title: "Modern Studio",
    description: "A stylish studio near the park.",
    imageUrl: "/assets/images/Detail images(1).jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">ALX Listing App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {sampleListings.map((listing, idx) => (
          <Card key={idx} {...listing}>
            <Button label="View Details" onClick={() => alert(listing.title)} />
          </Card>
        ))}
      </div>
    </div>
  );
}
