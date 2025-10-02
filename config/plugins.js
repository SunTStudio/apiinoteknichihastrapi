// path: ./config/plugins.js

module.exports = ({ env }) => {
  const isProduction = env('NODE_ENV') === 'production';

  return {
    email: {
      config: isProduction
        ? {
            // ✅ Email bawaan Strapi Cloud (pakai Postmark di belakang layar)
            provider: 'strapi-provider-email-strapi-cloud',
            providerOptions: {}, // biarkan kosong, Cloud inject otomatis
            settings: {
              defaultFrom: 'no-reply@strapi.io', // HARUS pakai ini di Cloud
              defaultReplyTo: env('DEFAULT_EMAIL_REPLY_TO', 'no-reply@strapi.io'),
            },
          }
        : {
            // ✅ Lokal (development) pakai Nodemailer
            provider: 'nodemailer',
            providerOptions: {
              host: env('SMTP_HOST', 'smtp.gmail.com'),
              port: env.int('SMTP_PORT', 587),
              secure: false, // pakai true kalau pakai port 465
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
