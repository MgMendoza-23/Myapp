import User from "../models/users.js";
import bcrypt from "bcryptjs";

async function Registrar(req, res) {
    const { nomusuario, apellidos, email, password } = req.body;
    try {
        if (!email) {
            return res.status(400).send({ msg: "El email es obligatorio" });
        }
        if (!password) {
            return res.status(400).send({ msg: "El password es obligatorio" });
        }

        const usuario = new User({
            nomusuario,
            apellidos,
            email: email.toLowerCase(),
            password,
            role: "admin",
            active: true
        });

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        usuario.password = hashPassword;

        await usuario.save();
        res.status(200).send({
            msg: "Datos guardados correctamente",
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: "No se guardó la información",
        });
    }
}

async function Login(req, res) {
    const { email, password } = req.body;
    try {
        if (!email) {
            return res.status(400).send({ msg: "El email es obligatorio" });
        }
        if (!password) {
            return res.status(400).send({ msg: "El password es obligatorio" });
        }

        const emailLowerCase = email.toLowerCase();
        const response = await User.findOne({ email: emailLowerCase });

        if (!response) {
            return res.status(401).send({ msg: "Usuario no encontrado" });
        }

        bcrypt.compare(password, response.password, (bcryptError, check) => {
            if (bcryptError) {
                return res.status(500).send({ msg: "Error al autenticar" });
            } else if (!check) {
                return res.status(400).send({ msg: "Contraseña incorrecta" });
            } else if (!response.active) {
                return res.status(400).send({ msg: "Usuario inactivo" });
            } else {
                res.status(200).send({
                    msg: "Inicio de sesión exitoso"
                });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Error al autenticar" });
    }
}

export default {
    Registrar,
    Login
};
