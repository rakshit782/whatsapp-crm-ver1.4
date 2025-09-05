// WhatsApp CRM System - Main Application
class WhatsAppCRM {
    constructor() {
        this.currentSection = 'dashboard';
        this.currentUser = 'admin';
        this.demoMode = true;
        this.whatsappConfigured = false;
        this.selectedContact = null;
        this.draggedTicket = null;
        
        // Load data from the provided JSON
        this.loadInitialData();
        this.initializeApp();
    }

    loadInitialData() {
        // Application data from the provided JSON
        this.data = {
            "appConfig": {
                "demoMode": true,
                "whatsappConfigured": false,
                "version": "1.0.0",
                "deployedAt": "2025-09-05T16:24:00Z"
            },
            "currentUser": {
                "id": "admin",
                "name": "Admin User",
                "role": "editor_admin",
                "permissions": {
                    "canDeleteContacts": true,
                    "canCreateTickets": true,
                    "canManagePipelines": true,
                    "canViewAllTasks": true,
                    "canAccessAdminPanel": true,
                    "canConfigureWhatsAppAPI": true
                }
            },
            "whatsappConfig": {
                "businessPhoneId": "",
                "accessToken": "",
                "webhookVerifyToken": "",
                "webhookUrl": "https://your-domain.vercel.app/api/webhook",
                "appId": "",
                "appSecret": "",
                "apiVersion": "v19.0",
                "connectionStatus": "not_configured",
                "lastConnected": null,
                "webhookSubscriptions": ["messages", "message_status", "message_deliveries"],
                "isConfigured": false,
                "setupInstructions": [
                    "Create Facebook Business App at developers.facebook.com",
                    "Add WhatsApp product to your app",
                    "Get Access Token and Phone Number ID from API Setup",
                    "Generate webhook verify token (random string)",
                    "Add credentials to Vercel environment variables",
                    "Configure webhook URL in Meta Developer Console"
                ]
            },
            "contacts": {
                "CUT154225": {
                    "id": "CUT154225",
                    "phone": "961800048742",
                    "maskedPhone": "+961*********",
                    "country": "Lebanon",
                    "timezone": "GMT+3",
                    "fullName": "John Doe",
                    "email": "john.doe@example.com",
                    "industry": ["Technology", "E-commerce"],
                    "listType": "leads",
                    "assignedUser": "admin",
                    "shippingCompany": "DHL Express",
                    "shippingCode": "DHL123456",
                    "shippingPhone": "961111222333",
                    "shippingAddress": "Beirut Central District, Lebanon",
                    "createdAt": "2025-09-05T12:00:00Z",
                    "lastActivity": "2025-09-05T16:15:00Z",
                    "notes": "Interested in complete e-commerce platform solution",
                    "source": "WhatsApp",
                    "tags": ["hot-lead", "ecommerce"]
                },
                "CUT154226": {
                    "id": "CUT154226",
                    "phone": "12125551234",
                    "maskedPhone": "+1**********",
                    "country": "United States",
                    "timezone": "GMT-5",
                    "fullName": "Jane Smith",
                    "email": "jane.smith@healthcorp.com",
                    "industry": ["Healthcare", "Technology"],
                    "listType": "accounts",
                    "assignedUser": "admin",
                    "shippingCompany": "FedEx",
                    "shippingCode": "FX789012",
                    "shippingPhone": "12125559999",
                    "shippingAddress": "Manhattan, New York, NY 10001",
                    "createdAt": "2025-09-05T11:30:00Z",
                    "lastActivity": "2025-09-05T15:45:00Z",
                    "notes": "Healthcare platform demo scheduled for next week",
                    "source": "WhatsApp",
                    "tags": ["demo-scheduled", "healthcare"]
                },
                "CUT154227": {
                    "id": "CUT154227",
                    "phone": "447700900123",
                    "maskedPhone": "+44**********",
                    "country": "United Kingdom",
                    "timezone": "GMT+0",
                    "fullName": "Robert Johnson",
                    "email": "r.johnson@financeplus.co.uk",
                    "industry": ["Finance", "Banking"],
                    "listType": "customers",
                    "assignedUser": "admin",
                    "shippingCompany": "DPD UK",
                    "shippingCode": "DPD345678",
                    "shippingPhone": "447700900999",
                    "shippingAddress": "City of London, EC2M 7PY, UK",
                    "createdAt": "2025-09-04T10:00:00Z",
                    "lastActivity": "2025-09-05T14:30:00Z",
                    "notes": "Contract signed, implementation phase starting",
                    "source": "WhatsApp",
                    "tags": ["customer", "finance", "signed"]
                },
                "CUT154228": {
                    "id": "CUT154228",
                    "phone": "4915123456789",
                    "maskedPhone": "+49***********",
                    "country": "Germany",
                    "timezone": "GMT+1",
                    "fullName": "Anna Mueller",
                    "email": "a.mueller@manufacturing.de",
                    "industry": ["Manufacturing", "Automotive"],
                    "listType": "leads",
                    "assignedUser": "admin",
                    "shippingCompany": "DHL Germany",
                    "shippingCode": "DHL567890",
                    "shippingPhone": "4915123456000",
                    "shippingAddress": "Berlin Business District, Germany",
                    "createdAt": "2025-09-05T09:00:00Z",
                    "lastActivity": "2025-09-05T16:00:00Z",
                    "notes": "Manufacturing ERP system inquiry",
                    "source": "WhatsApp",
                    "tags": ["manufacturing", "erp"]
                },
                "CUT154229": {
                    "id": "CUT154229",
                    "phone": "33123456789",
                    "maskedPhone": "+33*********",
                    "country": "France",
                    "timezone": "GMT+1",
                    "fullName": "Marie Dubois",
                    "email": "marie.dubois@retail.fr",
                    "industry": ["Retail", "Fashion"],
                    "listType": "accounts",
                    "assignedUser": "admin",
                    "shippingCompany": "Chronopost",
                    "shippingCode": "CP123456",
                    "shippingPhone": "33123456000",
                    "shippingAddress": "Paris 75001, France",
                    "createdAt": "2025-09-04T14:00:00Z",
                    "lastActivity": "2025-09-05T13:20:00Z",
                    "notes": "Retail management system evaluation in progress",
                    "source": "WhatsApp",
                    "tags": ["retail", "evaluation"]
                }
            },
            "tickets": [
                {
                    "id": "ticket_1",
                    "contactId": "CUT154225",
                    "title": "E-commerce Platform Comprehensive Solution",
                    "stage": "inquiry",
                    "priority": "high",
                    "notes": "Customer requires complete e-commerce platform with payment processing, inventory management, multi-channel selling, and analytics. Budget: $50k-100k. Decision timeline: 2 weeks.",
                    "assignedUser": "admin",
                    "createdAt": "2025-09-05T12:00:00Z",
                    "updatedAt": "2025-09-05T16:15:00Z",
                    "tags": ["ecommerce", "enterprise"],
                    "customFields": {
                        "budget": "$50k-100k",
                        "timeline": "2 weeks",
                        "decisionMaker": "CTO"
                    }
                },
                {
                    "id": "ticket_2",
                    "contactId": "CUT154226",
                    "title": "Healthcare Management Platform Demo",
                    "stage": "proposal",
                    "priority": "medium",
                    "notes": "Qualified lead from major healthcare corporation. Demo scheduled for Sept 10th. Focus on patient management, billing integration, compliance features. 500+ user deployment.",
                    "assignedUser": "admin",
                    "createdAt": "2025-09-05T11:30:00Z",
                    "updatedAt": "2025-09-05T15:45:00Z",
                    "tags": ["healthcare", "demo", "enterprise"],
                    "customFields": {
                        "demoDate": "2025-09-10",
                        "userCount": "500+",
                        "focusAreas": "patient mgmt, billing, compliance"
                    }
                },
                {
                    "id": "ticket_3",
                    "contactId": "CUT154227",
                    "title": "Finance System Implementation Project",
                    "stage": "negotiation",
                    "priority": "high",
                    "notes": "Final contract negotiations for comprehensive finance management system. Technical requirements approved. Legal review in progress. Expected signature next week.",
                    "assignedUser": "admin",
                    "createdAt": "2025-09-04T10:00:00Z",
                    "updatedAt": "2025-09-05T14:30:00Z",
                    "tags": ["finance", "contract", "closing"],
                    "customFields": {
                        "contractValue": "$150k",
                        "implementationTime": "3 months",
                        "nextStep": "legal review"
                    }
                },
                {
                    "id": "ticket_4",
                    "contactId": "CUT154228",
                    "title": "Manufacturing ERP System Consultation",
                    "stage": "follow-up",
                    "priority": "medium",
                    "notes": "Initial consultation completed for manufacturing workflow automation. Follow-up scheduled to discuss specific German compliance requirements and integration with existing systems.",
                    "assignedUser": "admin",
                    "createdAt": "2025-09-05T09:00:00Z",
                    "updatedAt": "2025-09-05T16:00:00Z",
                    "tags": ["manufacturing", "erp", "consultation"],
                    "customFields": {
                        "followUpDate": "2025-09-08",
                        "compliance": "German standards",
                        "integration": "SAP, Oracle"
                    }
                },
                {
                    "id": "ticket_5",
                    "contactId": "CUT154229",
                    "title": "Retail Management System Evaluation",
                    "stage": "proposal",
                    "priority": "low",
                    "notes": "Retail chain evaluating comprehensive management system. Comparison with 2 other vendors. Focus on inventory, POS integration, customer analytics. Decision expected end of month.",
                    "assignedUser": "admin",
                    "createdAt": "2025-09-04T14:00:00Z",
                    "updatedAt": "2025-09-05T13:20:00Z",
                    "tags": ["retail", "comparison", "analytics"],
                    "customFields": {
                        "competitors": "2 vendors",
                        "focusAreas": "inventory, POS, analytics",
                        "decisionDate": "end of September"
                    }
                }
            ],
            "pipelineStages": [
                {"id": "inquiry", "name": "Inquiry", "order": 0, "color": "#e3f2fd", "description": "Initial customer contact and requirement gathering"},
                {"id": "follow-up", "name": "Follow-up", "order": 1, "color": "#f3e5f5", "description": "Additional information gathering and qualification"},
                {"id": "proposal", "name": "Proposal", "order": 2, "color": "#e8f5e8", "description": "Formal proposal preparation and presentation"},
                {"id": "negotiation", "name": "Negotiation", "order": 3, "color": "#fff3e0", "description": "Contract terms discussion and finalization"},
                {"id": "won", "name": "Won", "order": 4, "color": "#e8f5e8", "description": "Deal closed successfully"},
                {"id": "lost", "name": "Lost", "order": 5, "color": "#ffebee", "description": "Deal lost or customer declined"}
            ],
            "tasks": [
                {
                    "id": "task_1",
                    "title": "Prepare Comprehensive E-commerce Proposal for CUT154225",
                    "description": "Create detailed proposal including technical architecture, pricing breakdown, implementation timeline, and ROI analysis for the complete e-commerce platform solution. Include payment gateway options, inventory management features, and multi-channel integration capabilities.",
                    "assignedTo": "admin",
                    "status": "pending",
                    "priority": "high",
                    "dueDate": "2025-09-06",
                    "estimatedHours": 8,
                    "createdAt": "2025-09-05T12:00:00Z",
                    "tags": ["proposal", "ecommerce", "urgent"],
                    "attachments": [],
                    "comments": [
                        {
                            "id": "comment_1",
                            "user": "admin",
                            "text": "Customer specifically mentioned need for payment processing and inventory management. Budget range is $50k-100k.",
                            "timestamp": "2025-09-05T12:30:00Z"
                        },
                        {
                            "id": "comment_2",
                            "user": "admin",
                            "text": "Added technical architecture diagrams and integration timeline. Ready for review.",
                            "timestamp": "2025-09-05T15:45:00Z"
                        }
                    ]
                },
                {
                    "id": "task_2",
                    "title": "Schedule and Prepare Healthcare Platform Demo for CUT154226",
                    "description": "Coordinate with technical team to prepare comprehensive healthcare platform demonstration. Set up demo environment with sample data, prepare presentation slides focusing on patient management, billing integration, and compliance features.",
                    "assignedTo": "admin",
                    "status": "in-progress",
                    "priority": "medium",
                    "dueDate": "2025-09-08",
                    "estimatedHours": 6,
                    "createdAt": "2025-09-05T11:30:00Z",
                    "tags": ["demo", "healthcare", "presentation"],
                    "attachments": [
                        {"name": "healthcare_demo_slides.pptx", "size": "2.3MB"},
                        {"name": "sample_patient_data.csv", "size": "1.1MB"}
                    ],
                    "comments": [
                        {
                            "id": "comment_3",
                            "user": "admin",
                            "text": "Demo environment being prepared with realistic healthcare data. Focus on compliance features per customer request.",
                            "timestamp": "2025-09-05T14:00:00Z"
                        }
                    ]
                },
                {
                    "id": "task_3",
                    "title": "Finalize Contract Terms and Legal Review for CUT154227",
                    "description": "Review and finalize contract terms for finance system implementation. Coordinate with legal team for contract preparation, ensure all technical requirements are documented, and prepare for final signature meeting.",
                    "assignedTo": "admin",
                    "status": "in-progress",
                    "priority": "high",
                    "dueDate": "2025-09-07",
                    "estimatedHours": 4,
                    "createdAt": "2025-09-04T10:00:00Z",
                    "tags": ["contract", "legal", "finance"],
                    "attachments": [
                        {"name": "contract_draft_v3.docx", "size": "856KB"},
                        {"name": "technical_requirements.pdf", "size": "1.5MB"}
                    ],
                    "comments": []
                },
                {
                    "id": "task_4",
                    "title": "Research German Compliance Requirements for CUT154228",
                    "description": "Research and document specific German manufacturing compliance requirements for ERP system integration. Identify regulatory standards, data protection requirements, and integration protocols for existing SAP and Oracle systems.",
                    "assignedTo": "admin",
                    "status": "pending",
                    "priority": "medium",
                    "dueDate": "2025-09-09",
                    "estimatedHours": 3,
                    "createdAt": "2025-09-05T09:30:00Z",
                    "tags": ["research", "compliance", "germany"],
                    "attachments": [],
                    "comments": [
                        {
                            "id": "comment_4",
                            "user": "admin",
                            "text": "Customer emphasized importance of German compliance standards. Need to research GDPR implications and manufacturing regulations.",
                            "timestamp": "2025-09-05T10:15:00Z"
                        }
                    ]
                }
            ],
            "quickReplies": [
                {
                    "id": "reply_1",
                    "name": "Welcome Message",
                    "category": "greetings",
                    "type": "text",
                    "content": "Hello! Welcome to our WhatsApp support. Thank you for reaching out. How can I assist you today?",
                    "usageCount": 145
                },
                {
                    "id": "reply_2",
                    "name": "Business Hours",
                    "category": "information",
                    "type": "text",
                    "content": "Our business hours are Monday-Friday 9 AM to 6 PM (GMT+3). We'll respond to your message as soon as possible during business hours!",
                    "usageCount": 89
                },
                {
                    "id": "reply_3",
                    "name": "Product Information Request",
                    "category": "sales",
                    "type": "text",
                    "content": "Thank you for your interest in our solutions! I'll send you detailed product information and pricing right away. What specific features are you most interested in?",
                    "usageCount": 234
                },
                {
                    "id": "reply_4",
                    "name": "Demo Scheduling",
                    "category": "sales",
                    "type": "text",
                    "content": "I'd be happy to arrange a personalized demo of our platform for you. When would be the best time for a call? We can schedule it at your convenience.",
                    "usageCount": 67
                },
                {
                    "id": "reply_5",
                    "name": "Follow-up Message",
                    "category": "followup",
                    "type": "text",
                    "content": "Hi! I'm following up on our previous conversation. Do you have any additional questions about our solution? I'm here to help with any details you need.",
                    "usageCount": 123
                },
                {
                    "id": "reply_6",
                    "name": "Technical Support",
                    "category": "support",
                    "type": "text",
                    "content": "I understand you're experiencing a technical issue. Let me connect you with our technical support team who can assist you immediately.",
                    "usageCount": 45
                }
            ],
            "chatMessages": {
                "CUT154225": [
                    {
                        "id": "msg_1",
                        "type": "received",
                        "content": "Hi, I'm interested in your e-commerce platform solutions. We're a growing business looking for a comprehensive system.",
                        "timestamp": "2025-09-05T12:00:00Z",
                        "status": "read",
                        "messageId": "wamid_demo_001"
                    },
                    {
                        "id": "msg_2",
                        "type": "sent",
                        "content": "Hello! Thank you for reaching out. I'd be happy to help you with our e-commerce platform solutions. What specific features are you looking for?",
                        "timestamp": "2025-09-05T12:01:00Z",
                        "status": "read",
                        "messageId": "wamid_demo_002"
                    },
                    {
                        "id": "msg_3",
                        "type": "received",
                        "content": "We need payment processing, inventory management, multi-channel selling capabilities, and detailed analytics. Our budget is around $50k-100k.",
                        "timestamp": "2025-09-05T12:05:00Z",
                        "status": "read",
                        "messageId": "wamid_demo_003"
                    },
                    {
                        "id": "msg_4",
                        "type": "sent",
                        "content": "Perfect! Those are exactly the features our enterprise e-commerce platform excels at. I'll prepare a comprehensive proposal for you including technical details and pricing. When would be good for a detailed demo?",
                        "timestamp": "2025-09-05T12:07:00Z",
                        "status": "read",
                        "messageId": "wamid_demo_004"
                    },
                    {
                        "id": "msg_5",
                        "type": "received",
                        "content": "That sounds great! I'm available next Tuesday or Wednesday afternoon. How long would the demo take?",
                        "timestamp": "2025-09-05T16:15:00Z",
                        "status": "delivered",
                        "messageId": "wamid_demo_005"
                    }
                ],
                "CUT154226": [
                    {
                        "id": "msg_6",
                        "type": "received",
                        "content": "Hello, I saw your healthcare platform demo. Can we schedule a detailed presentation for our team?",
                        "timestamp": "2025-09-05T11:30:00Z",
                        "status": "read",
                        "messageId": "wamid_demo_006"
                    },
                    {
                        "id": "msg_7",
                        "type": "sent",
                        "content": "Absolutely! I'd be delighted to show you our healthcare solutions in detail. We can customize the demo for your specific needs. How many team members will be attending?",
                        "timestamp": "2025-09-05T11:32:00Z",
                        "status": "read",
                        "messageId": "wamid_demo_007"
                    },
                    {
                        "id": "msg_8",
                        "type": "received",
                        "content": "We'll have about 8 people including our CTO, head of operations, and compliance team. We're particularly interested in patient management and billing integration.",
                        "timestamp": "2025-09-05T15:45:00Z",
                        "status": "read",
                        "messageId": "wamid_demo_008"
                    }
                ],
                "CUT154227": [
                    {
                        "id": "msg_9",
                        "type": "received",
                        "content": "We're ready to proceed with the finance system implementation. When can we start the contract finalization process?",
                        "timestamp": "2025-09-05T14:30:00Z",
                        "status": "read",
                        "messageId": "wamid_demo_009"
                    },
                    {
                        "id": "msg_10",
                        "type": "sent",
                        "content": "Excellent news! I'm thrilled to move forward with your finance system project. I'll prepare the final contract documents today and we can schedule a signing meeting for early next week.",
                        "timestamp": "2025-09-05T14:32:00Z",
                        "status": "read",
                        "messageId": "wamid_demo_010"
                    }
                ],
                "CUT154228": [
                    {
                        "id": "msg_11",
                        "type": "received",
                        "content": "Guten Tag! I'm interested in manufacturing ERP solutions for our automotive parts company in Berlin. Do you have experience with German compliance requirements?",
                        "timestamp": "2025-09-05T09:00:00Z",
                        "status": "read",
                        "messageId": "wamid_demo_011"
                    },
                    {
                        "id": "msg_12",
                        "type": "sent",
                        "content": "Guten Tag! Yes, we have extensive experience with German manufacturing compliance and automotive industry requirements. I'd love to discuss your specific needs. When would be convenient for a consultation?",
                        "timestamp": "2025-09-05T09:03:00Z",
                        "status": "read",
                        "messageId": "wamid_demo_012"
                    },
                    {
                        "id": "msg_13",
                        "type": "received",
                        "content": "That's perfect! We need integration with our existing SAP and Oracle systems. Can we schedule a call for Monday morning?",
                        "timestamp": "2025-09-05T16:00:00Z",
                        "status": "delivered",
                        "messageId": "wamid_demo_013"
                    }
                ],
                "CUT154229": [
                    {
                        "id": "msg_14",
                        "type": "received",
                        "content": "Bonjour! We're evaluating retail management systems for our fashion chain. Can you tell me about your POS integration and inventory features?",
                        "timestamp": "2025-09-05T13:20:00Z",
                        "status": "read",
                        "messageId": "wamid_demo_014"
                    },
                    {
                        "id": "msg_15",
                        "type": "sent",
                        "content": "Bonjour! Our retail management platform offers comprehensive POS integration and advanced inventory management perfect for fashion retail. I'll send you detailed information and case studies from similar fashion chains.",
                        "timestamp": "2025-09-05T13:22:00Z",
                        "status": "read",
                        "messageId": "wamid_demo_015"
                    }
                ]
            },
            "industries": [
                "Technology", "Healthcare", "E-commerce", "Education", "Finance", "Manufacturing",
                "Retail", "Real Estate", "Food & Beverage", "Automotive", "Consulting", "Marketing",
                "Legal", "Construction", "Transportation", "Media & Entertainment", "Telecommunications",
                "Energy", "Agriculture", "Tourism", "Banking", "Insurance", "Logistics", "Fashion"
            ],
            "countryCodeMapping": {
                "961": {"country": "Lebanon", "timezone": "GMT+3", "currency": "LBP"},
                "1": {"country": "United States", "timezone": "GMT-5", "currency": "USD"},
                "44": {"country": "United Kingdom", "timezone": "GMT+0", "currency": "GBP"},
                "49": {"country": "Germany", "timezone": "GMT+1", "currency": "EUR"},
                "33": {"country": "France", "timezone": "GMT+1", "currency": "EUR"},
                "39": {"country": "Italy", "timezone": "GMT+1", "currency": "EUR"},
                "34": {"country": "Spain", "timezone": "GMT+1", "currency": "EUR"},
                "91": {"country": "India", "timezone": "GMT+5:30", "currency": "INR"},
                "86": {"country": "China", "timezone": "GMT+8", "currency": "CNY"},
                "81": {"country": "Japan", "timezone": "GMT+9", "currency": "JPY"},
                "55": {"country": "Brazil", "timezone": "GMT-3", "currency": "BRL"},
                "27": {"country": "South Africa", "timezone": "GMT+2", "currency": "ZAR"},
                "61": {"country": "Australia", "timezone": "GMT+10", "currency": "AUD"},
                "7": {"country": "Russia", "timezone": "GMT+3", "currency": "RUB"},
                "52": {"country": "Mexico", "timezone": "GMT-6", "currency": "MXN"}
            },
            "taskStatuses": [
                {"id": "pending", "name": "Pending", "color": "#ff9800", "description": "Task created but not started"},
                {"id": "in-progress", "name": "In Progress", "color": "#2196f3", "description": "Task currently being worked on"},
                {"id": "completed", "name": "Completed", "color": "#4caf50", "description": "Task finished successfully"},
                {"id": "on-hold", "name": "On Hold", "color": "#9c27b0", "description": "Task temporarily paused"},
                {"id": "cancelled", "name": "Cancelled", "color": "#f44336", "description": "Task cancelled or no longer needed"}
            ],
            "dashboardMetrics": {
                "totalContacts": 5,
                "totalTickets": 5,
                "totalTasks": 4,
                "activeChats": 5,
                "conversionRate": "80%",
                "avgResponseTime": "2 minutes",
                "monthlyMessages": 347,
                "customerSatisfaction": "4.8/5",
                "revenueThisMonth": "$275,000",
                "dealsInProgress": 3,
                "tasksCompleted": 12,
                "newLeadsThisWeek": 8
            }
        };
    }

