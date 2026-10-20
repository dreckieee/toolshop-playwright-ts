# toolshop-playwright-ts

End-to-end tests for [Practice Software Testing ("Toolshop")](https://practicesoftwaretesting.com), written with Playwright and TypeScript.

**Status: work in progress.** I'm learning Playwright and TypeScript, and this repo is where I build the skills in public. It currently contains one test.

## What exists today

- Sign-in test: logs in with a registered user and checks the My account page (heading and the four account links).
- Shared `signIn` helper in `tests/helpers/auth.ts`.
- Config-driven base URL via `.env`, traces kept on failure, strict TypeScript config, Chromium only.

## Known limitation

The public Toolshop site deletes registered accounts within hours, so the sign-in test needs a freshly registered account before each run. Registering a fresh user per run (ideally through the site's API) is the planned fix.

## Planned

- Checkout with Cash on Delivery (UI)
- A check for a quantity-field bug I found by hand: a decimal quantity updates the line total but not the cart total
- Page objects and fixtures
- GitHub Actions CI
- A small API test suite against a locally hosted copy of the app

## Stack

Playwright Test, TypeScript, Node.js 24 LTS, dotenv.

## Run locally

```bash
npm install
npx playwright install chromium
```

Create a `.env` file in the project root (it is git-ignored):

```
BASE_URL=https://practicesoftwaretesting.com
TEST_EMAIL=<email of an account you registered on the site>
TEST_PASSWORD=<its password>
```

Then run:

```bash
npx playwright test
npx tsc --noEmit   # type check
```

## Project structure

```
tests/
  sign-in.spec.ts
  helpers/auth.ts
playwright.config.ts
tsconfig.json
```

## Related

[VapeShopInventoryAPI](https://github.com/dreckieee/VapeShopInventoryAPI): ASP.NET Core REST API with integration tests and CI.

## License

MIT