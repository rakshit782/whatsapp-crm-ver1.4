# WhatsApp CRM System 📱💼

A comprehensive Customer Relationship Management system integrated with WhatsApp Business API for managing customer communications, sales pipelines, and contact relationships while maintaining privacy through advanced masking features.

![WhatsApp CRM Dashboard](https://img.shields.io/badge/WhatsApp-CRM-25D366?style=for-the-badge&logo=whatsapp)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black.svg?style=for-the-badge&logo=vercel)

## 🚀 **Deploy Now - No Setup Required!**

This application **deploys immediately** to Vercel without any environment variables or WhatsApp credentials. It runs in **Demo Mode** until you're ready to add your WhatsApp API credentials.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/whatsapp-crm-system)

## ✨ **Demo Mode Features**

- **Immediate Deployment**: No credentials needed to get started
- **Full UI Testing**: All features work in demo mode
- **Mock Data**: Realistic sample contacts, tickets, and conversations
- **Live Upgrade**: Add credentials later to switch to production mode

## 🌟 **Complete Feature Set**

### 🔐 **Privacy & Security**
- **Phone Number Masking**: Shows `+961*********` instead of full numbers
- **Contact ID System**: Generates unique IDs like `CUT154225` for each contact
- **Name Masking**: Only displays ID codes throughout the system
- **Granular Permissions**: Role-based access control for every feature

### 📱 **WhatsApp Integration**
- **Official WhatsApp Business API Support**: Connect your verified account
- **Real-time Messaging**: Send/receive messages directly through interface
- **Message Status Tracking**: Delivery, read receipts, and failed messages
- **Media Support**: Handle images, documents, and audio files
- **Webhook Processing**: Automatic handling of incoming messages

### 🎯 **CRM Pipeline Management**
- **Dynamic Kanban Boards**: Drag-and-drop ticket management
- **Automated Workflows**: Auto-convert won deals to customers
- **Smart Ticket Creation**: Automatically create tickets for new conversations
- **Custom Pipeline Stages**: Add/remove/rename pipeline columns
- **Duplicate Prevention**: Intelligent handling of repeat customers

### 📊 **Contact Management**
- **Three-Tier System**: Leads → Accounts → Customers
- **Bulk Operations**: CSV import/export for mass data handling
- **Auto-Detection**: Country and timezone detection from phone numbers
- **Industry Categorization**: Multi-select industry tagging
- **Conversion Flow**: Seamless movement between contact types

### ✅ **Task Management**
- **User Assignments**: Assign tasks to team members
- **Status Tracking**: Customizable task statuses
- **Notification System**: Red badges for new tasks/updates
- **Comment Threads**: Collaborative discussions on tasks
- **File Attachments**: Support for task-related documents

### 💬 **Enhanced Chat Features**
- **Quick Replies**: Predefined message templates
- **Contact Actions**: Save, convert, assign to lists
- **Time Zone Display**: Auto-detected local time for each contact
- **List Type Display**: Shows if contact is Lead/Account/Customer
- **Ticket Management**: Change pipeline stages from chat interface

## 🚀 **Quick Start**

### 1. **Deploy Immediately (Demo Mode)**
```bash
# Option 1: One-click deploy
# Click the "Deploy with Vercel" button above

# Option 2: Manual clone and deploy
git clone https://github.com/yourusername/whatsapp-crm-system.git
cd whatsapp-crm-system
vercel --prod
```

Your app will be live in demo mode at: `https://your-app.vercel.app`

### 2. **Test All Features**
- Explore contacts, pipeline, tasks in demo mode
- Test the chat interface with sample data
- Try CSV import/export functionality
- Check admin panel and permissions

### 3. **Add WhatsApp Credentials (When Ready)**
Go to **Vercel Dashboard → Project → Settings → Environment Variables** and add:

| Variable | Description | Required |
|----------|-------------|----------|
| `WHATSAPP_ACCESS_TOKEN` | Your WhatsApp Business API token | ✅ |
| `PHONE_NUMBER_ID` | WhatsApp Business Phone Number ID | ✅ |
| `WEBHOOK_VERIFY_TOKEN` | Webhook verification token (any random string) | ✅ |
| `APP_ID` | Facebook App ID | ✅ |
| `APP_SECRET` | Facebook App Secret | ✅ |

### 4. **Configure Webhook**
After adding credentials and redeploying:
- Set webhook URL in Meta Developer Console: `https://your-app.vercel.app/api/webhook`
- Use the same `WEBHOOK_VERIFY_TOKEN` value
- Subscribe to: `messages`, `message_status`

## 📁 **Project Structure**

```
whatsapp-crm-system/
├── index.html              # Main application interface
├── style.css               # Complete styling system
├── app.js                  # Frontend application logic
├── api/                    # Serverless functions
│   ├── webhook.js          # WhatsApp webhook handler
│   ├── send-message.js     # Message sending endpoint
│   ├── contacts.js         # Contact management API
│   └── tasks.js            # Task management API
├── vercel.json             # Deployment configuration
├── package.json            # Dependencies and scripts
├── .gitignore              # Git ignore rules
├── .env.example            # Environment variables template
├── LICENSE                 # MIT License
└── README.md               # This file
```

## 🔧 **WhatsApp API Setup**

### Get Your Credentials
1. **Create Facebook Business App**
   - Go to [Facebook for Developers](https://developers.facebook.com/)
   - Create new app → Business type
   - Add WhatsApp product

2. **Get Access Token**
   - **Temporary**: App Dashboard → WhatsApp → API Setup
   - **Permanent**: Business Settings → System Users → Create token

3. **Get Phone Number ID**
   - App Dashboard → WhatsApp → API Setup
   - Copy the Phone Number ID from test number

4. **App ID & Secret**
   - App Dashboard → Settings → Basic
   - Copy App ID and reveal App Secret

5. **Webhook Verify Token**
   - Choose any random string (32+ characters)
   - Use same value in app and Meta webhook config

## 🎨 **Features Overview**

### **Dashboard**
- Real-time statistics and metrics
- Demo mode indicator
- Quick action buttons
- Activity feed

### **Contact Management**
- **Leads**: Initial prospects with conversion capabilities
- **Accounts**: Qualified leads with business details  
- **Customers**: Converted customers with complete profiles
- Advanced filtering and CSV operations

### **CRM Pipeline**
- Kanban-style drag & drop interface
- Automated won/lost handling
- Custom pipeline stages
- Real-time synchronization

### **Chat Interface**
- Masked contact display (CUT154225)
- Quick reply templates
- Media message support
- Local timezone display

### **Task Management**
- Assignment and status tracking
- Comment threads
- File attachments
- Notification badges

### **Admin Panel**
- WhatsApp API configuration
- User permission management
- Industry list management
- System settings

## 🛡️ **Security & Privacy**

- **Contact Privacy**: All phone numbers and names masked
- **Secure Storage**: API credentials encrypted
- **Permission Control**: Granular access management
- **Input Validation**: Comprehensive form validation
- **Error Handling**: Graceful failure management

## 📱 **Mobile Responsive**

Fully responsive design works on:
- Desktop computers
- Tablet devices  
- Mobile phones
- All modern browsers

## 🔄 **Demo to Production**

**Demo Mode** (default after deployment):
- All features functional with sample data
- No real WhatsApp API calls
- Safe for testing and development

**Production Mode** (after adding credentials):
- Real WhatsApp message sending/receiving
- Live webhook processing
- Actual contact management
- Full business functionality

## 🤝 **Contributing**

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 **Support**

- **Documentation**: Check this README and code comments
- **Issues**: [GitHub Issues](https://github.com/yourusername/whatsapp-crm-system/issues)
- **Demo**: Try the live demo mode after deployment

## 🌟 **Why This CRM?**

- ✅ **Deploy in 30 seconds** without any setup
- ✅ **Complete privacy protection** with phone/name masking
- ✅ **Professional CRM features** with automation
- ✅ **WhatsApp Business API** integration ready
- ✅ **Demo mode** for safe testing
- ✅ **Production ready** with enterprise features
- ✅ **Mobile responsive** design
- ✅ **MIT licensed** for commercial use

---

**Built for modern businesses** | **WhatsApp CRM System v1.0**

**Deploy now, configure later!** 🚀