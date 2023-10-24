import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

import Figure from "react-bootstrap/Figure";

import Button from "react-bootstrap/Button";

const Header = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    navigate("/");
  };

  return (
    <div>
      {/* mostra no cll */}
      <div className="d-block p-3">
        <div className="d-flex justify-content-between ">
          <div>
            <Link to="/">
              <Figure>
                <Figure.Image
                  width={180}
                  alt="IFSC"
                  src="https://www.ifsc.edu.br/image/layout_set_logo?img_id=1449623&t=1678857786786"
                />
              </Figure>
            </Link>
          </div>
          <nav>
            
          </nav>
          <div>
            <div className="row">
              {" "}
              {!auth.user && <Link to="/login">Login</Link>}
              {auth.user && (
                <Link to={"/profile/" + auth.user.name}>Perfil</Link>
              )}
              {auth.user && (
                <Button onClick={() => handleLogout()} variant="danger">
                  Logout
                </Button>
              )}
              {auth.user && (
                <div>
                  {auth.user.level == "admin" && <Link to="/admin">admin</Link>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
