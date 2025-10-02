module.exports = {
    async afterCreate(event){
        const {result} = event;
        try {
            await strapi.plugin('email').service('email').send({
                to: process.env.ADMIN_NOTIFICATION_EMAIL,
                from: process.env.DEFAULT_EMAIL_FROM || "no-reply@strapi.io",
                subject: '📩 Pesan Pertanyaan Baru dari User',
                    html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
                        <div style="background-color: #1E40AF; color: white; padding: 16px; text-align: center;">
                        <h2 style="margin: 0;">Pesan Baru dari Website</h2>
                        </div>
                        <div style="padding: 20px; background: #fafafa;">
                        <p style="font-size: 15px; color: #333;">Halo Admin,</p>
                        <p style="font-size: 15px; color: #333; margin-bottom: 20px;">
                            Anda menerima pesan pertanyaan baru dari user melalui form website.
                        </p>
                        <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse; background: #fff; border-radius: 6px;">
                            <tr style="border-bottom: 1px solid #eee;">
                            <td style="font-weight: bold; width: 150px; color: #555;">Nama</td>
                            <td style="color: #333;">${result.name}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                            <td style="font-weight: bold; color: #555;">Email</td>
                            <td style="color: #333;">${result.useremail}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #eee;">
                            <td style="font-weight: bold; color: #555;">Phone Number</td>
                            <td style="color: #333;">${result.phone}</td>
                            </tr>
                            <tr>
                            <td style="font-weight: bold; color: #555; vertical-align: top;">Pesan</td>
                            <td style="color: #333;">${result.message}</td>
                            </tr>
                        </table>
                        <p style="margin-top: 20px; font-size: 13px; color: #777;">
                            Email ini dikirim otomatis dari sistem website. Mohon jangan balas langsung ke alamat ini.
                        </p>
                        </div>
                        <div style="background-color: #f3f4f6; color: #666; text-align: center; padding: 12px; font-size: 12px;">
                        © ${new Date().getFullYear()} Website Nichiha. All rights reserved.
                        </div>
                    </div>
                    `

            });
        } catch (error) {
            console.log('Gagal mengirim email', error);
        }
    }
}