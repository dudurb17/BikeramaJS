import React, { useContext, useEffect, useState } from "react";
import Figure from "react-bootstrap/Figure";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useParams } from "react-router-dom";

import CardRace from "../../components/CardRace/CardRace";

function Profile() {
  const auth = useContext(AuthContext);
  const { name } = useParams();
  const [userData, setUserData] = useState(null);
  var User;

  const formatTime = (time) => {
    var ms = time;

    var milesimos = ms % 1000;
    var segundos = Math.floor((ms / 1000) % 60);
    var minutos = Math.floor((ms / 60000) % 60); // 60000    = 60 * 1000
    var horas = Math.floor((ms / 3600000) % 24);

    return (
      horas +
      "h : " +
      minutos +
      "min : " +
      segundos +
      "seg : " +
      milesimos +
      "ms"
    );
  };

  const handleGetUser = async () => {
    User = (await auth.userByName(name)).data;

    var formatedFastestLap = formatTime(User.fastestLap);

    var formatedTotalTime = formatTime(User.totalTime);

    setUserData({
      calories: User.calories,
      name: User.name,
      totalLaps: User.totalLaps,
      totalTime: formatedTotalTime,
      fastestLap: formatedFastestLap,
      races: User.races,
    });
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div>
      <div>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://img.freepik.com/icones-gratis/homem-negro-simbolo-usuario_318-60703.jpg"
          />
          <h1>{userData && userData.name}</h1>
        </Figure>

        <p>
          <b>Tempo jogado:</b> {userData && userData.totalTime}
        </p>
        <p>
          <b>Voltas concluídas:</b> {userData && userData.totalLaps}
        </p>
        <p>
          <b>Partida mais rápida:</b> {userData && userData.fastestLap}
        </p>
      </div>

      <section className="races-list-container">
        {userData && userData.races.map((item) => <li>{item.bluePlayerId}</li>)}
      </section>

      <CardRace />
    </div>
  );
}

export default Profile;
