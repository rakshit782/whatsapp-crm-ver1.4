# WhatsApp CRM System 📱💼

A comprehensive Customer Relationship Management system integrated with WhatsApp Business API for managing customer communications, sales pipelines, and contact relationships while maintaining privacy through advanced masking features.

![WhatsApp CRM Dashboard](https://img.shields.io/badge/WhatsApp-CRM-25D366?style=for-the-badge&logo=whatsapp)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black.svg?style=for-the-badge&logo=vercel)

## 🌟 Features

### 🔐 Privacy & Security
- **Phone Number Masking**: Protects customer privacy by showing `+961*********` instead of full numbers
- **Contact ID System**: Generates unique IDs like `CUT154225` for each contact
- **Granular Permissions**: Role-based access control for every feature
- **Secure API Management**: Encrypted storage of WhatsApp API credentials

### 📱 WhatsApp Integration
- **Official WhatsApp Business API Support**: Connect your verified WhatsApp Business account
- **Real-time Messaging**: Send/receive messages directly through the interface
- **Message Status Tracking**: Track delivery, read receipts, and failed messages
- **Media Support**: Handle images, documents, audio files
- **Webhook Processing**: Automatic handling of incoming messages

### 🎯 CRM Pipeline Management
- **Dynamic Kanban Boards**: Drag-and-drop ticket management
- **Automated Workflows**: Auto-convert won deals to customers
- **Smart Ticket Creation**: Automatically create tickets for new conversations
- **Custom Pipeline Stages**: Add/remove/rename pipeline columns
- **Duplicate Prevention**: Intelligent handling of repeat customers

### 📊 Contact Management
- **Three-Tier System**: Leads → Accounts → Customers
- **Bulk Operations**: CSV import/export for mass data handling
- **Auto-Detection**: Country and timezone detection from phone numbers
- **Industry Categorization**: Multi-select industry tagging
- **Shipping Integration**: Complete shipping company management

### ✅ Task Management
- **User Assignments**: Assign tasks to team members
- **Status Tracking**: Customizable task statuses
- **Notification System**: Red badges for new tasks/updates
- **File Attachments**: Support for task-related documents
- **Comment Threads**: Collaborative discussions on tasks

## 🚀 Quick Start

### Prerequisites
- WhatsApp Business API access
- GitHub account
- Vercel account (for deployment)

### 1. Clone & Setup
```bash
git clone https://github.com/yourusername/whatsapp-crm-system.git
cd whatsapp-crm-system
```

### 2. Local Development
Simply open `index.html` in your browser for frontend development. The application works fully client-side for UI testing.

### 3. Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard:
# - WHATSAPP_ACCESS_TOKEN
# - WEBHOOK_VERIFY_TOKEN  
# - PHONE_NUMBER_ID
```

### 4. Configure WhatsApp API
1. Open the deployed application
2. Navigate to Admin Panel → WhatsApp API
3. Enter your WhatsApp Business API credentials:
   - Business Phone Number ID
   - Access Token
   - Webhook Verify Token
   - App ID & Secret
4. Test connection and save

## 📁 Project Structure

```
whatsapp-crm-system/
├── index.html              # Main application interface
├── style.css               # Complete styling system
├── app.js                  # Frontend application logic
├── api/                    # Serverless functions (for Vercel)
│   ├── webhook.js          # WhatsApp webhook handler
│   ├── send-message.js     # Message sending endpoint
│   ├── contacts.js         # Contact management API
│   └── tasks.js            # Task management API
├── docs/                   # Documentation
│   ├── API.md              # API documentation
│   ├── DEPLOYMENT.md       # Deployment guide
│   └── PERMISSIONS.md      # User permissions guide
├── .gitignore              # Git ignore rules
├── vercel.json             # Vercel configuration
├── package.json            # Node.js dependencies
├── LICENSE                 # License information
└── README.md               # This file
```

## 🔧 Configuration

### Environment Variables
Create these in your Vercel dashboard:

| Variable | Description | Example |
|----------|-------------|---------|
| `WHATSAPP_ACCESS_TOKEN` | Your WhatsApp Business API token | `EAABsBCS...` |
| `WEBHOOK_VERIFY_TOKEN` | Webhook verification token | `your-secret-token` |
| `PHONE_NUMBER_ID` | WhatsApp Business Phone Number ID | `1234567890` |
| `APP_ID` | Facebook App ID | `123456789` |
| `APP_SECRET` | Facebook App Secret | `abc123...` |

### WhatsApp Business API Setup
1. Create a Facebook Business App
2. Add WhatsApp Business API product
3. Verify your business phone number
4. Generate access tokens
5. Configure webhook URL: `https://your-app.vercel.app/api/webhook`

## 👥 User Roles & Permissions

### Admin Roles
- **Viewer Admin**: Read-only access to all data
- **Editor Admin**: Full system access and configuration

### User Permissions (Granular Control)
- Contact list access (Leads/Accounts/Customers)
- CRM pipeline management
- Task creation and assignment
- Data deletion capabilities
- Admin panel access
- WhatsApp API configuration

## 🎨 Features Overview

### Dashboard
- Real-time statistics
- Recent activity feed
- Quick action buttons
- Performance metrics

### WhatsApp Inbox
- **Masked Contact Display**: Shows `CUT154225` instead of real names
- **Time Zone Display**: Auto-detected local time for each contact
- **Quick Replies**: Predefined message templates
- **Media Support**: Send images, documents, audio
- **Contact Actions**: Save, convert, assign to lists

### CRM Pipeline
- **Drag & Drop**: Move tickets between stages
- **Auto-Conversion**: Won deals → Customer list
- **Loss Tracking**: Capture loss reasons
- **Live Updates**: Real-time synchronization

### Contact Lists
- **Advanced Filtering**: Filter by any field
- **Bulk Operations**: CSV import/export
- **Conversion Flow**: Leads → Accounts → Customers
- **Shipping Details**: Complete logistics management

### Task Management
- **Assignment System**: Delegate to team members
- **Status Tracking**: Custom workflow states
- **Notifications**: Red badge alerts
- **Collaboration**: Comment threads

## 🔗 API Endpoints

### WhatsApp Integration
```javascript
POST /api/send-message
{
  "to": "961800048742",
  "message": "Hello from CRM!",
  "type": "text"
}
```

### Contact Management
```javascript
GET /api/contacts?type=leads
POST /api/contacts
PUT /api/contacts/:id
DELETE /api/contacts/:id
```

### CRM Pipeline
```javascript
GET /api/tickets
POST /api/tickets
PUT /api/tickets/:id/stage
```

## 📱 Mobile Responsive

The application is fully responsive and works seamlessly on:
- Desktop browsers
- Tablet devices
- Mobile phones
- Progressive Web App (PWA) ready

## 🛡️ Security Features

- **Data Encryption**: Sensitive information encrypted at rest
- **Access Control**: Role-based permissions system
- **Input Validation**: Comprehensive form validation
- **CSRF Protection**: Cross-site request forgery prevention
- **Rate Limiting**: API call throttling

## 🚀 Performance

- **Client-Side Architecture**: Fast, responsive interface
- **Optimized Assets**: Minified CSS/JS
- **CDN Delivery**: Global content distribution via Vercel
- **Lazy Loading**: On-demand resource loading
- **Caching Strategy**: Intelligent data caching

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Test all features before submitting
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the `/docs` folder
- **Issues**: [GitHub Issues](https://github.com/yourusername/whatsapp-crm-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/whatsapp-crm-system/discussions)

## 🏗️ Deployment Options

### Vercel (Recommended)
```bash
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
Enable GitHub Pages in repository settings and push to `gh-pages` branch.

## 🔄 Updates & Maintenance

- Regular dependency updates
- Security patches
- Feature enhancements
- Bug fixes
- Documentation improvements

## 🌟 Roadmap

- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Voice message support
- [ ] Integration with more CRM platforms
- [ ] Advanced automation workflows
- [ ] Mobile app development

## ⭐ Star History

If this project helps you, please consider giving it a star on GitHub!

---

**Built with ❤️ for modern businesses** | **WhatsApp CRM System v1.0**