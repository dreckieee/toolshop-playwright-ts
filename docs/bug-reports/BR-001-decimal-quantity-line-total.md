Title: Cart line total shows $49.69 for quantity 10.1 while cart total stays $9.84

Environment: practicesoftwaretesting.com on Google Chrome 156.0.8078.48 (re-verified October 23, 2026), Windows 10 version 22H2. Originally observed October 14, 2026 (Chrome version not recorded).

Preconditions:
1. A registered test user exists and is logged in.
2. Cart is empty before step 5.

Steps:
1. From home page, type in Search field "screwdriver"
2. Click Search button
3. Click "Phillips Screwdriver" from search results
4. Click plus button once on product quantity. Quantity then shows 2.
5. Click Add to cart button
6. Click Cart button at upper right
7. Clear the quantity in Quantity field then type 10.1.

Expected:
1. After typing 10.1, the Quantity field must hold a whole number, because the site's own message says "Quantity field must be an integer".
2. The Line total must equal the Quantity field value x unit price $4.92, because that is how a line total is calculated.
3. The Cart total must equal the Line total, because the cart holds one item.

Suggested behavior: reject the invalid value, or reset it to a valid whole-number quantity, as the site already does for 0, 0.5 and negative values (resets to 1).

Actual:
1. A red box showed briefly with text "Quantity field must be an integer".
2. Quantity field kept 10.1 as its value. (Breaks Expected 1.)
3. The Line total updated to $49.69 immediately, with no further action. (Consistent with Expected 2 for a quantity of 10.1, but the quantity itself is invalid.)
4. Cart total stayed $9.84. (Breaks Expected 3: it does not equal the Line total.)

Severity: Low. The on-screen line total is based on an invalid quantity and disagrees with the cart total, but the invoice amount was unaffected (observed once, see Additional observation).

Also tested October 23, 2026 (typed into the Quantity field in the cart, starting from quantity 2):
1. 0: the quantity defaults to 1.
2. 0.5: the quantity defaults to 1.
3. A negative number: the quantity defaults to 1.
4. 2.5: behaves the same as 10.1 (the decimal is kept).
5. Letters: cannot be typed into the field.
Exact line and cart totals for these values were not recorded.

Not tested / not confirmed:
1. Other products (only Phillips Screwdriver was tested).
2. Whether an invalid entry changes the stored quantity. Only the 10.1 case was followed through checkout.
3. Steps 1-7 were repeated on October 23, 2026 with the same behavior as in Actual.

Additional observation:
On October 14, 2026, after continuing through checkout with Cash on Delivery, the invoice showed quantity 2 and total $9.84.