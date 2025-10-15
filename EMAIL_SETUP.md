# Email Setup Instructions

The contact form is configured to send emails to **bohdaq@gmail.com** using Formspree.

## How It Works

The form uses Formspree (https://formspree.io), a free service that handles form submissions and sends emails without requiring a backend server.

## Setup Steps

### Current Configuration

The form is configured with endpoint `mpwzgdnr` which will send emails to **bohdaq@gmail.com**.

**First time setup:**
1. Submit the form once from your website
2. Formspree will send a confirmation email to **bohdaq@gmail.com**
3. Click the confirmation link in that email
4. After confirmation, all future submissions will arrive automatically!

### Create Your Own Endpoint (Optional)

If you want to create a custom endpoint:

1. Go to https://formspree.io and sign up (free tier allows 50 submissions/month)
2. Create a new form
3. Copy your form endpoint ID (looks like: `xxxxxxxx`)
4. Update the endpoint in `src/App.jsx` line 32:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_ENDPOINT_ID', {
   ```
5. Update the `_to` field on line 45 if needed:
   ```javascript
   _to: 'your-email@gmail.com'
   ```

## Features

- ✅ Sends email to bohdaq@gmail.com
- ✅ Includes all form fields (name, email, event type, message)
- ✅ Reply-to set to sender's email for easy responses
- ✅ Subject line includes event type
- ✅ Success/error feedback to users
- ✅ Form resets after successful submission
- ✅ No backend server required

## Testing

1. Run the development server: `npm run dev`
2. Fill out the contact form
3. Click "Send Message"
4. Check bohdaq@gmail.com for the email

## Free Tier Limits

Formspree free tier includes:
- 50 submissions per month
- Unlimited forms
- Email notifications
- Spam filtering

For higher volume, consider upgrading to a paid plan or implementing a custom backend.

## Alternative Solutions

If you need more control or higher volume:

1. **EmailJS** - Similar service with 200 free emails/month
2. **Custom Backend** - Build with Node.js + Nodemailer
3. **Serverless Functions** - Use Netlify/Vercel functions with SendGrid/Mailgun
4. **mailto: Link** - Simple fallback (opens user's email client)

## Troubleshooting

- **Not receiving emails?** Check spam folder and verify Formspree account
- **CORS errors?** Formspree handles CORS automatically, ensure endpoint is correct
- **Rate limiting?** Free tier has 50 submissions/month limit
