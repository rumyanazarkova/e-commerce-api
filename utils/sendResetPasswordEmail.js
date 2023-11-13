const sendEmail = require('./sendEmail')

const sendResetPasswordEmail = async ({ name, email, token, origin }) => {
    const resetUrl = `${origin}/user/reset-password?token=${token}&email=${email}`
   const message=`<p>Please reset password by clicling on the following link
   <a href="${resetUrl}">Reset password</a>
   </p>`

   return sendEmail({to:email,subject:'Reset password',html:`<h3>Hello, ${name}</h3>${message}`})
}


module.exports = sendResetPasswordEmail