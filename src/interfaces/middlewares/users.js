export const checkUser = async (req, res, next, context) => {
  try {
    const token = context.req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, SECRET_WORD);
    if (!user) throw new Error("usuario no encontrado");n 
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: "No autorizado" });
  }
};
