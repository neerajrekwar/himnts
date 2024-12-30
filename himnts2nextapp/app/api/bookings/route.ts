import { Client } from '@upstash/qstash';
import { NextResponse } from 'next/server';
import { Booking } from '@/types/booking';

const qstash = new Client({
  token: process.env.QSTASH_TOKEN!,
});

export async function POST(request: Request) {
  try {
    const body: Booking = await request.json();

    const { name, date, time, eventDetails } = body;

    if (!name || !date || !time || !eventDetails) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const response = await qstash.publishJSON({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/processBooking`,
      body,
    });

    if (!response) {
      throw new Error('Failed to queue booking');
    }

    return NextResponse.json({ message: 'Booking queued successfully' });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to queue booking' },
      { status: 500 }
    );
  }
}
