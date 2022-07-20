# Payment Flow

ARterra Labs Platform uses [Stripe](https://stripe.com/) payment platform to handle payment processing and sellers KYC.

It is crucial for your users and creators to onboard on Stripe to have the possibility to sell their NFT.
Arterra Labs platform provides a binding to the Stripe that will lead your users through this process.

_FAN_, _CREATOR_ and _ADMIN_ users can buy any tokens for USD using Stripe binding.<br/>
But it is required to provide payment details on Stripe to sell any token,
because otherwise the seller will not be able to receive money from the sale.

_CREATOR_ users are not allowed to mint NFT Collectibles with royalty before they finish the onboarding procedure on Stripe.
Because even if the give away the token using gifting or airdrop feature, we need to have their payment details 
to send them royalty payouts for the following purchases.

In general, ARterra Labs Platform interactions with Stripe can be represented this way:

![High-level Payment flow](/img/docs/payment-flow/high-level.png)

ARterra Labs takes money for purchase and then distributes seller and creator royalty payouts
based on the payment price breakdown.
In the same time, Stripe collects its own fee directly from ARterra Labs for conducting operation. 

So, for initial sale from creator ARterra Labs takes 10% platform fee (Stripe fee included)
and 90% are transferred to the seller account.<br/>
For secondary sale ARterra Labs takes 5% platform fee (Stripe fee included), royalty (0-50%) goes to the NFT creator
and the rest is transferred to the seller account.

## Detailed payment flow

Digital Collectible purchase is handled in 3 steps:

1. User (Buyer) accepts seller's offer by clicking `Buy` button.<br/>
User is redirected to the Stripe Checkout page.
2. User (Buyer) fills payment details and Stripe captures user's money.
User is redirected to the ARterra Platform page.
3. User (Buyer) receives Digital Collectible after ARterra Platform transfers token from the seller blockchain account
to the buyer blockchain account and both seller and creator receive their payouts according to the payment price breakdown.

![Detailed Payment flow](/img/docs/payment-flow/payment-flow.png)
