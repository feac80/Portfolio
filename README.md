# Portfolio
This application uses nodemailer to send email notifcations trough Gmail API with AUTH2.0 method
 let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
                type: 'OAuth2',
                user: '<your-email@server.com>',
                clientId: 'process.env.clientId',
                clientSecret: 'process.env.clientSecret',
                refreshToken:'process.env.refreshToken', 
                accessToken:'process.env.accessToken',
                expires: 1484314697598
            }
        
    });
    
    Create an Gmail API app with acccess token and replcce the values above to set up nodemailer.
