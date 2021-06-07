import assert from 'assert';
import { describe, it } from 'mocha';
import http from 'http';
const stripeStatefulMock = require('stripe-stateful-mock');
import Stripe from "stripe";

describe('Array', () => {
  const client = new Stripe("sk_test_foobar", {
      apiVersion: "2020-08-27",
      host: "localhost",
      port: 8000,
      protocol: "http"
  });
  describe('#indexOf()', async () => {
    it('should return -1 when the value is not present', () => {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
    it('stripe', async () => {
      const customer = await client.customers.create({email: 'customer@example.com'});
      assert.strictEqual(customer.email, 'customer@example.com');
    });
  });
});
