# Changelog

Platform version consists of two parts divided with dash (`{server_version}-{client_version}`): <br/>
first part is API server version and the second one is web client application version.

###  v0.0.28-v0.0.25 (14.06.2022)
- **[UI/API]** 3D Models support
- **[UI/API]** Marketing Mailchimp Emails for Platform _ADMIN_ users
- **[API]** Fix NFT search by business partner
- **[API]** Add profile info to OAuth2 access token response
- **[UI]** Fix refresh access token requests. Enable usage in multiple browser tabs 
- **[UI/API]** Transactional email layout improvements (email verification, password reset, gift, purchase notifications)
- **[UI/API]** Other bug fixes

###  v0.0.27-v0.0.24 (03.06.2022)
- **[API]** Add possibility to hide Digital Collectible from Marketplace page via ENV config

###  v0.0.26-v0.0.24 (27.05.2022)
- **[UI/API]** Transactional emails improvements:
  - Redesign all emails
  - Add `Your Digital Collectible "{title}" was sold!` email for sellers when somebody purchases their NFT
  - Add `You received a Digital Collectible "{title}"!` email for recipients when somebody gifts them NFT
  - Send emails via Mailchimp Transactional service for better deliverability analytics
- **[UI]** Admin Business Partner page UI improvements 
- **[UI/API]** Other bug fixes

###  v0.0.25-v0.0.23 (17.05.2022)
- **[UI/API]** Allow selecting up to 500 recipients during Digital Collectible gifting
- **[UI]** Fix missing Business Partner assign popup for Users Admin Panel page
- **[UI/API]** Other bug fixes

###  v0.0.24-v0.0.22 (13.05.2022)
- **[UI]** Fix typo in ARterra Labs link preview when using platform link in social media posts or messengers

###  v0.0.24-v0.0.21 (13.05.2022)
- **[UI/API]** Allow selecting up to 100 recipients during Digital Collectible gifting
- **[UI]** Add button to receive Digital Collectible Owners CSV file with emails for creators
- **[UI]** Improve ARterra Labs link previews when using platform link in social media posts or messengers

###  v0.0.23-v0.0.20 (04.05.2022)
- **[UI]** Add autoplay for video Digital Collectibles

###  v0.0.23-v0.0.19 (03.05.2022)
- **[UI/API]** Improve client side performance
  - add frontend static file caching and compression
  - optimize file size of user avatars images and Digital Collectibles previews
- **[API]** Abort payment processing when price change occurs
- **[UI/API]** Other bug fixes

###  v0.0.22-v0.0.18 (30.04.2022)
- **[UI/API]** Connect Twitch and Discord social accounts on Profile page
- **[UI]** Navigation bar redesign:
  - add navigation Drawer for Mobile version
  - show username on Desktop version
  - move Logout button to Profile page
- **[UI/API]** Allow to sign-in not only with email but also using username or wallet
- **[API]** Add API endpoint to receive Digital Collectible Owners CSV file with emails for creators 

###  v0.0.21-v0.0.17 (22.04.2022)
- **[API]** fix payment flow crashes

###  v0.0.20-v0.0.17 (20.04.2022)
- **[UI/API]** Connect Twitter social account on Profile page
- **[API]** Sort Digital Collectible Owners by offer price: from lowest to highest.
Owners who don't sell their Collectibles are shown in the end.
- **[UI/API]** Other bug fixes
