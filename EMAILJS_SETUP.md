# EmailJS Setup Guide

This guide will help you set up EmailJS to receive emails from your Ayodhya Tours contact forms.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Connect your Gmail account
   - **Outlook**: Connect your Outlook account
   - Or use any other supported service
4. Click **Connect Account** and follow the authentication steps
5. Once connected, note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Configure your template:

### Template Settings:
- **Template Name**: "Ayodhya Tours Inquiry"

### Important: Configure the "To Email" field
In the template editor, find the **Settings** tab and set:
- **To Email**: `dprakhar007@gmail.com` (or use `{{to_email}}` if you want it dynamic)

### Template Variables Available:
The form sends these variables that you can use in your template:
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email (also use this for Reply-To)
- `{{from_phone}}` - Customer's phone number
- `{{message}}` - Customer's message
- `{{travel_dates}}` - Travel dates (optional, from contact page)
- `{{travelers}}` - Number of travelers (optional, from contact page)
- `{{to_email}}` - Your email (dprakhar007@gmail.com)

### Template Content (HTML):
```html
<h2>New Contact Form Submission</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{from_phone}}</p>

{{#travel_dates}}
<p><strong>Travel Dates:</strong> {{travel_dates}}</p>
{{/travel_dates}}

{{#travelers}}
<p><strong>Number of Travelers:</strong> {{travelers}}</p>
{{/travelers}}

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><small>This email was sent from the Ayodhya Tours contact form</small></p>
```

### Template Settings Tab:
- **Subject**: `New Inquiry from Ayodhya Tours - {{from_name}}`
- **From Name**: `Ayodhya Tours Contact Form`
- **Reply To**: `{{from_email}}` (so you can reply directly to the customer)
- **To Email**: `dprakhar007@gmail.com` (set this in Settings tab!)

4. Click **Save** and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (also called User ID)
3. Note it down (e.g., `your_public_key_here`)

## Step 5: Update Your Configuration

1. Open the file: `/src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "your_public_key_here",      // From Account > General
  SERVICE_ID: "service_abc123",             // From Email Services
  TEMPLATE_ID: "template_xyz789",           // From Email Templates
};
```

## Step 6: Test Your Setup

1. Go to your website
2. Fill out the contact form
3. Click "Send Inquiry"
4. Check your email at `dprakhar007@gmail.com`
5. You should receive the inquiry within a few seconds

## Troubleshooting

### Email not sending?
- Check browser console for errors
- Verify all three credentials are correct
- Make sure your email service is connected properly
- Check EmailJS dashboard for error logs

### Getting "Failed to send" error?
- Your Public Key might be incorrect
- Service ID or Template ID might be wrong
- Check that you have remaining emails in your free tier (300/month)

### Emails going to spam?
- Add your EmailJS sender email to your contacts
- Check your spam folder and mark as "Not Spam"
- Consider setting up SPF/DKIM records (advanced)

## Free Tier Limits

EmailJS free tier includes:
- ✅ 300 emails per month
- ✅ 2 email services
- ✅ 2 email templates
- ✅ Basic support

This should be more than enough for a tour booking website!

## Support

If you need help:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)