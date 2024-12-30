import { NextResponse } from 'next/server';
import { Booking } from '@/types/booking';

export async function POST(request: Request) {
  try {
    const body: Booking = await request.json();

    console.log('Processing Booking:', body);

    // Example: Save to a database
    // await saveToDatabase(body);

    return NextResponse.json({ message: 'Booking processed successfully' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
