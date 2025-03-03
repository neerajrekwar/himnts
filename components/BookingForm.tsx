'use client';

import { useState } from 'react';
import { Input, Button, Select, SelectItem, Spacer } from '@nextui-org/react';
import { Booking } from '@/types/booking';

export default function BookingForm() {
  const [form, setForm] = useState<Booking>({
    name: '',
    email: '',
    date: '',
    time: '',
    packageName: 'Birthday Package', // Default package
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(`Booking queued successfully! Reference ID: ${data.id}`);
        setForm({ name: '', email: '', date: '', time: '', packageName: 'Birthday Package' });
      } else {
        setMessage(data.error || 'Failed to queue booking');
      }
    } catch {
      setMessage('Error: Unable to submit booking.');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">Book Balloon Decoration</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <Spacer y={1} />
        <Input
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <Spacer y={1} />
        <Input
          label="Date"
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
        <Spacer y={1} />
        <Input
          label="Time"
          type="time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          required
        />
        <Spacer y={1} />
        <Select
          label="Package Name"
          value={form.packageName}
          onChange={(e) => setForm({ ...form, packageName: e.target.value })}
        >
          <SelectItem key="birthday" value="Birthday Package">
            Birthday Package
          </SelectItem>
          <SelectItem key="baby-shower" value="Baby Shower Package">
            Baby Shower Package
          </SelectItem>
          <SelectItem key="valentine" value="Valentine's Day Package">
            Valentine&apos;s Day Package
          </SelectItem>
          <SelectItem key="others" value="Custom Package">
            Custom Package
          </SelectItem>
        </Select>

        <Spacer y={1.5} />
        <Button type="submit" color="primary" fullWidth>
          Submit Booking
        </Button>
      </form>
      {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
    </div>
  );
}
