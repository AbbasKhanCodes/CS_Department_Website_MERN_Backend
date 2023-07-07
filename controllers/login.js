const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //
    let user = null;

    // checking condions based on role

    if (
      email == process.env.adminEmail &&
      password == process.env.adminPassword
    ) {
      user = "You are logged in as Admin";
    }

    if (user) {
      // Send the response
      res.status(201).json({
        message: "User detail successfully matched.",
        user,
      });
    } else {
      // Send the response
      res.status(201).json({
        message: "Incorrect detail.",
        user,
      });
    }
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Failed in matching User credentials." });
  }
};

export default login;
