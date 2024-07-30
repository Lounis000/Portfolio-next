const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const sequelize = require('../../utils/sequelize');

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    console.log('Received POST request with data:', { name, email, password });

    try {
      // Synchronisez la base de données si nécessaire
      console.log('Syncing database...');
      await sequelize.sync();

      // Vérifiez si l'utilisateur existe déjà
      console.log(`Checking if user with email ${email} already exists...`);
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        console.log(`User with email ${email} already exists.`);
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash le mot de passe
      console.log('Hashing password...');
      const hashedPassword = await bcrypt.hash(password, 10);

      // Créez un nouvel utilisateur
      console.log('Creating new user...');
      const newUser = await User.create({ name, email, password: hashedPassword });

      // Retourne l'utilisateur nouvellement créé
      console.log('New user created:', newUser);
      return res.status(201).json({ user: newUser });
    } catch (error) {
      console.error('Signup error:', error);
      return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  } else {
    console.log(`Invalid request method: ${req.method}`);
    return res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
