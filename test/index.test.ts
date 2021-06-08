import Stripe from "stripe";
import { describe, expect, test } from '@jest/globals';

const client = new Stripe("sk_test_foobar", {
  apiVersion: "2020-08-27",
  host: "localhost",
  port: 8000,
  protocol: "http"
});

describe('stripe.customers.create()', () => {
  test('email', async() => {
    const customer = await client.customers.create({email: 'customer@example.com'});
    console.log(customer);
    expect(customer.email).toBe('customer@example.com');
  });
});
