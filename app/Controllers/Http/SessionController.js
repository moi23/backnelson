class SessionController {

  async store({ auth, request }) {
    const { email, password } = request.all()

    return await auth.attempt(email, password)
  }

  async show({ auth }) {
    return await auth.getUser();
  }
}

module.exports = SessionController
