# Ayodhya Tours FastAPI Backend

A Python FastAPI backend for the Ayodhya Tours website, integrated with Supabase for database management.

## 🚀 Setup Instructions

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)
- Supabase account

### Installation Steps

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create a virtual environment:**
   ```bash
   # On Windows
   python -m venv venv
   venv\Scripts\activate

   # On macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Supabase credentials:
   - Get your Service Role Key from Supabase Dashboard → Settings → API
   - **Important:** Use the `service_role` key for backend, not the public `anon` key

5. **Set up Supabase Database:**
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Copy and paste the contents of `supabase_schema.sql`
   - Run the SQL to create tables and policies

### Running the Server

**Development mode:**
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Production mode:**
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
```

The API will be available at: `http://localhost:8000`

API Documentation (Swagger UI): `http://localhost:8000/docs`

## 📡 API Endpoints

### Public Endpoints

**1. Contact Form Submission**
```
POST /api/contact
Body: {
  "full_name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "message": "I want to book a tour"
}
```

**2. Create Booking**
```
POST /api/bookings
Body: {
  "customer_name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "package_name": "Ram Mandir Darshan",
  "number_of_people": 2,
  "preferred_date": "2024-04-15"
}
```

**3. Get Tour Packages**
```
GET /api/packages
```

### Admin Endpoints (Require Authentication)

**4. Get All Contact Inquiries**
```
GET /api/contact
```

**5. Get All Bookings**
```
GET /api/bookings
```

**6. Update Booking Status**
```
PATCH /api/bookings/{booking_id}?status=confirmed
```

## 🔐 Security Notes

1. **Service Role Key**: Never expose your service_role key in frontend code. Only use it on the backend.

2. **Row Level Security (RLS)**: The database is configured with RLS policies:
   - Public can INSERT inquiries and bookings
   - Only authenticated users can READ/UPDATE data
   - This protects customer data

3. **CORS**: Update the `allow_origins` in `main.py` to your actual frontend domain in production.

## 📧 Email Notifications (Optional)

To enable email notifications when customers submit forms:

1. **Using Gmail:**
   - Enable 2-factor authentication
   - Generate an App Password: Google Account → Security → App Passwords
   - Add to `.env`:
     ```
     SMTP_USER=dprakhar007@gmail.com
     SMTP_PASSWORD=your_app_password_here
     ```

2. **Or use a service like:**
   - **Resend** (recommended): https://resend.com
   - **SendGrid**: https://sendgrid.com
   - **Mailgun**: https://mailgun.com

## 🌐 Deployment Options

### Option 1: Railway
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Option 2: Render
1. Connect your GitHub repo
2. Create new Web Service
3. Build command: `pip install -r requirements.txt`
4. Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

### Option 3: DigitalOcean App Platform
1. Connect GitHub repo
2. Select Python app
3. Set environment variables
4. Deploy

### Option 4: AWS EC2 / Azure / GCP
- Set up a virtual machine
- Install Python and dependencies
- Use systemd or PM2 to keep the service running
- Configure Nginx as reverse proxy

## 🔄 Connecting Frontend to Backend

Update your React frontend to call the API:

```javascript
// Example: Submit contact form
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const response = await fetch('http://localhost:8000/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      full_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    }),
  });
  
  const data = await response.json();
  console.log(data);
};
```

## 📊 Database Schema

### contact_inquiries
- `id` (UUID): Primary key
- `full_name` (TEXT): Customer name
- `email` (TEXT): Email address
- `phone` (TEXT): Phone number
- `message` (TEXT): Inquiry message
- `created_at` (TIMESTAMP): Creation timestamp

### bookings
- `id` (UUID): Primary key
- `customer_name` (TEXT): Customer name
- `email` (TEXT): Email address
- `phone` (TEXT): Phone number
- `package_name` (TEXT): Selected package
- `number_of_people` (INTEGER): Group size
- `preferred_date` (TEXT): Preferred booking date
- `status` (TEXT): pending/confirmed/completed/cancelled
- `created_at` (TIMESTAMP): Creation timestamp

### tour_packages
- `id` (UUID): Primary key
- `name` (TEXT): Package name
- `description` (TEXT): Package description
- `price` (DECIMAL): Price in INR
- `duration` (TEXT): Tour duration
- `image_url` (TEXT): Package image
- `rating` (DECIMAL): Customer rating
- `highlights` (TEXT[]): Array of highlights
- `is_active` (BOOLEAN): Active status

## 🛠️ Troubleshooting

**Problem**: "Connection refused" error
**Solution**: Check if Supabase URL and key are correct in `.env`

**Problem**: CORS errors
**Solution**: Update `allow_origins` in main.py with your frontend URL

**Problem**: "Table does not exist"
**Solution**: Run the SQL schema in Supabase SQL Editor

## 📞 Support

For issues or questions, contact: dprakhar007@gmail.com

## 📄 License

MIT License - Feel free to use for your business!