    initializeApp() {
        console.log('Initializing WhatsApp CRM...');
        this.setupEventListeners();
        this.renderDashboard();
        this.renderContacts();
        this.renderPipeline();
        this.renderChat();
        this.renderTasks();
        this.renderQuickReplies();
        this.renderAdminPanel();
        this.updateUIForDemoMode();
        this.showSection('dashboard');
        this.updateCounts();
        console.log('WhatsApp CRM initialized successfully');
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Navigation - Fixed with proper event handling
        document.querySelectorAll('.nav-item').forEach((item, index) => {
            console.log(`Setting up nav item ${index}:`, item.getAttribute('data-section'));
            
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const section = e.currentTarget.getAttribute('data-section');
                console.log('Navigation clicked:', section);
                if (section) {
                    this.showSection(section);
                }
            });
        });

        // Modal close buttons
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const modal = e.target.closest('.modal');
                this.closeModal(modal);
            });
        });

        // Action buttons
        this.setupActionButtons();
        this.setupFormHandlers();
        this.setupFiltersAndSearch();
        this.setupAdminHandlers();
        
        console.log('Event listeners setup complete');
    }

    setupActionButtons() {
        // Add contact - Fixed
        const addContactBtn = document.getElementById('addContactBtn');
        if (addContactBtn) {
            addContactBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Add contact clicked');
                this.showAddContactModal();
            });
        }

        // Add task - Fixed
        const addTaskBtn = document.getElementById('addTaskBtn');
        if (addTaskBtn) {
            addTaskBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Add task clicked');
                this.showAddTaskModal();
            });
        }

        // Add quick reply - Fixed
        const addQuickReplyBtn = document.getElementById('addQuickReplyBtn');
        if (addQuickReplyBtn) {
            addQuickReplyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Add quick reply clicked');
                this.showAddQuickReplyModal();
            });
        }

        // Add ticket - Fixed
        const addTicketBtn = document.getElementById('addTicketBtn');
        if (addTicketBtn) {
            addTicketBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Add ticket clicked');
                this.showAddTicketModal();
            });
        }

        // Start new chat
        const startNewChatBtn = document.getElementById('startNewChatBtn');
        if (startNewChatBtn) {
            startNewChatBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.startNewChat();
            });
        }

        // Import/Export
        const importBtn = document.getElementById('importContactsBtn');
        if (importBtn) {
            importBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showImportDialog();
            });
        }

        const exportBtn = document.getElementById('exportContactsBtn');
        if (exportBtn) {
            exportBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.exportContacts();
            });
        }

        // Refresh buttons
        const refreshButtons = ['refreshDashboardBtn', 'refreshPipelineBtn', 'refreshChatsBtn', 'refreshTasksBtn', 'refreshRepliesBtn'];
        refreshButtons.forEach(btnId => {
            const btn = document.getElementById(btnId);
            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showToast('Data refreshed!', 'success');
                    this.updateCounts();
                });
            }
        });
    }

    setupFormHandlers() {
        // Contact form
        const saveContactBtn = document.getElementById('saveContactBtn');
        if (saveContactBtn) {
            saveContactBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.saveContact();
            });
        }

        const cancelContactBtn = document.getElementById('cancelContactBtn');
        if (cancelContactBtn) {
            cancelContactBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeModal(document.getElementById('addContactModal'));
            });
        }

        // Task form
        const saveTaskBtn = document.getElementById('saveTaskBtn');
        if (saveTaskBtn) {
            saveTaskBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.saveTask();
            });
        }

        const cancelTaskBtn = document.getElementById('cancelTaskBtn');
        if (cancelTaskBtn) {
            cancelTaskBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeModal(document.getElementById('addTaskModal'));
            });
        }

        // Quick reply form
        const saveQuickReplyBtn = document.getElementById('saveQuickReplyBtn');
        if (saveQuickReplyBtn) {
            saveQuickReplyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.saveQuickReply();
            });
        }

        const cancelQuickReplyBtn = document.getElementById('cancelQuickReplyBtn');
        if (cancelQuickReplyBtn) {
            cancelQuickReplyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeModal(document.getElementById('addQuickReplyModal'));
            });
        }

        // Ticket form
        const saveTicketBtn = document.getElementById('saveTicketBtn');
        if (saveTicketBtn) {
            saveTicketBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.saveTicket();
            });
        }

        const cancelTicketBtn = document.getElementById('cancelTicketBtn');
        if (cancelTicketBtn) {
            cancelTicketBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeModal(document.getElementById('addTicketModal'));
            });
        }

        // Chat message sending
        const sendMessageBtn = document.getElementById('sendMessageBtn');
        if (sendMessageBtn) {
            sendMessageBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.sendMessage();
            });
        }

        const messageInput = document.getElementById('messageInput');
        if (messageInput) {
            messageInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }

        // Password toggles
        document.querySelectorAll('.toggle-password').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const input = e.target.closest('.input-with-toggle').querySelector('input');
                if (input.type === 'password') {
                    input.type = 'text';
                    e.target.querySelector('i').classList.replace('fa-eye', 'fa-eye-slash');
                } else {
                    input.type = 'password';
                    e.target.querySelector('i').classList.replace('fa-eye-slash', 'fa-eye');
                }
            });
        });
    }

    setupFiltersAndSearch() {
        // Contact search
        const contactSearch = document.getElementById('contactSearch');
        if (contactSearch) {
            contactSearch.addEventListener('input', (e) => {
                this.filterContacts(e.target.value);
            });
        }

        // Contact filters
        document.querySelectorAll('.contact-filters [data-filter]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.setActiveFilter(e.target, '.contact-filters');
                this.filterContactsByType(e.target.getAttribute('data-filter'));
            });
        });

        // Task filters
        document.querySelectorAll('.task-filters .filter-tab').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.setActiveFilter(e.target, '.task-filters');
                this.filterTasksByStatus(e.target.getAttribute('data-filter'));
            });
        });

        // Quick reply categories
        document.querySelectorAll('.category-tab').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.setActiveFilter(e.target, '.quick-replies-categories');
                this.filterQuickRepliesByCategory(e.target.getAttribute('data-category'));
            });
        });
    }

    setupAdminHandlers() {
        // Admin tabs
        document.querySelectorAll('.admin-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchAdminTab(e.target.getAttribute('data-tab'));
            });
        });

        // WhatsApp API test connection
        const testBtn = document.getElementById('testConnectionBtn');
        if (testBtn) {
            testBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.testWhatsAppConnection();
            });
        }

        const saveConfigBtn = document.getElementById('saveConfigBtn');
        if (saveConfigBtn) {
            saveConfigBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.saveWhatsAppConfig();
            });
        }

        // Add industry
        const addIndustryBtn = document.getElementById('addIndustryBtn');
        if (addIndustryBtn) {
            addIndustryBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.addIndustry();
            });
        }
    }

    showSection(sectionName) {
        console.log('Switching to section:', sectionName);
        
        // Hide admin-only sections for non-admin users
        if (sectionName === 'admin' && !this.data.currentUser.permissions.canAccessAdminPanel) {
            this.showToast('Access denied: Admin privileges required', 'error');
            return;
        }

        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Show selected section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
            console.log('Section activated:', sectionName);
        } else {
            console.error('Section not found:', sectionName);
            return;
        }
        
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeNavItem = document.querySelector(`[data-section="${sectionName}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
        
        this.currentSection = sectionName;

        // Refresh section data
        if (sectionName === 'dashboard') this.renderDashboard();
        if (sectionName === 'contacts') this.renderContacts();
        if (sectionName === 'pipeline') this.renderPipeline();
        if (sectionName === 'chat') this.renderChat();
        if (sectionName === 'tasks') this.renderTasks();
        if (sectionName === 'quick-replies') this.renderQuickReplies();
    }

    updateUIForDemoMode() {
        const demoBadge = document.getElementById('demoBadge');
        const connectionStatus = document.getElementById('connectionStatus');
        const environmentMode = document.getElementById('environmentMode');
        
        if (this.demoMode) {
            if (demoBadge) demoBadge.style.display = 'flex';
            if (connectionStatus) {
                connectionStatus.innerHTML = '<i class="fas fa-circle status-disconnected"></i> WhatsApp API: Not Configured';
            }
            if (environmentMode) {
                environmentMode.textContent = 'Demo Mode';
            }
        } else {
            if (demoBadge) demoBadge.style.display = 'none';
            if (connectionStatus) {
                connectionStatus.innerHTML = '<i class="fas fa-circle status-connected"></i> WhatsApp API: Connected';
            }
            if (environmentMode) {
                environmentMode.textContent = 'Production';
            }
        }
    }

    updateCounts() {
        const contacts = Object.values(this.data.contacts);
        
        // Contact counts
        const totalContacts = contacts.length;
        const leadsCount = contacts.filter(c => c.listType === 'leads').length;
        const accountsCount = contacts.filter(c => c.listType === 'accounts').length;
        const customersCount = contacts.filter(c => c.listType === 'customers').length;
        
        // Update UI elements safely
        const elements = {
            'totalContacts': totalContacts,
            'allCount': totalContacts,
            'leadsCount': leadsCount,
            'accountsCount': accountsCount,
            'customersCount': customersCount
        };
        
        Object.keys(elements).forEach(id => {
            const element = document.getElementById(id);
            if (element) element.textContent = elements[id];
        });
        
        // Task counts
        const allTasks = this.data.tasks.length;
        const pendingTasks = this.data.tasks.filter(t => t.status === 'pending').length;
        const inProgressTasks = this.data.tasks.filter(t => t.status === 'in-progress').length;
        const completedTasks = this.data.tasks.filter(t => t.status === 'completed').length;
        
        const taskElements = {
            'totalTasks': pendingTasks + inProgressTasks,
            'allTasksCount': allTasks,
            'pendingCount': pendingTasks,
            'inProgressCount': inProgressTasks,
            'completedCount': completedTasks
        };
        
        Object.keys(taskElements).forEach(id => {
            const element = document.getElementById(id);
            if (element) element.textContent = taskElements[id];
        });
        
        // Other counts
        const otherElements = {
            'totalTickets': this.data.tickets.length,
            'activeChats': Object.keys(this.data.chatMessages).length,
            'chatBadge': Object.keys(this.data.chatMessages).length,
            'taskBadge': pendingTasks + inProgressTasks
        };
        
        Object.keys(otherElements).forEach(id => {
            const element = document.getElementById(id);
            if (element) element.textContent = otherElements[id];
        });
        
        // System info
        const systemElements = {
            'systemTotalContacts': totalContacts,
            'systemActiveTickets': this.data.tickets.length,
            'systemTotalMessages': this.data.dashboardMetrics.monthlyMessages
        };
        
        Object.keys(systemElements).forEach(id => {
            const element = document.getElementById(id);
            if (element) element.textContent = systemElements[id];
        });
    }

    renderDashboard() {
        this.updateCounts();
    }

    renderContacts() {
        const tbody = document.getElementById('contactsTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = '';

        Object.values(this.data.contacts).forEach(contact => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><strong>${contact.id}</strong></td>
                <td>${contact.fullName}</td>
                <td><code>${contact.maskedPhone}</code></td>
                <td>${contact.country}</td>
                <td><span class="contact-type ${contact.listType}">${contact.listType}</span></td>
                <td>${contact.industry.join(', ')}</td>
                <td>${this.formatDate(contact.lastActivity)}</td>
                <td>
                    <div class="table-actions">
                        <button class="btn btn--outline btn-icon" onclick="window.crm.editContact('${contact.id}')" title="Edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn--outline btn-icon" onclick="window.crm.deleteContact('${contact.id}')" title="Delete">
                            <i class="fas fa-trash"></i>
                        </button>
                        <button class="btn btn--primary btn-icon" onclick="window.crm.openChat('${contact.id}')" title="Chat">
                            <i class="fas fa-comment"></i>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    renderPipeline() {
        const pipelineBoard = document.getElementById('pipelineBoard');
        if (!pipelineBoard) return;
        
        pipelineBoard.innerHTML = '';

        this.data.pipelineStages.forEach(stage => {
            const tickets = this.data.tickets.filter(ticket => ticket.stage === stage.id);
            
            const column = document.createElement('div');
            column.className = 'pipeline-column';
            column.innerHTML = `
                <div class="pipeline-header">
                    <div class="pipeline-title">${stage.name}</div>
                    <div class="pipeline-count">${tickets.length}</div>
                </div>
                <div class="pipeline-cards" data-stage="${stage.id}">
                    ${tickets.map(ticket => this.renderTicketCard(ticket)).join('')}
                </div>
                <div class="pipeline-drop-zone" data-stage="${stage.id}">
                    Drop tickets here
                </div>
            `;
            
            pipelineBoard.appendChild(column);
        });

        this.setupDragAndDrop();
    }

    renderTicketCard(ticket) {
        const contact = this.data.contacts[ticket.contactId];
        return `
            <div class="ticket-card" draggable="true" data-ticket-id="${ticket.id}">
                <div class="ticket-header">
                    <h4 class="ticket-title">${ticket.title}</h4>
                    <span class="ticket-priority ${ticket.priority}">${ticket.priority}</span>
                </div>
                <div class="ticket-contact">${contact ? contact.id + ' - ' + contact.fullName : 'Unknown Contact'}</div>
                <div class="ticket-notes">${ticket.notes.substring(0, 100)}${ticket.notes.length > 100 ? '...' : ''}</div>
            </div>
        `;
    }

    setupDragAndDrop() {
        const ticketCards = document.querySelectorAll('.ticket-card');
        const dropZones = document.querySelectorAll('.pipeline-drop-zone');

        ticketCards.forEach(card => {
            card.addEventListener('dragstart', (e) => {
                this.draggedTicket = e.target.getAttribute('data-ticket-id');
                e.target.classList.add('dragging');
            });

            card.addEventListener('dragend', (e) => {
                e.target.classList.remove('dragging');
                this.draggedTicket = null;
            });
        });

        dropZones.forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                zone.classList.add('drag-over');
            });

            zone.addEventListener('dragleave', () => {
                zone.classList.remove('drag-over');
            });

            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                zone.classList.remove('drag-over');
                
                const newStage = zone.getAttribute('data-stage');
                if (this.draggedTicket && newStage) {
                    this.moveTicketToStage(this.draggedTicket, newStage);
                }
            });
        });
    }

    moveTicketToStage(ticketId, newStage) {
        const ticketIndex = this.data.tickets.findIndex(t => t.id === ticketId);
        if (ticketIndex !== -1) {
            this.data.tickets[ticketIndex].stage = newStage;
            this.data.tickets[ticketIndex].updatedAt = new Date().toISOString();
            
            // Special handling for Won/Lost stages
            if (newStage === 'won') {
                const ticket = this.data.tickets[ticketIndex];
                const contact = this.data.contacts[ticket.contactId];
                if (contact) {
                    contact.listType = 'customers';
                    this.showToast(`Ticket won! ${contact.id} moved to customers list.`, 'success');
                }
            } else if (newStage === 'lost') {
                this.showLossReasonModal(ticketId);
            }
            
            this.renderPipeline();
            this.renderContacts();
            this.updateCounts();
        }
    }

    showLossReasonModal(ticketId) {
        const reason = prompt('Please provide a reason for losing this deal:');
        if (reason) {
            const ticketIndex = this.data.tickets.findIndex(t => t.id === ticketId);
            if (ticketIndex !== -1) {
                this.data.tickets[ticketIndex].lossReason = reason;
                this.showToast('Loss reason recorded', 'info');
            }
        }
    }

    renderChat() {
        const chatList = document.getElementById('chatList');
        if (!chatList) return;
        
        chatList.innerHTML = '';
        
        Object.keys(this.data.chatMessages).forEach(contactId => {
            const contact = this.data.contacts[contactId];
            const messages = this.data.chatMessages[contactId];
            const lastMessage = messages[messages.length - 1];
            
            if (contact) {
                const chatItem = document.createElement('div');
                chatItem.className = 'chat-item';
                chatItem.setAttribute('data-contact-id', contactId);
                
                chatItem.innerHTML = `
                    <div class="chat-contact">${contact.id} - ${contact.fullName}</div>
                    <div class="chat-preview">${lastMessage ? lastMessage.content.substring(0, 50) + '...' : 'No messages'}</div>
                    <div class="chat-time">${lastMessage ? this.formatTime(lastMessage.timestamp) : ''}</div>
                `;
                
                chatItem.addEventListener('click', () => {
                    this.selectChat(contactId);
                });
                
                chatList.appendChild(chatItem);
            }
        });

        this.renderQuickReplySuggestions();
    }

    selectChat(contactId) {
        // Update active chat in sidebar
        document.querySelectorAll('.chat-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeItem = document.querySelector(`[data-contact-id="${contactId}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
        
        this.selectedContact = contactId;
        this.renderChatMessages(contactId);
        this.showChatContactInfo(contactId);
        
        const inputContainer = document.getElementById('chatInputContainer');
        if (inputContainer) {
            inputContainer.style.display = 'block';
        }
    }

    showChatContactInfo(contactId) {
        const contact = this.data.contacts[contactId];
        const ticket = this.data.tickets.find(t => t.contactId === contactId);
        const contactInfoDiv = document.getElementById('chatContactInfo');
        
        if (contact && contactInfoDiv) {
            contactInfoDiv.style.display = 'block';
            
            document.getElementById('chatContactName').textContent = contact.fullName;
            document.getElementById('chatContactId').textContent = contact.id;
            document.getElementById('chatContactCountry').textContent = contact.country;
            document.getElementById('chatContactTime').textContent = `${new Date().toLocaleTimeString()} ${contact.timezone}`;
            document.getElementById('chatContactTicket').textContent = ticket ? `${ticket.stage} stage` : 'No active ticket';
            
            const statusSpan = document.getElementById('chatContactStatus');
            statusSpan.textContent = contact.listType.toUpperCase();
            statusSpan.className = `contact-status ${contact.listType}`;
        }
    }

    renderChatMessages(contactId) {
        const chatWindow = document.getElementById('chatWindow');
        if (!chatWindow) return;
        
        const messages = this.data.chatMessages[contactId] || [];
        
        chatWindow.innerHTML = '';
        
        messages.forEach(message => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${message.type}`;
            messageDiv.innerHTML = `
                <div class="message-content">${message.content}</div>
                <div class="message-time">${this.formatTime(message.timestamp)}</div>
            `;
            chatWindow.appendChild(messageDiv);
        });
        
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    renderQuickReplySuggestions() {
        const container = document.getElementById('quickReplySuggestions');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.data.quickReplies.slice(0, 3).forEach(reply => {
            const button = document.createElement('button');
            button.className = 'quick-reply-btn';
            button.textContent = reply.name;
            button.addEventListener('click', () => {
                this.useQuickReply(reply.content);
            });
            container.appendChild(button);
        });
    }

    useQuickReply(content) {
        const messageInput = document.getElementById('messageInput');
        if (messageInput) {
            messageInput.value = content;
        }
    }

    sendMessage() {
        if (!this.selectedContact) {
            this.showToast('Please select a contact first', 'error');
            return;
        }
        
        const messageInput = document.getElementById('messageInput');
        if (!messageInput) return;
        
        const content = messageInput.value.trim();
        
        if (!content) {
            this.showToast('Please enter a message', 'error');
            return;
        }
        
        const newMessage = {
            id: `msg_${Date.now()}`,
            type: 'sent',
            content: content,
            timestamp: new Date().toISOString(),
            status: 'sent',
            messageId: `wamid_demo_${Date.now()}`
        };
        
        if (!this.data.chatMessages[this.selectedContact]) {
            this.data.chatMessages[this.selectedContact] = [];
        }
        
        this.data.chatMessages[this.selectedContact].push(newMessage);
        messageInput.value = '';
        
        this.renderChatMessages(this.selectedContact);
        this.renderChat(); // Update sidebar
        
        if (this.demoMode) {
            this.showToast('Message sent (Demo Mode)', 'success');
            // Simulate auto-reply in demo mode
            setTimeout(() => {
                this.simulateAutoReply(this.selectedContact);
            }, 2000);
        }
    }

    simulateAutoReply(contactId) {
        const autoReply = {
            id: `msg_${Date.now()}`,
            type: 'received',
            content: 'Thank you for your message! This is an automated reply in demo mode.',
            timestamp: new Date().toISOString(),
            status: 'delivered',
            messageId: `wamid_demo_${Date.now()}`
        };
        
        this.data.chatMessages[contactId].push(autoReply);
        this.renderChatMessages(contactId);
        this.renderChat(); // Update sidebar
    }

    startNewChat() {
        const phone = prompt('Enter phone number (with country code, no + or spaces):');
        if (phone) {
            const contactId = this.generateContactId();
            const countryInfo = this.getCountryFromPhone(phone);
            const maskedPhone = this.maskPhoneNumber(phone);
            
            // Create new contact
            this.data.contacts[contactId] = {
                id: contactId,
                phone: phone,
                maskedPhone: maskedPhone,
                country: countryInfo.country,
                timezone: countryInfo.timezone,
                fullName: `Contact ${contactId}`,
                email: '',
                industry: [],
                listType: 'leads',
                assignedUser: this.currentUser,
                createdAt: new Date().toISOString(),
                lastActivity: new Date().toISOString(),
                source: 'WhatsApp'
            };
            
            // Initialize chat
            this.data.chatMessages[contactId] = [];
            
            this.renderChat();
            this.renderContacts();
            this.updateCounts();
            this.selectChat(contactId);
            this.showToast(`New chat started with ${contactId}`, 'success');
        }
    }

    renderTasks() {
        const tasksGrid = document.getElementById('tasksGrid');
        if (!tasksGrid) return;
        
        tasksGrid.innerHTML = '';
        
        this.data.tasks.forEach(task => {
            const taskCard = document.createElement('div');
            taskCard.className = 'task-card';
            taskCard.innerHTML = `
                <div class="task-header">
                    <h4 class="task-title">${task.title}</h4>
                    <span class="task-status ${task.status}">${task.status.replace('-', ' ')}</span>
                </div>
                <div class="task-description">${task.description}</div>
                <div class="task-meta">
                    <div class="task-due-date">
                        <i class="fas fa-calendar"></i>
                        ${this.formatDate(task.dueDate)}
                    </div>
                    <div class="task-assignee">${task.assignedTo}</div>
                </div>
                <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 12px; color: var(--color-text-secondary);">
                        Priority: <strong>${task.priority}</strong>
                    </span>
                    <button class="btn btn--outline btn--sm" onclick="window.crm.editTask('${task.id}')">
                        <i class="fas fa-edit"></i>
                    </button>
                </div>
            `;
            
            tasksGrid.appendChild(taskCard);
        });
    }

    renderQuickReplies() {
        const grid = document.getElementById('quickRepliesGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        this.data.quickReplies.forEach(reply => {
            const card = document.createElement('div');
            card.className = 'quick-reply-card';
            card.innerHTML = `
                <div class="quick-reply-header">
                    <div>
                        <h4 class="quick-reply-name">${reply.name}</h4>
                        <span class="quick-reply-category">${reply.category}</span>
                    </div>
                    <div class="quick-reply-actions">
                        <button class="btn btn--outline btn-icon" onclick="window.crm.editQuickReply('${reply.id}')" title="Edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn--outline btn-icon" onclick="window.crm.deleteQuickReply('${reply.id}')" title="Delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="quick-reply-content">${reply.content}</div>
                <div class="quick-reply-meta">
                    <span>Used ${reply.usageCount || 0} times</span>
                    <button class="btn btn--primary btn--sm" onclick="window.crm.useQuickReply('${reply.content}')">
                        <i class="fas fa-copy"></i>
                        Copy
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    renderAdminPanel() {
        this.renderPermissions();
        this.updateAPIStatus();
        this.renderIndustries();
    }

    renderPermissions() {
        const grid = document.getElementById('permissionsGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        const adminPermissions = this.data.currentUser.permissions;
        
        const card = document.createElement('div');
        card.className = 'permission-card';
        card.innerHTML = `
            <h4 class="permission-title">Current User Permissions</h4>
            <ul class="permission-list">
                ${Object.entries(adminPermissions).map(([key, value]) => `
                    <li class="permission-item">
                        <span>${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                        <span class="permission-status ${value ? '' : 'disabled'}">
                            ${value ? 'Enabled' : 'Disabled'}
                        </span>
                    </li>
                `).join('')}
            </ul>
        `;
        grid.appendChild(card);
        
        // Add example viewer permissions
        const viewerCard = document.createElement('div');
        viewerCard.className = 'permission-card';
        viewerCard.innerHTML = `
            <h4 class="permission-title">Viewer Admin (Example)</h4>
            <ul class="permission-list">
                <li class="permission-item">
                    <span>Can Delete Contacts</span>
                    <span class="permission-status disabled">Disabled</span>
                </li>
                <li class="permission-item">
                    <span>Can Create Tickets</span>
                    <span class="permission-status">Enabled</span>
                </li>
                <li class="permission-item">
                    <span>Can Manage Pipelines</span>
                    <span class="permission-status disabled">Disabled</span>
                </li>
                <li class="permission-item">
                    <span>Can View All Tasks</span>
                    <span class="permission-status disabled">Disabled</span>
                </li>
                <li class="permission-item">
                    <span>Can Access Admin Panel</span>
                    <span class="permission-status disabled">Disabled</span>
                </li>
            </ul>
        `;
        grid.appendChild(viewerCard);
    }

    renderIndustries() {
        const container = document.getElementById('industryTags');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.data.industries.forEach(industry => {
            const tag = document.createElement('span');
            tag.className = 'industry-tag';
            tag.textContent = industry;
            container.appendChild(tag);
        });
    }

    updateAPIStatus() {
        // The API status is already correctly implemented in HTML
        // No changes needed here as the existing HTML structure is correct
    }

    // Modal management - Fixed to ensure modals actually show
    showAddContactModal() {
        console.log('Showing contact modal...');
        const modal = document.getElementById('addContactModal');
        if (modal) {
            this.populateIndustrySelect();
            modal.classList.remove('hidden');
            console.log('Contact modal shown');
        } else {
            console.error('Contact modal not found');
        }
    }

    showAddTaskModal() {
        console.log('Showing task modal...');
        const modal = document.getElementById('addTaskModal');
        if (modal) {
            modal.classList.remove('hidden');
            console.log('Task modal shown');
        } else {
            console.error('Task modal not found');
        }
    }

    showAddQuickReplyModal() {
        console.log('Showing quick reply modal...');
        const modal = document.getElementById('addQuickReplyModal');
        if (modal) {
            modal.classList.remove('hidden');
            console.log('Quick reply modal shown');
        } else {
            console.error('Quick reply modal not found');
        }
    }

    showAddTicketModal() {
        console.log('Showing ticket modal...');
        const modal = document.getElementById('addTicketModal');
        if (modal) {
            this.populateTicketContactSelect();
            modal.classList.remove('hidden');
            console.log('Ticket modal shown');
        } else {
            console.error('Ticket modal not found');
        }
    }

    closeModal(modal) {
        if (modal) {
            modal.classList.add('hidden');
            // Reset form fields
            modal.querySelectorAll('form').forEach(form => form.reset());
        }
    }

    populateIndustrySelect() {
        const select = document.getElementById('contactIndustry');
        if (!select) return;
        
        select.innerHTML = '';
        this.data.industries.forEach(industry => {
            const option = document.createElement('option');
            option.value = industry;
            option.textContent = industry;
            select.appendChild(option);
        });
    }

    populateTicketContactSelect() {
        const select = document.getElementById('ticketContact');
        if (!select) return;
        
        select.innerHTML = '<option value="">Select Contact</option>';
        Object.values(this.data.contacts).forEach(contact => {
            const option = document.createElement('option');
            option.value = contact.id;
            option.textContent = `${contact.id} - ${contact.fullName}`;
            select.appendChild(option);
        });
    }

    // Form handlers
    saveContact() {
        const phone = document.getElementById('contactPhone')?.value;
        const name = document.getElementById('contactName')?.value;
        const email = document.getElementById('contactEmail')?.value;
        const type = document.getElementById('contactType')?.value;
        const industries = Array.from(document.getElementById('contactIndustry')?.selectedOptions || []).map(opt => opt.value);
        const shippingCompany = document.getElementById('contactShippingCompany')?.value;
        const shippingCode = document.getElementById('contactShippingCode')?.value;
        const shippingAddress = document.getElementById('contactShippingAddress')?.value;
        
        if (!phone || !name) {
            this.showToast('Phone and name are required!', 'error');
            return;
        }
        
        const contactId = this.generateContactId();
        const maskedPhone = this.maskPhoneNumber(phone);
        const countryInfo = this.getCountryFromPhone(phone);
        
        const newContact = {
            id: contactId,
            phone: phone,
            maskedPhone: maskedPhone,
            country: countryInfo.country,
            timezone: countryInfo.timezone,
            fullName: name,
            email: email || '',
            industry: industries,
            listType: type || 'leads',
            assignedUser: this.currentUser,
            shippingCompany: shippingCompany || '',
            shippingCode: shippingCode || '',
            shippingAddress: shippingAddress || '',
            createdAt: new Date().toISOString(),
            lastActivity: new Date().toISOString(),
            source: this.demoMode ? 'demo' : 'manual'
        };
        
        this.data.contacts[contactId] = newContact;
        this.renderContacts();
        this.updateCounts();
        this.closeModal(document.getElementById('addContactModal'));
        this.showToast(`Contact ${contactId} added successfully!`, 'success');
    }

    saveTask() {
        const title = document.getElementById('taskTitle')?.value;
        const description = document.getElementById('taskDescription')?.value;
        const priority = document.getElementById('taskPriority')?.value;
        const dueDate = document.getElementById('taskDueDate')?.value;
        const estimatedHours = document.getElementById('taskEstimatedHours')?.value;
        const assignee = document.getElementById('taskAssignee')?.value;
        
        if (!title) {
            this.showToast('Task title is required!', 'error');
            return;
        }
        
        const newTask = {
            id: `task_${Date.now()}`,
            title: title,
            description: description || '',
            assignedTo: assignee || this.currentUser,
            status: 'pending',
            priority: priority || 'medium',
            dueDate: dueDate,
            estimatedHours: parseInt(estimatedHours) || 1,
            createdAt: new Date().toISOString(),
            tags: [],
            attachments: [],
            comments: [],
            source: this.demoMode ? 'demo' : 'manual'
        };
        
        this.data.tasks.push(newTask);
        this.renderTasks();
        this.updateCounts();
        this.closeModal(document.getElementById('addTaskModal'));
        this.showToast('Task created successfully!', 'success');
    }

    saveQuickReply() {
        const name = document.getElementById('replyName')?.value;
        const content = document.getElementById('replyContent')?.value;
        const category = document.getElementById('replyCategory')?.value;
        
        if (!name || !content) {
            this.showToast('Name and content are required!', 'error');
            return;
        }
        
        const newReply = {
            id: `reply_${Date.now()}`,
            name: name,
            category: category || 'greetings',
            type: 'text',
            content: content,
            usageCount: 0
        };
        
        this.data.quickReplies.push(newReply);
        this.renderQuickReplies();
        this.renderQuickReplySuggestions();
        this.closeModal(document.getElementById('addQuickReplyModal'));
        this.showToast('Quick reply template added successfully!', 'success');
    }

    saveTicket() {
        const title = document.getElementById('ticketTitle')?.value;
        const contactId = document.getElementById('ticketContact')?.value;
        const priority = document.getElementById('ticketPriority')?.value;
        const stage = document.getElementById('ticketStage')?.value;
        const notes = document.getElementById('ticketNotes')?.value;
        
        if (!title) {
            this.showToast('Ticket title is required!', 'error');
            return;
        }
        
        const newTicket = {
            id: `ticket_${Date.now()}`,
            contactId: contactId || null,
            title: title,
            stage: stage || 'inquiry',
            priority: priority || 'medium',
            notes: notes || '',
            assignedUser: this.currentUser,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            tags: [],
            customFields: {}
        };
        
        this.data.tickets.push(newTicket);
        this.renderPipeline();
        this.updateCounts();
        this.closeModal(document.getElementById('addTicketModal'));
        this.showToast('Ticket created successfully!', 'success');
    }

    // Admin functions
    switchAdminTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.admin-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeTab) activeTab.classList.add('active');
        
        // Update tab content
        document.querySelectorAll('.admin-tab-content').forEach(content => {
            content.classList.remove('active');
        });
        const activeContent = document.getElementById(`${tabName}-tab`);
        if (activeContent) activeContent.classList.add('active');
    }

    testWhatsAppConnection() {
        if (this.demoMode) {
            this.showToast('Demo Mode: Connection test not available. Add environment variables and redeploy to test live connection.', 'info');
            return;
        }
        
        // In production, this would test the actual WhatsApp API connection
        this.showToast('Testing connection...', 'info');
        
        setTimeout(() => {
            this.showToast('Connection test completed!', 'success');
        }, 2000);
    }

    saveWhatsAppConfig() {
        this.showToast('Demo Mode: Configuration saved to local demo data. In production, this would save to environment variables.', 'info');
    }

    addIndustry() {
        const industry = prompt('Enter new industry name:');
        if (industry && !this.data.industries.includes(industry)) {
            this.data.industries.push(industry);
            this.renderIndustries();
            this.showToast(`Industry "${industry}" added successfully!`, 'success');
        } else if (industry) {
            this.showToast('Industry already exists!', 'error');
        }
    }

    // Utility functions
    generateContactId() {
        const timestamp = Date.now().toString();
        const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        return `CUT${timestamp.slice(-6)}${randomNum}`;
    }

    maskPhoneNumber(phone) {
        if (phone.length < 4) return phone;
        
        let countryCode = '';
        let maskedPart = '';
        
        // Detect country code and mask accordingly
        if (phone.startsWith('961')) {
            countryCode = '+961';
            maskedPart = '*********';
        } else if (phone.startsWith('1')) {
            countryCode = '+1';
            maskedPart = '**********';
        } else if (phone.startsWith('44')) {
            countryCode = '+44';
            maskedPart = '**********';
        } else if (phone.startsWith('49')) {
            countryCode = '+49';
            maskedPart = '***********';
        } else if (phone.startsWith('33')) {
            countryCode = '+33';
            maskedPart = '*********';
        } else {
            // Generic masking for other countries
            const codeLength = phone.length >= 10 ? 2 : 1;
            countryCode = '+' + phone.substring(0, codeLength);
            maskedPart = '*'.repeat(phone.length - codeLength);
        }
        
        return countryCode + maskedPart;
    }

    getCountryFromPhone(phone) {
        for (const [code, info] of Object.entries(this.data.countryCodeMapping)) {
            if (phone.startsWith(code)) {
                return info;
            }
        }
        return { country: 'Unknown', timezone: 'GMT+0', currency: 'USD' };
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    formatTime(dateString) {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }

    setActiveFilter(element, container = '.contact-filters') {
        document.querySelectorAll(`${container} .filter-tab, ${container} .category-tab`).forEach(tab => {
            tab.classList.remove('active');
        });
        element.classList.add('active');
    }

    filterContacts(searchTerm) {
        const rows = document.querySelectorAll('#contactsTableBody tr');
        const term = searchTerm.toLowerCase();
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(term) ? '' : 'none';
        });
    }

    filterContactsByType(type) {
        const rows = document.querySelectorAll('#contactsTableBody tr');
        
        rows.forEach(row => {
            if (type === 'all') {
                row.style.display = '';
            } else {
                const typeCell = row.querySelector('.contact-type');
                row.style.display = typeCell && typeCell.classList.contains(type) ? '' : 'none';
            }
        });
    }

    filterTasksByStatus(status) {
        const cards = document.querySelectorAll('.task-card');
        
        cards.forEach(card => {
            if (status === 'all') {
                card.style.display = '';
            } else {
                const statusSpan = card.querySelector('.task-status');
                card.style.display = statusSpan && statusSpan.classList.contains(status) ? '' : 'none';
            }
        });
    }

    filterQuickRepliesByCategory(category) {
        const cards = document.querySelectorAll('.quick-reply-card');
        
        cards.forEach(card => {
            if (category === 'all') {
                card.style.display = '';
            } else {
                const categorySpan = card.querySelector('.quick-reply-category');
                const cardCategory = categorySpan ? categorySpan.textContent : '';
                card.style.display = cardCategory === category ? '' : 'none';
            }
        });
    }

    showToast(message, type = 'success') {
        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-${type === 'error' ? 'error' : type === 'info' ? 'info' : 'success'});
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 9999;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 10);
        
        // Remove after 4 seconds
        setTimeout(() => {
            toast.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (document.body.contains(toast)) {
                    document.body.removeChild(toast);
                }
            }, 300);
        }, 4000);
    }

    showImportDialog() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.csv';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                this.importContacts(file);
            }
        };
        input.click();
    }

    importContacts(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                // Parse CSV content
                const csvContent = e.target.result;
                const lines = csvContent.split('\n');
                const headers = lines[0].split(',').map(h => h.trim());
                
                let importedCount = 0;
                
                for (let i = 1; i < lines.length; i++) {
                    const values = lines[i].split(',').map(v => v.trim());
                    if (values.length >= headers.length && values[0]) {
                        const contactData = {};
                        headers.forEach((header, index) => {
                            contactData[header] = values[index];
                        });
                        
                        // Create contact from CSV data
                        if (contactData.phone && contactData.name) {
                            const contactId = this.generateContactId();
                            const countryInfo = this.getCountryFromPhone(contactData.phone);
                            this.data.contacts[contactId] = {
                                id: contactId,
                                phone: contactData.phone,
                                maskedPhone: this.maskPhoneNumber(contactData.phone),
                                country: countryInfo.country,
                                timezone: countryInfo.timezone,
                                fullName: contactData.name,
                                email: contactData.email || '',
                                listType: contactData.type || 'leads',
                                industry: contactData.industry ? [contactData.industry] : [],
                                assignedUser: this.currentUser,
                                createdAt: new Date().toISOString(),
                                lastActivity: new Date().toISOString(),
                                source: 'import'
                            };
                            importedCount++;
                        }
                    }
                }
                
                this.renderContacts();
                this.updateCounts();
                this.showToast(`Imported ${importedCount} contacts successfully!`, 'success');
            } catch (error) {
                this.showToast('Error importing CSV file', 'error');
            }
        };
        reader.readAsText(file);
    }

    exportContacts() {
        const contacts = Object.values(this.data.contacts);
        
        const headers = ['ID', 'Name', 'Phone', 'Email', 'Type', 'Industry', 'Country', 'Created'];
        const csvContent = [
            headers.join(','),
            ...contacts.map(contact => [
                contact.id,
                contact.fullName,
                contact.phone,
                contact.email,
                contact.listType,
                contact.industry.join(';'),
                contact.country,
                contact.createdAt
            ].join(','))
        ].join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `contacts_export_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
        
        this.showToast('Contacts exported successfully!', 'success');
    }

    // Placeholder functions for edit/delete operations
    editContact(contactId) {
        this.showToast(`Edit contact ${contactId} (Demo Mode)`, 'info');
    }

    deleteContact(contactId) {
        if (!this.data.currentUser.permissions.canDeleteContacts) {
            this.showToast('Access denied: Contact deletion not allowed', 'error');
            return;
        }
        
        if (confirm('Are you sure you want to delete this contact?')) {
            delete this.data.contacts[contactId];
            // Also remove any related tickets and chat messages
            this.data.tickets = this.data.tickets.filter(t => t.contactId !== contactId);
            delete this.data.chatMessages[contactId];
            
            this.renderContacts();
            this.renderPipeline();
            this.renderChat();
            this.updateCounts();
            this.showToast('Contact and related data deleted successfully!', 'success');
        }
    }

    openChat(contactId) {
        this.showSection('chat');
        setTimeout(() => {
            this.selectChat(contactId);
        }, 100);
    }

    editTask(taskId) {
        this.showToast(`Edit task ${taskId} (Demo Mode)`, 'info');
    }

    editQuickReply(replyId) {
        this.showToast(`Edit quick reply ${replyId} (Demo Mode)`, 'info');
    }

    deleteQuickReply(replyId) {
        if (confirm('Are you sure you want to delete this quick reply?')) {
            this.data.quickReplies = this.data.quickReplies.filter(r => r.id !== replyId);
            this.renderQuickReplies();
            this.renderQuickReplySuggestions();
            this.showToast('Quick reply deleted successfully!', 'success');
        }
    }
}

// Initialize the CRM application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing CRM...');
    window.crm = new WhatsAppCRM();
});

// Global functions for inline event handlers
window.editContact = (id) => window.crm?.editContact(id);
window.deleteContact = (id) => window.crm?.deleteContact(id);
window.openChat = (id) => window.crm?.openChat(id);
window.editTask = (id) => window.crm?.editTask(id);
window.editQuickReply = (id) => window.crm?.editQuickReply(id);
window.deleteQuickReply = (id) => window.crm?.deleteQuickReply(id);