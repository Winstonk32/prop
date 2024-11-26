

## 📑 Table of Contents

- [💌 How It Works](#-how-it-works)
- [✨ Features](#-features)
- [🚀 Installation](#-installation)
- [📧 Email Setup](#-email-setup)
- [🌐 Vercel Deployment](#-vercel-deployment)
- [🎨 Customization](#-customization)
- [📄 License](#-license)
- [💖 Credits](#-credits)
- [🤝 Contributing](#-contributing)
- [🔧 Troubleshooting](#-troubleshooting)
- [🐛 Bug Reports](#-bug-reports)
- [💖 Support](#-support)

## 💌 How It Works

1. Send her the app link
2. She follows the interactive steps:
   - Initial proposal question
   - Date and the time selection
   - Food preferences
   - Movie selection
   - Excitement level
3. When she completes it:
   - You'll receive an email with her choices
   - The response is saved as JSON
   - You can view it in the admin page

## ✨ Features

- **Interactive Steps**: Guide your date through a series of fun and engaging steps
- **Date and Time Selection**: Allow your date to choose a convenient time
- **Food and Movie Choices**: Let your date select their favorite food and movie
- **Excitement Rating**: Gauge your date's excitement level
- **Confetti Animation**: Celebrate with a confetti animation when your date accepts

## 🚀 Installation

To get started with the Date Proposal App, follow these steps:

1. Clone the repository:
```sh
```

2. Navigate to the project directory:
```sh

```

3. Install the dependencies:
```sh
```

4. Run the development server:
```sh
```

Open your browser and navigate to http://localhost:3000 to see the app in action.

## 📧 Email Setup

To enable email notifications:

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password:
   - Go to Security > 2-Step Verification > App passwords
   - Select "Mail" and "Other"
   - Copy the generated password
4. Update your `.env.local` file with:
```env
EMAIL_USER=your.gmail@gmail.com
EMAIL_APP_PASSWORD=your_gmail_app_password
```

## 🌐 Vercel Deployment

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add Environment Variables in Vercel project settings:
```env
EMAIL_USER=your.gmail@gmail.com
EMAIL_APP_PASSWORD=your_gmail_app_password
```

## 🎨 Customization

You can customize:
- Food options in the `food` array
- Movie choices in the `movies` array
- Colors in `tailwind.config.ts`
- Email template in `app/api/send-response/route.ts`
- Animations and transitions in components

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Credits

- Cute gifs from Tenor
- UI components from shadcn/ui
- Icons from Lucide
- Animations from Framer Motion

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 🔧 Troubleshooting

If emails aren't working:
1. Check Vercel environment variables are set correctly
2. Make sure Gmail App Password is correct
3. Verify 2-Step Verification is enabled
4. Check deployment logs in Vercel dashboard

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Expected behavior
- Actual behavior
- Steps to reproduce

## 💖 Support

If you find this project helpful:

- ⭐ Star the repository
- 🐛 Report issues on GitHub
- 💡 Submit feature requests

