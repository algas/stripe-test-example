import assert from 'assert';
import { describe, it } from 'mocha';
import Stripe from "stripe";

describe('stripe', () => {
  const client = new Stripe("sk_test_foobar", {
      apiVersion: "2020-08-27",
      host: "localhost",
      port: 8000,
      protocol: "http"
  });
  describe('#customers.create()', async () => {
    it('email', async () => {
      const customer = await client.customers.create({email: 'customer@example.com'});
      console.log(customer);
      assert.strictEqual(customer.email, 'customer@example.com');
    });
  });
});
