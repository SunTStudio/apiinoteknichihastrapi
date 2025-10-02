// path: ./config/plugins.js

module.exports = ({ env }) => {
  const isProduction = env('NODE_ENV') === 'production';

  return {
    email: {
      config: isProduction
        ? {
            // ✅ Gunakan email bawaan Strapi Cloud
            provider: 'strapi-provider-email-strapi-cloud',
            providerOptions: {}, // Biarkan kosong, Cloud inject otomatis
            settings: {
              defaultFrom: env('DEFAULT_EMAIL_FROM', 'no-reply@strapi.io'),
              defaultReplyTo: env('DEFAULT_EMAIL_REPLY_TO', 'no-reply@strapi.io'),
            },
          }
        : {
            // ✅ Untuk lokal gunakan nodemailer
            provider: 'nodemailer',
            providerOptions: {
              host: env('SMTP_HOST', 'smtp.gmail.com'),
              port: env.int('SMTP_PORT', 587),
              secure: false, // gunakan true jika pakai port 465
              auth: {
                user: env('SMTP_USERNAME'),
                pass: env('SMTP_PASSWORD'),
              },
            },
            settings: {
              defaultFrom: env('DEFAULT_EMAIL_FROM', 'noreply@example.com'),
              defaultReplyTo: env('DEFAULT_EMAIL_REPLY_TO', 'noreply@example.com'),
            },
          },
    },
  };
};
