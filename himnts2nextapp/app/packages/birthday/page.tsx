import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import birthdays from "@/data/birthday/birthdays.json";

// Fetch the birthday dynamically
const birthday = birthdays.find((p) => p.slug === "birthday");

// Generate metadata dynamically based on the found birthday
export function generateMetadata(): Metadata {
  return {
    title: birthday?.title || "Default Birthday Title", // Fallback to default title if no birthday found
    description: birthday?.description || "Celebrate life's most memorable moments with us.", // Fallback to default description
  };
}

export default function BirthdayPage() {
  if (!birthday) {
    return (
      <div>
        <h1>Birthday package not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{birthday?.title}</h1>

      {/* Display Image */}
      <Image
        src={birthday?.img || "/default-image.jpg"}
        alt={birthday?.title || "Birthday Celebration"}
        width={600}
        height={400}
        className="object-cover rounded-lg"
      />

      <p className="mt-4 text-lg">{birthday?.description}</p>

      {/* Content List */}
      <ul className="mt-4 list-disc pl-5">
        {birthday?.content.ctn.map((item: any) => (
          <li key={item.id} className="text-md">{item.heading3 || item.paraChildPara}</li>
        ))}
      </ul>

      {/* Link back to packages or home page */}
      <Link href="/" className="mt-6 inline-block text-blue-500">
        Back to Packages
      </Link>
    </div>
  );
}
