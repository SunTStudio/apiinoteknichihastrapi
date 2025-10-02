// path: ./config/plugins.js

module.exports = ({ env }) => {
  // Cek jika lingkungan saat ini adalah production (Strapi Cloud)
  if (process.env.NODE_ENV === 'production') {
    return {
      email: {
        config: {
          provider: 'strapi-provider-email-strapi-cloud',
          providerOptions: {}, // Biarkan kosong, Strapi Cloud akan mengisinya
          settings: {
            defaultFrom: env('DEFAULT_EMAIL_FROM', 'no-reply@strapi.io'),
            defaultReplyTo: env('DEFAULT_EMAIL_REPLY_TO', 'no-reply@strapi.io'),
          },
        },
      },
    };
  }

  // Jika bukan production, maka ini adalah konfigurasi untuk lokal (development)
  return {
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.example.com'),
          port: env('SMTP_PORT', 587),
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