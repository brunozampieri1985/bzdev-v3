import SgMail from '@sendgrid/mail'

export default class SendMail {
  private from: string
  private email: string
  private message: string
  constructor(from: string, email: string, message: string) {
    this.from = from
    this.email = email
    this.message = message
  }
 

  createMessage() {
    return {
      to: 'brunozampieridev@outlook.com',
      from: this.email,
      subject: `Contato pelo site de ${this.from}`,
      text: this.message,
    }
  }
  async send() {
    SgMail.setApiKey(process.env.SENDGRID_API_KEY as string)
    const result = await SgMail.send(this.createMessage())
    return result
  }
}
