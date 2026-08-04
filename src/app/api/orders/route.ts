import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/orders
 *
 * This Vercel Serverless Function handles order submission.
 *
 * ARCHITECTURE CONNECTION POINTS:
 *
 * 1. Google Sheets:
 *    - Replace the mock below with Google Sheets API calls.
 *    - Use a service account or OAuth to append order rows.
 *    - Env vars: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID
 *
 * 2. 3PL Fulfillment:
 *    - After saving the order, call your 3PL API (ShipBob, ShipStation, etc.)
 *    - Env vars: THREE_PL_API_KEY, THREE_PL_API_URL
 *
 * 3. Payment:
 *    - Currently mocked. Integrate Stripe / BTCPay / other provider
 *    - Verify payment before creating the order.
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, shipping, total } = body;

    if (!items?.length || !shipping?.email || !shipping?.address) {
      return NextResponse.json(
        { error: 'Missing required order data' },
        { status: 400 }
      );
    }

    // Generate a mock order ID
    const orderId = `BB-${Date.now().toString(36).toUpperCase()}`;

    // -------------------------------------------------------
    // TODO: Google Sheets integration
    // Example (pseudo):
    // await appendToSheet({
    //   orderId,
    //   customer: `${shipping.firstName} ${shipping.lastName}`,
    //   email: shipping.email,
    //   items: JSON.stringify(items),
    //   total,
    //   address: `${shipping.address}, ${shipping.city}, ${shipping.state} ${shipping.zip}`,
    //   createdAt: new Date().toISOString(),
    // });
    // -------------------------------------------------------

    // -------------------------------------------------------
    // TODO: 3PL Fulfillment trigger
    // Example (pseudo):
    // await fetch(process.env.THREE_PL_API_URL!, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${process.env.THREE_PL_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ orderId, items, shipping }),
    // });
    // -------------------------------------------------------

    // Mock successful response
    console.log('[Order Mock]', { orderId, total, email: shipping.email });

    return NextResponse.json({
      success: true,
      orderId,
      message: 'Order received (mock mode)',
    });
  } catch (error) {
    console.error('Order error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
