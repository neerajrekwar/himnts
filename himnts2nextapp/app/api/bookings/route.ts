import { Client } from '@upstash/qstash';
import { NextResponse } from 'next/server';
import { Booking } from '@/types/booking';

const qstash = new Client({
  token: process.env.QSTASH_TOKEN!,
});

export async function POST(request: Request) {
  try {
    const body: Booking = await request.json();

    const { name, email, date, time, packageName } = body;

    if (!name || !email || !date || !time || !packageName) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const response = await qstash.publishJSON({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/processBooking`,
      body,
    });

    return NextResponse.json({ message: 'Booking queued successfully', id: response.messageId });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
