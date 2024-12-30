import { NextResponse } from 'next/server';
import { Booking } from '@/types/booking';
// Example for Vercel KV
// import { kv } from '@vercel/kv';

export async function POST(request: Request) {
  try {
    const body: Booking = await request.json();
    const { name, date, time, eventDetails } = body;

    console.log('Processing Booking:', { name, date, time, eventDetails });

    // Save to a database (e.g., Vercel KV, MongoDB)
    // await kv.set(`booking:${Date.now()}`, body);

    return NextResponse.json({ message: 'Booking processed successfully' });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to process booking' },
      { status: 500 }
    );
  }
}
